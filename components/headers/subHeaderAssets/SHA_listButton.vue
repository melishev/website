<template>
    <div class="page_header_button">
        <ul>
            <li v-if="post.data[0].url == 0 ? false : true"><a :href="post.data[0].url" target="_blank">Перейти</a></li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        post: {
            type: Object,
            required: true,
            default: () => [],
        }
    },
}
</script>