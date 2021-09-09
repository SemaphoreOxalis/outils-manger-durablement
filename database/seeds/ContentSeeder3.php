<?php

use Illuminate\Database\Seeder;

class ContentSeeder3 extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('contents')->insert([
            'name' => 'Changelog',
            'html_content' => '<div class="text-center">
                                <h1 class="my-5">Version 1.0.1</h1>
                                <h5 class="mt-5">Version 2.0 - prévue pour fin 09/2021</h5>
                                    <ul>
                                        <li>fonctionnalité "Recettes de Chef"</li>
                                        <li>ajout de quelques fonctionnalités demandées</li>
                                        <li>amélioration de l\'interface utilisateur</li>
                                    </ul>
                    
                                <p class="mt-5"><strong>1.0.1 - 02/2021</strong></p>
                                    <ul>
                                        <li>corrections de bugs</li>
                                    </ul>
                                <h5 class="mt-5">Version 1.0 - 01/2021</h5>
                            </div>',
            'original' => '<div class="text-center">
                                <h1 class="my-5">Version 1.0.1</h1>
                            <h5 class="mt-5">Version 2.0 - prévue pour fin 09/2021</h5>
                                <ul>
                                    <li>fonctionnalité "Recettes de Chef"</li>
                                    <li>ajout de quelques fonctionnalités demandées</li>
                                    <li>amélioration de l\'interface utilisateur</li>
                                </ul>
                
                            <p class="mt-5"><strong>1.0.1 - 02/2021</strong></p>
                                <ul>
                                    <li>corrections de bugs</li>
                                </ul>
                            <h5 class="mt-5">Version 1.0 - 01/2021</h5>
                        </div>',
        ]);
    }
}
