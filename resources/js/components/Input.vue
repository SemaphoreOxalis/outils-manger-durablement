<template>
    <div class="py-4 px-4">
        <div v-if="editingReferenceValues" class="editing-mask"></div>
        <h1>Etape 1/2: saisie des données</h1>

        <div>
            <p>Précisez la période sur laquelle vos données vont porter</p>
            <label for="start">Du </label>
            <input type="date"
                   id="start"
                   required
                   v-model="userInput.startDate"
                   :max="userInput.endDate">
            <label for="end">au </label>
            <input type="date"
                   id="end"
                   required
                   v-model="userInput.endDate"
                   :min="userInput.startDate">
        </div>

        <div>
            <p>Saisissez les informations sur les repas produits/commandés par votre cuisine sur cette période</p>

            <label for="dishes-number">Nombre de repas :</label>
            <input id="dishes-number"
                   v-model="userInput.dishesNumber"
                   type="number"
                   required
                   min="1" step="1"
                   class="input">

            <br>
            <label for="dish-cost">Coût de revient d'un repas (en €) :</label>
            <input id="dish-cost"
                   v-model="userInput.dishCost"
                   type="number"
                   required
                   min="0.01" step="0.01"
                   class="input">

            <span class="detail">
                Le pix de revient d'un repas peut être calculé grâce à la formule suivante :
                [(montant total des achats alimentaires (matière première) + masse salariale de l'équipe de restauration + investissements + coût de l'énergie) <strong>ou</strong> (en cas d'externalisation, coût facturé)] / nombre de repas produits
            </span>
        </div>

        <div id="reference-values">
            <p>Saisissez les informations sur les déchets (hors déchets médicaux pour les structures médicales) <strong>sur la même période</strong></p>
            <p><a href="#">En savoir plus sur la méthode pour réaliser la caractérisation de ses déchets</a></p>

            <label for="global-waste-volume">Volume constaté (en tonnes)</label>
            <input id="global-waste-volume"
                   v-model="userInput.globalWasteVolume"
                   type="number"
                   required
                   min="0.001" step="0.001"
                   class="input">


            <p>Suite à la <a href="#">caractérisation des déchets du C.H de Niort,</a></p>
            <div :class="editingReferenceValues ? 'editing-reference-values' : ''" class="px-2 py-2">
                <p>Il a été constaté que la part des restes alimentaires représente environ
                    <span v-if="editingReferenceValues">
                        <input type="number"
                               required
                               min="0.01" max="100" step="0.01"
                               class="input"
                               v-model="referenceValues.foodLeftoversVolumeInGlobalWaste">
                    </span>
                    <span v-else>
                        {{ referenceValues.foodLeftoversVolumeInGlobalWaste }}
                    </span>
                    % du volume global des ordures ménagères, soit dans votre cas
                    <strong>{{ roundToThreeDecimal(foodLeftoversVolumeInGlobalWasteInYourCase) }} tonnes</strong>
                </p>

                <p>Sans action particulière,
                    <span v-if="editingReferenceValues">
                        <input type="number"
                               required
                               min="0.01" max="100" step="0.01"
                               class="input"
                               v-model="referenceValues.actualFoodLeftoversInFoodWaste">
                    </span>
                    <span v-else>
                        {{ referenceValues.actualFoodLeftoversInFoodWaste }}
                    </span>
                    % de ces restes sont considérés comme des déchets issus du gaspillage, soit dans votre cas
                    <strong>{{ roundToThreeDecimal(actualFoodLeftoversInFoodWasteInYourCase) }} tonnes</strong>
                </p>
                <button v-if="editingReferenceValues"
                        :disabled="areThereInvalidValues"
                        @click="saveLocalReferenceValues"
                        class="btn btn-primary btn-sm">OK
                </button>
            </div>

            <br>
            <p>Bien sûr, si vous avez déjà effectué votre caractérisation et que vous disposez de chiffres plus précis, n'hésitez pas à
                <a href="#reference-values" @click="editingReferenceValues = true">modifier ces valeurs</a>
                (ou à <a href="#reference-values" @click="resetReferenceValues">les réinitialiser à leurs valeur par défaut</a>)
            </p>

            <label for="waste-treatment-cost">Coût de traitement par tonne (en €) :</label>
            <input id="waste-treatment-cost"
                   v-model="userInput.wasteTreatmentCost"
                   type="number"
                   required
                   min="0.01" step="0.01"
                   class="input">

            <router-link to="/results" tag="span">
                <button :disabled="areThereInvalidData" class="btn btn-primary btn-lg btn-block py-4"
                        id="launching-audit-button">
                    Je lance ma simulation
                </button>
            </router-link>
        </div>
    </div>
</template>

<script>
    // Petite bibliothèque de fonctions bien pratiques
    import NumberRounder from "../helpers/NumberRounder";

    export default {

        // déclaration de la dépendance à ce mixin
        mixins: [
            NumberRounder
        ],

        // A la création du composent (i.e quand on arrive sur la "page")
        created() {

            // Va chercher les valeurs de référence, cf. methods ci-dessous
            this.checkWasteReferenceValues();
        },

        // initialisation des données utilisées par le composant
        data() {
            return {

                // Valeurs de référence
                referenceValues: {
                    foodLeftoversVolumeInGlobalWaste: 0,
                    actualFoodLeftoversInFoodWaste: 0
                },

                // Champs à remplir
                userInput: {
                    dishesNumber: 1,        // précis à 1
                    dishCost: 1,            // précis à 0.01
                    globalWasteVolume: 1,   // précis à 0.001
                    wasteTreatmentCost: 1,  // précis à 0.01
                    startDate: null,
                    endDate: null
                },

                // Booléen servant au feedback visuel lorsqu'on édite les valeurs de référence
                editingReferenceValues: false
            }
        },

        // Données calculées en fonction des sonnées saisies
        computed: {

            // VALIDATION - empêche de continuer si les données saisies ne sont pas pertinentes

            // validation des données saisies pour l'audit ( supérieures à 0 + dates valables )
            areThereInvalidData: function () {
                if (this.areThereInvalidValues) {
                    return true;
                }
                if (this.userInput.dishesNumber < 1 ||
                    this.userInput.dishCost < 0.01 ||
                    this.userInput.globalWasteVolume < 0.001 ||
                    this.userInput.wasteTreatmentCost < 0.01) {
                    return true;
                }
                if (!this.userInput.startDate ||
                    !this.userInput.endDate ||
                    this.userInput.startDate > this.userInput.endDate) {
                    return true;
                }
                return false;
            },

            // validation des valeurs de référence ( entre 0 et 100 %)
            areThereInvalidValues: function () {
                if (this.referenceValues.foodLeftoversVolumeInGlobalWaste < 0.01 ||
                    this.referenceValues.foodLeftoversVolumeInGlobalWaste > 100) {
                    return true;
                }
                if (this.referenceValues.actualFoodLeftoversInFoodWaste < 0.01 ||
                    this.referenceValues.actualFoodLeftoversInFoodWaste > 100) {
                    return true;
                }
                return false;
            },

            // CALCULS - "soit dans votre cas ..... tonnes"

            // calcul de la part fermentescible globale ( environ 25 % du volume global de déchets )
            foodLeftoversVolumeInGlobalWasteInYourCase: function() {
                return ( this.referenceValues.foodLeftoversVolumeInGlobalWaste / 100 ) * this.userInput.globalWasteVolume;
            },

            // calcul du volume de gaspillage alimentaire ( environ 75 % de la part fermentescible globale )
            actualFoodLeftoversInFoodWasteInYourCase: function() {
                return ( this.referenceValues.actualFoodLeftoversInFoodWaste / 100 ) * this.foodLeftoversVolumeInGlobalWasteInYourCase;
            },
        },

        // Fonctions utilisées par le composant
        methods: {

            // Va chercher les valeurs de référence
            checkWasteReferenceValues() {

                // Soit dans le local Storage (valeurs personnalisées)
                if (localStorage.getItem('localReferenceValues')) {
                    this.fetchWasteReferenceValuesFromLocalStorage()
                }
                // Sinon en BDD (valeurs par défaut)
                else {
                    this.fetchWasteReferenceValuesFromDB();
                }
            },

            // Va chercher les valeurs de référence depuis la BDD
            fetchWasteReferenceValuesFromDB() {
                axios.get('/api/waste-values').then((response) => {
                    localStorage.removeItem('localReferenceValues');

                    this.referenceValues.foodLeftoversVolumeInGlobalWaste = response.data[0].value;
                    this.referenceValues.actualFoodLeftoversInFoodWaste = response.data[1].value;
                });
            },

            // Va chercher les valeurs de référence depuis le localStorage
            fetchWasteReferenceValuesFromLocalStorage() {
                this.referenceValues = JSON.parse(localStorage.getItem('localReferenceValues'));
            },

            // Enregistre en localStorage les valeurs personnalisées de l'utilisateur
            saveLocalReferenceValues() {
                const parsed = JSON.stringify(this.referenceValues);
                localStorage.setItem('localReferenceValues', parsed);

                this.editingReferenceValues = false;
                flash('Les nouvelles valeurs ont correctement été enregistrées dans votre navigateur');
            },

            // Réinitialise les valeurs de référence à leurs valeurs par défaut depuis la BDD
            resetReferenceValues() {
                this.fetchWasteReferenceValuesFromDB();
                flash('Les valeurs ont été correctement réinitialisées depuis la base de donnée');
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

    .editing-reference-values {
        position: relative;
        background-color: white;
        z-index: 999;
    }

    .editing-mask {
        position: fixed;
        z-index: 666;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
    }
</style>
