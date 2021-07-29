<?php

use Illuminate\Database\Seeder;

class ContentSeeder2 extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('contents')->insert([
            'name' => 'Carbone - Gestion des Recettes de Chef',
            'html_content' => '<div class="info p-4 m-4">
                                    <p>
                                        <i>Bienvenue sur cet outil de gestion des recettes de chef.</i>
                                    </p>
                                </div>',
            'original' => '<div class="info p-4 m-4">
                                <p>
                                    <i>Bienvenue sur cet outil de gestion des recettes de chef.</i>
                                </p>
                            </div>',
        ]);
    }
}
