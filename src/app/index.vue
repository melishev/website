<script setup lang="ts">
import { Aside, Map } from '@/components';
import { githubApi, mapboxApi } from '@/shared/api';
import { GITHUB_USERNAME } from '@/shared/config';
import { useGlobalStore } from '@/shared/lib';
import { watch } from 'vue';

const globalStore = useGlobalStore();

githubApi.getUserInfo(GITHUB_USERNAME)
  .then((res) => {
    globalStore.setGithubUser(res);
  });

watch(() => globalStore.github.user?.location, (newLocation) => {
  if (newLocation) {
    mapboxApi.getGeocoding(newLocation)
      .then((res) => res.json())
      .then((res) => globalStore.setMapboxGeocode(res));
  }
});
</script>

<template>
  <div class="container-fluid h-100 py-5 px-md-5">
    <div class="row h-100">
      <div class="col-sm-6 col-xl-4 col-xxl-3">
        <Aside />
      </div>
      <div class="col grid d-none d-xl-grid" style="--bs-rows: 4">
        <!-- <div class="g-col-3">
          <p>Oops... Content is not invented</p>
        </div>
        <div class="g-col-2">
          <p>Oops... Content is not invented</p>
        </div>
        <div class="g-col-2">
          <p>Oops... Content is not invented</p>
        </div> -->
        <div class="g-col-5 g-start-8 test" style="grid-row: 1 / 3;">
          <Map />
        </div>
        <!-- <div class="g-col-4">
          <p>Oops... Content is not invented</p>
        </div>
        <div class="g-col-4">
          <p>Oops... Content is not invented</p>
        </div>
        <div class="g-col-4">
          <p>Oops... Content is not invented</p>
        </div>
        <div class="g-col-2 test2">
          <p>Oops... Content is not invented</p>
        </div>
        <div class="g-col-7">
          <p>Oops... Content is not invented</p>
        </div>
        <div class="g-col-5">
          <p>Oops... Content is not invented</p>
        </div> -->
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.grid {
  & > * {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #333333;
    border-radius: 20px;
    overflow: hidden;
    p {
      @include small;
      color: #A7A7A7;
      margin-bottom: unset;
    }
  }
  .test2 {
    grid-row: 2 / 4;
    p {
      transform: rotate(90deg);
    }
  }
}
</style>
