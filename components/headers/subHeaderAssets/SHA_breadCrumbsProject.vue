<template>
    <div class="page_header_bread_crumbs">
        <div class="page_header_bread_crumbs-container">
            <nuxt-link v-if="(post.data[1] == undefined) ? true : false" :to="'/' + post.tablenames">{{post.tablename_ru}}</nuxt-link>
            <svg v-if="(post.data[1] == undefined) ? true : false" xmlns="http://www.w3.org/2000/svg" width="5" height="10" viewBox="0 0 5 10">
                <path d="M1.6,1.885,5.5,6.59l-3.9,4.7-.427-.317L4.822,6.59,1.179,2.2Z" transform="translate(-0.803 -1.29)" fill="#9f9f9f"/>
                <rect width="5" height="4.851" fill="none"/>
            </svg>
            <nuxt-link v-if="(post.data[1] == undefined) ? true : false" :to="( post.data[0].type == 'AR') ? '/AR' : '/web'">{{post.data[0].type}}</nuxt-link>
            <svg v-if="(post.data[1] == undefined) ? true : false" xmlns="http://www.w3.org/2000/svg" width="5" height="10" viewBox="0 0 5 10">
                <path d="M1.6,1.885,5.5,6.59l-3.9,4.7-.427-.317L4.822,6.59,1.179,2.2Z" transform="translate(-0.803 -1.29)" fill="#9f9f9f"/>
                <rect width="5" height="4.851" fill="none"/>
            </svg>
            <span>{{ ($route.params.projectPage == null ) ? post.tablenames_ru : post.data[0].title_short }}</span>
        </div>
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
    }
}
</script>