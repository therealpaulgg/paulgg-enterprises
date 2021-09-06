<template>
    <div class="home container mx-auto px-4 pt-4">
        <div>
            <div class="text-center text-4xl mb-2">
                <typewriter
                    :words="['Welcome']"
                    :speed="50"
                    :nextWordInterval="0"
                />
            </div>
            <img
                src="/@/assets/img/paul-headshot.jpg"
                class="mx-auto mb-4 w-auto h-64 rounded-full object-contain"
                alt="paul-headshot"
            />
            <div class="text-center">
                <a
                    class="mx-2 hover:text-custom-light-pink"
                    href="https://github.com/therealpaulgg"
                >
                    <fa-icon
                        :icon="{ prefix: 'fab', iconName: 'github' }"
                        size="2x"
                    />
                </a>

                <a
                    class="mx-2 hover:text-custom-light-pink"
                    href="https://www.linkedin.com/in/paul-gellai/"
                >
                    <fa-icon
                        :icon="{ prefix: 'fab', iconName: 'linkedin' }"
                        size="2x"
                    />
                </a>
                <a
                    class="mx-2 hover:text-custom-light-pink"
                    href="mailto:paul@paul.systems"
                >
                    <fa-icon icon="envelope" size="2x" />
                </a>
                <a
                    class="mx-2 hover:text-custom-light-pink"
                    href="https://keybase.io/therealpaulgg"
                >
                    <fa-icon
                        :icon="{ prefix: 'fab', iconName: 'keybase' }"
                        size="2x"
                    />
                </a>
                <a
                    class="mx-2 hover:text-custom-light-pink"
                    href="https://keys.openpgp.org/vks/v1/by-fingerprint/AD240A0359379DD45AF9BAC82ED4A29D63852003"
                >
                    <fa-icon
                        :icon="{ prefix: 'fas', iconName: 'key' }"
                        size="2x"
                    />
                </a>
            </div>
        </div>
        <hr class="my-4" />
        <div v-if="content">
            <div v-html="content" />
        </div>
        <div v-else class="text-center">
            <loading-circle />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, computed, DefineComponent } from "vue"
import Typewriter from "/@/components/view/Typewriter.vue"
import LoadingCircle from "/@/components/page/LoadingCircle.vue"
import {
    FontAwesomeIcon,
    FontAwesomeIconProps,
} from "@fortawesome/vue-fontawesome"
import Axios from "axios"
import store from "/@/store"
import DOMPurify from "dompurify"
import marked from "marked"

export default defineComponent({
    name: "Home",
    components: {
        "fa-icon":
            FontAwesomeIcon as unknown as DefineComponent<FontAwesomeIconProps>,
        LoadingCircle,
        Typewriter,
    },
    setup() {
        const markdown = ref("")
        const content = computed(() => {
            const unsanitized = marked(markdown.value)
            return DOMPurify.sanitize(unsanitized)
        })

        onMounted(() => {
            Axios.get("https://static.paulgellai.dev/personal/about.md")
                .then((res) => (markdown.value = res.data))
                .catch((err) => store.dispatch("handleError", err))
        })

        return {
            content,
        }
    },
})
</script>
