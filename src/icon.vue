<template>
    <svg class="g-icon" aria-hidden="true">
        <use :xlink:href="`#icon-${name}`"></use>
    </svg>
</template>
<script>
    export default {
        props:['name']
    }
</script>
<style>
    .g-icon {
        width: 1em;
        height: 1em;
        fill: currentColor;
        overflow: hidden;
    }
</style>
