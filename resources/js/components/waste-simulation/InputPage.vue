<template>
    <div class="py-4 px-4">
        <div v-if="editingReferenceValues" class="editing-mask"></div>
        <h1 class="mb-4">Simulateur de gaspillage <br> pour la restauration collective</h1>

        <h4 class="text-center mb-4">Obtenez une estimation économique et quantitative du gaspillage alimentaire
            <br> de votre établissement en 15 minutes</h4>

        <ul class="stepper linear">

            <!-- STEP 1 -->
            <li class="step">
                <div class="step-title">Les dates</div>
                <div class="step-content">
                    <h4 class="col-12">Précisez la période sur laquelle vos données vont porter :</h4>
                    <div class="row ">
                        <div class="col col-6">
                            <label>Date de début :</label>
                            <input type="date"
                                   class="custom-input datepicker number-field browser-default"
                                   id="start"
                                   required
                                   v-model="userInput.startDate"
                                   :max="userInput.endDate">
                        </div>
                        <div class="col col-6">
                            <label>Date de fin :</label>
                            <input type="date"
                                   class="custom-input datepicker number-field browser-default"
                                   id="end"
                                   required
                                   v-model="userInput.endDate"
                                   :min="userInput.startDate">
                        </div>
                    </div>
                    <div class="step-actions">
                        <button class="button next-step">suivant <span class="icon"></span></button>
                    </div>
                </div>
            </li>

            <!-- STEP 2 -->
            <li class="step">
                <div class="step-title waves-effect">Les repas</div>
                <div class="step-content">
                    <h4 class="col-12">Saisissez les informations sur les repas produits/commandés par votre cuisine
                        sur cette période</h4>
                    <div class="row">
                        <div class="col col-4">
                            <label>Nombre de repas :</label>
                            <input id="dishes-number"
                                   v-model="userInput.dishesNumber"
                                   type="number"
                                   required
                                   min="1" step="1"
                                   class="custom-input number-field browser-default">
                            <label>Coût de revient d&#x27;un repas<sup>*</sup> :</label>
                            <input id="dish-cost"
                                   v-model="userInput.dishCost"
                                   type="number"
                                   required
                                   min="0.01" step="0.01"
                                   class="custom-input number-field browser-default">
                            <label>Poids moyen d'un repas (en g) :</label>
                            <input id="dish-weight"
                                   v-model="userInput.dishWeight"
                                   type="number"
                                   required
                                   min="1" step="1"
                                   class="custom-input number-field browser-default">
                        </div>
                        <div class="col col-8 mt-3 p-3 info">
                            <div class="lighten-3">
                                <p>*Le prix de revient d’un repas peut être calculé grâce à la formule suivante :</p>
                                <p>[(montant total des achats alimentaires (matière première)
                                    + masse salariale de l&#x27;équipe de restauration
                                    + investissements
                                    + coût de l&#x27;énergie)
                                    / nombre de repas produits]</p>
                                <p><strong>ou</strong>, en cas d&#x27;externalisation :</p>
                                <p>[coût facturé / nombre de repas produits]</p>
                            </div>
                        </div>
                    </div>
                    <div class="step-actions">
                        <button class="button alter previous-step"><span class="icon"></span> retour</button>
                        <button class="button next-step">suivant <span class="icon"></span></button>
                    </div>
                </div>
            </li>

            <!-- STEP 3 -->
            <li class="step">
                <div class="step-title waves-effect">Les déchets</div>
                <div class="step-content">
                    <h4 class="col-12">Saisissez les informations sur les déchets (hors déchets médicaux pour les
                        structures médicales) sur la même période.</h4>
                    <p><a href="#">En savoir plus sur la méthode pour réaliser la caractérisation de ses déchets <span class="icon"></span></a></p>
                    <div class="row">
                        <div class="col col-3">
                            <label>Volume constaté (en tonnes) :</label>
                            <input id="global-waste-volume"
                                   v-model="userInput.globalWasteVolume"
                                   type="number"
                                   required
                                   min="0.001" step="0.001"
                                   class="custom-input number-field w-input browser-default">
                            <label>Coût de traitement par tonnes (en €) :</label>
                            <input id="waste-treatment-cost"
                                   v-model="userInput.wasteTreatmentCost"
                                   type="number"
                                   required
                                   min="0.01" step="0.01"
                                   class="custom-input number-field w-input browser-default">
                        </div>
                        <div class="col col-9 reference-values info p-3 mt-3">
                            <p v-if="defaultValues">Suite à la <a href="#">caractérisation des déchets du C.H de Niort <span class="icon"></span></a>,</p>
                            <div :class="editingReferenceValues ? 'editing-reference-values' : ''" class="px-2 py-2">
                                <p>Il a été constaté que la part des restes alimentaires représente environ
                                    <span v-if="editingReferenceValues">
                                        <input type="number"
                                               required
                                               min="0.01" max="100" step="0.01"
                                               class="custom-input number-field browser-default"
                                               v-model="referenceValues.foodLeftoversVolumeInGlobalWaste">
                                    </span>
                                    <span v-else>
                                        {{ referenceValues.foodLeftoversVolumeInGlobalWaste }}
                                    </span>
                                    % du volume global des ordures ménagères, soit dans votre cas
                                    <strong>{{ foodLeftoversVolumeInGlobalWasteInYourCase }} tonnes</strong>
                                </p>

                                <p>Sans action particulière,
                                    <span v-if="editingReferenceValues">
                                        <input type="number"
                                               required
                                               min="0.01" max="100" step="0.01"
                                               class="custom-input number-field browser-default"
                                               v-model="referenceValues.actualFoodLeftoversInFoodWaste">
                                    </span>
                                    <span v-else>
                                        {{ referenceValues.actualFoodLeftoversInFoodWaste }}
                                    </span>
                                    % de ces restes sont considérés comme des déchets issus du gaspillage, soit dans votre cas
                                    <strong>{{ actualFoodLeftoversInFoodWasteInYourCase }} tonnes</strong>
                                </p>
                                <button v-if="editingReferenceValues"
                                        :disabled="areThereInvalidValues"
                                        @click="saveLocalReferenceValues"
                                        class="button alter">OK
                                </button>
                            </div>

                            <br>
                            <p>Bien sûr, si vous avez déjà effectué votre caractérisation et que vous disposez de chiffres plus précis, n'hésitez pas à
                                <button class="button alter mr-0" @click.prevent="editingReferenceValues = true">modifier ces valeurs</button>
                                ou à <button class="button alter" @click.prevent="resetReferenceValues">les réinitialiser à leurs valeur par défaut</button>
                            </p>
                        </div>
                    </div>
                    <div class="step-actions pb-4">
                        <button class="button alter previous-step"><span class="icon"></span> retour</button>
                        <router-link :to="{ name: 'results-page', params: { userInput, referenceValues }}" tag="span">
                            <button :disabled="areThereInvalidData"
                                    class="button"
                                    id="launching-audit-button">
                                Je lance ma simulation
                            </button>
                        </router-link>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
// import de bibliothèques de fonctions
// validation des données saisies
import InputValidation from "../../helpers/waste-simulation/validation/InputValidation";
// logique principale du composant
import InputLogic from "../../helpers/waste-simulation/calculations/InputLogic";
// intéractions avec la base de donnée
import DataBase from "../../helpers/DataBase";
// intéractions avec le localStorage
import LocalStorageHelper from "../../helpers/LocalStorageHelper";

// Petite bibliothèque de fonctions bien pratique pour arrondir les nombres
import NumberRounder from "../../helpers/NumberRounder";

export default {

    // déclaration de la dépendance à ces mixins (bibliothèques de fonctions dans des fichiers externes, dans un souci de lisibilité)
    mixins: [
        InputValidation,
        InputLogic,
        DataBase,
        LocalStorageHelper,
        NumberRounder
    ],

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
                dishesNumber: 100000,       // précis à 1
                dishCost: 3,                // précis à 0.01 €
                dishWeight: 400,            // précis à 1 g
                globalWasteVolume: 15,      // précis à 0.001 T
                wasteTreatmentCost: 100,    // précis à 0.01 €
                startDate: null,
                endDate: null
            },

            // Booléens servant au feedback visuel lorsqu'on édite les valeurs de référence
            editingReferenceValues: false,
            defaultValues: true
        }
    },

    // A la création du composent (i.e quand on arrive sur la "page")
    created() {

        // Va chercher les valeurs de référence, cf. méthode ci-dessous
        this.checkWasteReferenceValues();
    },

    mounted() {
        let stepper = document.querySelector('.stepper');
        let stepperInstance = new MStepper(stepper, {
            // options
            firstActive: 0 // this is the default
        })
    },

    // Fonctions utilisées par le composant
    methods: {

        // Va chercher les valeurs de référence
        checkWasteReferenceValues() {

            // Soit dans le local Storage (valeurs personnalisées)
            if (localStorage.getItem('localReferenceValues')) {
                this.referenceValues = this.fetchWasteReferenceValuesFromLocalStorage();
                this.defaultValues = false;
            }
            // Sinon en BDD (valeurs par défaut)
            else {
                this.fetchWasteReferenceValuesFromDB();
                this.defaultValues = true;
            }
        },

        // Enregistre en localStorage les valeurs personnalisées de l'utilisateur
        saveLocalReferenceValues() {
            const values = JSON.stringify(this.referenceValues);
            this.savePersonalValuesToLocalStorage(values);

            this.editingReferenceValues = false;
            this.defaultValues = false;

            flash('Les nouvelles valeurs ont correctement été enregistrées dans votre navigateur');
        },

        // Réinitialise les valeurs de référence à leurs valeurs par défaut depuis la BDD
        resetReferenceValues() {
            this.fetchWasteReferenceValuesFromDB();

            this.defaultValues = true;

            flash('Les valeurs ont été correctement réinitialisées depuis la base de donnée');
        }
    }
}
</script>
