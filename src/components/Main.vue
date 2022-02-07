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
        <h1>Wordle</h1>
      </div>

      <div class="body">
        <div class="actionBar">
          <div class="info">Country <img :src="getImgUrl" /></div>

          <button class="btn" @click="onSubmit" :disabled="!canSubmit">
            Guess
          </button>
        </div>
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
        </div>
      </div>

      <div class="footer"></div>

      <ModalFinish
        :visible="isEndGame"
        :moves="selectedRowIndex"
        :isWin="isWin"
        :onClickNewGame="handleNewGame"
        :modalClass="'modalFinish'"
        :result="keyword"
        :ratio="selectedRowIndex / totalGuessTime"
      />
    </div>
  </div>
</template>

<script>
import ModalFinish from "./ModalFinish";
import GuessRow from "./GuessRow";
import { randomIntFromInterval } from "../helpers";
import { WORDS_POOL, VIETNAMESE_REGEX, CORRECT_LEVEL } from "../constants";

export default {
  name: "Main",
  created() {
    this.initData();
  },
  mounted() {
    document.addEventListener("keydown", this.handleKeyDown);
    document.addEventListener("keydown", this.handleKeyUp);
  },
  beforeUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
    document.removeEventListener("keydown", this.handleKeyUp);
  },
  data() {
    return {
      keyPressed: "",
      keywordData: null,
      totalGuessTime: 0,
      keyword: "",
      selectedRowIndex: 0,
      listGuessRow: [],
    };
  },
  components: {
    ModalFinish,
    GuessRow,
  },
  computed: {
    getImgUrl() {
      const images = require.context("../assets/countryFlag", false, /\.svg$/);
      return images("./" + this.keywordData.countryCode + ".svg");
    },
    canSubmit() {
      return (
        this.selectedRowIndex <= this.listGuessRow.length &&
        this.currentListGuessRow?.length === this.keyword.length
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
  },
  watch: {
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
            correctLevel: -1,
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
      this.keywordData =
        WORDS_POOL[randomIntFromInterval(0, WORDS_POOL.length - 1)];
      this.keyword = this.keywordData.value.toUpperCase().split("");
      this.totalGuessTime =
        this.keyword.length + 1 + (this.keywordData.extraGuessTime || 0);
      this.listGuessRow = Array.from({
        length: this.totalGuessTime,
      }).map(() => []);
    },
    handleNewGame() {
      this.initData();
    },
    handleKeyDown(e) {
      if ((e.which >= 37 && e.which <= 40) || e.which === 32) {
        e.preventDefault(); // Prevent the default action
        return;
      }
      this.$refs.input.focus();
    },
    handleKeyUp(e) {
      if (e.which === 13) {
        e.preventDefault();
        if (this.isEndGame) {
          this.handleNewGame();
        } else {
          this.onSubmit();
        }
      }
    },
    setSelectedRowIndex(index) {
      this.selectedRowIndex = index;
    },
    onSubmit() {
      if (!this.canSubmit) return;

      this.currentListGuessRow.forEach((guessedChar, index) => {
        if (guessedChar?.value) {
          if (guessedChar.value === this.keyword[index]) {
            guessedChar.correctLevel = 2;
          } else if (this.keyword.includes(guessedChar.value)) {
            guessedChar.correctLevel = 1;
          } else {
            guessedChar.correctLevel = 0;
          }
        }
      });

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
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
body {
  background-image: url("../assets/bg.jpg");
  background-size: 150% 150%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
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
<style scoped>
.wrapper {
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
}

.contentContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  padding: 30px;
  background-color: rgba(255, 255, 255, 0.92);
  box-shadow: 0px 0px 20px 0.5px #000;
  min-width: 300px;
}

.container {
  position: relative;
  display: inline-block;
  border: 1px solid #ccc;
  padding-top: 5px;
  padding-bottom: 5px;
}

.footer {
  width: 100%;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.invisible {
  position: absolute;
  opacity: 0;
}

.actionBar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.info {
  display: flex;
  align-items: center;
}

.info > img {
  width: 20px;
  margin-left: 10px;
}
</style>
