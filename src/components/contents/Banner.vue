<script>
export default {
    name: 'Banner',
    props: {
        banner: Object
    }
}
</script>

<template>
    <div class="banner" :class="'bg-' + banner.bgColor">
        <div class="container">
            <div class="row flex-column gap-5">

                <!-- Title -->
                <div id="title" class="col-12 col-lg-8">
                    <h1 class="m-0"><b>{{ banner.title }}</b></h1>
                </div>
                <!-- Link -->
                <div id="link" class="col-12 col-lg-4 d-flex 
                    justify-content-start align-items-center">
                    <a :href="banner.link.path"><b>
                            {{ banner.link.text }} <i class="fa-solid fa-arrow-right"></i>
                        </b></a>

                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "./../../assets/scss/partials/variables";

.banner {
    padding: 2rem 0;

    @media screen and (min-width: 992px) {
        padding: 4rem 0;
    }

    .row {
        @media screen and (min-width: 992px) {
            flex-direction: row !important;
            align-items: center !important;
            gap: 0 !important;
        }

        #link {
            @media screen and (min-width: 992px) {
                justify-content: end !important;
            }
        }
    }
}
</style>