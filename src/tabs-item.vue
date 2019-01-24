<template>
    <div class="tabs-item" @click="xxx" :class="classes">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'GuluTabsItem',
        inject: ['eventBus'],
        data() {
            return {
                active: false
            }
        },
        props: {
            disabled: {
                type: Boolean,
                default: false
            },
            name: {
                type: String | Number,
                required: true
            }
        },
        methods: {
            xxx() {
                this.eventBus.$emit('update:selected', this.name)
            }
        },
        computed: {
            classes() {
                return {
                    active: this.active
                }
            }
        },
        created() {
            this.eventBus.$on('update:selected', (name) => {
                console.log(name);
            })
        },
        mounted() {
            this.eventBus.$on('update:selected', (name) => {
                this.active = name === this.name;
            })
        }

    }
</script>
<style lang="scss" scoped>
    $blue:blue;
    .tabs-item {
        flex-shrink: 0;
        padding: 0 2em;
        cursor: pointer;
        height: 100%;
        display: flex;
        align-items: center;
        &.active{
            color: $blue;
            font-weight: bold;
            border-bottom: 1px solid $blue;
        }
    }
</style>
