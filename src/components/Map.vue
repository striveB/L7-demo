<script setup lang="ts">
import { onMounted } from "vue";
import { Scene } from "@antv/l7";
import { GaodeMap } from "@antv/l7-maps";
onMounted(() => {
  // 同样你也可以初始化一个 Mapbox 地图
  const scene = new Scene({
    id: "map",
    map: new GaodeMap({
      // 倾斜度（3D效果）
      pitch: 35.210526315789465,
      // 地图样式 dark light normal blank （无底图）
      style: "dark",
      // 地图中心点
      center: [104.288144, 31.239692],
      // 默认缩放层级
      zoom: 4.4,
    }),
  });
});
</script>

<template>
  <div id="map" style="width: 100%; height: 100%"></div>
</template>
