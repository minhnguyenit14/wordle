<template>
  <div class="row" :class="{ selected: isSelected }" @click="onSelectRow">
    <div
      class="input"
      :class="{
        isCorrect:
          listGuessedChar?.length &&
          listGuessedChar[index]?.correctLevel === this.CORRECT_LEVEL.CORRECT,
        isAlmostCorrect:
          listGuessedChar?.length &&
          listGuessedChar[index]?.correctLevel ===
            this.CORRECT_LEVEL.ALMOST_CORRECT,
        isIncorrect:
          listGuessedChar?.length &&
          listGuessedChar[index]?.correctLevel === this.CORRECT_LEVEL.INCORRECT,
      }"
      v-for="(item, index) in totalChars"
      :key="index"
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

<style scoped>
.row {
  display: flex;
  justify-content: space-between;
  padding: 5px;
  padding-left: 5px;
  padding-right: 5px;
}

.input {
  width: 50px;
  height: 50px;
  border: 1px solid #aaa;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 5px;
  margin-right: 5px;
}

.guessedChar {
  text-align: center;
  font-weight: bold;
  font-size: 24px;
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