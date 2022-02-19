<template>
  <Main />
</template>

<script>
import Main from "./components/Main.vue";

export default {
  name: "App",
  components: {
    Main,
  },
};
</script>

<style>
@font-face {
  font-family: "LaoutBeauty";
  src: local("LaoutBeauty"),
    url(./assets/fonts/LaoutBeauty/LaoutBeauty.otf) format("truetype");
}
@font-face {
  font-family: "AlloyInk";
  src: local("AlloyInk"),
    url(./assets/fonts/AlloyInk/AlloyInk.otf) format("truetype");
}
@font-face {
  font-family: "Kamryn";
  src: local("Kamryn"), url(./assets/fonts/Kamryn/Kamryn.ttf) format("truetype");
}
@font-face {
  font-family: "ClearSans-Regular";
  src: local("ClearSans-Regular"),
    url(./assets/fonts/ClearSans/ClearSans-Regular.ttf) format("truetype");
}
#app {
  font-family: "ClearSans-Regular", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--main-text);
}
</style>
