<script setup>
import { Head, Link } from '@inertiajs/vue3';
import { onMounted } from 'vue';
import HeaderNav from '@/Components/HeaderNav.vue';
import About from '@/Components/About.vue';
import Resume from '@/Components/Resume.vue';
import Skills from '@/Components/Skills.vue';
import Contact from '@/Components/Contact.vue';

defineProps({
    biographyText: String,
    required: true
});

// onMounted(() => {
//     // Your event listener code here
// });

const shrinkHeader = (e) => {
    const header = document.querySelector('#header-nav');
    const resumeComponent = document.querySelector('#section-resume');
    const skillsComponent = document.querySelector('#section-skills');
    const contactComponent = document.querySelector('#section-contact');
    const headerHeight = header.clientHeight;

    const sectionComponents = [
        resumeComponent,
        skillsComponent,
        contactComponent
    ];

    if (window.innerWidth > 480) {
        if (window.scrollY > headerHeight) {
        header.classList.add('lg:h-16');
        header.classList.remove('lg:h-36');

        sectionComponents.forEach((sectionComponent) => {
            sectionComponent.classList.add('lg:scroll-my-12');
            sectionComponent.classList.remove('scroll-my-52 lg:scroll-my-36');
        });
	} else {
        header.classList.remove('lg:h-16');
        header.classList.add('lg:h-36');

        sectionComponents.forEach((sectionComponent) => {
            sectionComponent.classList.remove('lg:scroll-my-12');
            sectionComponent.classList.add('scroll-my-52 lg:scroll-my-36');
        });
    }
    }
}

onMounted(() => window.addEventListener('scroll', shrinkHeader));

</script>

<template>
    <div class="min-h-screen h-full w-full bg-floral-white-500">
        <HeaderNav />
        <About v-bind:biographyText="biographyText"/>
        <Resume />
        <Skills />
        <Contact />

        <div class="bg-platinum-700 w-full align-center text-center text-sm py-8">Joseph J. Collier, 2024</div>
    </div>
</template>
