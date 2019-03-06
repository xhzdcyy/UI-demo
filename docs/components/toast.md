---
title: Toast
---
# Toast

## 设置弹出位置

#### 浏览
#
<ClientOnly>
<toast-demo-1></toast-demo-1>
</ClientOnly>

#### 代码

```html
<g-button @click="$toast('点击弹出提示')">顶部弹出</g-button>
<g-button @click="$toast('点击弹出提示', {position:'middle'})">中间弹出</g-button>
<g-button @click="$toast('点击弹出提示', {position:'bottom'})">底部弹出</g-button>
```
## 自动或手动关闭

#### 浏览
#
<ClientOnly>
<toast-demo-2></toast-demo-2>
</ClientOnly>

#### 代码

``` js{4}
methods: {
    onClickButton () {
        this.$toast('我不会自动关闭', {
            autoClose: false
        })
    }
}
```
```html
<div>
    <g-button @click="onClickButton">顶部弹出</g-button>
</div>
```
:::tip
autoClsoe 取值为 false（手动关闭）或数字（几秒后自动关闭，默认为5）
:::
## 设置关闭按钮

#### 浏览
#
<ClientOnly>
<toast-demo-3></toast-demo-3>
</ClientOnly>

#### 代码

``` js
methods: {
    onClickButton () {
        this.$toast('你知道我在等你吗？', {
            closeButton: {
                text: '知道了',
                callback: () => {
                    console.log('他说知道了')
                }
            }
        })
    }
}
```
```html
<div>
    <g-button @click="onClickButton">顶部弹出</g-button>
</div>
```