export const state = () => ({
    Projects: [],
    Project: []
})

export const mutations = {
    SET_PROJECTS ( state, projects ) {
        state.Projects = projects
    },
    SET_PROJECT ( state, project ) {
        state.Project = project
    }
}

export const actions = {
    async GET_PROJECTS ( context ) {
        let response = await this.$axios.get(
            '/api/projects'
        )
        context.commit('SET_PROJECTS', response.data)
    },
    async GET_PROJECT ( context, id ) {
        let response = await this.$axios.get(
            '/api/project/' + id
        )
        context.commit('SET_PROJECT', response.data)
    }
}