<template>
    <div class="popover" @click="onClick" ref="popover">
        <div class="content-wrapper" v-if="visible" ref="contentWrapper">
            <slot name="content"></slot>
        </div>
        <span ref="triggerWrapper">
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
                this.$refs.contentWrapper.style.left = left + 'px';
                this.$refs.contentWrapper.style.top = top + window.scrollY + 'px';
            },
            onClickDocument(e)  {
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
    .popover {
        display: inline-block;
        vertical-align: top;
        position: relative;
        color: blue;

    }

    .content-wrapper {
        position: absolute;
        border: 1px solid red;
        box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
        transform: translateY(-100%);

    }
</style>
