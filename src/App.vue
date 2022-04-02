<template>
  <WukiProvider>
    <Grid container>
      <Header />
      <Grid tag="main" :col="24">
        <Text variant="body1">
          Hello, at the moment I am doing many things:
        </Text>
        <ul>
          <li><Text variant="body2">Moving to a new country - <Text tag="a" variant="body2" href="https://www.google.com/search?q=georgia&oq=Georgia">Georgia</Text></Text></li>
          <li><Text variant="body2">Open source development - <Text tag="a" variant="body2" href="https://github.com/melishev/wuki">wuki</Text></Text></li>
          <li><Text variant="body2">Raising my puppy - <Text tag="a" variant="body2" href="https://www.instagram.com/wuki_maltipoo/">Wookiee</Text></Text></li>
        </ul>
        <br />
        <br />
        <Text variant="body1">Soon there will be a lot of interesting things here.</Text>
        <br />
        <br />
        <Text variant="body1">
          My contacts:
        </Text>
        <ul>
          <li><Text tag="a" variant="body2" href="https://github.com/melishev">Github</Text></li>
          <li><Text tag="a" variant="body2" href="https://linkedin.com/in/melishev/">LinkedIn</Text></li>
          <li><Text tag="a" variant="body2" href="https://t.me/melishev">Telegram</Text></li>
        </ul>
      </Grid>
      <Footer />
    </Grid>
  </WukiProvider>
</template>

<script>
import { WukiProvider, Grid, Text } from '@wuki-ui/vue';
// eslint-disable-next-line import/no-extraneous-dependencies
import { colors } from '@wuki-ui/theme';
import { Header } from './components';

export default {
  components: {
    WukiProvider,
    Grid,
    Text,
    Header,
  },
  setup() {
    return {
      colors,
    };
  },
};
</script>

<style lang="scss">
a {
  color: v-bind('colors.blue[500]') !important;
}
footer {
  position: absolute;
  bottom: 0;
}
</style>
