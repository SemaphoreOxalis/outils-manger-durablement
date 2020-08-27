<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>
    <script>
        window.App = {!! json_encode([
            'signedIn' => Auth::check(),
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

{{--                <footer class="mt-4">--}}
{{--                    <div id="top-footer" class="pt-2">--}}
{{--                        <p class="text-center">--}}
{{--                            Cet outil est le fruit du travail du CH de Niort, dans le cadre d'un appel à projet de la fondation--}}
{{--                            Carasso, financé par la région Nouvelle-Aquitaine, l'Europe et le centre ESCER--}}
{{--                        </p>--}}
{{--                        <div class="d-flex justify-content-around pb-3" id="logos">--}}
{{--                            <img src="/images/Logo_fondation_carasso-small.jpg" alt="logo fondation Carasso">--}}
{{--                            <img src="/images/Logo_Nouvelle-Aquitaine_2019.svg" alt="logo région Nouvelle-Aquitaine">--}}
{{--                            <img src="/images/Logo_Europe.svg" alt="logo Europe">--}}
{{--                            <img src="/images/centre_escer.jpg" alt="logo centre ESCER">--}}
{{--                        </div>--}}
{{--                    </div>--}}
{{--                    <div id="bottom-footer" class="d-flex justify-content-center py-3">--}}
{{--                        <a href="#" class="px-3">Mentions légales</a>--}}
{{--                        <a href="#" class="px-3">Politique de confidentialité</a>--}}
{{--                        <a href="#" class="px-3">Administration</a>--}}
{{--                    </div>--}}
{{--                </footer>--}}
    </div>
</div>

<script src="https://unpkg.com/materialize-stepper@3.1.0/dist/js/mstepper.min.js"></script>
</body>
</html>
