<template>
  <div
    :id="value"
    class="char"
    :class="{ hover: isHover || isTouch }"
    :style="customStyle"
    @mouseup="onMouseUp"
    @mouseover="handleMouseOver"
    @mouseleave="handleMouseLeave"
    @touchstart="handleTouchStart"
    @touchmove="handleTouchMove"
    @touchend="handleTouchEnd"
  >
    <slot />
  </div>
</template>

<script>
import { isMobileOrTablet } from "../../../../helpers";
export default {
  name: "Char",
  data() {
    return {
      mouseOverTimeoutId: -1,
      isTouch: false,
    };
  },
  computed: {
    isHover() {
      return this.$store.state.global.hoverChar?.value === this.value;
    },
    customStyle() {
      return {
        width: this.width ? this.width + "px!important" : undefined,
        height: this.height ? this.height + "px!important" : undefined,
        padding: 0,
      };
    },
  },
  watch: {
    isShowContent(isShowContent) {
      if (isShowContent) {
        const charHtml = document.getElementById(this.value);
        this.onGetCharElement(charHtml);
      }
    },
  },
  methods: {
    handleTouchStart(e) {
      e.stopPropagation();
      this.isTouch = true;

      this.mouseOverTimeoutId = setTimeout(() => this.onMouseOver(e), 500);
    },
    handleTouchMove(e) {
      this.isTouch = false;
    },
    handleTouchEnd(e) {
      clearTimeout(this.mouseOverTimeoutId);
      if (this.isTouch) {
        this.onMouseUp(e);
        this.isTouch = false;
      }
    },
    handleMouseOver(e) {
      if (isMobileOrTablet()) {
        e.preventDefault();
        e.stopPropagation();
        return;
      }

      this.onMouseOver(e);
    },
    handleMouseLeave(e) {
      if (isMobileOrTablet()) {
        e.preventDefault();
        e.stopPropagation();
        return;
      }

      this.onMouseLeave(e);
    },
  },
  props: {
    value: String,
    width: Number,
    height: Number,
    isShowContent: Boolean,
    onGetCharElement: {
      type: Function,
      default: (charElement) => {},
    },
    onMouseUp: {
      type: Function,
      default: (e) => {},
    },
    onMouseOver: {
      type: Function,
      default: (e) => {},
    },
    onMouseLeave: {
      type: Function,
      default: (e) => {},
    },
  },
};
</script>

<style lang="scss" scoped>
.char {
  position: relative;
  display: flex;
  display: -webkit-flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  background-color: #818384;
  font-weight: bold;
  border-radius: 10px;
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

  &.hover {
    background: #2f83aa;
  }
}
</style>