<template>
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">

                    <div class="modal-body">
                        <p>Le prix de revient peut être calculé à partir :</p>
                        <ul>
                            <li>du montant total des achats alimentaires</li>
                            <li>de la masse salariale de l'équipe de restauration</li>
                            <li>du coût des investissements</li>
                            <li>du coût de l'énergie</li>
                        </ul>
                        <p><strong>OU</strong>, dans le cas où votre établissement fait appel à un prestataire :</p>
                        <ul>
                            <li>du coût unitaire d'un repas facturé</li>
                        </ul>
                    </div>

                    <div class="modal-footer">
                        <button class="modal-default-button btn btn-outline-primary" @click="close">
                            OK
                        </button>
                    </div>

                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        methods: {
            // nécessaire pour notifier le composant parent (Home.vue)
            close() {
                this.$emit('close');
            }
        }
    }
</script>

<style>
    .modal-mask {
        position: fixed;
        z-index: 666;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: table;
        transition: opacity 0.3s ease;
    }

    .modal-wrapper {
        display: table-cell;
        vertical-align: middle;
    }

    .modal-container {
        width: 520px;
        margin: 0px auto;
        padding: 20px 30px;
        background-color: #fff;
        border-radius: 5px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
        transition: all 0.3s ease;
        font-family: Helvetica, Arial, sans-serif;
    }

    .modal-body {
        margin: 20px 0;
    }

    .modal-footer {
        border-top: none;
    }

    .modal-default-button {
        float: right;
    }

    .modal-enter {
        opacity: 0;
    }

    .modal-leave-active {
        opacity: 0;
    }

    .modal-enter .modal-container,
    .modal-leave-active .modal-container {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }
</style>
