<template>
    <Grid tag="header" :col="24">
        <Text tag="h5" class="ewf">melishev</Text>
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
