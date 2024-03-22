<script setup>
import { Head, Link } from '@inertiajs/vue3';
import Skills from '@/Components/Skills.vue';
</script>

<template>
    <div class="min-h-screen h-full w-full bg-azure-500">

        <div class="z-10 flex flex-col lg:flex-row text-center bg-azure-700 lg:py-12 sticky top-0">
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
            <div class="flex flex-wrap text-center h-5/6 z-0 lg:pt-6">
                <div class="w-full lg:w-1/3 hidden lg:block">Bio</div>
                <div class="w-full lg:w-2/3 h-[24rem] lg:h-[34rem] bg-[url('/storage/images/me_01.jpeg')] bg-contain lg:bg-cover bg-no-repeat bg-center opacity-75 blur-[2px] sepia-[.25] hover:blur-none saturate-50 hover:saturate-100 transition-all duration-500">
                    &nbsp;
                </div>

                <div class="w-full lg:w-1/3 block lg:hidden">Bio</div>
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
