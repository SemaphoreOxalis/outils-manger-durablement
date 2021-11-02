<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- SEO / OpenGraph -->
    <meta name="description" content="Applications de sensibilisation aux changements de pratique de production alimentaire en restauration collective.">
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://www.manger-durablement.fr/">
    <meta property="og:title" content="Applications - Manger durablement">
    <meta property="og:description" content="Applications de sensibilisation aux changements de pratique de production alimentaire en restauration collective.">
    <meta property="og:image" content="https://www.manger-durablement.fr/storage/images/og-carbon.jpg">
    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="https://www.manger-durablement.fr/">
    <meta property="twitter:title" content="Applications - Manger durablement">
    <meta property="twitter:description" content="Applications de sensibilisation aux changements de pratique de production alimentaire en restauration collective.">
    <meta property="twitter:image" content="https://www.manger-durablement.fr/storage/images/og-carbon.jpg">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>
    <script>
        window.App = {!! json_encode([
            'signedIn' => Auth::check(),
            'version' => config('app.version'),
        ]) !!}
    </script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <!-- Styles -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <link rel="stylesheet" href="https://unpkg.com/materialize-stepper@3.1.0/dist/css/mstepper.min.css">
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>
<body>
<div>
    <div id="app">
        @yield('content')
    </div>
</div>

<script src="https://unpkg.com/materialize-stepper@3.1.0/dist/js/mstepper.min.js"></script>
</body>
</html>
