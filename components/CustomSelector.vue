<template>
    <div class="flex flex-col space-y-4">
        <div class="text-black font-mono font-bold">
            {{ prompt }}
        </div>
        <select class="select bg-transparent border-2 border-primary rounded-lg text-black" v-model="value">
            <option :value="option" v-for="option in options">{{ translate(option[objectKey]) }}</option>
        </select>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { translate } from "../translate";
// Allow use of v-model in the parent component
const emit = defineEmits(["update:modelValue"]);
const props = defineProps(["modelValue", "options", "prompt", "objectKey"]);

// Returned value by the component
const value = computed({
    get() {
        return props.modelValue;
    },
    set(value) {
        emit("update:modelValue", value);
    },
});
</script>
