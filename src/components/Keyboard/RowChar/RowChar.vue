<template>
  <div class="row">
    <Char
      :class="[
        { first: !index },
        { big: char.value?.length > 1 },
        {
          halfSpace: !char.value,
        },
      ]"
      v-for="(char, index) in listChars"
      :key="index"
      :value="char.value"
      :isShowContent="char.value === charHover?.value"
      :onGetCharElement="handleCharElement"
      :onMouseUp="(e) => handleClickChar(e, char)"
      :onMouseOver="(e) => onMouseOverChar(char, e)"
      :onMouseLeave="onMouseLeaveChar"
    >
      <div
        v-if="char.isHover && char[countryCode]?.length"
        class="special"
        :style="{
          bottom: charHoverInfo.bottom + 'px',
          width: charHoverInfo.listWidth + 'px',
          left:
            charHoverInfo.listLeft !== undefined
              ? charHoverInfo.listLeft + 'px'
              : 'unset',
          right:
            charHoverInfo.listRight !== undefined
              ? charHoverInfo.listRight + 'px'
              : 'unset',
        }"
      >
        <div
          class="tail"
          :style="{
            left:
              charHoverInfo.tailLeft !== undefined
                ? charHoverInfo.tailLeft + 'px'
                : 'unset',
            right:
              charHoverInfo.tailRight !== undefined
                ? charHoverInfo.tailRight + 'px'
                : 'unset',
          }"
        />
        <div
          class="row"
          :class="{ first: !rIndex && charHoverInfo?.list?.length > 1 }"
          v-for="(row, rIndex) in charHoverInfo?.list || []"
          :key="rIndex"
        >
          <Char
            class="charSpecial"
            :class="{ first: !i }"
            v-for="(c, i) in row"
            :width="charHoverInfo.width"
            :height="charHoverInfo.height"
            :key="i"
            :value="c.value"
            :onMouseUp="
              (e) => {
                e.stopPropagation();
                handleClickChar(e, c);
              }
            "
          >
            {{ c.value }}
          </Char>
        </div>
      </div>

      <div v-html="char.value" />
    </Char>
  </div>
</template>

<script>
import { isMobileOrTablet } from "../../../helpers";
import Char from "./Char";

export default {
  name: "RowChar",
  components: {
    Char,
  },
  data() {
    return {
      charHoverInfo: {},
    };
  },
  computed: {
    countryCode() {
      return this.$store.state.global?.keywordData?.countryCode;
    },
  },
  methods: {
    handleClickChar(e, char) {
      let actualCharElement = char;

      if (isMobileOrTablet()) {
        if (e.changedTouches?.length) {
          const touchEvent = e.changedTouches.item(0);
          actualCharElement = document.elementFromPoint(
            touchEvent.clientX,
            touchEvent.clientY
          );

          if (actualCharElement?.id !== char.value) {
            if (this.charHover?.isHover) {
              if (!!this.$store.state.global.hoverChar) {
                char = this.$store.state.global.hoverChar;
              }
            }
          }
        }
      } else {
      }

      this.onClickChar(e, char);
      // this.onMouseLeaveChar(e);
    },
    handleCharElement(charElement) {
      const containerWidth = charElement.parentElement.clientWidth;
      const charHoverInfo = {
        width: charElement.clientWidth,
        height: charElement.clientHeight,
        left: charElement.offsetLeft,
        bottom: charElement.clientHeight + 10,
      };

      const maxNumCharPerRow = Math.floor(
        (containerWidth - 6) / (charHoverInfo.width + 6)
      );

      const hoverChars = [];
      Array.from({
        length:
          Math.ceil(
            (this.charHover[this.countryCode]?.length || 0) / maxNumCharPerRow
          ) || 1,
      }).forEach((char, index) => {
        hoverChars[index] = this.charHover[this.countryCode].slice(
          index * maxNumCharPerRow,
          (index + 1) * maxNumCharPerRow
        );
      });

      const listWidth =
        hoverChars[0].length * charHoverInfo.width +
        (hoverChars[0].length - 1) * 6;

      const listOffsetLeftScreen =
        charHoverInfo.width / 2 - (listWidth + 20) / 2;

      const isOverflowScreenLeft =
        charHoverInfo.left + listOffsetLeftScreen < 0;

      const isOVerflowScreenRight =
        charHoverInfo.left + listOffsetLeftScreen + listWidth >
        window.innerWidth;

      this.charHoverInfo = {
        tailLeft: isOverflowScreenLeft
          ? charHoverInfo.left + charHoverInfo.width / 2 - 5
          : isOVerflowScreenRight
          ? undefined
          : charHoverInfo.width / 2 - listOffsetLeftScreen - 5,
        tailRight: isOVerflowScreenRight
          ? window.innerWidth - charHoverInfo.left - charHoverInfo.width / 2 - 5
          : undefined,
        listWidth,
        listLeft: isOverflowScreenLeft ? -charHoverInfo.left : undefined,
        listRight: isOVerflowScreenRight
          ? charHoverInfo.left + charHoverInfo.width - window.innerWidth
          : undefined,
        list: hoverChars,
        ...charHoverInfo,
      };
    },
  },
  props: {
    listChars: Array,
    charHover: Object,
    onClickChar: Function,
    onMouseOverChar: Function,
    onMouseLeaveChar: Function,
  },
};
</script>

<style lang="scss" scoped>
.row {
  display: flex;
  display: -webkit-flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.first {
  margin-bottom: 8px;
}

.special {
  position: absolute;
  background: rgba(0, 0, 0, 0.6);
  padding: 10px;
  width: auto;
  border-radius: 10px;
  z-index: 999;
}

.tail {
  content: "";
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid rgba(0, 0, 0, 0.6);
  top: 100%;
  position: absolute;
}

.charSpecial {
  flex: unset !important;
}

.char {
  position: relative;
  display: flex;
  display: -webkit-flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  // width: 25px;
  // height: 25px;
  background-color: #818384;
  color: #fff;
  font-weight: bold;
  border-radius: 10px;
  // overflow: hidden;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;

  border: 0;
  padding: 0 5px;
  margin: 0 0 0 6px;
  height: 58px;
  border-radius: 4px;
  cursor: pointer;

  &.first {
    margin-left: 0px;
  }

  &.big {
    flex: 1;
    width: undefined;
  }
}

.halfSpace {
  flex: 0.5;
  opacity: 0;
  pointer-events: none;
}
</style>