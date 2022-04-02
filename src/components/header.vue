<template>
    <Grid tag="header" :col="24">
        <Text tag="h5" class="ewf">melishev</Text>
        <nav>
          <Text tag="a" href="#" variant="body2">projects</Text>
          <Text tag="a" href="#" variant="body2">blog</Text>
          <Text tag="a" href="#" variant="body2">lab / experiments</Text>
          <Text tag="a" href="#" variant="body2">contacts</Text>
        </nav>
    </Grid>
</template>

<script>
import { Grid, Text } from '@wuki-ui/vue';

export default {
  components: {
    Grid,
    Text,
  },
  setup() {

  },
};
</script>

<style lang="scss" scoped>
header {
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  nav {
    display: flex;
    align-items: center;
    gap: 2rem;
  }
}
</style>
