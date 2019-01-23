<template>
    <div class="tabs">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'GuluTabs',
        props:{
            selected:{
                type:String,
                required:true
            },
            direction:{
                type: String,
                default:'horizontal',
                validator(value){
                    return ['horizontal','vertical'].contains(value);
                }
            }
        },
        created() {

        }
    }
</script>
<style lang="scss" scoped>
    .tabs {
    }
</style>
