<template>
    <div class="home container mx-auto px-4 pt-4">
        <p v-for="i of [...range(1, 100)]" :key="i">lots of content</p>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
export default defineComponent({
    setup() {
        function* range(start: number, end: number) {
            for (let i = start; i <= end; i++) {
                yield i
            }
        }
        return {
            range,
        }
    },
})
</script>
