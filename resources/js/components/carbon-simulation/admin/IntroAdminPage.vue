<template>
    <div class="mt-4">
        <h4>Etapes du tutorial</h4>

        <p>Aucun champ n'est réellement "requis"</p>
        <ul>
            <li>Le texte de la "carte tuto" peut être saisi soit dans le champ "Titre", soit dans le champ "Texte"</li>
            <li>En l'absence d'élément, la "carte tuto" se positionnera au milieu de l'écran</li>
            <li>En l'absence de position définie, elle essaiera de choisir la position la plus adaptée (résultat pas forcément super)</li>
            <li>Les éléments sont visés par Intro.js grâce à la méthode <em>document.querySelector()</em> qui cible automatiquement le premier élément trouvé, pas besoin donc de <em>first-child</em>, etc...</li>
        </ul>

        <div class="d-flex text-center">
            <p class="w-5"></p>
            <p class="w-15"><strong>Titre</strong></p>
            <p class="w-50"><strong>Texte</strong></p>
            <p class="w-15"><strong>Element</strong></p>
            <p class="w-10"><strong>Position</strong></p>
            <p class="w-5"></p>
        </div>

        <draggable v-model="steps"
                   class="dragArea"
                   handle=".handle"
                   filter=".ignore-draggable"
                   :preventOnFilter="false"
                   :animation="150"
                   @change="saveStepsOrder">
            <div v-for="(step, i) in steps"
                 :key="step.id"
                 class="d-flex align-items-center handle">
                <p class="w-5 align-self-center d-flex">{{ parseInt(step.index) + 1 }} <i class="icon icon-arrows mr-2 ml-auto"></i></p>
                <p class="w-15 pr-2 d-flex">
                    <input v-model="step.title" @change="updateStep(step)" type="text" class="ignore-draggable custom-input browser-default number-field">
                </p>
                <p class="w-50 pr-2">
                    <textarea v-model="step.text" @change="updateStep(step)" type="text" class="ignore-draggable custom-input browser-default number-field mw-100"></textarea>
                </p>
                <p class="w-15 pr-2">
                    <input v-model="step.element" @change="updateStep(step)" type="text" class="ignore-draggable custom-input browser-default number-field">
                </p>
                <p class="w-10 pr-2">
                    <select v-model="step.position" @change="updateStep(step)" type="text" class="ignore-draggable custom-select input custom-input">
                        <option value=""></option>
                        <option value="up">Top</option>
                        <option value="right">Right</option>
                        <option value="bottom">Bottom</option>
                        <option value="left">Left</option>
                    </select>
                </p>
                <p class="w-5">
                    <a @click="deleteStep(step.id)" class="trash-icon">
                        <i class="ignore-draggable icon"></i>
                    </a>
                </p>
            </div>
        </draggable>

        <div class="d-flex">
            <p class="w-5"></p>
            <p class="w-15 pr-2"><input v-model="newStep.title" type="text" class="custom-input browser-default number-field"></p>
            <p class="w-50 pr-2"><textarea v-model="newStep.text" type="text" class="custom-input browser-default number-field mw-100"></textarea></p>
            <p class="w-15 pr-2"><input v-model="newStep.element" type="text" class="custom-input browser-default number-field"></p>
            <p class="w-10 pr-2">
                <select v-model="newStep.position" type="text" class="custom-select input custom-input">
                    <option value=""></option>
                    <option value="up">Top</option>
                    <option value="right">Right</option>
                    <option value="bottom">Bottom</option>
                    <option value="left">Left</option>
                </select>
            </p>
        </div>
        <button @click="addStep" class="button">Ajouter une étape</button>
    </div>
</template>

<script>
import IntroStepsDatabase from "../../../helpers/carbon-simulation/database/IntroStepsDatabase";
const draggable = () => import(
    /* webpackChunkName: "js/draggable" */
    'vuedraggable'
    );
export default {
    components: {
        draggable,
    },
    mixins: [
        IntroStepsDatabase,
    ],
    data() {
        return {
            steps: [],
            newStep: {
                title: null,
                text: null,
                element: null,
                position: null,
                index: Number,
            }
        }
    },
    async mounted() {
        await this.fetchSteps();
    },
    methods: {
        async refreshSteps() {
            await this.fetchSteps();
        },
        saveStepsOrder(e) {
            try {
                this.steps.forEach((s, i) => {
                    s.index = i;
                    this.updateStep(s);
                });
            } catch(e) {
                flash('Erreur', 'danger');
            }
        },
    }
}
</script>
