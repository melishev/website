<script setup lang="ts">
import {
  markRaw, reactive, ref, watch,
} from 'vue';
import { Icon } from '@/shared/ui';
import { GITHUB_USERNAME, TELEGRAM_USERNAME } from '@/shared/config';
import { useGlobalStore } from '@/shared/lib';
import { mapboxApi } from '@/shared/api';
import { AsideBlock, type AsideBlockProps } from './ui';

const globalStore = useGlobalStore();

const FIO = ref('');

type Block = {
  [x: string]: AsideBlockProps
};

const blocks = reactive<Block>({
  time: {
    title: 'Time',
    icon: markRaw(Icon.Time),
    value: '',
    href: null,
  },
  status: {
    title: 'Status',
    icon: markRaw(Icon.Available),
    value: '',
    href: null,
  },
  // email: {
  //   title: 'Email',
  //   icon: null,
  //   value: '',
  //   href: null,
  // },
  github: {
    title: 'Github',
    icon: null,
    value: GITHUB_USERNAME,
    href: `https://github.com/${GITHUB_USERNAME}`,
  },
  telegram: {
    title: 'Telegram',
    icon: null,
    value: `@${TELEGRAM_USERNAME}`,
    href: `tg://resolve?domain=${TELEGRAM_USERNAME}`,
  },
});

watch(() => globalStore.github.user, (user) => {
  if (user) {
    FIO.value = user.name;
    blocks.status.value = user.hireable ? 'Available' : 'Busy';

    // blocks.email.value = GHPersonalData.email || '';
    // blocks.email.href = `mailto:${GHPersonalData.email}`;
  }
});

watch(() => globalStore.mapboxTimezone, (timeZone) => {
  if (timeZone) {
    blocks.time.value = new Date().toLocaleTimeString('en-US', {
      timeZone,
      hour: '2-digit',
      minute: '2-digit',
    });
  }
});

watch(() => globalStore.mapboxLocation, (location) => {
  if (location) {
    mapboxApi.getTilequery(...location)
      .then((res) => res.json())
      .then((res) => {
        globalStore.setMapboxTile(res);
      });
  }
});
</script>

<template>
  <aside class="aside h-100">
    <h1 class="aside-fio mb-3 placeholder-glow col-6">
      {{ FIO }}
      <span v-if="!FIO.length" class="placeholder col-12" />
    </h1>
    <p class="aside-bio">
      I am engaged in <mark>Front-end</mark> development for <mark>5 years</mark>. From 2017 to 2019 studied html, css, js; also providing various services from revision, to full freelance project execution. In 2019, switched to <mark>Vue.js and Nuxt.js</mark> development. In 2021, additionally studied React.js and its Next framework.
      <br /><br />
      Since 2017 I managed to work with many individuals, small businesses and companies, to whom I provided various services in the field of <mark>web development</mark>, both as a developer and a consultant.
      <br /><br />
      Since 2020 contributed to <mark>Open Source development</mark>. Created my own plugin for Strapi CMS and my own theme for the VS code editor. And I'm still working on my component agnostic library.
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
        :href="block.href"
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
    line-height: 24px;
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
