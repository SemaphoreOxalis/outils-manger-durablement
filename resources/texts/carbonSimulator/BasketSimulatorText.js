export default {
    data() {
        return {
            how_to: {
                title: 'Comment utiliser ce simulateur de listes de courses',
                use: 'Mode d\'emploi',
                add_prod_to_basket: 'Commencez par ajouter de produits à votre liste de courses via le menu ou en faisant une recherche',
                how_many_and_from_where: 'Vous êtes alors invités à en préciser le nombre et l\'origine',
                behold_your_carbon_impact: 'Vous pouvez alors constater en temps réel votre bilan carbone résumé sous votre liste',
                copy_basket: 'Vous pouvez aussi dupliquer une liste existante',
                add_mock_baskets: 'Vous avez alors la possibilité d\'ajouter des listes de "simulation" et de les renommer',
                go_wild_and_edit_things: 'N\'hésitez pas à faire varier les produits, leur quantité et leur provenance avant de constater l\'impact de vos changements',
                delete_a_basket: 'Vous pouvez effacer les listes unes par unes',
                clear_a_basket: 'ou les vider',
                destroy_them_all: 'ou toutes les supprimer d\'un seul clic',
                do_stuff: 'permet d\'effectuer des opérations sur l\'ensemble d\'une liste',
                export_baskets: 'Le bouton "exporter" vous permet de récupérer l\'ensemble des données sur votre logiciel de tableur',
                close_btn: 'Fermer',
            },
            hover: {
                // sur les + à côté des produits sur la liste de gauche
                add_product_to_marked_baskets: 'Ajouter ce produit aux listes sélectionnées',
                // Sur les checkboxes au dessus des listes
                mark_as_fillable: 'marquer cette liste afin que les produits saisis y soient déposés',
                // Icônes du liste
                delete_basket: 'supprimer cette liste',
                edit_basket: 'modifier cette liste',
                add_basket: 'dupliquer la liste',
                clear_basket: 'vider la liste',
            },
            baskets: 'Listes',
            add_new_basket: 'Nouvelle liste vide',
            add_to_this_basket: 'Ajouter dans cette liste',
            placeholders: {
                type_in_your_product: 'Tapez le nom de votre produit puis sélectionnez-le avec la souris ou les touches de votre clavier',
                search_prod: 'Rechercher un produit',
            },
            impact: {
                title: {
                    carbon: 'Bilan Carbone',
                    money: 'Bilan Financier',
                },
                product_impact: 'Impact Produit',
                transportation_impact: 'Impact Transport',
                carbon: 'Equivalent carbone',
                equals_to: 'équivaut à',
                money: 'Votre bilan financier',
                co2_per_euro: 'Bilan carbone par euro dépensé',
            },
            part: {
                prod: 'Part produit',
                trans: 'Part transport',
            },
            ventilation: {
                carbon: 'Ventilation de l\'empreinte carbone en grammes de CO2',
                money: 'Ventilation des dépenses (en €)',
            },
            origin: {
                label: 'Origine',
                dep: 'Département',
                reg: 'Région',
                fr: 'France',
                world: 'Reste du Monde',
            },
            sum: 'Total',
            btn: {
                export_btn: 'Exporter les listes au format tableur'
            },
            add_popup: {
                help: 'Utilisez les touches tabulation et entrée pour passer d\'un champ à l\'autre et valider votre produit',
                you_are_adding: 'Vous ajoutez le produit',
                by_this_amount: 'en quantité de',
                for_that_much_$: 'pour un montant TOTAL de',
                from: 'originaire de',
                in_baskets: 'dans les listes nommées',
                cancel: 'annuler',
                ok: 'OK',
            },
            edit: {
                i_am_editing_to: 'Je modifie cette liste pour',
                set_origin_to_france: 'Je modifie tous les produits qui le peuvent en origine France',
            },
            switch_labels: {
                compare_to_first: 'Comparer avec la première liste',
                compare_to_previous: 'Comparer avec la liste précédente',
            },
        }
    }
}
