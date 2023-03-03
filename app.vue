<template>
    <div class="h-screen flex flex-col p-16">
        <h1 class="text-6xl text-primary mx-auto">Pathbuilder</h1>
        <div class="text-primary italic mx-auto m-8">Générateur de personnage pour Pathfinder 2.</div>
        <div class="w-1/2 flex justify-between mx-auto">
            <CustomSelector prompt="Choisissez une classe" :options="classes" :objectKey="'name'" v-model="selectedClass" />
            <CustomSelector prompt="Choisissez un héritage" :options="ancestries" :objectKey="'name'" v-model="selectedAncestry" />
        </div>
        <!-- BEGIN A refaire plus intelligement -->
        <div class="flex w-1/2 justify-between mx-auto my-12">
            <div class="flex flex-col space-y-2 text-black font-bold font-mono">
                <span>FOR</span>
                <span>DEX</span>
                <span>CON</span>
                <span>INT</span>
                <span>SAG</span>
                <span>CHA</span>
            </div>
            <div class="flex flex-col space-y-2" v-for="index in 4">
                <input v-for="index2 in 6" type="radio" :name="'radio-' + index" class="radio radio-primary border-primary" />
            </div>
        </div>
        <!-- END A refaire plus intelligement -->
        <div class="p-4 flex items-center justify-center text-black flex-col">
            <div>Resultat :</div>
            {{ player }}
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";

// From the server
const { data: classes } = await useFetch("/api/getDataSet?dataSetName=classes");
const { data: ancestries } = await useFetch("/api/getDataSet?dataSetName=ancestries");

// One for each picker
const selectedClass = ref();
const selectedAncestry = ref();

// player object
const player = computed(() => {
    if (!selectedClass.value) return {};
    if (!selectedAncestry.value) return {};
    return {
        selectedClasse: selectedClass.value.name,
        selectedAncestry: selectedAncestry.value.name,
    };
});
</script>

<style>
body {
    background-image: url("./assets/background.jpg");
    background-repeat: repeat;
}
</style>
