<script>
export default {
    name: 'card',
    props: {
        card: Object || Array
    }
}
</script>

<template>
    <div :id="card.type" class="card" :class="'font-' + card.fontColor">

        <!-- Img -->
        <div id="bg-img" class="img-container" :class="card.showBg ? 'isShowed' : ''">
            <img v-if="card.bgImg" :src="'/img/bg-img/' + card.bgImg" alt="">
            <div class="bg-color" v-if="card.bgColor" :class="'bg-' + card.bgColor"></div>

            <!-- Buttons on the img -->
            <div v-if="card.buttons" class="buttons">
                <div v-if="card.buttons.img" class="btn img-button">
                    <a href="">
                        <i class="fa-regular fa-image"></i></a>
                </div>
                <div v-if="card.buttons.video" class="btn play-button">
                    <a href="">
                        <i class="fa-solid fa-play"></i>
                    </a>
                </div>
            </div>
        </div>


        <!-- Texts -->
        <div class="container text-container">

            <!-- TAG -->
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

            <!-- Author -->
            <div id="author">
                <div class="img-container">
                    <img :src="'/img/authors/' + card.author.img" alt="">
                </div>
                <div class=" text-container">
                    <p class="author-name">Di {{ card.author.name }}</p>
                    <p class="date"> {{ card.date }}</p>
                    <a href=""><i class="fa-solid fa-arrow-right arrow"></i></a>
                </div>
            </div>
        </div>

    </div>
</template>

<style lang="scss">
@import "/src/assets/scss/partials/variables";

// CARD
.card {
    border-width: 0;
    border-radius: 0;
    border-bottom: solid 1px $black;

    width: 100%;
    height: 100%;

    @media screen and (min-width: 992px) {
        border-bottom: none;

        border: 1px solid white;
    }

    // IMG
    #bg-img {
        width: 100%;
        height: 100%;
        padding: 1rem;

        display: none;
        position: relative;


        @media screen and (min-width: 992px) {
            display: block;
            padding: 0;
            width: 100%;

            img {
                filter: brightness(50%);
            }
        }
    }

    // TEXTS
    .text-container {
        position: static;

        padding: 1rem;

        @media screen and (min-width: 992px) {
            position: absolute;
            top: 0;
            left: 0;
            padding: 2rem 2.5rem;

            color: $white;

        }

        #title {
            color: $black;

            @media screen and (min-width: 992px) {
                padding: 1rem;

                color: $white;

            }

            border: none;


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
            margin: 1rem 0;
            border: 1px lightgrey solid;
            border-radius: 2%;
            padding: 0.3rem;

            cursor: pointer;

            @media screen and (min-width: 992px) {
                margin: 0;
                margin-bottom: 1rem;
                border: none;
                border-radius: 0;
                padding: 0;
            }

            .img-container img {
                filter: brightness(100%);
                border-radius: 2%;

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
                    color: $white;
                    padding: 0;

                    &>*:not(:last-child) {
                        margin: 0.6rem 0;
                    }
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

                i.arrow {
                    display: none;

                    @media screen and (min-width: 992px) {
                        display: block;
                        color: $white;
                        font-size: 1.2rem;

                        &:hover {
                            font-size: 1.5rem;
                            transition: font-size 0.2s ease-in-out;
                        }
                    }
                }

            }
        }
    }

}



// # CONDITIONALS

// IMG is Showed

.card {
    .isShowed {
        display: block !important;
        padding: 1rem;

        @media screen and (min-width: 992px) {
            padding: 0;
        }
    }
}

.font-black {

    .text-container,
    #title,
    i.arrow {
        color: $black !important;

        @media screen and (min-width: 992px) {
            color: $black !important;
        }
    }
}

// # CARDS

// Intro Card
#intro {
    #bg-img {
        width: 100%;
        height: 100%;
        padding: 0;

        display: block;
        position: relative;
    }

    .text-container {
        position: absolute;
        top: unset;
        bottom: 0;

        #title,
        #author {
            color: $white !important;
        }
    }

    #author i.arrow {
        display: none;
    }
}


// Video Card
#video {
    #bg-img {
        display: block;
        padding: 1rem;

        height: 250px;


        @media screen and (min-width: 992px) {
            padding: 0;
            height: 100%;
        }
    }

    .text-container {
        padding: 1rem;

        @media screen and (min-width: 992px) {
            position: absolute;
            top: unset;
            bottom: 0 !important;
            padding: 3rem;

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
            bottom: 5rem;
            right: 1rem;

            .fa-image {
                font-size: 1.5rem;
            }
        }

        .play-button {
            position: absolute;
            bottom: 1.1rem;
            right: 1.1rem;
            border-radius: 0;
        }
    }
}
</style>