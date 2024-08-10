<template>
  <navbar />
  <hero />
  <card />
  <adv />
  <feat />
  <test />
  <ben />
  <faq />
  <foot />
</template>

<style>
body {
  overflow-x: hidden !important;
}
</style>
<script>
import navbar from "./components/navbar.vue";
import hero from "./components/hero.vue";
import card from "./components/card.vue";
import adv from "./components/advan.vue";
import feat from "./components/feature.vue";
import test from "./components/testimoni.vue";
import ben from "./components/benefit.vue";
import faq from "./components/faq.vue";
import foot from "./components/Footer.vue";
export default {
  name: "app",
  components: {
    navbar,
    hero,
    card,
    adv,
    feat,
    test,
    ben,
    faq,
    foot,
  },
};
document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.getElementById("menu-button");
  const menu = document.getElementById("menu");
  const menubutton2 = document.getElementById("menu-button2");
  const nav = document.getElementById("navbar");
  if (window.matchMedia("(min-width: 1024px)").matches) {
    menu.style.display = "flex";
    menuButton.style.display = "";
    menubutton2.style.display = "";
    nav.style.flexDirection = "";
    menu.style.flexDirection = "";
    menu.style.width = "";
  }

  menuButton.addEventListener("click", function () {
    if (window.matchMedia("(min-width: 768px)").matches) {
      menu.style.display = "flex";
      menuButton.style.display = "";
      menubutton2.style.display = "";
      nav.style.flexDirection = "";
      menu.style.flexDirection = "";
      menu.style.width = "";
    } else {
      menu.style.display = "flex";
      nav.style.flexDirection = "column";
      menu.style.flexDirection = "column";
      menu.style.width = "100%";
      menubutton2.style.display = "flex";
      menuButton.style.display = "none";
    }
  });
  menubutton2.addEventListener("click", function () {
    if (window.matchMedia("(min-width: 768px)").matches) {
      menu.style.display = "flex";
      menuButton.style.display = "";
      menubutton2.style.display = "";
      nav.style.flexDirection = "";
      menu.style.flexDirection = "";
      menu.style.width = "";
    } else {
      menu.style.display = "none";
      menuButton.style.display = "";
      menubutton2.style.display = "";
      nav.style.flexDirection = "";
      menu.style.flexDirection = "";
      menu.style.width = "";
    }
  });
  document.getElementById("trig1").addEventListener("click", function () {
    document.getElementById("trig1").style.marginBottom = "80px";
    document.getElementById("drop1").style.opacity = "0";
    document.getElementById("drop1").style.zIndex = "10";
    document.getElementById("drop1").style.transition = "2s";
    document.getElementById("trig2").style.display = "flex";
    document.getElementById("trig1").style.display = "none";
    document.getElementById("trig1").style.transition = "2s";
  });
  document.getElementById("trig2").addEventListener("click", function () {
    document.getElementById("trig2").style.marginBottom = "";
    document.getElementById("drop1").style.opacity = "1";
    document.getElementById("trig2").style.display = "";
    document.getElementById("trig1").style.display = "";
    document.getElementById("trig1").style.transition = "2s";
  });
});
</script>
