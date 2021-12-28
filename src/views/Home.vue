<template>
    <div class="home container mx-auto px-4 pt-4">
        <div v-if="content">
            <div v-html="content" />
        </div>
        <div v-else class="text-center">
            <loading-circle />
        </div>
        <!-- <p v-for="(f, i) of new Array(100).fill(0)">{{i}}</p> -->
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
            Axios.get("https://static.paulgg.enterprises/about.md")
                .then((res) => (markdown.value = res.data))
                .catch((err) => store.dispatch("handleError", err))
        })

        return {
            content,
        }
    },
})
</script>
