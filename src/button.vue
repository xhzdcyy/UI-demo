<template>
    <button class="g-button" :class="{[`icon-${iconPosition}`]: true}" @click="$emit('click')">
        <g-icon v-if="loading" class="loading" name="loading"></g-icon>
        <g-icon v-if="icon && !loading" :name="icon"></g-icon>
        <div class="content">
            <slot></slot>
        </div>

    </button>
</template>
<script>
    export default {
        // props: ['icon', 'iconPosition']
        props: {
            icon: {},
            loading: {
                type: Boolean,
                default: false
            },
            iconPosition: {
                type: String,
                default: 'left',
                validator(value) {
                    console.log(value);
                    return (value === 'left' || value === 'right');
                }

            }
        }
    }

</script>
<style lang="scss">
    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    .g-button {
        height: var(--button-height);
        padding: 0 1em;
        font: inherit;
        border-radius: var(--border-radius);
        border: 1px solid var(--border-color);
        background: var(--button-bg);
        display: inline-flex;;
        justify-content: center;
        align-items: center;
        vertical-align: top;

        &:hover {
            border-color: var(--border-color-hover);
        }

        &:active {
            background-color: var(--button-active-bg);
        }

        &:focus {
            outline: none;
        }

        > .g-icon {
            order: 1;
            margin-right: .3em;
        }

        > .content {
            order: 2;
        }

        &.icon-right {
            > .g-icon {
                order: 2;
                margin-right: 0;
                margin-left: .3em;
            }

            > .content {
                order: 1;
            }
        }

        .loading {
            animation: spin 1s infinite linear;
        }
    }


</style>
