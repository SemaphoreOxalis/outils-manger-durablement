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

    <div>
        <router-view></router-view>
        <flash message="{{ session('flash') }}"></flash>
    </div>
@endsection
