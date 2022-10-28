<template>
  <div class="app">
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style>
#app{
  background: url("./assets/wallhaven-dgmj6m_1920x1080.png");
  padding:16px 16px 50px;
  min-height: 100vh;
  background-size: 100% 100%;
  /* background-size: cover; */
  /* background-size: contain; */
}
.content {
  max-width: 480px;
  margin: 0 auto;
}
</style>
