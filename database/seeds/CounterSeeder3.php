<?php

use Illuminate\Database\Seeder;

class CounterSeeder3 extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('counters')->insert([
            'name' => 'CarbonSimulatorRecipesCounter',
            'label' => 'Nombre de recettes de chef créées',
            'value' => 0,
        ]);
    }
}
