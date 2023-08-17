<script setup lang="ts">
import { onMounted } from "vue";
import JMap from "../map/Map";
onMounted(() => {
  const jMap = new JMap("map");
  jMap.createMarkers(
    [
      [98.567901, 16.628101],
      [96.4, 18.08],
      [97.7, 16.08],
    ],
    "point"
  );
});
</script>
<template>
  <div id="map" style="width: 100%; height: 100%"></div>
</template>
<style lang="scss">
.point {
  width: 15px;
  height: 15px;
  background-color: yellow;
  border-radius: 50%;
  position: absolute;
  &:hover {
    transition: all 0.3s;
    transform: translate(-50%, -100%) scale(1.5) !important;
  }
}
</style>
