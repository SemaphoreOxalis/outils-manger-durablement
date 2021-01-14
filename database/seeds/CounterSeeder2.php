<?php

use Illuminate\Database\Seeder;

class CounterSeeder2 extends Seeder
{
    public function run()
    {
        DB::table('counters')->insert([
            'name' => 'CarbonSimulatorBasketsCounter',
            'label' => 'Nombre de paniers créés',
            'value' => 0,
        ]);

        DB::table('counters')->insert([
            'name' => 'CarbonSimulatorProductsCounter',
            'label' => 'Nombre de produits ajoutés aux paniers',
            'value' => 0,
        ]);
    }
}
