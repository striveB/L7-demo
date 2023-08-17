import { Scene, GeoLocate, Marker } from "@antv/l7";
import { GaodeMap } from "@antv/l7-maps";
export default class JMap {
  scene: Scene;
  constructor(id: string) {
    // 同样你也可以初始化一个 Mapbox 地图
    this.scene = new Scene({
      // 容器挂载元素id
      id,
      // 高德地图
      map: new GaodeMap({
        // 倾斜度（3D效果）
        pitch: 38,
        // 地图样式 dark light normal blank （无底图）
        style: "dark",
        // 地图中心点
        center: [98.567901, 16.628101],
        // 默认缩放层级
        zoom: 9,
        minZoom: 9,
        maxZoom: 9.5,
      }),
    });
    this.scene.addControl(new GeoLocate());
  }
  createMarkers(points: number[][], className: string) {
    // 清空所有点dom
    document.querySelectorAll("."+className).forEach((point) => {
      point.remove();
    });
    points.forEach((point) => {
      const pointDom = document.createElement("div");
      pointDom.className = className;
      document.body.appendChild(pointDom);
      const marker = new Marker({
        element: pointDom,
      }).setLnglat({ lng: point[0], lat: point[1] });
      this.scene.addMarker(marker);
    });
  }
}