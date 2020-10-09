<template>
    <div class="autocomplete">
        <input type="text">
        <ul class="autocomplete-results">
            <li class="autocomplete-result">

            </li>
        </ul>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.autocomplete {
    padding: 0;
    margin: 0;
    border: 1px solid #eeeeee;
    height: 120px;
    overflow: auto;
}

.autocomplete-result {
    list-style: none;
    text-align: left;
    padding: 4px 2px;
    cursor: pointer;
}

.autocomplete-result:hover {
    background-color: #4aae9b;
    color: white;
}
</style>
