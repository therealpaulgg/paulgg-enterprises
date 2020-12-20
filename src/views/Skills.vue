<template>
    <div class="home container mx-auto px-4 pt-4">
        <div>This is a web-based version of my resume.</div>
        <div class="font-bold text-2xl">Contact</div>
        <p>
            To help prevent <em>most</em> pesky bots from spamming my contact
            information, I have masked my emails so that they will display if
            you click on them.
        </p>
        <Button @click="requested = true">Show Emails</Button>
        <div v-if="requested">
            <ul>
                <li v-for="(email, i) of emails" :key="'email' + i">
                    <a
                        class="hover:text-custom-light-pink"
                        :href="`mailto:${b64decode(email)}`"
                        >{{ b64decode(email) }}</a
                    >
                </li>
            </ul>
        </div>

        <hr class="mt-6 mb-2" />

        <div v-if="content">
            <div v-html="content" />
        </div>
        <div v-else class="text-center">
            <loading-circle />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, computed, onMounted, ref } from "vue"
import Axios from "axios"
import store from "@/store"
import marked from "marked"
import DOMPurify from "dompurify"
import LoadingCircle from "@/components/page/LoadingCircle.vue"
import Button from "@/components/inputs/Button.vue"
export default defineComponent({
    components: {
        Button,
        LoadingCircle,
    },
    setup() {
        const requested = ref(false)
        const emails = ["cGF1bEBwYXVsLnN5c3RlbXM=", "YWdlbGxhaUBhc3UuZWR1"]
        const markdown = ref("")
        const content = computed(() => {
            const unsanitized = marked(markdown.value)
            return DOMPurify.sanitize(unsanitized)
        })
        onMounted(() => {
            Axios.get("https://static.paulgellai.dev/personal/resume.md")
                .then((res) => (markdown.value = res.data))
                .catch((err) => store.dispatch("handleError", err))
        })
        function b64decode(str: string) {
            return atob(str)
        }
        return {
            b64decode,
            content,
            emails,
            requested,
        }
    },
})
</script>

<style scoped>
h1 + ul {
    text-align: center;
    margin: 0;
    padding: 0;
}
h1 + ul > li {
    display: inline;
    white-space: pre;
    list-style-type: none;
}
</style>
