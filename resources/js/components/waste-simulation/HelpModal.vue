<template>
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">

                    <div class="modal-body">
                        <p>{{ dish_cost_is_calculated }}</p>
                        <ul>
                            <li>{{ from.food_cost }}</li>
                            <li>{{ from.team_size }}</li>
                            <li>{{ from.investment }}</li>
                            <li>{{ from.energy_cost }}</li>
                        </ul>
                        <p><strong>{{ or_with }}</strong>, {{ if_you_externalize }}</p>
                        <ul>
                            <li>{{ from.unit_cost_of_bought_dish }}</li>
                        </ul>
                    </div>

                    <div class="help-modal modal-footer">
                        <button class="modal-default-button button alter" @click="close">
                            {{ okBtn }}
                        </button>
                    </div>

                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    import HelpModalText from "../../../texts/wasteSimulator/HelpModalText";

    export default {
        mixins: [
            HelpModalText
        ],

        methods: {
            // nécessaire pour notifier le composant parent (WasteHomePage.vue)
            close() {
                this.$emit('close');
            }
        }
    }
</script>
