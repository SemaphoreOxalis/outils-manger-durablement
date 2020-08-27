@extends('layouts.app')

@section('content')
    <nav class="left-menu d-flex flex-column align-items-end">
        <div class="logo-container"></div>
        <div class="menu-container">
            <navigation-links></navigation-links>
        </div>
        <div class="credits-container mt-auto">
            <router-link to="/admin" class="menu-item button icon"><span>Administration</span></router-link>
            @auth
                <a class="menu-item button icon" href="{{ route('logout') }}"
                   onclick="event.preventDefault(); document.getElementById('logout-form').submit();">
                    <span>{{ __('Logout') }}</span>
                </a>
                <form id="logout-form" action="{{ route('logout') }}" method="POST"
                      style="display: none;">
                    @csrf
                </form>
            @endauth
            <router-link to="/about" class="menu-item button icon">...<span>Mentions Légales <br> Confidentialité</span>
            </router-link>
        </div>
    </nav>

    <div class="d-flex flex-column align-items-end vh-100">
        <main class="container">
            <div>
                <router-view></router-view>

                <flash message="{{ session('flash') }}"></flash>
            </div>
        </main>

        <footer class="mt-auto container">
            <div class="pt-2">
                <p class="text-center">
                    Cet outil est le fruit du travail du CH de Niort, <br> dans le cadre d'un appel à projet de la
                    fondation
                    Carasso, financé par la région Nouvelle-Aquitaine et l'Europe
                </p>
                <div class="d-flex justify-content-around pb-3">
                    <img class="footer-logo" src="/images/logo-carasso.svg" alt="logo fondation Carasso">
                    <img class="footer-logo" src="/images/logo-region-NA.svg" alt="logo région Nouvelle-Aquitaine">
                    <img class="footer-logo" src="/images/logo-UE.svg" alt="logo Europe">
                </div>
            </div>
        </footer>
    </div>
@endsection
