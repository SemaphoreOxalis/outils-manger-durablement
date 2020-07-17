@extends('layouts.app')

@section('content')
    @foreach ($products as $product)
        <div>
            <span>
                {{ $product->name }} -
                {{ $product->category->name }} -
                {{ $product->unit->unit }}
            </span>
        </div>
    @endforeach
@endsection
