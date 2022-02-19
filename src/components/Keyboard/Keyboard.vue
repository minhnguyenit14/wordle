
<template>
  <div
    class="keyboardContainer"
    @mousemove="handleTouchMove"
    @touchmove="handleTouchMove"
    @touchend="handleTouchEnd"
  >
    <RowChar
      :class="['rowContainer', { first: !index }]"
      v-for="(listChars, index) in data"
      :key="index"
      :listChars="listChars"
      :onClickChar="
        (e, char) => {
          handleTouchEnd(e);
          onClickChar(char);
        }
      "
      :charHover="charHover"
      :onMouseOverChar="handleMouseOverChar"
      :onMouseLeaveChar="handleMouseLeaveChar"
    />
  </div>
</template>

<script>
import { KEYBOARD_DATA } from "../../constants/keyboardData";
import { COUNTRY_USE_SPECIAL_KEYBOARD } from "../../constants";

import RowChar from "./RowChar";
import { GLOBAL_MUTATIONS_NAME } from "../../store/modules/global/types";
import { isMobileOrTablet } from "../../helpers";

export default {
  name: "Keyboard",
  components: {
    RowChar,
  },
  created() {
    this.data = Object.keys(KEYBOARD_DATA).map((key, index) => {
      const keyboardData = KEYBOARD_DATA[key].map((char) => {
        return {
          ...char,
          correctLevel: undefined,
          isHover: false,
        };
      });

      if (index === 1) {
        keyboardData.unshift({});
        keyboardData.push({});
      }

      return keyboardData;
    });
  },
  data() {
    return {
      data: [],
      charHover: undefined,

      timeoutCharHoverId: undefined,
    };
  },
  computed: {
    countryCode() {
      return this.$store.state.global?.keywordData?.countryCode;
    },
    hasSpecialChar() {
      return COUNTRY_USE_SPECIAL_KEYBOARD.find(
        (code) => code === this.countryCode
      );
    },
  },
  methods: {
    getActualElement(e) {
      let actualElement = null;

      if (isMobileOrTablet()) {
        actualElement = document.elementFromPoint(
          e.changedTouches.item(0).clientX,
          e.changedTouches.item(0).clientY
        );
      } else {
        actualElement = document.elementFromPoint(e.clientX, e.clientY);
      }

      return actualElement;
    },
    updateDataOnHover(char, isHover, forceUpdateOther = false) {
      this.data.forEach((position) => {
        position.forEach((c) => {
          if (c.value === char?.value) {
            c.isHover = isHover;
          } else if (forceUpdateOther) {
            c.isHover = false;
          }
        });
      });
    },
    handleMouseOverChar(char) {
      if (this.hasSpecialChar && char[this.countryCode]?.length) {
        if (this.charHover?.value === char?.value) {
          clearTimeout(this.timeoutCharHoverId);
        }

        this.updateDataOnHover(char, true, true);
        this.charHover = char;
      }
    },
    handleMouseLeaveChar(e) {
      const char = this.charHover;

      const actualElement = this.getActualElement(e);
      this.timeoutCharHoverId = setTimeout(() => {
        if (this.hoverChar?.value === char?.value || !actualElement?.id) {
          this.handleTouchEnd(e);
        }
      }, 100);
    },
    handleTouchMove(e) {
      const actualElement = this.getActualElement(e);

      this.data.forEach((row) =>
        row.forEach((char) => {
          if (
            !!char?.value &&
            !!actualElement?.id &&
            char.value === actualElement.id
          ) {
            this.hoverChar = { ...char };
            this.updateDataOnHover(char, false, true);
            this.handleMouseOverChar(char);
          } else if (char[this.countryCode]?.length) {
            char[this.countryCode].forEach((c) => {
              if (c?.value === actualElement?.id) {
                this.hoverChar = { ...c };
              }
            });
          }
        })
      );

      if (
        this.hoverChar &&
        this.hoverChar?.value !== this.$store.state.global?.hoverChar?.value
      ) {
        this.$store.commit(
          GLOBAL_MUTATIONS_NAME.SET_HOVER_CHAR,
          this.hoverChar
        );
        this.handleMouseLeaveChar(e);
      }
    },
    handleTouchEnd(e) {
      e.preventDefault();

      if (this.hoverChar && isMobileOrTablet()) {
        this.onClickChar(this.hoverChar);
      }
      this.updateDataOnHover(this.hoverChar, false, true);
      this.hoverChar = undefined;
      this.$store.commit(GLOBAL_MUTATIONS_NAME.SET_HOVER_CHAR, undefined);
    },
  },
  props: {
    onClickChar: Function,
  },
};
</script>

<style lang="scss" scoped>
.keyboardContainer {
  display: flex;
  flex-direction: column;
  display: -webkit-flex;
  -webkit-flex-direction: column;
  flex: 1;
  height: 200px;
  padding: 8px;
  box-sizing: border-box;
}

.rowContainer {
  display: flex;
  width: 100%;
  margin: 0 auto 8px;
  touch-action: manipulation;
}
</style>