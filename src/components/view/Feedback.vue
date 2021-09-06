<template>
    <div style="position: relative; z-index: 9999">
        <div
            class="fixed w-5/12"
            style="top: 0px; left: 50%; transform: translate(-50%, 0%)"
        >
            <transition-group
                enter-active-class="transition-opacity duration-300"
                enter-from-class="opacity-0"
                enter-to-class="opacity-100"
                leave-active-class="transition-opacity duration-200"
                leave-from-class="opacity-100"
                leave-to-class="opacity-0"
            >
                <template
                    v-for="(feedback, i) in feedbacks"
                    :key="'feedback' + i"
                >
                    <div :class="feedback.variant" v-show="feedback.active">
                        <div class="shadow w-100 feedback rounded-md m-4">
                            <div class="flex justify-between p-4">
                                <div>
                                    <fa-icon
                                        class="pb-1"
                                        :icon="
                                            getRelevantIcon(feedback.variant)
                                        "
                                        scale="1.35"
                                    />
                                    {{ feedback.text }}
                                </div>
                                <div class="block">
                                    <button
                                        @click="feedback.active = false"
                                        class="appearance-none"
                                    >
                                        <fa-icon icon="times" scale="1" />
                                    </button>
                                </div>
                            </div>

                            <progress
                                v-if="feedback.amount !== -1"
                                :value="feedback.amount"
                                class="block w-full progress-bar"
                            />
                        </div>
                    </div>
                </template>
            </transition-group>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, computed, DefineComponent } from "vue"
import {
    FontAwesomeIcon,
    FontAwesomeIconProps,
} from "@fortawesome/vue-fontawesome"
import store from "../../store/index"

export default defineComponent({
    name: "Home",
    components: {
        "fa-icon":
            FontAwesomeIcon as unknown as DefineComponent<FontAwesomeIconProps>,
    },
    setup() {
        const feedbacks = computed(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            () => (store.state as any).feedbackStore.feedback
        )
        function getRelevantIcon(variant: string) {
            switch (variant) {
                case "error":
                    return "times-circle"
                case "success":
                    return "check-circle"
                case "warning":
                    return "exclamation-triangle"
                case "info":
                    return "info-circle"
                default:
                    return "question-circle"
            }
        }
        return {
            getRelevantIcon,
            feedbacks,
        }
    },
})
</script>

<style lang="scss" scoped>
.progress-bar {
    height: 4px;
}

.feedback {
    background-color: #cccccc;
    color: black;
}

.progress-bar {
    background-color: #cccccc;
}

.progress-bar::-webkit-progress-bar {
    background-color: #cccccc;
}
.progress-bar::-webkit-progress-value {
    background-color: black;
}

.progress-bar::-moz-progress-bar {
    background-color: black;
}

.success {
    .feedback {
        background-color: #6dffc8;
        color: #18562e;
    }

    .progress-bar {
        background-color: #6dffc8;
    }

    .progress-bar::-webkit-progress-bar {
        background-color: #6dffc8;
    }
    .progress-bar::-webkit-progress-value {
        background-color: #18562e;
    }

    .progress-bar::-moz-progress-bar {
        background-color: #18562e;
    }
}

.error {
    .feedback {
        background-color: #ff8888;
        color: #8e1f1f;
    }

    .progress-bar {
        background-color: #ff8888;
    }

    .progress-bar::-webkit-progress-bar {
        background-color: #ff8888;
    }
    .progress-bar::-webkit-progress-value {
        background-color: #8e1f1f;
    }

    .progress-bar::-moz-progress-bar {
        background-color: #8e1f1f;
    }
}

.warning {
    .feedback {
        background-color: #ffed97;
        color: #7b7311;
    }

    .progress-bar {
        background-color: #ffed97;
    }

    .progress-bar::-webkit-progress-bar {
        background-color: #ffed97;
    }
    .progress-bar::-webkit-progress-value {
        background-color: #7b7311;
    }

    .progress-bar::-moz-progress-bar {
        background-color: #7b7311;
    }
}

.info {
    .feedback {
        background-color: #97ddff;
        color: #334f5d;
    }

    .progress-bar {
        background-color: #97ddff;
    }

    .progress-bar::-webkit-progress-bar {
        background-color: #97ddff;
    }
    .progress-bar::-webkit-progress-value {
        background-color: #334f5d;
    }

    .progress-bar::-moz-progress-bar {
        background-color: #334f5d;
    }
}
</style>
