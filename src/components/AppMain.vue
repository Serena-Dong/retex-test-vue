<script>
import { createApp } from 'vue';
import { mainData } from '../data/data';
import Card from './contents/Card.vue';
import Blog from './contents/Blog.vue';
import Banner from './contents/Banner.vue';
import Quote from './contents/Quote.vue';


export default {
    name: 'AppMain',
    components: { Card, Banner, Quote, Blog },
    data() {
        return {
            data: mainData,
            cards: mainData.cards,
            banner: mainData.banner,
            quote: mainData.quote,
            blog: mainData.blog,
        }
    }
}

</script>
<template>
    <main>

        <div class="intro">
            <Card :card="cards.intro">
            </Card>
        </div>

        <div class="container-first">
            <div class="row">
                <div class="col-12 col-lg-6">
                    <Card :card="cards.containerFirst.colMainLeft">
                    </Card>
                </div>
                <div class="col-12 col-lg-6">
                    <div class="row flex-column">
                        <div class="col-top">
                            <Card :card="cards.containerFirst.colTop">
                            </Card>
                        </div>
                        <div class="col-bottom">
                            <Card :card="cards.containerFirst.colBottom">
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <Banner :banner="banner"></Banner>

        <div class="container-second">
            <div class="row">
                <div v-for="card in cards.containerSecond.col" class="col-12 col-lg-4">
                    <Card :card="card">
                    </Card>
                </div>
            </div>
        </div>

        <div class="container-third">
            <div class="row">
                <div class="col-12 col-lg-4">
                    <Card :card="cards.containerThird.colLeft">
                    </Card>
                </div>
                <div class="col-12 col-lg-8">
                    <Card :card="cards.containerThird.colRight">
                    </Card>
                </div>
            </div>
        </div>
        <Quote :quote="quote"></Quote>
        <Blog :blog="blog"></Blog>

        <div class="container-forth">
            <div class="row">
                <div class="col-12 col-lg-12">
                    <Card :card="cards.containerForth.col">
                    </Card>
                </div>
            </div>
        </div>

        <div class="container-fifth">
            <div class="row">
                <div v-for="card in cards.containerFifth.col" class="col-12 col-lg-3">
                    <Card :card="card">
                    </Card>
                </div>
            </div>
        </div>

        <div class="container-six">
            <div class="row">
                <div class="col-12 col-lg-6">
                    <div class="row">
                        <div class="col-12 col-lg-3"></div>
                        <div class="col-12 col-lg-3"></div>
                        <div class="col-12 col-lg-3"></div>
                        <div class="col-12 col-lg-3"></div>
                    </div>
                </div>
                <div class="col-12 col-lg-6">

                </div>
            </div>
        </div>
    </main>
</template>
<style scoped lang="scss">
@import "./../assets/scss/partials/variables";

main {

    .row,
    .row>* {
        padding: 0 !important;
        margin: 0 !important;
    }

    .intro {
        height: 450px;
    }

    .container-first .row {
        min-height: 250px;

        @media screen and (min-width: 992px) {
            height: 800px;
        }

        // STRUCTURE
        .col-12 {
            height: 50%;
            padding: 0;

            @media screen and (min-width: 992px) {
                height: 100%;
            }
        }

        .col-12 .col-top {
            height: 55%;

            width: 100%;
        }

        .col-12 .col-bottom {
            height: 45%;
            width: 100%
        }
    }

    .container-second .row,
    .container-third .row,
    .container-fifth .row {
        min-height: 400px;

        @media screen and (min-width: 992px) {
            height: 400px;
        }

        .col-12 {
            height: 100%;
        }
    }

    .container-forth .row {
        height: 500px;

        .col-12 {
            height: 100%;
        }

    }

}
</style>