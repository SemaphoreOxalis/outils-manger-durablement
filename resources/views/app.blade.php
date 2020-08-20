@extends('layouts.app')

@section('content')
    <main class="container">
        <div>
            <router-view></router-view>

            <flash message="{{ session('flash') }}"></flash>
        </div>
    </main>
@endsection
