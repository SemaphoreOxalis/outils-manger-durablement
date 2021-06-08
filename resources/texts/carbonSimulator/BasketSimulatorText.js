export default {
    data() {
        return {
            how_to: {
                title: 'Comment utiliser ce simulateur de panier de commande',
                use: 'Mode d\'emploi',
                add_prod_to_basket: 'Commencez par ajouter de produits à votre liste de courses via le menu ou en faisant une recherche',
                how_many_and_from_where: 'Vous êtes alors invités à en préciser le nombre et l\'origine',
                behold_your_carbon_impact: 'Vous pouvez alors constater en temps réel votre bilan carbone résumé sous votre panier',
                copy_basket: 'Vous pouvez aussi dupliquer un panier existant',
                add_mock_baskets: 'Vous avez alors la possibilité d\'ajouter des paniers de "simulation" et de les renommer',
                go_wild_and_edit_things: 'N\'hésitez pas à faire varier les produits, leur quantité et leur provenance avant de constater l\'impact de vos changements',
                delete_a_basket: 'Vous pouvez effacer les paniers un par un',
                clear_a_basket: 'ou les vider',
                destroy_them_all: 'ou tous les supprimer d\'un seul clic',
                do_stuff: 'permet d\'effectuer des opérations sur l\'ensemble du panier',
                export_baskets: 'Le bouton "exporter" vous permet de récupérer l\'ensemble des données sur votre logiciel de tableur',
                close_btn: 'Fermer',
            },
            hover: {
                // sur les + à côté des produits sur la liste de gauche
                add_product_to_marked_baskets: 'Ajouter ce produit aux paniers sélectionnés',
                // Sur les checkboxes au dessus des paniers
                mark_as_fillable: 'marquer ce panier afin que les produits saisis y soient déposés',
                // Icônes du panier
                delete_basket: 'supprimer ce panier',
                edit_basket: 'modifier ce panier',
                add_basket: 'dupliquer le panier',
                clear_basket: 'vider le panier',
            },
            baskets: 'Paniers',
            add_new_basket: 'Nouveau panier vide',
            add_to_this_basket: 'Ajouter dans ce panier',
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
                export_btn: 'Exporter les paniers au format tableur'
            },
            add_popup: {
                help: 'Utilisez les touches tabulation et entrée pour passer d\'un champ à l\'autre et valider votre produit',
                you_are_adding: 'Vous ajoutez le produit',
                by_this_amount: 'en quantité de',
                for_that_much_$: 'pour un montant TOTAL de',
                from: 'originaire de',
                in_baskets: 'dans les paniers nommés',
                cancel: 'annuler',
                ok: 'OK',
            },
            edit: {
                i_am_editing_to: 'Je modifie ce panier pour',
                set_origin_to_france: 'Je modifie tous les produits qui le peuvent en origine France',
            },
            switch_labels: {
                compare_to_first: 'Comparer avec le premier panier',
                compare_to_previous: 'Comparer avec le panier précédent',
            },
        }
    }
}
