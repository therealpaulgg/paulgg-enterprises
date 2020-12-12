<template>
    <span class="whitespace-pre">
        {{ displayText.join("") }}
        <span class="relative">
            <span
                v-if="!doneTyping && displayText.length > 0"
                class="absolute cursor"
                >▌</span
            >
        </span>
    </span>
</template>
<script>
export default {
    props: {
        speed: {
            type: Number,
            default: 100,
        },
        deleteSpeed: {
            type: Number,
            default: 30,
        },
        nextWordInterval: {
            type: Number,
            default: 500,
        },
        words: {
            type: Array,
            default: () => [],
        },
    },
    data() {
        return {
            displayText: [],
            currentWord: "",
            wordIdx: 0,
            timeoutSpeed: null,
            isWaitingNextWord: false,
            doneTyping: false,
        }
    },
    mounted() {
        this.start()
    },
    methods: {
        start() {
            if (this.words && this.words.length > 0) {
                this.currentWord = this.words[this.wordIdx].split("")
                this.timeoutSpeed = this.speed
                this.animate = setTimeout(this.type, this.timeoutSpeed)
            }
        },
        type() {
            // if typing...
            if (this.currentWord.length > 0) {
                this.displayText.push(this.currentWord.shift())
                // if done typing, wait for a while
            } else if (
                !this.isWaitingNextWord &&
                this.currentWord.length === 0 &&
                this.displayText.length ===
                    this.words
                        .slice(0, this.wordIdx + 1)
                        .map((a) => a.length)
                        .reduce((a, b) => a + b) +
                        this.words.slice(0, this.wordIdx).length
            ) {
                this.timeoutSpeed = this.nextWordInterval
                this.isWaitingNextWord = true
                // if done typing all words, stop
            } else if (
                this.currentWord.length === 0 &&
                this.displayText.length > 0 &&
                this.wordIdx === this.words.length - 1
            ) {
                this.doneTyping = true
                return
                // if done typing current word, wait and type next word
            } else if (
                this.currentWord.length === 0 &&
                this.displayText.length > 0
            ) {
                if (this.wordIdx < this.words.length - 1) {
                    this.wordIdx++
                }
                this.timeoutSpeed = this.speed
                this.isWaitingNextWord = false
                this.currentWord = this.words[this.wordIdx].split("")
                this.displayText.push(" ")
                this.displayText.push(this.currentWord.shift())
            }
            setTimeout(this.type, this.timeoutSpeed)
        },
    },
}
</script>
<style lang="scss" scoped>
@keyframes blink-animation {
    to {
        visibility: hidden;
    }
}
.cursor {
    display: inline-block;
    margin-left: -3px;
    animation: blink-animation 1s steps(2, start) infinite;
}
</style>
