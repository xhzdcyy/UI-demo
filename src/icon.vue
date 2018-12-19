<template>
    <svg class="g-icon" aria-hidden="true">
        <use :xlink:href="`#icon-${name}`"></use>
    </svg>
</template>
<script>
    import './svg'
    export default {
        name:'GuluIcon',
        props:['name']
    }
</script>
<style scoped>
    .g-icon {
        width: 1em;
        height: 1em;
        fill: currentColor;
        overflow: hidden;
    }
</style>
