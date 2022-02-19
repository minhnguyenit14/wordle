<template>
  <div class="row" :class="{ selected: isSelected }" @click="onSelectRow">
    <div
      class="input"
      :class="{ active: !!listGuessedChar[index]?.value }"
      v-for="(item, index) in totalChars"
      :key="index"
    >
      <div
        class="input-inner"
        :class="{ flip: listGuessedChar[index]?.animate }"
      >
        <div class="input-front">
          <p class="guessedChar" v-if="listGuessedChar.length">
            {{ listGuessedChar[index]?.value }}
          </p>
        </div>
        <div
          class="input-back"
          :class="{
            isCorrect:
              listGuessedChar?.length &&
              listGuessedChar[index]?.correctLevel ===
                this.CORRECT_LEVEL.CORRECT,
            isAlmostCorrect:
              listGuessedChar?.length &&
              listGuessedChar[index]?.correctLevel ===
                this.CORRECT_LEVEL.ALMOST_CORRECT,
            isIncorrect:
              listGuessedChar?.length &&
              listGuessedChar[index]?.correctLevel ===
                this.CORRECT_LEVEL.INCORRECT,
          }"
        >
          <p
            class="guessedChar"
            :class="{
              highlight:
                listGuessedChar[index]?.correctLevel ===
                  this.CORRECT_LEVEL.CORRECT ||
                listGuessedChar[index]?.correctLevel ===
                  this.CORRECT_LEVEL.ALMOST_CORRECT,
            }"
            v-if="listGuessedChar.length"
          >
            {{ listGuessedChar[index]?.value }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { actionsMixin } from "../../helpers";

export default {
  name: "GuessRow",
  mixins: [actionsMixin],
  props: {
    onSelectRow: Function,
    isSelected: Boolean,
    listGuessedChar: Array,
    totalChars: Number,
    rowIndex: Number,
    currentIndex: Number,
  },
};
</script>

<style lang="scss" scoped>
@keyframes activeChar {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
.row {
  display: flex;
  display: -webkit-flex;
  flex: 1;
  justify-content: space-between;
  padding: 5px;
  padding-left: 5px;
  padding-right: 5px;
  min-height: 50px;
  user-select: none;
}

.input {
  display: flex;
  display: -webkit-flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-left: 5px;
  margin-right: 5px;
  perspective: 1000px;
  user-select: none;

  &.active {
    animation: activeChar 0.1s ease;
    &.input-back,
    .input-front {
      border-color: #878a8c;
    }
  }
}

.input-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.input-front,
.input-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  display: flex;
  display: -webkit-flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #d3d6da;
}

.input-front {
}

.input-back {
  transform: rotateX(180deg);
  border-color: transparent;
}

.flip,
.flip > .input-back {
  transform: rotateX(180deg);
}

.guessedChar {
  text-align: center;
  font-weight: 900;
  font-size: 1.5rem;
  margin: 0px;
}

.isIncorrect {
  background-color: #999;
}
.isAlmostCorrect {
  background-color: #ffbd49;
}
.isCorrect {
  background-color: #208c61;
}

.highlight {
  color: #fff;
}
</style>