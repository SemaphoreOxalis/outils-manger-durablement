<template>
    <div>
        <h1>Edit {{ recipe.name }}</h1>
    </div>
</template>

<script>
export default {
    props: {
        recipe: [Object, undefined],
    }
}
</script>