<template>
    <footer
        class="
            bottom-0
            left-0
            right-0
            p-3
            bg-gray-200
            dark:bg-custom-titanium
            fixed
        "
    >
        <div class="mx-auto container">
            <div class="flex justify-between items-center">
                <div>
                    Copyright © {{ year }} PaulGG Enterprises. All rights
                    reserved.
                </div>
                <!-- <div>Address</div> -->
                <div>
                    
                    <div><fa-icon icon="building" /> PaulGG Enterprises</div>
                    <div>914 East Broadway Road #1078</div>
                    <div>Tempe AZ 85282</div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script lang="ts">
import { DefineComponent, defineComponent } from "vue"
import {
    FontAwesomeIcon,
    FontAwesomeIconProps,
} from "@fortawesome/vue-fontawesome"
export default defineComponent({
    components: {
        "fa-icon":
            FontAwesomeIcon as unknown as DefineComponent<FontAwesomeIconProps>,
    },
})
</script>

<script setup lang="ts">
import { computed } from "vue"
import dayjs from "dayjs"
const year = computed(() => dayjs().format("YYYY"))
</script>
