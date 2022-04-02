<template>
  <Grid tag="footer" :col="24">
    <Text variant="small">melishev / all rights reserved</Text>
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
footer {
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
