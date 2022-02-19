<template>
  <input
    class="invisible"
    ref="input"
    @input="changeInput"
    :maxlength="keyword.length"
  />
  <div class="wrapper">
    <div class="contentContainer">
      <div class="header">
        <h1 class="heading">Mimo Wordle</h1>
        <div class="info"><img class="flag" :src="getImgUrl" /></div>
      </div>

      <div
        class="boardContainer"
        :style="{
          alignItems: containerStyle ? 'center' : 'unset',
        }"
      >
        <div
          class="body"
          :style="{
            width: containerStyle ? containerStyle + 'px' : undefined,
            flex: containerStyle ? 'unset' : 1,
          }"
        >
          <div class="container">
            <GuessRow
              :class="{ last: index === listGuessRow.length - 1 }"
              v-for="(listGuessedChar, index) in listGuessRow"
              :key="index"
              :onSelectRow="(e) => setSelectedRowIndex(index, e)"
              :isSelected="index === selectedRowIndex"
              :listGuessedChar="listGuessedChar"
              :totalChars="keyword.length"
              :rowIndex="index"
              :currentIndex="selectedRowIndex"
            />
            <div v-if="isEndGame" class="reset">
              <button class="btn" @click="handleNewGame">
                {{ isEndGame ? "New game" : "Guess" }}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div id="footer" class="footer">
        <Keyboard :onClickChar="handleClickChar" />
      </div>

      <ModalFinish
        :visible="isShowModalResult"
        :moves="selectedRowIndex"
        :isWin="isWin"
        :modalClass="'modalFinish'"
        :result="keyword"
        :ratio="selectedRowIndex / totalGuessTime"
        :onClickNewGame="handleNewGame"
        :onClose="handleCloseModal"
      />
    </div>
  </div>
</template>

<script>
import { randomIntFromInterval, isMobileOrTablet } from "../helpers";
import { WORDS_POOL } from "../constants/wordsPool";
import { VIETNAMESE_REGEX, CORRECT_LEVEL } from "../constants";
import { GLOBAL_MUTATIONS_NAME } from "../store/modules/global/types";
import ModalFinish from "./ModalFinish";
import GuessRow from "./GuessRow";
import Keyboard from "./Keyboard";

export default {
  name: "Main",
  created() {
    this.initData();
  },
  mounted() {
    document.addEventListener("keydown", this.handleKeyDown);
    document.addEventListener("keypress", this.handleKeyPress);
  },
  beforeUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
    document.removeEventListener("keypress", this.handleKeyPress);
  },
  data() {
    return {
      keyPressed: "",
      keywordData: null,
      totalGuessTime: 0,
      keyword: "",
      selectedRowIndex: 0,
      listGuessRow: [],
      animateResult: false,
      isShowModalResult: false,
      isMobileOrTablet: isMobileOrTablet(),
    };
  },
  components: {
    ModalFinish,
    GuessRow,
    Keyboard,
  },
  computed: {
    containerStyle() {
      const baseCharWidth = 60;
      const containerWidth =
        baseCharWidth * this.keyword.length + 6 * (this.keyword.length - 1);
      if (containerWidth + 20 < window.innerWidth) {
        return containerWidth;
      }

      return "";
    },
    getImgUrl() {
      const images = require.context("../assets/countryFlag", false, /\.svg$/);
      return images("./" + this.keywordData.countryCode + ".svg");
    },
    canSubmit() {
      return (
        this.selectedRowIndex <= this.listGuessRow.length &&
        this.currentListGuessRow?.length === this.keyword.length &&
        !this.animateResult
      );
    },
    isWin() {
      return (
        !!this.listGuessRow[this.selectedRowIndex - 1]?.length &&
        this.listGuessRow[this.selectedRowIndex - 1].every(
          (char) => char?.correctLevel === CORRECT_LEVEL.CORRECT
        )
      );
    },
    isEndGame() {
      return this.selectedRowIndex >= this.listGuessRow.length || this.isWin;
    },
    currentListGuessRow: {
      get() {
        return this.listGuessRow[this.selectedRowIndex];
      },
      set(data) {
        this.listGuessRow[this.selectedRowIndex] = data;
      },
    },
    paddingBottom() {
      return document.getElementById("footer")?.offsetHeight + "px";
    },
    // keyboardHeight,
  },
  watch: {
    isEndGame(newV) {
      if (newV) {
        this.isShowModalResult = newV;
      }
    },
    keyPressed(newV) {
      if (!newV) {
        this.currentListGuessRow = [];
        return;
      }

      this.listGuessRow.some((list, index) => {
        if (
          list.length <= this.keyword.length &&
          index === this.selectedRowIndex
        ) {
          this.listGuessRow[index] = newV.split("").map((char) => ({
            correctLevel: undefined,
            value: char.toUpperCase(),
          }));

          return true;
        }
      });
    },
  },
  methods: {
    initData() {
      this.keyPressed = "";
      this.selectedRowIndex = 0;
      this.isShowModalResult = false;
      this.keywordData =
        WORDS_POOL[randomIntFromInterval(0, WORDS_POOL.length - 1)];
      this.keyword = this.keywordData.value.toUpperCase().split("");
      this.$store.commit(
        GLOBAL_MUTATIONS_NAME.SET_KEYWORD_DATA,
        this.keywordData
      );
      this.totalGuessTime =
        this.keyword.length + 1 + (this.keywordData.extraGuessTime || 0);
      this.listGuessRow = Array.from({
        length: this.totalGuessTime,
      }).map(() => []);
    },
    handleNewGame() {
      this.isShowModalResult = false;
      setTimeout(this.initData, 300);
    },
    handleClickChar(char) {
      this.handleKeyDown(char);
    },
    handleKeyDown(e) {
      if (this.animateResult) {
        this.$refs.input.blur();
        return;
      }

      if ((e.which >= 37 && e.which <= 40) || e.which === 32) {
        e.preventDefault && e.preventDefault(); // Prevent the default action
        return;
      } else if (e.which === 13) {
        if (this.isEndGame) {
          this.handleNewGame();
        } else {
          this.onSubmit();
        }

        if (e.preventDefault) {
          e.preventDefault();
        } else {
          this.$refs.input.dispatchEvent(new Event("input"));
        }

        return;
      }

      if (!this.isMobileOrTablet) {
        this.$refs.input.focus();
      }

      if (e.value) {
        if (e.which === 8) {
          this.$refs.input.value = this.$refs.input.value.substr(
            0,
            this.$refs.input.value.length - 1
          );
        } else if (this.$refs.input.value.length < this.keyword.length) {
          this.$refs.input.value += e.value;
        }

        this.$refs.input.dispatchEvent(new Event("input"));
      }
    },
    handleKeyPress(e) {},
    setSelectedRowIndex(index) {
      // this.selectedRowIndex = index;
    },
    async onSubmit() {
      if (!this.canSubmit) return;

      if (this.isEndGame) {
        this.handleNewGame();
        return;
      }

      const currentListGuessRow = this.currentListGuessRow.map(
        (guessedChar) => ({ ...guessedChar })
      );

      currentListGuessRow.forEach((guessedChar, index) => {
        if (guessedChar?.value) {
          if (guessedChar.value === this.keyword[index]) {
            guessedChar.correctLevel = CORRECT_LEVEL.CORRECT;
          }
        }
      });

      currentListGuessRow.forEach((guessedChar, index) => {
        if (guessedChar?.value) {
          if (
            this.keyword.includes(guessedChar.value) &&
            guessedChar.correctLevel !== CORRECT_LEVEL.CORRECT &&
            currentListGuessRow.slice(0, index + 1).filter((char) => {
              return (
                char.value === guessedChar.value &&
                this.keyword.includes(guessedChar.value) &&
                char.correctLevel !== CORRECT_LEVEL.CORRECT
              );
            }).length +
              currentListGuessRow.filter((char) => {
                return (
                  char.value === guessedChar.value &&
                  this.keyword.includes(guessedChar.value) &&
                  char.correctLevel === CORRECT_LEVEL.CORRECT
                );
              }).length <=
              this.keyword.filter((char) => char === guessedChar.value).length
          ) {
            guessedChar.correctLevel = CORRECT_LEVEL.ALMOST_CORRECT;
          } else if (guessedChar.correctLevel === undefined) {
            guessedChar.correctLevel = CORRECT_LEVEL.INCORRECT;
          }
        }
      });

      this.animateResult = true;
      for (const [index, guessedChar] of currentListGuessRow.entries()) {
        guessedChar.animate = true;
        this.currentListGuessRow[index] = guessedChar;
        await new Promise((resolve) => setTimeout(resolve, 150));
      }

      this.animateResult = false;
      this.selectedRowIndex++;
      this.updateInputValue("");
    },
    changeInput(e) {
      let value = e.target.value.trim();
      value = value
        .split("")
        .map((char) => (VIETNAMESE_REGEX.test(char) ? char : ""))
        .join("");
      this.updateInputValue(value);
      this.keyPressed = e.target.value.trim();
    },
    updateInputValue(value) {
      if (this.$refs.input) {
        this.$refs.input.value = value;
      }
    },
    handleCloseModal() {
      this.isShowModalResult = false;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
html,
body,
#app {
  height: 100%;
  width: 100%;
}

#app {
  display: flex;
  flex-direction: column;
  display: -webkit-flex;
  -webkit-flex-direction: column;
}

html,
body {
  position: fixed;
  overflow: hidden;
}

body {
  user-select: none;
  background: var(--background);

  @media (prefers-color-scheme: dark) {
    --main-text: rgba(232, 234, 237, 1);
    --background: rgb(53, 54, 58);
  }

  @media (prefers-color-scheme: light) {
    --main-text: #2c3e50;
    --background: #fff;
  }
}

.modalFinish {
  max-width: 600px;
}

.btn {
  padding: 5px 10px;
  border-radius: 4px;
  border-width: 1px;
  border-style: solid;
  text-transform: uppercase;
  font-weight: bold;
}
</style>
<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  display: -webkit-flex;
  -webkit-flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
  position: relative;
}

.contentContainer {
  display: flex;
  flex-direction: column;
  display: -webkit-flex;
  -webkit-flex-direction: column;
  flex: 1;
  justify-content: center;
  border-radius: 8px;
  width: 100%;
  max-width: 600px;
}

.boardContainer {
  display: flex;
  justify-content: center;
  flex: 1;
  flex-direction: column;
  display: -webkit-flex;
  -webkit-flex-direction: column;
  padding: 0 5px;
  max-height: calc(100vh - 270px);
  max-height: -moz-calc(100vh - 270px);
  max-height: -webkit-calc(100vh - 270px);
  overflow-y: scroll;
}

.header {
  display: flex;
  display: -webkit-flex;
  padding: 10px 10px;
  padding-top: 20px;
  user-select: none;
}

.heading {
  font-family: "AlloyInk";
  margin: 0;
  line-height: 30px;
}

.body {
  display: flex;
  flex-direction: column;
  display: -webkit-flex;
  -webkit-flex-direction: column;
  flex: 1;
}

.container {
  position: relative;
  display: flex;
  flex-direction: column;
  display: -webkit-flex;
  -webkit-flex-direction: column;
  flex: 1;
  padding-top: 5px;
  padding-bottom: 5px;
}

.footer {
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
}

.invisible {
  position: fixed;
  opacity: 0;
  pointer-events: none;
}

.actionBar {
  display: flex;
  display: -webkit-flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.info {
  display: flex;
  display: -webkit-flex;
  align-items: flex-start;
}

.flag {
  width: 25px;
  margin-left: 15px;
}

.reset {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  display: -webkit-flex;
  align-items: center;
  justify-content: center;

  > .btn {
    padding: 10px 20px;
  }
}
</style>
