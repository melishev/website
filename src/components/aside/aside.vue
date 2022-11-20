<script setup lang="ts">
import { markRaw, onMounted, reactive, ref } from 'vue';
import { AsideBlock } from './ui';
import { Icon } from '@/components';
import { githubApi } from '@/shared/api';

const GHUsername = 'melishev';
const FIO = ref('');
const ShortBIO = ref('');

const blocks = reactive({
  time: {
    title: 'Time',
    icon: markRaw(Icon.Time),
    value: '',
  },
  location: {
    title: 'Location',
    icon: markRaw(Icon.Location),
    value: '',
  },
  status: {
    title: 'Status',
    icon: markRaw(Icon.Available),
    value: '',
  },
  email: {
    title: 'Email',
    icon: markRaw(Icon.Email),
    value: '',
  }
})

onMounted(async () => {
  const GHPersonalData = await githubApi.getUserInfo(GHUsername)

  FIO.value = GHPersonalData.name;
  ShortBIO.value = GHPersonalData.bio;
  blocks.time.value = new Date().toLocaleTimeString('en-US', {
    timeZone: GHPersonalData.location,
    hour: '2-digit',
    minute: '2-digit',
  })
  blocks.location.value = GHPersonalData.location;
  blocks.status.value = GHPersonalData.hireable ? 'Available' : 'Busy';
  blocks.email.value = GHPersonalData.email || '';
})
</script>

<template>
  <aside class="aside h-100">
    <h1 class="aside-fio mb-3">{{ FIO }}</h1>
    <p class="aside-bio">
      {{ ShortBIO }}
      <br /><br />
      I am engaged in Front-end development for 5 years. From 2017 to 2019 studied html, css, js; also providing various services from revision, to full freelance project execution. In 2019, switched to Vue.js and Nuxt.js development. In 2021, additionally studied React.js and its Next framework.
      <br /><br />
      Since 2017 I managed to work with many individuals, small businesses and companies, to whom I provided various services in the field of web development, both as a developer and a consultant.
      <br /><br />
      Since 2020 contributed to Open Source development. Created my own plugin for Strapi CMS and my own theme for the VS code editor. And I'm still working on my component agnostic library.
      <br /><br />
      At the moment, in my spare time from work and personal affairs, I'm additionally studying Node.js and its popular Nest framework.
    </p>
    <div class="aside-blocks">
      <AsideBlock
        v-for="(block, key) in blocks"
        :key="key"
        :title="block.title"
        :icon="block.icon"
        :value="block.value"
      />
    </div>
  </aside>
</template>

<style scoped lang="scss">
.aside {
  display: flex;
  flex-wrap: wrap;
  &-fio {
    @include header-6
  }
  &-bio {
    @include body;
    color: #A7A7A7;
  }
  &-blocks {
    display: flex;
    flex-wrap: wrap;
    align-self: flex-end;
    gap: 12px;
  }
}
</style>