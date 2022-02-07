<template>
  <Modal :visible="visible" :modalClass="modalClass">
    <div class="container">
      <h1>{{ isWin ? "Congratulation!" : "Oops! :(" }}</h1>
      <p :class="['message', messageClassName]">{{ message }}</p>

      <div class="charBoxContainer" v-if="isWin">
        <div
          class="charBox"
          :class="{ last: index === result.length - 1 }"
          v-for="(char, index) in result"
          :key="index"
        >
          {{ char }}
        </div>
      </div>

      <p v-if="isWin" class="description">
        You finished in <b>{{ moves }}</b> move(s)!
      </p>

      <button class="btn btn-modal" @click="onClickNewGame">New game</button>
    </div>
  </Modal>
</template>

<script>
import Modal from "../Modal";

import { SUCCESS_LEVEL, SUCCESS_MESSAGE, FAIL_MESSAGE } from "../../constants";
import { randomIntFromInterval } from "../../helpers";

export default {
  name: "ModalFinish",
  computed: {
    winLevel() {
      if (!this.visible) return "";
      return (
        Object.keys(SUCCESS_LEVEL).find((key) => {
          return Math.max(this.ratio, SUCCESS_LEVEL[key]) <= SUCCESS_LEVEL[key];
        }) || ""
      );
    },
    messageClassName() {
      return this.isWin ? this.winLevel.toLowerCase(): "";
    },
    message() {
      if (!this.visible) return "";

      if (this.isWin) {
        const winMessagePool = SUCCESS_MESSAGE[this.winLevel];

        return winMessagePool[
          randomIntFromInterval(0, winMessagePool.length - 1)
        ];
      } else {
        return FAIL_MESSAGE[randomIntFromInterval(0, FAIL_MESSAGE.length - 1)];
      }
    },
  },
  components: {
    Modal,
  },
  props: {
    moves: Number,
    ratio: Number,
    onClickNewGame: Function,
    isWin: Boolean,
    visible: Boolean,
    modalClass: String,
    result: Array,
  },
};
</script>

<style scoped>
h1 {
  margin: 0px;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 100px;
}
.row {
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn-modal {
  padding: 10px 20px;
}

.description {
  margin: 0;
  margin-bottom: 40px;
}

.charBoxContainer {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0px;
  margin-bottom: 30px;
}

.charBox {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: #208c61;
  margin-right: 10px;

  color: #fff;
  font-weight: bold;
  font-size: 24px;
}

.charBox + .last {
  margin-right: 0px;
}

p.message {
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 40px;
  color: #aaa;
}

p.message.excellent {
  font-size: 22px;
  color: #ff3e3d;
}

p.message.good {
  font-size: 20px;
  color: #ffbd49;
}

p.message.nice {
  font-size: 18px;
  color: #c96a3e;
}
</style>