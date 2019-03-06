---
title: Popover 弹出层
---
# 弹出层
:::tip
popover 弹出层内容支持 html
:::
## 点击

#### 浏览
#
<ClientOnly>
<popover-demo-1></popover-demo-1>
</ClientOnly>

#### 代码

```html
<g-popover>
    <g-button>上方弹出</g-button>
    <template slot="content"> 弹出内容</template>
</g-popover>
<g-popover position="bottom">
    <g-button>下方弹出</g-button>
    <template slot="content"> 弹出内容</template>
</g-popover>
```
## hover

#### 浏览
#
<ClientOnly>
<popover-demo-2></popover-demo-2>
</ClientOnly>

#### 代码

```html
<g-popover trigger="hover">
    <g-button>上方弹出</g-button>
    <template slot="content"> 弹出内容</template>
</g-popover>
<g-popover position="bottom" trigger="hover">
    <g-button>下方弹出</g-button>
    <template slot="content"> 弹出内容</template>
</g-popover>

```
