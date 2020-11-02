export default {
    data() {
        return {
            tabs: {
                products: 'Produits',
                categories: 'Catégories',
                units: 'Unités',
                origins: 'Origines',
            },
            okBtn: 'OK',
            howTo: {
                youCanDoStuffWith: 'ici, vous pouvez renommer, ajouter ou supprimer des',
                products: 'produits',
                categories: 'catégories',
                units: 'unités',
                origins: 'origines',
                fieldsCantBeNull: '(les champs ne peuvent être égaux à 0)',
                warning: {
                    warning: 'ATTENTION :',
                    deletingCategory: 'supprimer une catégorie supprimera tous les produits associés',
                    deletingUnit: 'supprimer une unité supprimera tous les produits associés',
                }
            },
        }
    }
}
