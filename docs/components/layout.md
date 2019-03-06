---
title: Layout 布局
---
# 布局

## 简单布局

#### 浏览
#
<ClientOnly>
<layout-demo-1></layout-demo-1>
</ClientOnly>

#### 代码
```html
<g-layout style="color: white;">
    <g-header style="height: 50px; background:lightskyblue;">
        header
    </g-header>
    <g-content style="height: 100px; background:deepskyblue;">
        content
    </g-content>
    <g-footer style="height: 50px; background:lightskyblue;">
        footer
    </g-footer>
</g-layout>
```
## 内侧边栏

侧边栏可关闭哦
#### 浏览
#
<ClientOnly>
<layout-demo-2></layout-demo-2>
</ClientOnly>

#### 代码
```html
<g-layout style="color: white; overflow:hidden;">
    <g-header style="height: 50px; background:lightskyblue;">
        header
    </g-header>
    <g-layout>
        <g-sider style="height: 100px; background: #7cb8ff; width:200px; color: black;">
            sider
        </g-sider>
        <g-content style="height: 100px; background:deepskyblue;">
            content
        </g-content>
    </g-layout>
    <g-footer style="height: 50px; background:lightskyblue;">
        footer
    </g-footer>
</g-layout>
```
## 外侧边栏

#### 浏览
#
<ClientOnly>
<layout-demo-3></layout-demo-3>
</ClientOnly>

#### 代码
```html
<g-layout style="color: white; overflow:hidden;">
    <g-sider style=" background: #7cb8ff; width:200px; color: black;">
        sider
    </g-sider>
    <g-layout>
        <g-header style="height: 50px; background:lightskyblue;">
            header
        </g-header>
        <g-content style="height: 100px; background:deepskyblue;">
            content
        </g-content>
        <g-footer style="height: 50px; background:lightskyblue;">
            footer
        </g-footer>
    </g-layout>
</g-layout>
```