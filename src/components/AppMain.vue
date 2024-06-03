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

        <div class="container-one">
            <div class="row">
                <div class="col-12 col-lg-6">
                    <Card :card="cards.containerOne.colMainLeft">
                    </Card>
                </div>
                <div class="col-12 col-lg-6">
                    <div class="row flex-column">
                        <div class="col-top">
                            <Card :card="cards.containerOne.colTop">
                            </Card>
                        </div>
                        <div class="col-bottom">
                            <Card :card="cards.containerOne.colBottom">
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <Banner :banner="banner"></Banner>
        <Quote :quote="quote"></Quote>
        <Blog :blog="blog"></Blog>

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

    .container-one .row {
        min-height: 150px;

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
}
</style>