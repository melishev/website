<script setup lang="ts">
import { Aside } from '@/components';
</script>

<template>
  <div class="container-fluid h-100 py-5 px-md-5">
    <div class="row h-100">
      <div class="col-sm-6 col-xl-4 col-xxl-3">
        <Aside />
      </div>
      <!-- <div class="col grid d-none d-xl-grid" style="--bs-rows: 4">
        <div class="g-col-3">
          <p>Oops... Content is not invented</p>
        </div>
        <div class="g-col-2">
          <p>Oops... Content is not invented</p>
        </div>
        <div class="g-col-2">
          <p>Oops... Content is not invented</p>
        </div>
        <div class="g-col-5 test">
          <p>Oops... Content is not invented</p>
        </div>
        <div class="g-col-4">
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
        </div>
      </div> -->
    </div>
  </div>
</template>

<!-- <style lang="scss">
.grid {
  grid-auto-flow: dense;
  & > * {
    @include small;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #333333;
    color: #A7A7A7;
    border-radius: 20px;
    p {
      margin-bottom: unset;
    }
  }
  .test {
  grid-row: 1 / 3;
  }
  .test2 {
    grid-row: 2 / 4;
    p {
      transform: rotate(90deg);
    }
  }
}
</style> -->
