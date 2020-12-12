<template>
    <button
        :type="type"
        :disabled="disabled"
        :class="
            `${
                active
                    ? 'bg-custom-light-pink text-black'
                    : 'bg-custom-titanium dark:bg-gray-300'
            } text-white dark:text-black shadow text-sm transition duration-200 m-1 btn ${
                uppercase ? 'uppercase' : ''
            } py-2 px-4 ${
                circular
                    ? 'w-12 h-12 rounded-full flex items-center justify-center'
                    : 'rounded '
            } ${
                disabled
                    ? 'opacity-50 cursor-not-allowed '
                    : 'hover:bg-custom-light-pink dark:hover:text-white dark:hover:bg-custom-light-pink hover:text-white '
            }`
        "
    >
        <slot />
    </button>
</template>

<script lang="ts">
import { defineComponent } from "vue"
export default defineComponent({
    props: {
        disabled: Boolean,
        active: Boolean,
        circular: Boolean,
        uppercase: {
            type: Boolean,
            default: true,
        },
        type: {
            type: String,
            default: "button",
        },
    },
})
</script>
