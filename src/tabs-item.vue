<template>
    <div class="tabs-item" @click="xxx" :class="classes">
        <slot></slot>
        <div class="actions-wrapper">
            <slot name="actions"></slot>
        </div>

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
    .tabs-item {
        flex-shrink: 0;
        padding: 0 2em;
        &.active{
            background: red;
        }
    }
</style>
