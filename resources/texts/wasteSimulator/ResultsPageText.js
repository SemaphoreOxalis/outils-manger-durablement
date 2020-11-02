export default {
    data() {
        return {

            // RESULTS PAGE component

            your_results: 'Résultats et comparaisons de vos simulations',
            modal: {
                you_just_made_an_audit: 'Vous venez de réaliser l\'audit simplifié de votre gaspillage alimentaire.',
                your_food_waste_amounts_to: 'Il estime le coût de votre gaspillage alimentaire à',
                euros_or: '€ (soit l\'équivalent de',
                dishes: 'repas)',
                you_can_add_sims_to_this_table: 'Le tableau ci-dessous vous permet d\'ajouter des simulations modélisant les modifications de vos pratiques: réduction du volume de gaspillage alimentaire, optimisation du nombre de repas...',
                each_sim_is_compared_to_the_one_above: 'Chaque simulation est comparée en temps réel avec celle qui la précède dans le tableau, n\'hésitez pas à expérimenter !',
                closeBtn: 'Fermer',
            },
            how_to: {
                title: 'Mode d\'emploi',
                add_sims_to_audit: 'Commencez par ajouter une ou plusieurs simulations à votre audit',
                these_fields: 'Les champs de ce type',
                are_editable: 'sont modifiables',
                reorganize_sims: 'Vous pouvez maintenant réorganiser vos simulations en les faisant glisser',
                delete_one_sim: 'Vous pouvez supprimer les simulations inutiles une par une',
                delete_all_sims: 'ou toutes les supprimer d\'un seul clic',
                export_sims: 'Le bouton "exporter" vous permet de récupérer l\'ensemble des données sur votre logiciel de tableur',
            },
            btns: {
                add_sim: 'Ajouter une simulation',
                reset_sims: 'Je réinitialise toutes mes simulations',
                export_sims: 'Exporter le rapport de simulation',
                new_audit: 'J\'effectue un nouvel audit',
            },
            congrats_you_just_completed: 'Bravo, vous venez de franchir la première étape de la démarche de',
            egalim: 'la loi EGALIM',
            what_to_do: 'Que faire de ces résultats ? Rendez vous sur le',
            go_to_anap_site: 'site ressource de l\'ANAP pour découvrir les actions réalisables',


            // AUDIT component

            labels: {
                name: 'Nom de la simulation',
                dishes_number: 'Nombre de repas produits',
                dish_cost: 'Coût de revient d\'un repas',
                dish_weight: 'Poids moyen d\'un repas (en g)',
                waste_cost: 'Coût de traitement par tonne (€)',
                waste_volume: 'Volume de gaspillage alimentaire (tonnes).',
                waste_estimation : {
                    estimate: 'Estimation du gaspillage alimentaire',
                    in_g_per_dish: 'en g par repas',
                    in_euros: 'en €',
                    in_dishes_number: 'en nombre de repas',
                }
            },

            // SIMULATIONS LIST component

            compare_to: {
                audit: 'Comparer les simulations à l\'audit',
                previous_sim: 'Comparer les simulations entre elles',
            }
        }
    }
}
