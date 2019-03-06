<template>
    <div>
        <g-input value="中文"></g-input>
        <g-input value="中文" readOnly></g-input>
        <g-input value="中文" disabled></g-input>
        <g-input value="中文" error="错误"></g-input>
    </div>
</template>

<script>
    import Input from '../../../src/input'

    export default {
        components: {
            'g-input': Input
        }
    }
</script>

