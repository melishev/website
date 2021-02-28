export const state = () => ({
    Posts: [],
    Post: []
})

export const mutations = {
    SET_POSTS ( state, posts ) {
        state.Posts = posts
    },
    SET_POST ( state, post ) {
        state.Post = post
    }
}

export const actions = {
    async GET_POSTS ( context ) {
        let response = await this.$axios.get(
            '/api/posts'
        )
        context.commit('SET_POSTS', response.data)
    },
    async GET_POST ( context, id ) {
        let response = await this.$axios.get(
            '/api/posts/' + id
        )
        context.commit('SET_POST', response.data)
    }
}