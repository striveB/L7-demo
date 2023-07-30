<script setup lang="ts">
import { Scene } from "@antv/l7";
import { GaodeMap } from "@antv/l7-maps";
// 同样你也可以初始化一个 Mapbox 地图
const scene = new Scene({
  id: "map",
  map: new GaodeMap({
    pitch: 35.210526315789465,
    style: "dark",
    center: [104.288144, 31.239692],
    zoom: 4.4,
  }),
});
</script>

<template>
  <div id="map" style="width: 100%; height: 100%"></div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
