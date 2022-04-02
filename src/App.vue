<template>
  <WukiProvider>
    <Grid container>
      <Header />
      <Footer />
    </Grid>
  </WukiProvider>
</template>

<script>
import { WukiProvider, Grid } from '@wuki-ui/vue';
import { Header, Footer } from './components';

export default {
  components: {
    WukiProvider,
    Grid,
    Header,
    Footer,
  },
  setup() {

  },
};
</script>

<style lang="scss">
#app {
  height: 100vh;
}
.wk-con {
  min-height: 100vh;
}
footer {
  position: sticky;
  bottom: 0;
}
</style>
