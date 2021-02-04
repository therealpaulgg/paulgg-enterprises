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
                src="@/assets/img/paul-headshot.jpg"
                class="mx-auto mb-4 w-auto h-64 rounded-full object-contain "
                alt="paul-headshot"
            />
            <div class="text-center">
                <a
                    class="mx-2 hover:text-custom-light-pink"
                    href="https://github.com/therealpaulgg"
                >
                    <font-awesome-icon
                        :icon="{ prefix: 'fab', iconName: 'github' }"
                        size="2x"
                    />
                </a>

                <a
                    class="mx-2 hover:text-custom-light-pink"
                    href="https://www.linkedin.com/in/paul-gellai/"
                >
                    <font-awesome-icon
                        :icon="{ prefix: 'fab', iconName: 'linkedin' }"
                        size="2x"
                    />
                </a>

                <a
                    class="mx-2 hover:text-custom-light-pink"
                    href="mailto:paul@paul.systems"
                >
                    <font-awesome-icon icon="envelope" size="2x" />
                </a>
            </div>
        </div>
        <hr class="my-4" />
        <div v-if="content">
            <div v-html="content" />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, computed } from "vue"
import Typewriter from "@/components/view/Typewriter.vue"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import Axios from "axios"
import store from "@/store"
import DOMPurify from "dompurify"
import marked from "marked"

export default defineComponent({
    name: "Home",
    components: {
        FontAwesomeIcon,
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
