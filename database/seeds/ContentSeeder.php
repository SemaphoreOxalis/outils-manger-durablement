<?php

use Illuminate\Database\Seeder;

class ContentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('contents')->insert([
            'name' => 'Footer General',
            'html_content' => '<div class="pt-2">
                                <p class="text-center">
                                    Cet outil est le fruit du travail du CH de Niort, <br/>
                                    dans le cadre d\'un appel à projet de la fondation Carasso, financé par la région Nouvelle-Aquitaine et l\'Europe
                                </p>
                                <div class="d-flex justify-content-around pb-3">
                                    <img class="footer-logo" src="/images/logo-carasso.svg" alt="logo">
                                    <img class="footer-logo" src="/images/logo-region-NA.svg" alt="logo">
                                    <img class="footer-logo" src="/images/logo-UE.svg" alt="logo">
                                </div>
                            </div>',
            'original' => '<div class="pt-2">
                                <p class="text-center">
                                    Cet outil est le fruit du travail du CH de Niort, <br/>
                                    dans le cadre d\'un appel à projet de la fondation Carasso, financé par la région Nouvelle-Aquitaine et l\'Europe
                                </p>
                                <div class="d-flex justify-content-around pb-3">
                                    <img class="footer-logo" src="/images/logo-carasso.svg" alt="logo">
                                    <img class="footer-logo" src="/images/logo-region-NA.svg" alt="logo">
                                    <img class="footer-logo" src="/images/logo-UE.svg" alt="logo">
                                </div>
                            </div>',
        ]);

        DB::table('contents')->insert([
            'name' => 'Footer Gaspi',
            'html_content' => '<div class="pt-2">
                                <h1>Gaspi</h1>
                                <p class="text-center">
                                    Cet outil est le fruit du travail du CH de Niort, <br/>
                                    dans le cadre d\'un appel à projet de la fondation Carasso, financé par la région Nouvelle-Aquitaine et l\'Europe
                                </p>
                                <div class="d-flex justify-content-around pb-3">
                                    <img class="footer-logo" src="/images/logo-carasso.svg" alt="logo">
                                    <img class="footer-logo" src="/images/logo-region-NA.svg" alt="logo">
                                    <img class="footer-logo" src="/images/logo-UE.svg" alt="logo">
                                </div>
                            </div>',
            'original' => '<div class="pt-2">
                                <h1>Gaspi</h1>
                                <p class="text-center">
                                    Cet outil est le fruit du travail du CH de Niort, <br/>
                                    dans le cadre d\'un appel à projet de la fondation Carasso, financé par la région Nouvelle-Aquitaine et l\'Europe
                                </p>
                                <div class="d-flex justify-content-around pb-3">
                                    <img class="footer-logo" src="/images/logo-carasso.svg" alt="logo">
                                    <img class="footer-logo" src="/images/logo-region-NA.svg" alt="logo">
                                    <img class="footer-logo" src="/images/logo-UE.svg" alt="logo">
                                </div>
                            </div>',
        ]);

        DB::table('contents')->insert([
            'name' => 'Footer Carbone',
            'html_content' => '<div class="pt-2">
                                <h1>Carbone</h1>
                                <p class="text-center">
                                    Cet outil est le fruit du travail du CH de Niort, <br/>
                                    dans le cadre d\'un appel à projet de la fondation Carasso, financé par la région Nouvelle-Aquitaine et l\'Europe
                                </p>
                                <div class="d-flex justify-content-around pb-3">
                                    <img class="footer-logo" src="/images/logo-carasso.svg" alt="logo">
                                    <img class="footer-logo" src="/images/logo-region-NA.svg" alt="logo">
                                    <img class="footer-logo" src="/images/logo-UE.svg" alt="logo">
                                </div>
                            </div>',
            'original' => '<div class="pt-2">
                                <h1>Carbone</h1>
                                <p class="text-center">
                                    Cet outil est le fruit du travail du CH de Niort, <br/>
                                    dans le cadre d\'un appel à projet de la fondation Carasso, financé par la région Nouvelle-Aquitaine et l\'Europe
                                </p>
                                <div class="d-flex justify-content-around pb-3">
                                    <img class="footer-logo" src="/images/logo-carasso.svg" alt="logo">
                                    <img class="footer-logo" src="/images/logo-region-NA.svg" alt="logo">
                                    <img class="footer-logo" src="/images/logo-UE.svg" alt="logo">
                                </div>
                            </div>',
        ]);
    }
}
