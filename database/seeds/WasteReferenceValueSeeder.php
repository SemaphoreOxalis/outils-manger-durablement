<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class WasteReferenceValueSeeder extends Seeder
{
    public function run()
    {
        DB::table('waste_reference_values')->insert([
            'key' => 'foodLeftoversVolumeInGlobalWaste',
            'label' => 'Part des restes alimentaires dans le volume de déchets global',
            'value' => 25.0,
        ]);

        DB::table('waste_reference_values')->insert([
            'key' => 'actualFoodLeftoversInFoodWaste',
            'label' => 'Part du gaspillage dans les restes alimentaires',
            'value' => 75.0,
        ]);
    }
}
