<template>
    <div class="popover" @click="onClick" ref="popover">
        <div class="content-wrapper" v-if="visible" ref="contentWrapper">
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
                visible: false
            }
        },
        methods: {
            positionContent() {
                document.body.appendChild(this.$refs.contentWrapper);
                let {width, height, top, left} = this.$refs.triggerWrapper.getBoundingClientRect();
                this.$refs.contentWrapper.style.left = left + window.scrollX + 'px';
                this.$refs.contentWrapper.style.top = top + window.scrollY + 'px';
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
        mounted() {
        }
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
        /*box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);*/
        filter: drop-shadow( 0 1px 1px rgba(0, 0, 0, 0.5));
        transform: translateY(-100%);
        background: white;
        padding: .5em 1em;
        margin-top: -10px;
        max-width:  20em;
        word-break: break-all;
        &::before,&::after{
            content: '';
            display: block;
            border: 10px solid transparent;
            border-top-color: black;
            width: 0;
            height: 10px;
            position:absolute;
            top: 100%;
            left: 10px;
        }
        &::after{
            border-top-color: white;
            top: calc(100% - 1px);

        }
    }
</style>
