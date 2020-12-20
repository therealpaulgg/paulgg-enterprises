<template>
    <router-link
        v-if="link"
        class="text-base mr-4 block px-2 py-1 hover:text-white"
        :class="$route.path === link ? 'text-white' : 'text-gray-200'"
        :to="link"
    >
        <slot />
    </router-link>
    <a
        v-else
        :href="href"
        class="text-base text-gray-200 mr-4 block px-2 py-1 hover:text-white"
        ><slot
    /></a>
</template>

<script lang="ts">
import { defineComponent } from "vue"
export default defineComponent({
    props: {
        link: String,
        href: String,
    },
})
</script>
