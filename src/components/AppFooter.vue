<script>
import { footerData } from '../data/data';

export default {
    name: 'AppFooter',
    data() {
        return {
            data: footerData
        }
    },
}
</script>
<template>
    <footer>
        <div class="footer-links">
            <ul>
                <li v-for="link in data.links"><a :href="link.path">{{ link.name }}</a></li>
            </ul>
        </div>
        <div class="footer-signature">
            <span>{{ data.signature }}</span>
        </div>
    </footer>
</template>
<style scoped lang="scss">
@import "./../assets/scss/partials/variables";

footer {
    background-color: $grey;
    padding: 1rem;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 20px;

    @media screen and (min-width: 992px) {
        height: 100px;
        flex-direction: row;
        align-items: center;
    }

    .footer-links ul {
        display: flex;
        flex-direction: column;
        gap: 20px;

        li {
            font-weight: 600;
        }

        @media screen and (min-width: 992px) {
            flex-direction: row;

            li {
                font-weight: 400;
            }
        }
    }
}
</style>