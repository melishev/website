<template>
    <div class="page_header">
        <div class="page_header_container">
            <div class="page_header_bg"></div>
            <breadCrumbsProject v-if="posts.tablenames == 'projects'" :post="posts" />
            <breadCrumbsArticle v-if="posts.tablenames == 'news'" :post="posts"/>
            <listButton v-if="(posts.data[1] == undefined) ? true : false" :post="posts" />
            <div v-if="(posts.data[1] == undefined) ? true : false" class="page_header_arrow">
                <div v-if="posts.data[0].url" id="page_header_arrow_group" @click="mobilePageMenu">
                    <span class="arrow_left"></span>
                    <span class="arrow_right"></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import breadCrumbsProject from '@/components/headers/subHeaderAssets/SHA_breadCrumbsProject'
import breadCrumbsArticle from '@/components/headers/subHeaderAssets/SHA_breadCrumbsArticle'
import listButton from '@/components/headers/subHeaderAssets/SHA_listButton'

export default {
    components: {
        breadCrumbsProject,
        breadCrumbsArticle,
        listButton
    },
    props: {
        posts: {
            type: Object,
            required: true,
            default: () => [],
        }
    },
    methods: {
        mobilePageMenu() {
            document.querySelector('.page_header').classList.toggle('page_header_opened');
        }
    }
}
</script>

<style lang="scss">
.page_header {
    width: 100%;
    height: 50px;
    padding: 0 5vw;
    position: sticky;
    top: 0;
    z-index: 9999;
    backdrop-filter: blur(20px);
    background-color: var(--blur);
    border-bottom: 1px solid var(--lincol);
}
.page_header_container {
    width: 100%;
    height: 50px;
    display: flex;
}
.page_header_bread_crumbs {
    display: flex;
    flex-grow: 1;
    flex-basis: 50%;
    justify-content: flex-start;
    align-items: center;
    a {
        font-size: 16px;
        font-weight: var(--Light);
        color: var(--black);
    }
    svg {
        margin: 0 0.625vw;
    }
    span {
        font-size: 18px;
        font-weight: var(--Regular);
        margin: 0 0 0 0.625vw;
        color: var(--black);
    }
}
.page_header_button {
    display: flex;
    flex-grow: 1;
    flex-basis: 50%;
    justify-content: flex-end;
    align-items: center;
    ul {
        display: flex;
        align-items: center;
        li {
            margin-right: 5vw;
            a {
                font-size: 16px;
                font-weight: var(--Light);
                color: var(--black);
            }
        }
        li:last-child {
            margin-right: 0;
        }
    }
}
.dontshow {
    z-index: 9998;
}
.page_header_arrow {
    display: none;
}
@media screen and (max-width:1080px) {
    .page_header {
        padding: 0 2.5vw;
    }
}
@media screen and (max-width:768px) {
    .page_header_bread_crumbs {
        a {
            font-size: 16px;
        }
        svg {
            margin: 0 1.25vw;
        }
        a:nth-child(3) {
            display: none;
        }
        svg:nth-child(2) {
            display: none;
        }
        span {
            font-size: 18px;
            margin: 0 0 0 1.25vw;
        }
    }
    .page_header_button {
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
    .page_header_bg {
        z-index: -9999;
        width: calc(100vw);
        height: 0;
        transform: translateX(-2.5vw) translateY(50px);
        position: absolute;
        background-color: rgba(190, 190, 190, .9);
        transition: height 1s;
    }
    .page_header_bread_crumbs {
        a {
            display: none;
        }
        svg {
            display: none;
        }
        span {
            font-size: 18px;
            margin: 0;
        }
    }
    .page_header_button {
        opacity: 0;
        z-index: -9999;
        width: calc(100vw - 10vw);
        position: absolute;
        transform: translateY(-500px);
        transition: opacity .5s, transform .5s .3s;
        ul {
            width: 100%;
            flex-direction: column;
            li {
                width: 100%;
                padding-bottom: 10px;
                margin-right: 0;
                margin-top: 10px;
                border-bottom: 1px solid var(--lincol);
            }
        }
    }
    .page_header_arrow {
        display: flex;
        flex-grow: 1;
        flex-basis: 50%;
        justify-content: flex-end;
        align-items: center;
        #page_header_arrow_group {
            width: 20px;
            height: 10px;
            display: flex;
            align-items: center;
            span {
                background-color: var(--descol);
                height: 1px;
                width: 50%;
                display: block;
            }
            .arrow_left {
                transform: rotate(35deg) translateX(1.3px);
                transition: transform 1s;
            }
            .arrow_right {
                transform: rotate(-35deg) translateX(-1.3px);
                transition: transform 1s;
            }
        }
    }
    .page_header_opened {
        .page_header_bg {
            height: 40px;
            transition: height 1s;
        }
        .page_header_button {
            opacity: 1;
            transform: translateY(50px);
            transition: opacity .5s .3s, transform .5s;
        }
        .page_header_arrow {
            #page_header_arrow_group {
                .arrow_left {
                    transform: rotate(-35deg) translateX(1.3px);
                    transition: transform 1s;
                }
                .arrow_right {
                    transform: rotate(35deg) translateX(-1.3px);
                    transition: transform 1s;
                }
            }
        }
    }
}
</style>