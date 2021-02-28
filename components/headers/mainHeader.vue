<template>
    <header :class="{main_header_opened}">
        <div class="main_header">
            <div class="main_header_container">
                <div class="main_header_burger">
                    <div class="main_header_burger_btn">
                        <div id="main_header_burger_group" @click="mobileMenu">
                            <div class="head_btn header_main_btn_top"></div>
                            <div class="head_btn header_main_btn_btm"></div>
                        </div>
                    </div>
                </div>
                <div class="main_header_logo">
                    <nuxt-link to="/">melishev</nuxt-link>
                </div>
                <div class="main_header_nav">
                    <ul>
                        <nuxt-link v-for="link in links" :key="link.title" :to="link.to" tag="li"><a href="#">{{link.title}}</a></nuxt-link>
                    </ul>
                </div>
                <div class="main_header_zero">
                    
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    data: () => ({
        links: [
            {title: 'Проекты', to: '/projects'},
            {title: 'Новости', to: '/news'},
            {title: 'Контакты', to: '/contacts'},
        ],
        main_header_opened: false,
    }),
    methods: {
        mobileMenu() {
            this.main_header_opened = !this.main_header_opened;
            document.querySelector('body').classList.toggle('navigation_overflow');
            document.querySelector('.page_header').classList.toggle('dontshow');
        }
    },
    watch: {
        $route(to, from){
            this.main_header_opened = false;
            document.querySelector('body').classList.remove('navigation_overflow');
        }
    }
}
</script>

<style lang="scss">
.main_header {
    width: 100%;
    height: 50px;
    padding: 0 2.5vw;
    position: fixed;
    z-index: 9999;
    backdrop-filter: blur(20px);
    background-color: var(--blur);
    border-bottom: 1px solid var(--lincol);
    transition: height 1.5s;
}
.main_header_container {
    width: 100%;
    height: 50px;
    display: flex;
}
.main_header_burger {
    display: none;
}
.main_header_logo {
    display: flex;
    flex-grow: 1;
    flex-basis: 30%;
    justify-content: flex-start;
    align-items: center;
    a {
        font-size: 16px;
        font-weight: var(--Bold);
        text-transform: uppercase;
        color: var(--black);
    }
}
.main_header_nav {
    display: flex;
    flex-grow: 2;
    flex-basis: content;
    justify-content: center;
    align-items: center;
    ul {
        display: flex;
        li {
            margin-right: 5vw;
            a {
                font-size: 18px;
                font-weight: var(--Regular);
                color: var(--black);
            }
        }
        li:last-child {
            margin-right: 0;
        }
    }
}
.main_header_zero {
    display: flex;
    flex-grow: 1;
    flex-basis: 30%;
    justify-content: flex-end;
    align-items: center;
}
@media screen and (max-width:768px) {
    .main_header_nav {
        ul {
            li {
                a {
                    font-size: 16px;
                }
            }
        }
    }
}
@media screen and (max-width:600px) {
    .main_header_burger_btn {
        position: absolute;
        display: inline-block;
        cursor: pointer;
        transform: rotate(0deg);
        transition: all .5s cubic-bezier(0.4, 0.01, 0.165, 0.99);
        user-select: none;
    }
    .main_header_burger {
        display: flex;
        flex-grow: 1;
        flex-basis: 30%;
        justify-content: flex-start;
        align-items: center;
        #main_header_burger_group {
            width: 18px;
            height: 8px;
            .header_main_btn_top {
                transform: translateY(0px) rotate(0deg);
            }
            .header_main_btn_btm {
                transform: translateY(6px) rotate(0deg);
            }
            .header_main_btn_top, .header_main_btn_btm {
                height: 1px;
                background-color: var(--descol);
            }
        }
    }
    .main_header_logo {
        flex-grow: 2;
        justify-content: center;
    }
    .main_header_nav {
        width: calc(100% - 5vw);
        height: 0;
        justify-content: center;
        position: absolute;
        z-index: -1;
        opacity: 0;
        transition: all 1s;
        ul{
            width: 100%;
            height: 50vh;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            position: absolute;
            z-index: -10;
            li {
                margin-right: 0;
            }
        }
    }
    header.main_header_opened {
        .main_header {
            height: 100vh;
            transition: all 1s;
        }
        .main_header_burger_btn {
            transform: rotate(90deg)
        }
        #main_header_burger_group {
            .head_btn {
                transition: all 0.4s cubic-bezier(0.4, 0.01, 0.165, 0.99);
                transition-delay: .5s;
            }
            .header_main_btn_top {
                transform: translateY(4px) rotate(45deg);
            }
            .header_main_btn_btm {
                transform: translateY(3px) rotate(-45deg);
            }
        }
        .main_header_nav {
            height: 100vh;
            opacity: 1;
            transition: all 1.3s;
            ul {
                z-index: 1;
            }
        }
    }
}
</style>