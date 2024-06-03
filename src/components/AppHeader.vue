<script>
import { headerData } from '../data/data';

export default {
    name: 'AppHeader',
    components: {},
    data() {
        return {
            data: headerData,
            isClicked: false,
            activeTheme: 'Tutti i temi',
            activeButton: 'Img',
            isDesktop: window.innerWidth >= 992,
            isOpen: false,
        }
    },
    methods: {
        setActiveTheme(themeName) {
            this.activeTheme = themeName;
        },
        setActiveButton(buttonName) {
            this.activeButton = this.activeButton === buttonName ? '' : buttonName;
        },
        toggleAccordion() {
            if (!this.isDesktop) {
                this.isOpen = !this.isOpen;
            }
        },
        handleResize() {
            this.isDesktop = window.innerWidth >= 992;
            if (this.isDesktop) {
                this.isOpen = true;
            } else {
                this.isOpen = false;
            }
        }
    },
    mounted() {
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.handleResize);
    }
}
</script>

<template>
    <header>

        <!-- Logo -->
        <div class="logo">
            <!-- <img src="" alt=""> -->
        </div>

        <!-- Header -->
        <div class="header-top">
            <div class="container">
                <div class="row justify-content-between">

                    <!-- Links -->
                    <div class="col col-12 col-lg-10 d-flex justify-content-start">
                        <div class="col col-6 col-lg-1 text-center">
                            <a href="">Contribuisci</a>
                        </div>
                        <div class="col col-6 col-lg-1">
                            <a href="">Abbonati</a>
                        </div>
                    </div>

                    <!-- LOGIN -->
                    <div id="login" class="col col-lg-1">
                        <a href=""><i class="fa-regular fa-user mx-1"></i> Accedi</a>
                    </div>

                </div>
            </div>

        </div>
        <div class="header-bottom">
            <div class="container">
                <div class="row">

                    <!-- Menù -->
                    <div class="col col-2 col-lg-1">
                        <p class=""><i class="fa-solid fa-bars"></i></p>
                    </div>
                    <div class="col-8 col-lg-10"></div>
                    <!-- Search Bar -->
                    <div class="col col-2 col-lg-1">
                        <p><i class="fa-solid fa-magnifying-glass"></i></p>
                    </div>

                </div>
            </div>
        </div>

        <!-- Navbar -->
        <div id="navbar">
            <div class="container">
                <div class="row align-items-center">

                    <!-- Links -->
                    <div class="col-10">
                        <ul>
                            <li>
                                <a :class="{ 'active': activeTheme === 'Tutti i temi' }" class="mr-3 fw-semibold"
                                    href="" @click="setActiveTheme('Tutti i temi')">Tutti i temi</a>
                            </li>
                            <li v-for="theme in data.navbar.themes" :key="theme.name">
                                <a :class="{ 'active': activeTheme === theme.name }" class="ms-4 fw-semibold"
                                    :href="theme.path" @click="setActiveTheme(theme.name)">
                                    {{ theme.name }}
                                </a>
                            </li>
                        </ul>
                    </div>

                    <!-- Buttons -->
                    <div class="col-2 buttons text-end">
                        <span :class="{ 'active': activeButton === 'Text' }" @click="setActiveButton('Text')"
                            class="text">Aa</span>
                        <span :class="{ 'active': activeButton === 'Img' }" @click="setActiveButton('Img')"
                            class="img"><i class="fa-regular fa-image"></i></span>
                    </div>

                </div>
            </div>
        </div>

        <!-- Themes -->
        <div id="themes">
            <div class="container">
                <div class="row d-flex flex-column align-items-start">

                    <!-- Title -->
                    <div class="col col-lg-4 title flex justify-content-start gap-3">
                        <h1 class="m-0"><b>Tutti i temi</b></h1>
                        <span @click="toggleAccordion" v-if="!isDesktop">
                            <i :class="['fa-solid', 'fa-chevron-down', 'fs-2', 'text', { 'rotate': isOpen }]"></i>
                        </span>
                    </div>

                    <!-- Buttons -->
                    <transition name="accordion">
                        <div v-if="isOpen || isDesktop" class=" col col-lg-8 buttons flex flex-wrap
                            justify-content-start gap-2">
                            <div v-for="theme in data.navbar.themes" :key="theme.name" class="button"
                                :class="'bg-' + theme.bgColor">
                                <a :href="theme.path">{{ theme.name }}</a>
                            </div>
                        </div>
                    </transition>

                </div>
            </div>
        </div>
    </header>
</template>

<style scoped lang="scss">
@import "./../assets/scss/partials/variables";

header {
    position: sticky;
    top: 0;
    z-index: 99999;

    &>* {
        background-color: $white;
        border-bottom: 2px solid;
        min-height: 50px;

        display: flex;
        align-items: center;
        justify-content: center;

        .col {
            min-height: 50px;

            display: flex;
            align-items: center;
            justify-content: center;

            p {
                margin: 0;
            }
        }
    }

    .logo {
        @media screen and (min-width: 992px) {
            display: none;
        }

    }

    .header-top {
        .col .col {
            &:first-child {
                border-right: 2px solid;
            }

        }

        #login {
            display: none;
        }

        @media screen and (min-width: 992px) {
            .col .col {
                &:first-child {
                    border-right: none;
                }

                a {
                    font-size: 0.8rem;
                }
            }

            #login {
                display: flex;
            }
        }

    }

    .header-bottom {
        position: relative;

        .col {
            height: 50px;

            &:first-child {
                border-right: 2px solid;
            }

            &:last-child {
                border-left: 2px solid;
            }

            p {
                cursor: pointer;

                i {
                    color: $red;
                }
            }
        }
    }

    #navbar {

        @media screen and (max-width: 992px) {
            display: none;
        }

        .row {
            height: 70px;
        }

        ul {
            display: flex;
            justify-content: start;

            li a:hover {
                color: $black;
                border-bottom: 5px solid $red;
                padding-bottom: 22px;
            }

            li a.active {
                border-bottom: 5px solid $red;
                padding-bottom: 22px;
            }
        }

        .buttons {
            span {
                margin-right: 1rem;
                padding: 0.5rem;

                cursor: pointer;
            }

            span.active {
                border: 2px solid;
                border-radius: 0.4rem;
                box-shadow: -2px 2px 0 black;
            }
        }
    }

    #themes {
        min-height: 80px;
        padding: 1rem 0;
        background-color: $grey;

        @media screen and (min-width: 992px) {
            padding: 2rem;
        }

        .container .row {
            @media screen and (min-width: 992px) {
                flex-direction: row !important;
            }
        }

        .title {
            @media screen and (min-width: 992px) {
                justify-content: flex-start !important;

                .fa-chevron-down {
                    display: none;
                }
            }
        }

        .buttons {
            transition: max-height 0.01s ease-in-out;

            @media screen and (min-width: 992px) {
                justify-content: flex-end !important;
                max-height: none;
            }

            .button {
                color: black;
                text-transform: uppercase;
                font-size: 0.8rem;
                font-weight: 500;
                border: 1px solid black;
                box-shadow: -2px 2px 0 black;
                border-radius: 10%;
                padding: 0.5rem 1rem;

                &:hover {

                    filter: saturate(8);
                    transition: filter 0.2s ease-in-out;

                    a {
                        border: 0;
                    }
                }

                @media screen and (max-width: 992px) {
                    background-color: $white !important;
                }
            }
        }


        .rotate {
            transform: rotate(180deg);
            transition: transform 0.1s ease;
        }
    }

    .accordion-enter,
    .accordion-leave-to {
        max-height: 0;
    }


}
</style>
