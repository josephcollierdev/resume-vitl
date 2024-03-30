<script>
export default {
  data() {
    return {
      fullnameClass: 'w-full h-full md:py-0 md:w-1/3 text-4xl flex text-center justify-center items-center align-middle hover:tracking-widest transition-all duration-500 ease-in-out',
      navLinkClass: 'w-full md:w-1/5 hover:text-2xl hover:text-platinum-300 hover:tracking-widest transition-all duration-500 ease-in-out'
    };
  }
};
</script>

<template>
  <div id="header-nav" class="z-50 sticky top-0 h-[18rem] mb-8 md:h-36 transition-all duration-300 ease-in-out">
    <div class="z-10 h-5/6 flex flex-col md:flex-row text-center bg-platinum-700 sticky top-0">
      <a href="#" :class="fullnameClass">JOSEPH COLLIER</a>
      <div class="h-full flex flex-col md:py-0  md:flex-row w-full md:w-2/3 m-auto text-center justify-evenly text-xl items-center align-middle">
        <a href="#" :class="navLinkClass">ABOUT ME</a>
        <a href="#section-resume" :class="navLinkClass">RESUME</a>
        <a href="#section-skills" :class="navLinkClass">SKILLS</a>
        <a href="#section-contact" :class="navLinkClass">CONTACT</a>
        <a href="https://github.com/josephcollierdev" target="_blank" :class="navLinkClass" class="pb-4">GITHUB</a>
      </div>
    </div>
  </div>
</template>