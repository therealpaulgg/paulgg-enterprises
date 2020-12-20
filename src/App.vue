<template>
    <div :class="{ dark: theme === 'dark' }" class="font-body">
        <div
            id="app"
            class="relative dark:bg-custom-dark-theme dark:text-white min-100 pb-16"
        >
            <navbar class="sticky top-0 shadow-lg">
                <template #name>
                    <div>
                        <div class="pr-4">Paul Gellai Portfolio</div>
                        <div class="font-code text-base">
                            <typewriter
                                :words="['Hack', 'The', 'Planet', '🌎']"
                                :next-word-interval="100"
                            />
                        </div>
                    </div>
                </template>
                <template #links>
                    <navbar-link link="/">Home</navbar-link>
                    <navbar-link link="/portfolio">Portfolio</navbar-link>
                    <navbar-link link="/skills">Skills</navbar-link>
                    <navbar-link href="https://blog.paulgellai.dev"
                        >Blog</navbar-link
                    >
                </template>
                <template #right>
                    <Button circular @click="changeTheme()">
                        <font-awesome-icon
                            v-if="theme === 'dark'"
                            icon="moon"
                        />
                        <font-awesome-icon v-else icon="sun" />
                    </Button>
                </template>
            </navbar>
            <feedback />
            <router-view />
            <footer
                class="absolute bottom-0 left-0 right-0 text-center p-3 bg-gray-200 dark:bg-custom-titanium"
            >
                <div class="mx-auto container">
                    Copyright © {{ year }} Paul Gellai. All rights reserved.
                </div>
            </footer>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue"
import store from "@/store/index"
import Navbar from "@/components/page/Navbar.vue"
import NavbarLink from "@/components/page/NavbarLink.vue"
import Button from "@/components/inputs/Button.vue"
import Feedback from "@/components/view/Feedback.vue"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import Typewriter from "./components/view/Typewriter.vue"
import dayjs from "dayjs"
export default defineComponent({
    name: "Home",
    components: {
        Navbar,
        NavbarLink,
        Button,
        FontAwesomeIcon,
        Feedback,
        Typewriter,
    },
    setup() {
        const changeTheme = () => store.commit("toggleTheme")
        const theme = computed(() => store.state.theme)
        const year = computed(() => dayjs().format("YYYY"))
        return {
            changeTheme,
            theme,
            year,
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
