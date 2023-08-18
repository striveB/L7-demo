<script setup lang="ts"></script>
<template>
  <div class="point"></div>
</template>

<style lang="scss" scoped>
.point {
  width: 15px;
  height: 15px;
  background-color: yellow;
  border-radius: 50%;
  position: absolute;
  transition: transform 0.3s;
  &:hover {
    transform: translate(-50%, -100%) scale(1.5) !important;
  }
}
</style>
