<template>
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container text-center" ref="modal">
                    <div class="modal-body">
                        <div>
                            <ul class="stepper linear">

                                <!-- STEP 1 -->
                                <li class="step">
                                    <div class="step-title">Choisissez un fichier</div>
                                    <div class="step-content">
                                        <form @change="checkFile">
                                            <div v-if="errors.length" class="alert alert-danger">
                                                <ul>
                                                    <li v-for="error in errors">{{ error }}</li>
                                                </ul>
                                            </div>
                                            <input type="file" accept=".carbon" id="file-input">
                                        </form>
                                        <div class="step-actions">
                                            <button :class="fileOK ? 'button next-step' : 'button alter next-step' "
                                                    :disabled="!fileOK">OK <span class="icon"></span></button>
                                        </div>
                                    </div>
                                </li>

                                <!-- STEP 2 -->
                                <li class="step">
                                    <div class="step-title waves-effect">Sélectionnez les listes à importer</div>
                                    <div class="step-content pt-5">
                                        <div v-for="basket in fileData"
                                             class="basket-select custom-control custom-checkbox text-left ml-5 overflow-visible">
                                            <input type="checkbox"
                                                   v-model="basket.isSelected"
                                                   class="custom-control-input">
                                            <label class="custom-control-label">
                                                {{ basket.name }}
                                            </label>
                                            <a class="icon icon-info-circle ml-3 pt-3" :title="getTitle(basket.products)">
                                            </a>
                                        </div>
                                        <div class="step-actions">
                                            <button class="button alter previous-step"><span class="icon"></span> Retour</button>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="modal-footer">
                        <div class="mt-2">
                            <button :class="fileOK && basketsToLoad.length ? 'modal-default-button button' : 'modal-default-button button alter'"
                                    @click="loadBaskets"
                                    :disabled="!fileOK || !basketsToLoad.length">
                                Charger
                            </button>
                            <button class="modal-default-button button alter"
                                    @click="cancel">
                                Annuler
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    data() {
        return {
            errors: [],
            fileData: [],
            fileOK: false,
            stepperInstance: Object,
        }
    },
    computed: {
        basketsToLoad: function() {
            return this.fileData.filter(basket => basket.isSelected);
        }
    },
    mounted() {
        let stepper = document.querySelector('.stepper');
        this.stepperInstance = new MStepper(stepper, {
            firstActive: 0,
            validationFunction: () => {
                return this.fileOK;
            },
        });
    },
    methods: {
        checkFile(e) {
            let file = e.target.files[0];
            this.fileData = '';
            this.errors = [];

            if (!file) {
                this.errors.push("Pas de fichier");
            }
            if (!file.name.endsWith('.carbon')) {
                this.errors.push("Le fichier doit être un fichier .carbon");
            }
            if (!this.errors.length) {
                let reader = new FileReader();
                reader.onload = (ev) => {
                    try {
                        this.fileData = JSON.parse(ev.target.result);
                        this.fileOK = true;
                        this.stepperInstance.nextStep();
                        return true;
                    } catch {
                        this.errors.push("Mauvais format de données détecté");
                        this.fileOK = false;
                        return false;
                    }
                };
                reader.readAsText(file);
            }
            this.fileOK = false;
            return false;
        },
        loadBaskets() {
            this.$emit('load-baskets', this.basketsToLoad);
        },
        cancel() {
            this.$emit('exit-without-loading');
        },
        getTitle(prods) {
            let title = '';
            prods.forEach(p => {
                if(p.type === 'prod') {
                    title += '- ' + p.name + '\n';
                }
                if(p.type === 'special' && p.id.includes('block-start')) {
                    title += '----------\n' + p.name + '\n';
                }
                if(p.type === 'special' && p.id.includes('block-fnish')) {
                    title += '----------\n';
                }
            });
            return title;
        }
    }
}
</script>