<script>
export default {
    name: 'card',
    props: {
        card: Object
    }
}
</script>

<template>
    <div :id="card.type" class="card">

        <!-- Img -->
        <div id="img" class="img-container">
            <img :src="'/img/' + card.img" alt="">
        </div>

        <!-- Buttons on the img -->
        <div v-if="card.buttons" class="buttons">
            <div class="btn img-button">
                <a href="">
                    <i class="fa-regular fa-image"></i></a>
            </div>
            <div class="btn play-button">
                <a href="">
                    <i class="fa-solid fa-play"></i>
                </a>
            </div>
        </div>

        <!-- Texts -->
        <div class="container text-container">
            <div id="tag">
                <p v-if="card.tag" :class="'bg-' + card.tag.bgColor">{{ card.tag.text }}</p>
            </div>

            <!-- Podcast -->
            <div v-if="card.type === 'podcast'" id="podcast">
                <div class="img-container">
                    <img src="/img/items/podcast.png" alt="">
                </div>
            </div>

            <!-- Title -->
            <a id="title" href="">
                <h4>{{ card.title }}</h4>
            </a>
            <div id="author">
                <div class="img-container">
                    <img :src="'/img/authors/' + card.authorImg" alt="">
                </div>
                <div class="text-container">
                    <p class="author-name">Di {{ card.author }}</p>
                    <p class="date"> {{ card.date }}</p>
                    <a href=""><i class="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
        </div>

    </div>
</template>

<style lang="scss" scoped>
@import "/src/assets/scss/partials/variables";

// CARD
.card {
    border-width: 0;
    border-radius: 0;
    border-bottom: solid 1px $black;

    width: 100%;
    height: 100%;

    // IMG
    .img-container {
        width: 100%;
        height: 100%;

        position: relative;

        img {
            filter: brightness(50%);
        }
    }

    // TEXT
    .text-container {
        position: absolute;
        bottom: 0;
        left: 0;
        padding: 1rem;

        width: 100%;

        color: $white;


        @media screen and (min-width: 992px) {
            padding: 2rem 2.5rem;
        }

        #title {
            color: $white;

            &:hover {
                h4 {
                    font-size: 1.6rem;
                    transition: font-size 0.2s ease-in-out;
                }
            }
        }

        #tag p {
            color: black;
            font-size: 0.6rem;
            text-transform: uppercase;
            font-weight: 600;
            border: 2px solid black;
            box-shadow: -3px 3px 0 black;
            border-radius: 10%;

            padding: 0.2rem 1rem;
            display: inline-block;
        }

        #podcast {
            margin-bottom: 1rem;

            .img-container {

                img {
                    filter: brightness(100%)
                }
            }
        }

        #author {
            display: flex;
            align-items: center;
            gap: 5px;

            @media screen and (min-width: 992px) {
                flex-direction: column;
                align-items: start;
            }

            // AUTHOR IMG
            .img-container {
                width: 40px;
                height: 40px;

                img {
                    border-radius: 50%;

                }

                @media screen and (min-width: 992px) {
                    width: 50px;
                    height: 50px;
                }
            }

            // AUTHOR TEXT
            .text-container {
                position: static;
                font-weight: 300;

                @media screen and (min-width: 992px) {
                    padding: 0;
                }

                &>*:not(:last-child) {
                    margin: 0.6rem 0;
                }

                p {
                    margin-bottom: 0;
                }

                .author-name {
                    font-size: 0.8rem;
                }

                .date {
                    font-size: 0.8rem;
                }

                i.fa-arrow-right {
                    color: $white;
                    font-size: 1.2rem;

                    &:hover {
                        font-size: 1.5rem;
                        transition: font-size 0.2s ease-in-out;
                    }

                    @media screen and (min-width: 992px) {
                        display: block;
                    }
                }

            }
        }
    }

}

// CARD with Video
#video {
    .img-container {
        width: 100%;
        height: 100%;
        padding: 1rem;

        @media screen and (min-width: 992px) {
            padding: 0;
            width: 100%;
        }
    }

    .text-container {
        position: static;
        bottom: 0;
        left: 0;
        padding: 1rem;

        color: $black;

        @media screen and (min-width: 992px) {
            position: absolute;
            padding: 3rem;

            width: 100%;
            color: $white;
        }
    }

    .buttons {
        @media screen and (min-width: 992px) {
            display: none;
        }

        .btn {
            border: 1px solid black;
            box-shadow: -1px 1px 0 black;
            background-color: $white;
        }

        .img-button {
            padding: 1rem 1.2rem;
            position: absolute;
            top: 7rem;
            right: 1rem;

            .fa-image {
                font-size: 1.5rem;
            }
        }

        .play-button {
            position: absolute;
            top: 12.1rem;
            right: 1rem;
            border-radius: 0;
        }
    }
}
</style>