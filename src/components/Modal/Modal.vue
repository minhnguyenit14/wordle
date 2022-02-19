<template>
  <div class="modal" :class="[{ visible }]">
    <div class="content" :class="[{ showUp: visible }, modalClass]">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: {
    visible: Boolean,
    modalClass: String,
  },
};
</script>

<style scoped>
.modal {
  position: absolute;
  z-index: -1;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  display: -webkit-flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  user-select: none;
  transition: ease 0.3s all;
}

.content {
  display: inline-block;
  border-radius: 15px;
  background-color: #fff;
  transition: ease 0.3s all;
  transform: translateY(-100px);
  opacity: 0;
}

.visible {
  z-index: 9999;
  user-select: auto;
  opacity: 1;
  transition: ease 0.3s all;
}

.showUp {
  transform: translateY(0px);
  opacity: 1;
  transition: ease 0.3s all;
}
</style>