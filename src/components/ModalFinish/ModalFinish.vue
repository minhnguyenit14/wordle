<template>
  <Modal :visible="visible" :modalClass="modalClass">
    <div class="container">
      <button class="btn btn-close" @click="onClose">x</button>

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
      return this.isWin ? this.winLevel.toLowerCase() : "";
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
    isWin: Boolean,
    visible: Boolean,
    modalClass: String,
    result: Array,
    onClickNewGame: Function,
    onClose: Function,
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
  display: -webkit-flex;
  -webkit-flex-direction: column;
  align-items: center;
  padding: 40px 50px;
}
.row {
  display: flex;
  display: -webkit-flex;
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
  display: -webkit-flex;
  align-items: center;
  justify-content: center;
  margin-top: -10px;
  margin-bottom: 30px;
  flex-wrap: wrap;
}

.charBox {
  display: flex;
  display: -webkit-flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: #208c61;
  margin-left: 10px;
  margin-top: 10px;

  color: #fff;
  font-weight: bold;
  font-size: 24px;
}

.charBox + .first {
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

.btn-close {
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  display: -webkit-flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  position: absolute;
  right: 15px;
  top: 15px;
  border-color: transparent;
}
</style>