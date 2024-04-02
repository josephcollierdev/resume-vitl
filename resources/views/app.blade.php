<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="scroll-smooth">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>{{ config('app.name', 'Laravel') }}</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">

        <!-- Scripts -->
        @routes
        @vite(['resources/js/app.js', "resources/js/Pages/{$page['component']}.vue"])
        @inertiaHead

        <!-- META -->
        <meta name="description" content="Professional website for a Brooklyn / New York City based web developer / software engineer / cybersecurity analyst named Joseph Collier.">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <meta itemprop="name" content="Joseph Collier">
        <meta property="og:url" content="https://josephcollier.dev">
        <meta property="og:type" content="website">
        <meta property="og:title" content="Joseph Collier">

        <meta property="og:description" content="Professional website for a Brooklyn / New York City based web developer / software engineer / cybersecurity analyst named Joseph Collier.">
        <meta itemprop="description" content="Professional website for a Brooklyn / New York City based web developer / software engineer / cybersecurity analyst named Joseph Collier.">

        <meta itemprop="image" content="https://josephcollier.dev//build/storage/app/public/images/joseph-collier-logo_256_256.webp">
        <meta property="og:image" content="/build/storage/app/public/images/joseph-collier-logo_256_256.webp">
        <meta property="og:image:width" content="256">
        <meta property="og:image:height" content="256">

        <!-- Twitter Meta Tags -->
        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:title" content="Joseph Collier">
        <meta name="twitter:description" content="Professional website for a Brooklyn / New York City based web developer / software engineer / cybersecurity analyst named Joseph Collier.">
        <meta name="twitter:image" content="http://josephcollier.dev//build/storage/app/public/images/joseph-collier-logo_256_256.webp">
    </head>
    <body class="font-sans antialiased bg-black-magic-500">
        @inertia
    </body>
</html>
