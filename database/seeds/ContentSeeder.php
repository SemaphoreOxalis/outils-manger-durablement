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

        DB::table('contents')->insert([
            'name' => 'Footer Admin',
            'html_content' => '<div class="px-5 text-center">
                                <h3>HI, I\'M FOOTER ADMIN ! EDIT ME !!!</h3>
                                <p>When lost, look at code <></p>
                                <table style="border-collapse: collapse; width: 105.233%;" border="1">
                                <tbody>
                                <tr>
                                <td style="width: 19.1176%;"><em><strong>Editeur Wysiwig :</strong></em></td>
                                <td style="width: 44.8529%;">
                                <p>classes Bootstrap utilis&eacute;es :</p>
                                <ul>
                                <li><strong>.px-1, .py-5 :</strong> padding x et y (m pour margin)</li>
                                <li><strong>.pb-2, pl, pt, pr :</strong> padding left, top... (m pour margin)<br /><strong>.p-4, .m-3,</strong> general padding, margin<br /><strong>.d-flex, .justify-content-around, .text-center<br />.row, .col</strong></li>
                                </ul>
                                </td>
                                <td style="width: 36.0294%;">
                                <p>CSS perso :</p>
                                <ul>
                                <li><strong>img.footer-logo :</strong>max-width: 100px<br /><strong>.info :</strong> entoure la div dans une "bulle" blanche</li>
                                <li><strong>.browser-default :</strong> Pour éviter certains applications de styles par Materialize</li>
                                <li><strong>.icon, .custom-input, h1.header</strong></li>
                                <li><strong>#further-actions</strong></li>
                                </ul>
                                </td>
                                </tr>
                                </tbody>
                                </table>
                                </div>',
            'original' => '<div class="px-5 text-center">
                            <h3>HI, I\'M FOOTER ADMIN ! EDIT ME !!!</h3>
                            <p>When lost, look at code <></p>
                            <table style="border-collapse: collapse; width: 105.233%;" border="1">
                            <tbody>
                            <tr>
                            <td style="width: 19.1176%;"><em><strong>Editeur Wysiwig :</strong></em></td>
                            <td style="width: 44.8529%;">
                            <p>classes Bootstrap utilis&eacute;es :</p>
                            <ul>
                            <li><strong>.px-1, .py-5 :</strong> padding x et y (m pour margin)</li>
                            <li><strong>.pb-2, pl, pt, pr :</strong> padding left, top... (m pour margin)<br /><strong>.p-4, .m-3,</strong> general padding, margin<br /><strong>.d-flex, .justify-content-around, .text-center<br />.row, .col</strong></li>
                            </ul>
                            </td>
                            <td style="width: 36.0294%;">
                            <p>CSS perso :</p>
                            <ul>
                            <li><strong>img.footer-logo :</strong>max-width: 100px<br /><strong>.info :</strong> entoure la div dans une "bulle" blanche</li>
                            <li><strong>.browser-default :</strong> Pour éviter certains applications de styles par Materialize</li>
                            <li><strong>.icon, .custom-input, h1.header</strong></li>
                            <li><strong>#further-actions</strong></li>
                            </ul>
                            </td>
                            </tr>
                            </tbody>
                            </table>
                            </div>',
        ]);

        DB::table('contents')->insert([
            'name' => 'Titre Page d\'accueil',
            'html_content' => '<h1 id="title">Applications de sensibilisation aux<br>changements de pratique de production<br>alimentaire en restauration collective</h1>',
            'original' => '<h1 id="title">Applications de sensibilisation aux<br>changements de pratique de production<br>alimentaire en restauration collective</h1>',
        ]);

        DB::table('contents')->insert([
            'name' => 'Texte Page d\'accueil',
            'html_content' => '<div class="row">
                                    <div class="col">
                                        <div class="info p-4 m-4">
                                            <p>
                                                <i>Bienvenue sur ces outils, issus de la collaboration du C.H de Niort et de l\'ANAP, dans le cadre d\'un appel à projet de la fondation Carasso, financé par la région Nouvelle-Aquitaine et l\'Europe</i>
                                            </p>
                                        </div>
                                        <div class="info p-4 m-4">
                                            <p>Ces outils simples vous permettront d\'établir un diagnostic de vos pratiques de production en matière de bilan carbone et de gaspillage alimentaire, et vous donneront la possibilité de simuler des changements de pratique afin d\'en constater le effets</p>
                                        </div>
                                    </div>
                                    <div class="col"></div>
                                </div>',
            'original' => '<div class="row">
                                    <div class="col">
                                        <div class="info p-4 m-4">
                                            <p>
                                                <i>Bienvenue sur ces outils, issus de la collaboration du C.H de Niort et de l\'ANAP, dans le cadre d\'un appel à projet de la fondation Carasso, financé par la région Nouvelle-Aquitaine et l\'Europe</i>
                                            </p>
                                        </div>
                                        <div class="info p-4 m-4">
                                            <p>Ces outils simples vous permettront d\'établir un diagnostic de vos pratiques de production en matière de bilan carbone et de gaspillage alimentaire, et vous donneront la possibilité de simuler des changements de pratique afin d\'en constater le effets</p>
                                        </div>
                                    </div>
                                    <div class="col"></div>
                                </div>',
        ]);

        DB::table('contents')->insert([
            'name' => 'Disclaimer LocalStorage',
            'html_content' => '<div class="info p-4 m-4">
                                    <p>
                                        <i>Aucune des informations saisies sur cet outil ne sont sauvegardées en ligne. Le stockage est réalisé uniquement au sein de votre navigateur, et donc uniquement sur cet ordinateur</i>
                                    </p>
                                </div>',
            'original' => '<div class="info p-4 m-4">
                                    <p>
                                        <i>Aucune des informations saisies sur cet outil ne sont sauvegardées en ligne. Le stockage est réalisé uniquement au sein de votre navigateur, et donc uniquement sur cet ordinateur</i>
                                    </p>
                                </div>',
        ]);

        DB::table('contents')->insert([
            'name' => 'Gaspi - Titre',
            'html_content' => '<h1 id="title">Simulateur de gaspillage alimentaire<br>pour la restauration collective</h1>',
            'original' => '<h1 id="title">Simulateur de gaspillage alimentaire<br>pour la restauration collective</h1>',
        ]);

        DB::table('contents')->insert([
            'name' => 'Gaspi - Préparation',
            'html_content' => '<div>
                                    <p>Pour réaliser votre première simulation, <strong>vous aurez besoin</strong> :</p>
                                    <ul class="browser-default">
                                        <li>du nombre de repas produits dans votre établissement (par an)</li>
                                        <li id="add-help-modal-button">du coût de revient unitaire d\'un repas
                                        </li>
                                        <li>du poids moyen d\'un repas (en g)</li>
                                        <li>du volume de déchets ménagers produits par votre établissement (en tonnes)</li>
                                        <li>du coût de traitement des déchets (en euros par tonne)</li>
                                    </ul>
                                    <p>
                                        <strong>Grâce à ces données, vous obtiendrez une estimation économique et quantitative du gaspillage alimentaire de votre établissement en 15 minutes</strong>
                                    </p>
                                </div>',
            'original' => '<div>
                            <p>Pour réaliser votre première simulation, <strong>vous aurez besoin</strong> :</p>
                                <ul class="browser-default">
                                    <li>du nombre de repas produits dans votre établissement (par an)</li>
                                    <li id="add-help-modal-button">du coût de revient unitaire d\'un repas
                                    </li>
                                    <li>du poids moyen d\'un repas (en g)</li>
                                    <li>du volume de déchets ménagers produits par votre établissement (en tonnes)</li>
                                    <li>du coût de traitement des déchets (en euros par tonne)</li>
                                </ul>
                            <p>
                                <strong>Grâce à ces données, vous obtiendrez une estimation économique et quantitative du gaspillage alimentaire de votre établissement en 15 minutes</strong>
                            </p>
                          </div>',
        ]);

        DB::table('contents')->insert([
            'name' => 'Gaspi - Modale calcul prix d\'un repas',
            'html_content' => '<div>
                                    <p>Le prix de revient peut être calculé à partir :</p>
                                    <ul>
                                        <li>du montant total des achats alimentaires</li>
                                        <li>de la masse salariale de l\'équipe de restauration</li>
                                        <li>du coût des investissements</li>
                                        <li>du coût de l\'énergie</li>
                                    </ul>
                                    <p><strong>OU</strong>, dans le cas où votre établissement fait appel à un prestataire :</p>
                                    <ul>
                                        <li>du coût unitaire d\'un repas facturé</li>
                                    </ul>
                                </div>',
            'original' => '<div>
                               <p>Le prix de revient peut être calculé à partir :</p>
                               <ul>
                                   <li>du montant total des achats alimentaires</li>
                                   <li>de la masse salariale de l\'équipe de restauration</li>
                                   <li>du coût des investissements</li>
                                   <li>du coût de l\'énergie</li>
                               </ul>
                               <p><strong>OU</strong>, dans le cas où votre établissement fait appel à un prestataire :</p>
                               <ul>
                                   <li>du coût unitaire d\'un repas facturé</li>
                               </ul>
                           </div>',
        ]);

        DB::table('contents')->insert([
            'name' => 'Gaspi - Input - Sous-titre',
            'html_content' => '<h4 class="text-center mb-4">Obtenez une estimation économique et quantitative du gaspillage alimentaire<br>de votre établissement en 15 minutes</h4>',
            'original' => '<h4 class="text-center mb-4">Obtenez une estimation économique et quantitative du gaspillage alimentaire<br>de votre établissement en 15 minutes</h4>',
        ]);

        DB::table('contents')->insert([
            'name' => 'Gaspi - Résultats - Titre',
            'html_content' => '<h4 class="mb-4 text-center">Résultats et comparaisons de vos simulations</h4>',
            'original' => '<h4 class="mb-4 text-center">Résultats et comparaisons de vos simulations</h4>',
        ]);

        DB::table('contents')->insert([
            'name' => 'Gaspi - Résultats - Mode d\'emploi',
            'html_content' => '<p><i class="icon mr-2"></i> Commencez par ajouter une ou plusieurs simulations à votre audit</p>
                                <p><input type="text" class="custom-input browser-default" value="Les champs de ce type" readonly>
                                    sont modifiables</p>
                                <p><i class="icon mr-2"></i> Vous pouvez maintenant réorganiser vos simulations en les faisant glisser</p>
                                <p><i class="icon mr-2"></i> Vous pouvez supprimer les simulations inutiles une par une</p>
                                <p><i class="icon mr-2"></i> ou toutes les supprimer d\'un seul clic</p>
                                <p><i class="icon mr-2"></i> Le bouton "exporter" vous permet de récupérer l\'ensemble des données sur votre logiciel de tableur</p>',
            'original' => '<p><i class="icon mr-2"></i> Commencez par ajouter une ou plusieurs simulations à votre audit</p>
                                <p><input type="text" class="custom-input browser-default" value="Les champs de ce type" readonly>
                                    sont modifiables</p>
                                <p><i class="icon mr-2"></i> Vous pouvez maintenant réorganiser vos simulations en les faisant glisser</p>
                                <p><i class="icon mr-2"></i> Vous pouvez supprimer les simulations inutiles une par une</p>
                                <p><i class="icon mr-2"></i> ou toutes les supprimer d\'un seul clic</p>
                                <p><i class="icon mr-2"></i> Le bouton "exporter" vous permet de récupérer l\'ensemble des données sur votre logiciel de tableur</p>',
        ]);

        DB::table('contents')->insert([
            'name' => 'Gaspi - Résultats - Liens EGALIM-ANAP',
            'html_content' => '<div class="text-center mt-5" id="further-actions">
                                <p>
                                    Bravo, vous venez de franchir la première étape de la démarche de <a href="https://agriculture.gouv.fr/egalim-ce-que-contient-la-loi-agriculture-et-alimentation" target="_blank">la loi EGALIM <span class="icon"></span></a>
                                </p>
                                <p>
                                    Que faire de ces résultats ? Rendez vous sur le <a href="#">site ressource de l\'ANAP pour découvrir les actions réalisables <span class="icon"></span></a>
                                </p>
                                </div>',
            'original' => '<div class="text-center mt-5" id="further-actions">
                                <p>
                                    Bravo, vous venez de franchir la première étape de la démarche de <a href="https://agriculture.gouv.fr/egalim-ce-que-contient-la-loi-agriculture-et-alimentation" target="_blank">la loi EGALIM <span class="icon"></span></a>
                                </p>
                                <p>
                                    Que faire de ces résultats ? Rendez vous sur le <a href="#">site ressource de l\'ANAP pour découvrir les actions réalisables <span class="icon"></span></a>
                                </p>
                                </div>',
        ]);

        DB::table('contents')->insert([
            'name' => 'Carbone - Titre',
            'html_content' => '<h1 class="header">Simulateur d\'émissions carbone <br> pour la restauration collective</h1>',
            'original' => '<h1 class="header">Simulateur d\'émissions carbone <br> pour la restauration collective</h1>',
        ]);

        DB::table('contents')->insert([
            'name' => 'Carbone - Préparation',
            'html_content' => '<p>Pour réaliser votre première simulation, <strong>vous aurez besoin</strong> :</p>
                                <ul class="browser-default">
                                    <li>des achats alimentaires de votre cuisine (aliments ainsi que leur quantité et leur provenance)</li>
                                </ul>
                                <p>
                                    <strong>Grâce à ces données, vous obtiendrez une estimation économique et quantitative de l\'impact carbone de votre établissement en 15 minutes</strong>
                                </p>',
            'original' => '<p>Pour réaliser votre première simulation, <strong>vous aurez besoin</strong> :</p>
                                <ul class="browser-default">
                                    <li>des achats alimentaires de votre cuisine (aliments ainsi que leur quantité et leur provenance)</li>
                                </ul>
                                <p>
                                    <strong>Grâce à ces données, vous obtiendrez une estimation économique et quantitative de l\'impact carbone de votre établissement en 15 minutes</strong>
                                </p>',
        ]);

        DB::table('contents')->insert([
            'name' => 'Carbone - Mode d\'emploi',
            'html_content' => '<h4>Mode d\'emploi</h4>
                                <ul>
                                    <li><span class="icon"></span> Commencez par ajouter de produits à votre liste de courses via le menu ou en faisant une recherche</li>
                                    <li>Vous êtes alors invités à en préciser le nombre et l\'origine</li>
                                    <li>Vous pouvez alors constater en temps réel votre bilan carbone résumé sous votre panier</li>
                                    <li><span class="icon"></span> Vous avez alors la possibilité d\'ajouter des paniers de "simulation" et de les renommer</li>
                                    <li><span class="icon"></span> Vous pouvez aussi dupliquer un panier existant</li>
                                    <li>N\'hésitez pas à faire varier les produits, leur quantité et leur provenance avant de constater l\'impact de vos changements</li>
                                    <li><span class="icon"></span> Vous pouvez effacer les paniers un par un</li>
                                    <li><span class="icon"></span> ou les vider</li>
                                    <li><span class="icon"></span> permet d\'effectuer des opérations sur l\'ensemble du panier</li>
                                    <li><span class="icon"></span> Le bouton "exporter" vous permet de récupérer l\'ensemble des données sur votre logiciel de tableur</li>
                                </ul>',
            'original' => '<h4>Mode d\'emploi</h4>
                                <ul>
                                    <li><span class="icon"></span> Commencez par ajouter de produits à votre liste de courses via le menu ou en faisant une recherche</li>
                                    <li>Vous êtes alors invités à en préciser le nombre et l\'origine</li>
                                    <li>Vous pouvez alors constater en temps réel votre bilan carbone résumé sous votre panier</li>
                                    <li><span class="icon"></span> Vous avez alors la possibilité d\'ajouter des paniers de "simulation" et de les renommer</li>
                                    <li><span class="icon"></span> Vous pouvez aussi dupliquer un panier existant</li>
                                    <li>N\'hésitez pas à faire varier les produits, leur quantité et leur provenance avant de constater l\'impact de vos changements</li>
                                    <li><span class="icon"></span> Vous pouvez effacer les paniers un par un</li>
                                    <li><span class="icon"></span> ou les vider</li>
                                    <li><span class="icon"></span> permet d\'effectuer des opérations sur l\'ensemble du panier</li>
                                    <li><span class="icon"></span> Le bouton "exporter" vous permet de récupérer l\'ensemble des données sur votre logiciel de tableur</li>
                                </ul>',
        ]);

        DB::table('contents')->insert([
            'name' => 'Mentions Légales',
            'html_content' => '<div class="mt-4">
                                <div class="pt-2">
                                    <p class="text-center">Cet outil est le fruit du travail du CH de Niort, <br> dans le cadre d\'un appel à projet de la fondation Carasso, financé par la région Nouvelle-Aquitaine et l\'Europe</p>
                                    <div class="d-flex justify-content-around pb-3">
                                        <img src="/images/logo-carasso.svg" alt="logo fondation Carasso">
                                        <img src="/images/logo-region-NA.svg" alt="logo région Nouvelle-Aquitaine">
                                        <img src="/images/logo-UE.svg" alt="logo Europe">
                                    </div>
                                </div>
                                <p class="mt-4 text-center">Réalisation : <a href="mailto:contact@semaphore-communication.fr">Sémaphore Communication</a></p>
                            </div>',
            'original' => '<div class="mt-4">
                                <div class="pt-2">
                                    <p class="text-center">Cet outil est le fruit du travail du CH de Niort, <br> dans le cadre d\'un appel à projet de la fondation Carasso, financé par la région Nouvelle-Aquitaine et l\'Europe</p>
                                    <div class="d-flex justify-content-around pb-3">
                                        <img src="/images/logo-carasso.svg" alt="logo fondation Carasso">
                                        <img src="/images/logo-region-NA.svg" alt="logo région Nouvelle-Aquitaine">
                                        <img src="/images/logo-UE.svg" alt="logo Europe">
                                    </div>
                                </div>
                                <p class="mt-4 text-center">Réalisation : <a href="mailto:contact@semaphore-communication.fr">Sémaphore Communication</a></p>
                            </div>',
        ]);
    }
}
