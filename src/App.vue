<template>
    <div :class="{ dark: theme === 'dark' }" class="font-body">
        <div
            id="app"
            class="
                relative
                dark:bg-custom-dark-theme dark:text-white
                min-100
                pb-16
            "
        >
            <navbar class="sticky top-0 shadow-lg">
                <template #name>
                    <div>
                        <div class="pr-4">PaulGG Enterprises</div>
                    </div>
                </template>
                <template #links>
                    <navbar-link link="/">Home</navbar-link>
                </template>
                <template #right>
                    <Button circular @click="changeTheme()">
                        <fa-icon v-if="theme === 'dark'" icon="moon" />
                        <fa-icon v-else icon="sun" />
                    </Button>
                </template>
            </navbar>
            <feedback />
            <router-view />
            <Footer />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, computed, DefineComponent } from "vue"
import store from "/@/store/index"
import Navbar from "/@/components/page/Navbar.vue"
import NavbarLink from "/@/components/page/NavbarLink.vue"
import Footer from "/@/components/page/Footer.vue"
import Button from "/@/components/inputs/Button.vue"
import Feedback from "/@/components/view/Feedback.vue"
import {
    FontAwesomeIcon,
    FontAwesomeIconProps,
} from "@fortawesome/vue-fontawesome"
import Typewriter from "./components/view/Typewriter.vue"
import dayjs from "dayjs"
export default defineComponent({
    name: "Home",
    components: {
        Navbar,
        NavbarLink,
        Footer,
        Button,
        FontAwesomeIcon,
        Feedback,
        Typewriter,
        "fa-icon":
            FontAwesomeIcon as unknown as DefineComponent<FontAwesomeIconProps>,
    },
    setup() {
        const changeTheme = () => store.commit("toggleTheme")
        const theme = computed(() => store.state.theme)
        return {
            changeTheme,
            theme,
        }
    },
})
</script>

<style lang="sass">
.min-100
    min-height: 100vh
@import url('https://fonts.googleapis.com/css2?family=Fira+Code&display=swap')
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&display=swap')
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Serif:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap')
</style>
