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
            'rate' => 3.953,
            'unit' => 'kms en voiture',
            'source' => 'https://datagir.ademe.fr/blog/transport/impact-carbone-mobilite-eco-deplacement.md',
        ]);

        DB::table('equivalences')->insert([
            'name' => 'Ordures',
            'rate' => 2.591,
            'unit' => 'kgs d\'ordures ménagères',
            'source' => 'https://monconvertisseurco2.fr/?co2=1000&equivalents=22066',
        ]);
    }
}
