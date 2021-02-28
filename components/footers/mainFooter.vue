<template>
    <footer>
        <div class="main_footer">
            <div class="main_footer_container">
                <div class="main_footer_logo">
                    <nuxt-link to="/">melishev</nuxt-link>
                </div>
            </div>
        </div>
    </footer>
</template>

<style lang="scss">
.main_footer {
    width: 100%;
    height: 50px;
    padding: 0 2.5vw;
    backdrop-filter: blur(20px);
    background-color: var(--blur);
    border-top: 1px solid var(--lincol);
}
.main_footer_container {
    width: 100%;
    height: 50px;
    display: flex;
    transform: translateY(-1px);
}
.main_footer_logo {
    display: flex;
    flex-grow: 1;
    justify-content: flex-start;
    align-items: center;
    a {
        font-size: 14px;
        font-weight: var(--Bold);
        text-transform: uppercase;
        color: var(--black);
    }
}
</style>