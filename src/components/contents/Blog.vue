<script>
export default {
    name: 'Blog',
    data() {
        return {
            itemsToShow: 4
        }
    },
    props: {
        blog: Object
    },
    methods: {
        updateItemsToShow() {
            // Check window width and update itemsToShow 
            this.itemsToShow = window.innerWidth >= 992 ? 5 : 4;
        },
        sliceItems(start, end) {
            return this.blog.authors.slice(start, end);
        }
    },
    mounted() {
        this.updateItemsToShow();
        window.addEventListener('resize', this.updateItemsToShow);
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.updateItemsToShow);
    }
}
</script>

<template>
    <div class="blog">

        <div class="row flex-wrap">

            <!-- Title -->
            <div id="title" class="col col-6 col-lg-2">
                <h1>
                    Il Blog
                </h1>
            </div>

            <!-- Authors -->
            <div id="author-blog" class="col col-6 col-lg-2" v-for="(author, index) in sliceItems(0, itemsToShow)"
                :key="author.name">

                <!-- Link -->
                <a :href="author.link">
                    <!-- Img -->
                    <div class="img-container">
                        <img :src="'img/authors/' + author.img" alt="">
                    </div>
                    <!-- Text -->
                    <div class="text-container">
                        <h6><b>{{ author.name }}</b></h6>
                        <p>Di {{ author.nickname }}</p>
                    </div>

                </a>
            </div>

            <!-- More -->
            <div id="more" class="col col-6 col-lg-2">
                <div class="text-center">

                    <!-- Link -->
                    <a href="">
                        <h5>
                            <b>Tutti i blog</b>
                        </h5>
                        <i class="fa-solid fa-arrow-right fs-1"></i>
                    </a>

                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "./../../assets/scss/partials/variables";

.blog {

    border-top: 1px solid;

    .row {
        --bs-gutter-x: 0;
    }

    .col {
        display: flex;
        align-items: center;
        justify-content: center;

        &>* {
            height: 200px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        &:first-child,
        &:nth-child(odd) {
            border-right: 1px solid;
            border-bottom: 1px solid;
        }

        &:last-child,
        &:nth-child(even) {
            border-bottom: 1px solid;
        }

        @media screen and (min-width: 992px) {
            border-bottom: 0 !important;

            &:not(:nth-last-child(2)) {
                border-right: 1px solid !important;
            }

        }
    }

    #title h1 {
        color: $red;
    }

    #author-blog {
        a {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 20px;


            .img-container {
                width: 75px;
                height: 75px;

                img {
                    border-radius: 50%;

                }
            }

            .text-container {
                text-align: center;

                p {
                    margin: 0;
                }
            }
        }
    }

    #more div {

        @media screen and (min-width: 992px) {
            display: none;
        }

    }
}
</style>