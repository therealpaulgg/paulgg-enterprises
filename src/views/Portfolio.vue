<template>
    <div class="home container mx-auto px-4 pt-4">
        <div class="text-6xl mb-2">
            <typewriter
                :words="['Portfolio']"
                :speed="70"
                :nextWordInterval="0"
            />
        </div>
        <div v-if="content">
            <div v-html="content" />
        </div>
        <div v-else class="text-center">
            <loading-circle />
        </div>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref } from "vue"
import Typewriter from "/@/components/view/Typewriter.vue"
import DOMPurify from "dompurify"
import marked from "marked"
import Axios from "axios"
import store from "/@/store"

export default defineComponent({
    components: {
        Typewriter,
    },
    setup() {
        const markdown = ref("")
        const content = computed(() => {
            const unsanitized = marked(markdown.value)
            return DOMPurify.sanitize(unsanitized)
        })

        onMounted(() => {
            Axios.get("https://static.paulgellai.dev/personal/portfolio.md")
                .then((res) => (markdown.value = res.data))
                .catch((err) => store.dispatch("handleError", err))
        })

        return {
            content,
        }
    },
})
</script>
