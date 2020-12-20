<template>
    <nav class="bg-custom-pink p-3">
        <div class="mx-auto container sm:px-4">
            <div class="relative flex items-center justify-between h-16">
                <div
                    class="absolute inset-y-0 left-0 flex items-center sm:hidden"
                >
                    <!-- Mobile menu button-->
                    <button
                        @click="collapsed = !collapsed"
                        class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        aria-expanded="false"
                    >
                        <font-awesome-icon v-if="collapsed" icon="bars" />
                        <font-awesome-icon v-else icon="times" />
                    </button>
                </div>
                <div
                    class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"
                >
                    <div class="flex-shrink-0 flex items-center">
                        <span
                            class="text-white font-semibold text-xl tracking-tight"
                            ><slot name="name"
                        /></span>
                    </div>
                    <div class="hidden sm:block sm:ml-2">
                        <div class="flex">
                            <slot name="links" />
                            <slot />
                        </div>
                    </div>
                </div>
                <div
                    class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
                >
                    <slot name="right" />
                </div>
            </div>
        </div>

        <!--
    Mobile menu, toggle classes based on menu state.

    Menu open: "block", Menu closed: "hidden"
  -->
        <div :class="{ hidden: collapsed }" class="sm:hidden">
            <div class="px-2 pt-2 pb-3 space-y-1"><slot name="links" /></div>
        </div>
    </nav>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
export default defineComponent({
    components: {
        FontAwesomeIcon,
    },
    setup() {
        const collapsed = ref(true)
        return {
            collapsed,
        }
    },
})
</script>
