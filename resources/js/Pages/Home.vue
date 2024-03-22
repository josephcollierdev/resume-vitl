<script setup>
import { Head, Link } from '@inertiajs/vue3';
import Skills from '@/Components/Skills.vue';
</script>

<template>
    <div class="min-h-screen h-full w-full bg-azure-500">

        <div class="flex flex-col lg:flex-row text-center bg-azure-700 lg:py-12 sticky top-0">
            <div class="w-full pt-6 lg:py-0 lg:w-1/3 text-4xl">JOSEPH COLLIER</div>
            <div class="flex flex-col py-6 lg:py-0  lg:flex-row w-full lg:w-2/3 m-auto text-center justify-evenly text-xl">
                <div>ABOUT ME</div>
                <div>RESUME</div>
                <div>SKILLS</div>
                <div>CONTACT</div>
                <div>GITHUB</div>
            </div>
        </div>

        <div class="flex text-center h-5/6 p-12">
            <div class="w-1/3">Left</div>
            <div class="w-2/3">Right</div>
        </div>

        <div>
            <div class="w-full text-center text-4xl">ABOUT ME</div>
            <div class="flex text-center h-5/6 p-12">
                <div class="w-2/3">Left</div>
                <div class="w-1/3">Resume</div>
            </div>
        </div>

        <div>
            <div class="w-full text-center text-4xl">RESUME</div>
            <div class="flex text-center h-5/6 p-12">
                <div class="w-1/3">Left</div>
                <div class="w-2/3">Resume</div>
            </div>
        </div>

        <Skills />

        <div>
            <div class="w-full text-center text-4xl">CONTACT</div>
            <div class="flex text-center h-5/6 p-12">
                <div class="w-full">FORM</div>
            </div>
        </div>

        <div class="bg-azure-700">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
        </div>
    </div>
</template>
