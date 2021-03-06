<template>
    <div class="popover" ref="popover">
        <div class="content-wrapper" v-if="visible" ref="contentWrapper" :class="{[`position-${position}`]:true}">
            <slot name="content"></slot>
        </div>
        <span ref="triggerWrapper" style="display: inline-block">
            <slot></slot>
        </span>

    </div>
</template>


<script>
    export default {
        name: 'GuluPopover',
        data() {
            return {
                visible: false,
            }
        },
        mounted() {
            if (this.trigger === 'click') {
                this.$refs.popover.addEventListener('click', this.onClick);
            } else {
                this.$refs.popover.addEventListener('mouseenter', this.open);
                this.$refs.popover.addEventListener('mouseleave', this.close);
            }
        },
        destroyed(){
            if (this.trigger === 'click') {
                this.$refs.popover.removeEventListener('click', this.onClick);
            } else {
                this.$refs.popover.removeEventListener('mouseenter', this.open);
                this.$refs.popover.removeEventListener('mouseleave', this.close);
            }
        },
        computed: {
            openEvent() {
                if (this.trigger === 'click') {
                    return 'click'
                } else {
                    return 'mouseenter'
                }
            },
            closeEvent() {
                if (this.trigger === 'click') {
                    return 'click'
                } else {
                    return 'mouseleave'
                }
            }
        },
        props: {
            position: {
                type: String,
                default: 'top',
                validator(value) {
                    return ['top', 'bottom'].indexOf(value) >= 0;
                }
            },
            trigger: {
                type: String,
                default: 'click',
                validator(value) {
                    return ['click', 'hover'].indexOf(value) >= 0;
                }
            }
        },
        methods: {
            positionContent() {
                document.body.appendChild(this.$refs.contentWrapper);
                let {width, height, top, left} = this.$refs.triggerWrapper.getBoundingClientRect();
                if (this.position === 'top') {
                    this.$refs.contentWrapper.style.left = left + window.scrollX + 'px';
                    this.$refs.contentWrapper.style.top = top + window.scrollY + 'px';
                } else if (this.position === 'bottom') {
                    this.$refs.contentWrapper.style.left = left + window.scrollX + 'px';
                    this.$refs.contentWrapper.style.top = top + height + window.scrollY + 'px';
                }
            },
            onClickDocument(e) {
                if (this.$refs.popover && this.$refs.popover.contains(e.target) || this.$refs.contentWrapper.contains(e.target)) {
                    return
                }
                this.close()
            },
            listenToDocument() {
                console.log('开始监听');
                document.addEventListener('click', this.onClickDocument)
            },
            open() {
                this.visible = true;
                this.$nextTick(() => {
                    this.positionContent();
                    this.listenToDocument();
                })
            },
            close() {
                this.visible = false;
                console.log('关闭');
                console.log('结束监听');
                document.removeEventListener('click', this.onClickDocument)
            },
            onClick(event) {
                if (this.$refs.triggerWrapper.contains(event.target)) {
                    if (this.visible) {
                        this.close();
                    } else {
                        this.open();
                    }
                }
            },
        },

    }
</script>

<style lang="scss">
    $border-color: #333;
    $border-radius: 4px;
    .popover {
        display: inline-block;
        vertical-align: top;
        position: relative;
        color: blue;

    }

    .content-wrapper {
        position: absolute;
        border: 1px solid $border-color;
        border-radius: $border-radius;
        filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.5));
        background: white;
        padding: .5em 1em;
        max-width: 20em;
        word-break: break-all;

        &::before, &::after {
            content: '';
            display: block;
            border: 10px solid transparent;
            position: absolute;
            left: 10px;
        }


        &.position-top {
            transform: translateY(-100%);
            margin-top: -10px;

            &::before {
                border-bottom: none;
                border-top-color: black;
                top: 100%;
            }

            &::after {
                border-bottom: none;
                border-top-color: white;
                top: calc(100% - 1px);
            }
        }

        &.position-bottom {
            margin-top: 10px;

            &::before {
                border-top: none;
                border-bottom-color: black;

                bottom: 100%;
            }

            &::after {

                border-bottom-color: white;
                bottom: calc(100% - 1px);
                border-top: none;
            }
        }

    }
</style>
