<template>
  <div id="indexPage">
    <h1>🐔鸡了个鸡</h1>
    <div style="margin-bottom: 16px">只因你实在是太美</div>
    <a-button
      block
      style="margin-bottom: 16px"
      @click="toGamePage(easyGameConfig)"
    >
      青铜
    </a-button>
    <a-button
      block
      style="margin-bottom: 16px"
      @click="toGamePage(middleGameConfig)"
    >
      白银
    </a-button>
    <a-button
      block
      style="margin-bottom: 16px"
      @click="toGamePage(hardGameConfig)"
    >
      铂金
    </a-button>
    <a-button
      block
      style="margin-bottom: 16px"
      @click="toGamePage(lunaticGameConfig)"
    >
      砖石
    </a-button>
    <a-button
      block
      style="margin-bottom: 16px"
      @click="toGamePage(skyGameConfig)"
    >
      王者
    </a-button>
    <a-button
      block
      style="margin-bottom: 16px"
      @click="toGamePage(yangGameConfig)"
    >
      荣耀
    </a-button>
    <a-button block style="margin-bottom: 16px" @click="() => toGamePage()">
      训练营
    </a-button>
    <div class="footer">
      <a
        href="https://github.com/lrving-11"
        target="_blank"
        style="color: #fff"
      >
        鸡了个鸡 ©2022 by lrving-11
      </a>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from "vue-router";
import {
  easyGameConfig,
  middleGameConfig,
  hardGameConfig,
  lunaticGameConfig,
  skyGameConfig,
  yangGameConfig,
} from "../core/gameConfig";
import { useGlobalStore } from "../core/globalStore";
const router = useRouter();
const { setGameConfig } = useGlobalStore();
const toGamePage=(config?:GameConfigType)=>{
  if(config){
    setGameConfig(config);
    router.push('/game')
  }else{
    router.push('/config')
  }
}
</script>
<style scoped>
#indexPage {
  text-align: center;
}
.footer {
  background: rgba(7, 6, 6, 0.6);
  color: #fff;
  padding: 12px;
  text-align: center;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
