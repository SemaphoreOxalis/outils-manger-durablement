@extends('layouts.app')

@section('content')
    <div class="flex">
        <div class="left">
            @foreach ($products as $product)
                <div>
                    <span class="product">
                        {{ $product->name }} -
                        {{ $product->category->name }} -
                        kgCO2e/{{ $product->unit->unit }} -
                        {{ $product->emissionFactor }}
                    </span>
                </div>
            @endforeach
        </div>
        <div class="right">

        </div>
    </div>
@endsection
