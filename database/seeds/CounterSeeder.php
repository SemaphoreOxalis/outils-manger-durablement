<?php

use Illuminate\Database\Seeder;

class CounterSeeder extends Seeder
{
    public function run()
    {
        DB::table('counters')->insert([
            'name' => 'WasteSimulatorAuditsCounter',
            'label' => 'Nombre d\'audits réalisés',
            'value' => 0,
        ]);

        DB::table('counters')->insert([
            'name' => 'WasteSimulatorSimulationsCounter',
            'label' => 'Nombre de simulations réalisées',
            'value' => 0,
        ]);
    }
}
