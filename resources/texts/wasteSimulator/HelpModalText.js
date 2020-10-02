export default {
    data() {
        return {
            dish_cost_is_calculated: 'Le prix de revient peut être calculé à partir :',
            from: {
                food_cost: 'du montant total des achats alimentaires',
                team_size: 'de la masse salariale de l\'équipe de restauration',
                investment: 'du coût des investissements',
                energy_cost: 'du coût de l\'énergie',
                unit_cost_of_bought_dish: 'du coût unitaire d\'un repas facturé',
            },
            or_with: 'OU',
            if_you_externalize: 'dans le cas où votre établissement fait appel à un prestataire :',
            okBtn: 'OK',
        }
    }
}
