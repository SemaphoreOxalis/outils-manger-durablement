<template>
    <div class="py-4 px-4">
        <h1>Etape 2/2 : Résultats et comparaisons de vos simulations</h1>

        <div>
            <p>Vous venez de réaliser un audit simplifié de votre gaspillage alimentaire, représenté par la première ligne du tableau ci-dessous</p>
            <p>Il vous permet de simuler les modifications de vos pratiques: réduction du volume de gaspillage alimentaire, optimisation du nombre de repas...</p>
            <br>
            <p>Chaque simulation est comparée avec celle qui la précède dans le tableau, n'hésitez pas à expérimenter !</p>
        </div>

        <div style="border: 1px solid black;" class="p-3">
            <p><i class="fas fa-arrows-alt mr-2"></i> Vous pouvez réorganiser les simulations en les faisant glisser</p>
            <p><i class="fas fa-pencil-alt mr-2"></i> Les valeurs modifiables sont indiquées par ce symbole</p>
            <p><i class="fas fa-trash-alt mr-2"></i> Vous pouvez également supprimer les simulations inutiles</p>
            <p><i class="fas fa-file-export mr-2"></i> Le bouton "exporter" vous permet de récupérer l'ensemble des données sur votre logiciel de tableur</p>
        </div>

        <div>
            <div class="d-flex text-center">
                <div class="p-2 w-50">Nom de la simulation</div>
                <div class="p-2 flex-shrink-1">Nombre de repas produits</div>
                <div class="p-2 flex-shrink-1">Coût de revient d'un repas</div>
                <div class="p-2 flex-shrink-1">Coût de traitement par tonne (€)</div>
                <div class="p-2 flex-shrink-1">Volume de gaspillage alimentaire (tonnes)</div>
                <div class="p-2 flex-shrink-1">Coût de traitement des déchets d'un repas</div>
                <div class="p-2 flex-shrink-1">Coûts de gaspillage alimentaire</div>
                <div class="p-2 flex-shrink-1">Equivalence en nombre de repas</div>
                <div class="p-2 flex-grow-1"></div>
            </div>

            <div class="d-flex text-center">
                <div class="p-2 w-25">Référence du 10/12/2019 au 10/12/2020</div>
                <div class="p-2 flex-grow-1">2.32</div>
                <div class="p-2 flex-grow-1">2.32</div>
                <div class="p-2 flex-grow-1">2.32</div>
                <div class="p-2 flex-grow-1">2.32</div>
                <div class="p-2 flex-grow-1">2.32</div>
                <div class="p-2 flex-grow-1">2.32</div>
                <div class="p-2 flex-grow-1">2.32</div>
                <div class="p-2 flex-grow-0"></div>
            </div>

            <div class="d-flex text-center">
                <div class="p-2 w-25">Simulation 1</div>
                <div class="p-2 flex-grow-1">2.32</div>
                <div class="p-2 flex-grow-1">2.32</div>
                <div class="p-2 flex-grow-1">2.32</div>
                <div class="p-2 flex-grow-1">2.32</div>
                <div class="p-2 flex-grow-1">2.32</div>
                <div class="p-2 flex-grow-1">2.32</div>
                <div class="p-2 flex-grow-1">2.32</div>
                <div class="p-2 flex-grow-0"><i class="fas fa-trash-alt"></i></div>
            </div>
        </div>

        <p class="mt-5">Bravo, vous venez de franchir la première étape de la démarche de <a href="#">la loi EGALIM</a></p>
        <p>Que faire de ces résultats ? Rendez vous sur le <a href="#">site ressource de l'ANAP pour découvrir les actions réalisables</a></p>

        <div class="d-flex justify-content-around">
            <button class="btn btn-primary"><i class="fas fa-file-export mr-2"></i>Exporter le rapport de simulation</button>
            <button class="btn btn-danger"><i class="fas fa-redo-alt mr-2"></i>Je réinitialise toutes mes simulations</button>
        </div>
    </div>
</template>

<script>
    export default {
        props: [
            'userInput',
            'referenceValues'
        ],

        data() {
            return {
                data: {
                    userInput: {},
                    referenceValues: {}
                }
            }
        },

        mounted() {
            this.data.userInput = this.userInput;
            this.data.referenceValues = this.referenceValues;
        }
    }
</script>
