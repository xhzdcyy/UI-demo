<template>
    <div class="toast" ref="toast":class="toastClasses">
        <div class="message">
            <slot></slot>
        </div>

        <div class="line" ref="line"></div>
        <span v-if="closeButton" class="close" @click="onClickClose">
            {{closeButton.text}}
        </span>
    </div>
</template>
<script>
    export default {
        name: 'GuluToast',
        props: {
            autoClose: {
                type: Boolean,
                default: true
            },
            autoCloseDelay: {
                type: Number,
                default: 5
            },
            closeButton: {
                type: Object,
                default: () => {
                    return {
                        text: '关闭', callback: (toast) => {
                            toast.close();
                        }

                    }
                }
            },
            position:{
                type:String,
                default:'top',
                validator(value){
                    return ['top','middle','bottom'].includes(value);
                }
            }
        },
        mounted() {
            this.execAutoClose();
            this.updateStyles();
        },
        computed:{
            toastClasses(){
                return {
                    [`position-${this.position}`]:true
                }
            }
        },
        methods: {
            execAutoClose() {
                if (this.autoClose) {
                    setTimeout(() => {
                        this.close()
                    }, this.autoCloseDelay * 1000)
                }
            },
            updateStyles() {
                this.$nextTick(() => {
                    this.$refs.line.style.height = `${this.$refs.toast.getBoundingClientRect().height}px`;
                })
            },
            close() {
                this.$el.remove();
                this.$emit('close');
                this.$destroy();
            },
            onClickClose() {
                this.close();
                if (this.closeButton && typeof this.closeButton.callback === 'function')
                    this.closeButton.callback();
            }
        }
    }
</script>
<style lang="scss" scoped>
    $font-size: 14px;
    $toast-height: 40px;
    $toast-bg: rgba(0, 0, 0, 0.75);
    .toast {
        position: fixed;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        font-size: $font-size;
        color: white;
        line-height: 1.8;
        min-height: $toast-height;
        display: flex;
        align-items: center;
        background: $toast-bg;
        border-radius: 4px;
        padding: 0 16px;
        box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);

        .line {
            height: 100%;
            border-left: 1px solid #666;
            margin-left: 16px;
        }

        .close {
            margin-left: 16px;
            flex-shrink: 0;
        }
        .message{
            padding: 8px 0;
        }
        &.position-top{
            top: 0;
        }
        &.position-middle{
            top: 50%;
            transform: translate(-50%, -50%);

        }
        &.position-bottom{
            bottom: 0;
        }

    }


</style>
