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
        <div class="my-2">
            Hello! My name is Paul Gellai. My first name is Andrew, but I go by
            Paul (my middle name). I am a Master's Computer Science student at
            Arizona State University. I've always had a passion for tech since a
            young age. My interests include software development, cybersecurity,
            Linux, gaming, music, and computer hardware.
        </div>
        <div class="my-2">
            Currently I am a software engineering intern at L3Harris (full
            time). I also do freelance web development and IT. If you are
            interested you may contact me at my email.
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import Typewriter from "@/components/view/Typewriter.vue"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
// import Button from "@/components/inputs/Button.vue"

export default defineComponent({
    name: "Home",
    components: {
        FontAwesomeIcon,
        Typewriter,
        // Button,
    },
})
</script>
