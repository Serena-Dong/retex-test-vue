<script>
export default {
    name: 'Quote',
    props: {
        quote: Object
    }
}
</script>

<template>
    <div class="quote" :class="'bg-' + quote.bgColor">
        <div class="container">
            <div class="row align-items-center">

                <!-- Quotation Mark -->
                <div class=" col-2">
                    <p class="quotation-mark">""</p>
                </div>
                <!-- Text -->
                <div class="col-10 text-container">
                    <h1><b>{{ quote.text }}</b></h1>
                    <h6><i>[{{ quote.credits }}]</i></h6>
                </div>

            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "./../../assets/scss/partials/variables";

.quote {
    padding: 2rem 0;

    @media screen and (min-width: 992px) {
        background-image: url("img/bg-img/bg-quote.png");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }

    .row {
        justify-content: start;
    }

    .quotation-mark {
        font-size: 8rem;
        text-align: end;

        color: rgba(0, 0, 0, 0.185);
    }

    .text-container {
        @media screen and (min-width: 992px) {
            color: $white;
        }
    }
}
</style>