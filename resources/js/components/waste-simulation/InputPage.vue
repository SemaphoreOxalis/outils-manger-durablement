<template>
    <div class="py-4 px-4">
        <div v-if="editingReferenceValues" class="editing-mask"></div>

        <h4 class="text-center mb-4">{{ get_an_audit }}
            <br> {{ in_15m }}</h4>

        <ul class="stepper linear">

            <!-- STEP 1 -->
            <li class="step">
                <div class="step-title">{{ steps.dates }}</div>
                <div class="step-content">
                    <h4 class="col-12">{{ step_instruction.dates }}</h4>
                    <div class="row ">
                        <div class="col col-6">
                            <label>{{ labels.start_date }}</label>
                            <input type="date"
                                   class="custom-input datepicker number-field browser-default"
                                   id="start"
                                   required
                                   v-model="userInput.startDate"
                                   :max="userInput.endDate">
                        </div>
                        <div class="col col-6">
                            <label>{{ labels.end_date }}</label>
                            <input type="date"
                                   class="custom-input datepicker number-field browser-default"
                                   id="end"
                                   required
                                   v-model="userInput.endDate"
                                   :min="userInput.startDate">
                        </div>
                    </div>
                    <div class="step-actions">
                        <button class="button next-step">{{ nextBtn }} <span class="icon"></span></button>
                    </div>
                </div>
            </li>

            <!-- STEP 2 -->
            <li class="step">
                <div class="step-title waves-effect">{{ steps.dishes }}</div>
                <div class="step-content">
                    <h4 class="col-12">{{ step_instruction.dishes }}</h4>
                    <div class="row">
                        <div class="col col-4">
                            <label>{{ labels.dishes_number }} :</label>
                            <input id="dishes-number"
                                   v-model="userInput.dishesNumber"
                                   type="number"
                                   required
                                   min="1" step="1"
                                   class="custom-input number-field browser-default">
                            <label>{{ labels.dish_cost }}<sup>*</sup> :</label>
                            <input id="dish-cost"
                                   v-model="userInput.dishCost"
                                   type="number"
                                   required
                                   min="0.01" step="0.01"
                                   class="custom-input number-field browser-default">
                            <label>{{ labels.dish_weight }} :</label>
                            <input id="dish-weight"
                                   v-model="userInput.dishWeight"
                                   type="number"
                                   required
                                   min="1" step="1"
                                   class="custom-input number-field browser-default">
                        </div>
                        <div class="col col-8 mt-3 p-3 info">
                            <div class="lighten-3">
                                <p>{{ dish_cost_is_calculated_with }}</p>
                                <p>
                                   {{ calcul_1.line_1 }}<br>
                                   {{ calcul_1.line_2 }}<br>
                                   {{ calcul_1.line_3 }}<br>
                                   {{ calcul_1.line_4 }}<br>
                                   {{ calcul_1.line_5 }}
                                </p>
                                <p><strong>{{ or_with }}</strong>, {{ if_you_externalize }} :</p>
                                <p>{{ calcul_2 }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="step-actions">
                        <button class="button alter previous-step"><span class="icon"></span> {{ prevBtn }}</button>
                        <button class="button next-step">{{ nextBtn }} <span class="icon"></span></button>
                    </div>
                </div>
            </li>

            <!-- STEP 3 -->
            <li class="step">
                <div class="step-title waves-effect">{{ steps.wastes }}</div>
                <div class="step-content">
                    <h4 class="col-12">{{ step_instruction.wastes }}</h4>
                    <p><a href="#">{{ learn_more_about_profiling_ones_wastes }} <span class="icon"></span></a></p>
                    <div class="row">
                        <div class="col col-3">
                            <label>{{ labels.waste_volume }} :</label>
                            <input id="global-waste-volume"
                                   v-model="userInput.globalWasteVolume"
                                   type="number"
                                   required
                                   min="0.001" step="0.001"
                                   class="custom-input number-field w-input browser-default">
                            <label>{{ labels.waste_cost }} :</label>
                            <input id="waste-treatment-cost"
                                   v-model="userInput.wasteTreatmentCost"
                                   type="number"
                                   required
                                   min="0.01" step="0.01"
                                   class="custom-input number-field w-input browser-default">
                        </div>
                        <div class="col col-9 reference-values info p-3 mt-3">
                            <p v-if="defaultValues">{{ following }} <a href="https://www.techopital.com/le-ch-de-niort-travaille-sur-un-modele-de-diagnostic-du-gaspillage-alimentaire-NS_4425.html" target="_blank">{{ niort_waste_profiling }} <span class="icon"></span></a>,</p>
                            <div :class="editingReferenceValues ? 'editing-reference-values' : ''" class="px-2 py-2">
                                <p>{{ it_has_been_discovered }}
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
                                    {{ percent_of_global_waste_volume }}
                                    <strong>{{ foodLeftoversVolumeInGlobalWasteInYourCase }} {{ tons }}</strong>
                                </p>

                                <p>{{ without_any_change }},
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
                                    {{ percent_of_this_volume }}
                                    <strong>{{ actualFoodLeftoversInFoodWasteInYourCase }} {{ tons }}</strong>
                                </p>
                                <button v-if="editingReferenceValues"
                                        :disabled="areThereInvalidValues"
                                        @click="saveLocalReferenceValues"
                                        class="button alter">{{ okBtn }}
                                </button>
                            </div>

                            <br>
                            <p>{{ dont_hesitate_to }}
                                <button class="button alter mr-0" @click.prevent="editingReferenceValues = true">{{ edit_values }}</button>
                                {{ or_to }} <button class="button alter" @click.prevent="resetReferenceValues">{{ reset_values }}</button>
                            </p>
                        </div>
                    </div>
                    <div class="step-actions pb-4">
                        <button class="button alter previous-step"><span class="icon"></span> {{ prevBtn }}</button>
                        <router-link :to="{ name: 'results-page', params: { userInput, referenceValues }}" tag="span">
                            <button :disabled="areThereInvalidData"
                                    class="button"
                                    id="launching-audit-button">
                                {{ start_sim }}
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
import InputPageText from "../../../texts/wasteSimulator/InputPageText";
// validation des données saisies
import InputValidation from "../../helpers/waste-simulation/validation/InputValidation";
// logique principale du composant
import InputLogic from "../../helpers/waste-simulation/calculations/InputLogic";
// intéractions avec la base de donnée
import DataBase from "../../helpers/DataBase";
import WasteDataBase from "../../helpers/waste-simulation/WasteDataBase";
// intéractions avec le localStorage
import LocalStorageHelper from "../../helpers/LocalStorageHelper";
// Petite bibliothèque de fonctions bien pratique pour arrondir les nombres
import NumberFormatter from "../../helpers/NumberFormatter";

export default {

    // déclaration de la dépendance à ces mixins (bibliothèques de fonctions dans des fichiers externes, dans un souci de lisibilité)
    mixins: [
        InputPageText,
        InputValidation,
        InputLogic,
        DataBase,
        WasteDataBase,
        LocalStorageHelper,
        NumberFormatter
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
