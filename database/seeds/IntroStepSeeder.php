<?php

use Illuminate\Database\Seeder;

class IntroStepSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('intro_steps')->insert([
            'title' => 'Mode d\'emploi',
            'text' => null,
            'element' => null,
            'position' => null,
            'index' => 0,
        ]);
        DB::table('intro_steps')->insert([
            'title' => null,
            'text' => 'Commencez par sélectionner la ou les listes dans lesquelles vous souhaitez ajouter des produits',
            'element' => '.basket-select',
            'position' => 'bottom',
            'index' => 1,
        ]);
        DB::table('intro_steps')->insert([
            'title' => null,
            'text' => 'Utilisez la barre de recherche pour ajouter des produits ou des recettes à votre/vos liste/s',
            'element' => '.search-bar',
            'position' => 'bottom',
            'index' => 2,
        ]);
        DB::table('intro_steps')->insert([
            'title' => null,
            'text' => 'Vous pouvez alors modifier les valeurs saisies précédemment',
            'element' => '.product-item',
            'position' => 'right',
            'index' => 3,
        ]);
        DB::table('intro_steps')->insert([
            'title' => null,
            'text' => 'Vous constaterez alors en temps réel votre bilan carbone résumé sous votre liste',
            'element' => '.results-container',
            'position' => 'right',
            'index' => 4,
        ]);
        DB::table('intro_steps')->insert([
            'title' => null,
            'text' => 'Vous pouvez ajouter des listes',
            'element' => '.add-basket',
            'position' => 'bottom',
            'index' => 5,
        ]);
        DB::table('intro_steps')->insert([
            'title' => null,
            'text' => 'Les renommer',
            'element' => '.basket-name-input',
            'position' => 'bottom',
            'index' => 6,
        ]);
        DB::table('intro_steps')->insert([
            'title' => null,
            'text' => 'Les dupliquer',
            'element' => '.copy-basket',
            'position' => 'bottom',
            'index' => 7,
        ]);
        DB::table('intro_steps')->insert([
            'title' => null,
            'text' => 'Les vider de leurs produits',
            'element' => '.empty-basket',
            'position' => 'bottom',
            'index' => 8,
        ]);
        DB::table('intro_steps')->insert([
            'title' => null,
            'text' => 'Ou les supprimer entièrement',
            'element' => '.delete-basket',
            'position' => 'bottom',
            'index' => 9,
        ]);
        DB::table('intro_steps')->insert([
            'title' => null,
            'text' => 'Vous pouvez insérer dans votre liste un "bloc" que vous pourrez renommer et transformer en Recette de Chef',
            'element' => '.insert-block',
            'position' => 'bottom',
            'index' => 10,
        ]);
        DB::table('intro_steps')->insert([
            'title' => null,
            'text' => 'Vous pouvez ajuster le nombre de convives et bénéficier de statistiques par personne',
            'element' => '.guests-number',
            'position' => 'up',
            'index' => 11,
        ]);
        DB::table('intro_steps')->insert([
            'title' => null,
            'text' => 'Vous pouvez également choisir une équivalence carbone plus pertinente',
            'element' => '.change-equivalence',
            'position' => 'up',
            'index' => 12,
        ]);
        DB::table('intro_steps')->insert([
            'title' => null,
            'text' => 'Ces boutons vous permettent de sauvegarder vos listes sur un fichier que vous pourrez alors stocker sur votre ordinateur ou partager',
            'element' => '.local-save',
            'position' => 'up',
            'index' => 13,
        ]);
        DB::table('intro_steps')->insert([
            'title' => null,
            'text' => 'Enfin, cet outil vous donne la possibilité d\'exporter vos listes au format tableur, qui contiendra tous les détails',
            'element' => '.export-baskets',
            'position' => 'up',
            'index' => 14,
        ]);
        DB::table('intro_steps')->insert([
            'title' => 'C\'est terminé !',
            'text' => 'Nous espérons que cet outil vous sera utile. N\'hésitez pas à nous faire part de vos retours 👍',
            'element' => null,
            'position' => null,
            'index' => 15,
        ]);
    }
}
