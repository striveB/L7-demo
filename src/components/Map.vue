<script setup lang="ts">
import { onMounted, ref } from "vue";
import JMap from "../map/Map";
import Point from "./Point.vue";
const locations = [
  {
    point: [98.567901, 16.628101],
    content: "1",
  },
  {
    point: [99.129799, 16.84641],
    content: "2",
  },
  {
    point: [97.585562, 16.703195],
    content: "3",
  },
  {
    point: [98.153936, 17.391662],
    content: "4",
  },
];
const locationEl = ref(null);
let jMap: JMap;
onMounted(() => {
  jMap = new JMap("map");
  locations.forEach((location, i) => {
    jMap.createMarkers(location.point, {
      className: "point",
      dom: (locationEl.value && locationEl.value[i].$el) || undefined,
    });
  });
});
function pointClick(location: { point: number[]; content: string }) {
  // jMap.createPopup(location.point, { content: location.content });
}
</script>
<template>
  <div id="map" style="width: 100%; height: 100%"></div>
  <Point
    v-for="location in locations"
    :key="location.content"
    ref="locationEl"
    @click="pointClick(location)"
  />
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
