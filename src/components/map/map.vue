<script setup lang="ts">
import { onUnmounted, ref, watch } from 'vue';
import type mapboxgl from 'mapbox-gl';
import { MAPBOX_ACCESS_TOKEN } from '@/shared/config';
import { useGlobalStore } from '@/shared/lib';

const globalStore = useGlobalStore();

const elMarker = ref<HTMLElement | null>(null);

const mapboxJSLoaded = ref(false);

const link = document.createElement('link');
link.setAttribute('rel', 'stylesheet');
link.setAttribute('href', 'https://api.mapbox.com/mapbox-gl-js/v2.11.0/mapbox-gl.css');
document.head.appendChild(link);

const script = document.createElement('script');
script.setAttribute('src', 'https://api.mapbox.com/mapbox-gl-js/v2.11.0/mapbox-gl.js');
document.head.appendChild(script);

script.onload = () => {
  mapboxJSLoaded.value = true;
};

watch(() => [mapboxJSLoaded.value, globalStore.mapboxLocation], ([loaded]) => {
  if (loaded && !!globalStore.mapboxLocation) {
    const { mapboxgl } = window;

    mapboxgl.accessToken = MAPBOX_ACCESS_TOKEN;

    const map = new mapboxgl.Map({
      container: 'elMap',
      style: 'mapbox://styles/mapbox/streets-v12',
      center: globalStore.mapboxLocation,
      zoom: 12,
      attributionControl: false,
    });

    if (elMarker.value instanceof HTMLElement) {
      new mapboxgl.Marker({
        element: elMarker.value,
      })
        .setLngLat(globalStore.mapboxLocation)
        .addTo(map);
    }
  }
});

onUnmounted(() => {
  document.head.removeChild(link);
  document.head.removeChild(script);
});
</script>

<template>
  <div class="map">
    <div class="map-container" id="elMap" />
    <div class="map-marker" ref="elMarker" />
  </div>
</template>

<style lang="scss">
.map {
  width: 100%;
  height: 100%;
  position: relative;
  &-container {
    width: 100%;
    height: 100%;
  }
  &-marker {
    width: 30px;
    height: 30px;
    background: #A7A7A7;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: pulse 3000ms infinite;
  }
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 #a7a7a7d4;
  }
  100% {
    box-shadow: 0 0 0 30px #a7a7a700;
  }
}

.mapboxgl-ctrl-bottom-left {
  display: none !important;
}
</style>
