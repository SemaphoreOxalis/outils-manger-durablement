<?php

use Illuminate\Database\Seeder;

class EquivalenceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('equivalences')->insert([
            'name' => 'Voiture',
            'rate' => 0.253,
            'unit' => 'kms en voiture',
            'source' => 'https://datagir.ademe.fr/blog/transport/impact-carbone-mobilite-eco-deplacement.md',
        ]);
    }
}
