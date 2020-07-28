@extends('layouts.app')

@section('content')
    <div id="app">
        <router-view></router-view>
        <hr>
        <router-link to="/">Home</router-link>
        <router-link to="/test">Test</router-link>
        <router-link to="/admin">Admin</router-link>

        <flash message="{{ session('flash') }}"></flash>
    </div>
@endsection
