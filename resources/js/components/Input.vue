<template>
    <div class="py-4 px-4">
        <h1>Etape 1/2: saisie des données</h1>

        <div>
            <p>Précisez la période sur laquelle vos données vont porter</p>
            <label for="start">Du </label>
            <input type="date" id="start" required>
            <label for="end">au </label>
            <input type="date" id="end" required>
        </div>

        <div>
            <p>Saisissez les informations sur les repas produits/commandés par votre cuisine sur cette période</p>

            <label for="dishes-number">Nombre de repas :</label>
            <input id="dishes-number"
                   type="number"
                   required
                   min="0" step="1" value="0"
                   class="input">

            <br>
            <label for="dish-cost">Coût de revient d'un repas (en €) :</label>
            <input id="dish-cost"
                   type="number"
                   required
                   min="0" step="0.01" value="0"
                   class="input">

            <span class="detail">
                Le pix de revient d'un repas peut être calculé grâce à la formule suivante :
                [(montant total des achats alimentaires (matière première) + masse salariale de l'équipe de restauration + investissements + coût de l'énergie) <strong>ou</strong> (en cas d'externalisation, coût facturé)] / nombre de repas produits
            </span>
        </div>

        <div id="reference-values">
            <p>Saisissez les informations sur les déchets (hors déchets médicaux pour les structures médicales) <strong>sur
                la même période</strong></p>
            <p><a href="#">En savoir plus sur la méthode pour réaliser la caractérisation de ses déchets</a></p>

            <label for="global-waste-volume">Volume constaté (en tonnes)</label>
            <input id="global-waste-volume"
                   type="number"
                   required
                   min="0" step="0.001" value="0"
                   class="input">

            <div :class="editingReferenceValues ? 'editingReferenceValues' : ''">
                <p>Suite à la <a href="#">caractérisation des déchets du C.H de Niort,</a></p>
                <p>Il a été constaté que la part des restes alimentaires représente environ
                    <span v-if="editingReferenceValues">
                    <input type="number"
                           required
                           min="0" max="100" step="0.01"
                           class="input"
                           v-model="usedData.foodLeftoversVolumeInGlobalWaste">
                </span>
                    <span v-else>
                    {{ usedData.foodLeftoversVolumeInGlobalWaste }}
                </span>
                    % du volume global des ordures ménagères, soit dans votre cas <strong>..... tonnes</strong></p>
                <p>Sans action particulière,
                    <span v-if="editingReferenceValues">
                    <input type="number"
                           required
                           min="0" max="100" step="0.01"
                           class="input"
                           v-model="usedData.actualFoodLeftoversInFoodWaste">
                </span>
                    <span v-else>
                    {{ usedData.actualFoodLeftoversInFoodWaste }}
                </span>
                    % de ces restes sont considérés comme des déchets issus du gaspillage, soit dans votre cas <strong>.....
                        tonnes</strong>
                    <button v-if="editingReferenceValues" @click="saveLocalReferenceValues"
                            class="btn btn-primary btn-sm">OK
                    </button>
                </p>
            </div>

            <br>
            <p>Bien sûr, si vous avez déjà effectué votre caractérisation et que vous disposez de chiffres plus précis,
                n'hésitez pas à
                <a href="#reference-values" @click="editingReferenceValues = true">modifier ces valeurs</a>
                (ou à <a href="#">les réinitialiser à leurs valeur par défaut</a>)
            </p>

            <label for="waste-treatment-cost">Coût de traitement par tonne (en €) :</label>
            <input id="waste-treatment-cost"
                   type="number"
                   required
                   min="0" step="0.01" value="0"
                   class="input">

            <router-link to="/results" tag="span">
                <button class="btn btn-primary btn-lg btn-block py-4" id="launching-audit-button">Je lance ma
                    simulation
                </button>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                usedData: {
                    foodLeftoversVolumeInGlobalWaste: 0,
                    actualFoodLeftoversInFoodWaste: 0
                },
                editingReferenceValues: false
            }
        },

        created() {
            this.checkWasteReferenceValues();
        },

        methods: {
            checkWasteReferenceValues() {
                if (localStorage.getItem('localReferenceValues')) {
                    console.log(localStorage.getItem('localReferenceValues'));
                } else {
                    this.fetchWasteReferenceValuesFromDB();
                }
            },

            fetchWasteReferenceValuesFromDB() {
                axios.get('/api/waste-values').then((response) => {
                    this.usedData.foodLeftoversVolumeInGlobalWaste = response.data[0].value;
                    this.usedData.actualFoodLeftoversInFoodWaste = response.data[1].value;
                });
            },

            saveLocalReferenceValues() {
                this.editingReferenceValues = false;
            }
        }
    }
</script>

<style>
    .detail {
        display: inline-block;
        max-width: 500px;
    }

    #launching-audit-button {
        display: block;
        max-width: 500px;
        margin: auto;
    }

    .input:invalid {
        background-color: lightpink;
    }

    .editingReferenceValues {
        padding: 10px;
        background-color: #98dfb6;
    }
</style>
