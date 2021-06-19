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
            'name' => 'Bloc',
            'unit_id' => null,
            'category_id' => null,
            'uncertainty' => null,
            'comment' => null,
            'emissionFactor' => null,
            'type' => 'special'
        ]);
    }
}