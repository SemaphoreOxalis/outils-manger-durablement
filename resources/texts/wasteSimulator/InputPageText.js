export default {
    data() {
        return {
            get_an_audit: 'Obtenez une estimation économique et quantitative du gaspillage alimentaire',
            in_15m: 'de votre établissement en 15 minutes',
            steps: {
                dates: 'Les dates',
                dishes: 'Les repas',
                wastes: 'Les déchets',
            },
            step_instruction: {
                dates: 'Précisez la période sur laquelle vos données vont porter :',
                dishes: 'Saisissez les informations sur les repas produits/commandés par votre cuisine sur cette période',
                wastes: 'Saisissez les informations sur les déchets (hors déchets médicaux pour les structures médicales) sur la même période.',
            },
            labels: {
                start_date: 'Date de début :',
                end_date: 'Date de fin :',
                dishes_number: 'Nombre de repas',
                dish_cost: 'Coût de revient d\'un repas',
                dish_weight: 'Poids moyen d\'un repas (en g)',
                waste_volume: 'Volume constaté (en tonnes)',
                waste_cost: 'Coût de traitement par tonnes (en €)',
            },
            nextBtn: 'suivant',
            prevBtn: 'retour',
            okBtn: 'OK',

            dish_cost_is_calculated_with: '*Le prix de revient d’un repas peut être calculé grâce à la formule suivante :',
            calcul_1: {
                line_1: '[(montant total des achats alimentaires (matière première)',
                line_2: '+ masse salariale de l\'équipe de restauration',
                line_3: '+ investissements',
                line_4: '+ coût de l\'énergie)',
                line_5: '/ nombre de repas produits]',
            },
            or_with: 'ou',
            if_you_externalize: 'en cas d\'externalisation',
            calcul_2: '[coût facturé / nombre de repas produits]',

            learn_more_about_profiling_ones_wastes: 'En savoir plus sur la méthode pour réaliser la caractérisation de ses déchets',

            following: 'Suite à la',
            niort_waste_profiling: 'caractérisation des déchets du C.H de Niort',
            it_has_been_discovered: 'Il a été constaté que la part des restes alimentaires représente environ',
            percent_of_global_waste_volume: '% du volume global des ordures ménagères, soit dans votre cas',
            tons: 'tonnes',
            without_any_change: 'Sans action particulière',
            percent_of_this_volume: '% de ces restes sont considérés comme des déchets issus du gaspillage, soit dans votre cas',
            dont_hesitate_to: 'Bien sûr, si vous avez déjà effectué votre caractérisation et que vous disposez de chiffres plus précis, n\'hésitez pas à',
            edit_values: 'modifier ces valeurs',
            or_to: 'ou à',
            reset_values: 'les réinitialiser à leurs valeur par défaut',
            start_sim: 'Je lance ma simulation',
        }
    }
}
