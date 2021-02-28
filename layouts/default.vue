<template>
    <div>
        <MainHeader />
        <Nuxt />
        <MainFooter />
    </div>
</template>

<script>
import MainHeader from '@/components/headers/mainHeader'
import MainFooter from '@/components/footers/mainFooter'

export default {
    components: {
        MainHeader,
        MainFooter
    }
}
</script>

<style lang="scss">

</style>