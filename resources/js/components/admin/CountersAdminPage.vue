<template>
    <div class="mt-4">
        <h4 class="mb-4">{{ cnters.title }}</h4>

        <h5>{{ cnters.waste }}</h5>

        <div v-for="counter in counters"
             :key="counter.id + 2">

            <label>{{ counter.label }}</label>
            <div class="form-group admin">
                <input v-model="counter.value" @change="updateCounter(counter)" type="number" required
                       min="0" step="1" class="custom-input browser-default number-field">
            </div>
        </div>
    </div>
</template>

<script>
    import AdminPageText from "../../../texts/AdminPageText";
    import DataBase from "../../helpers/DataBase";
    export default {
        mixins: [
            AdminPageText,
            DataBase
        ],
        data() {
            return {
                counters: [],
            }
        },
        created() {
            this.fetchCountersValueFromDB();
        }
    }
</script>
