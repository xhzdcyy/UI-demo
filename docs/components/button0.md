---
title: Button 按钮
---

# 按钮

提供单个按钮和组合形式的按钮，按钮可以添加图标，设置图标位置等。。。
233

## 单个按钮 

#### 浏览
#
<ClientOnly>
<button-demos></button-demos>
</ClientOnly>


#### 代码

``` html
    <g-button>默认按钮</g-button>
    <g-button icon="setting">设置</g-button>
    <g-button icon="download" icon-position="right">下载</g-button>
    <g-button :loading="true">登录中</g-button>
```
## 按钮组合

#### 浏览
#
<ClientOnly>
<buttonGroup-demos></buttonGroup-demos>
</ClientOnly>

#### 代码

``` html
<w-button-group>
    <w-button icon="left" icon-position="left">上一页</w-button>
    <w-button icon="right" icon-position="right">下一页</w-button>
</w-button-group>
```