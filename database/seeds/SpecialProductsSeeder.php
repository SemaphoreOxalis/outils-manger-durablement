<?php

use Illuminate\Database\Seeder;

class SpecialProductsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('products')->insert([
            'name' => 'Titre de bloc',
            'unit_id' => null,
            'category_id' => null,
            'uncertainty' => null,
            'comment' => null,
            'emissionFactor' => null,
            'type' => 'special'
        ]);

        DB::table('products')->insert([
            'name' => 'Fin de bloc',
            'unit_id' => null,
            'category_id' => null,
            'uncertainty' => null,
            'comment' => null,
            'emissionFactor' => null,
            'type' => 'special'
        ]);
    }
}