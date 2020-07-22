<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class WasteReferenceValueSeeder extends Seeder
{
    public function run()
    {
        DB::table('waste_reference_values')->insert([
            'key' => 'foodLeftoversVolumeInGlobalWaste',
            'value' => 25.0,
        ]);

        DB::table('waste_reference_values')->insert([
            'key' => 'actualFoodLeftoversInFoodWaste',
            'value' => 75.0,
        ]);
    }
}
