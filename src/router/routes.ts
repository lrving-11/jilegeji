import { RouteRecordRaw } from "vue-router";
import IndexPage from "../views/index.vue"
import GamePage from "../views/game.vue"
import ConfigPage from "../views/config.vue"

export default [
  {
    path: "/",
    component: IndexPage,
  },
  {
    path: "/game",
    component: GamePage,
  },
  {
    path: "/config",
    component: ConfigPage,
  },
] as RouteRecordRaw[];