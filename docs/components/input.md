---
title: Input 输入框
---
# 输入框

## 常用例子

#### 浏览
#
<ClientOnly>
<input-demos></input-demos>
</ClientOnly>

#### 代码

``` html
<g-input value="中文"></g-input>
<g-input value="中文" readOnly></g-input>
<g-input value="中文" disabled></g-input>
<g-input value="中文" error="错误"></g-input>
```
## 支持双向绑定

#### 浏览
#
<ClientOnly>
<input-model-demos></input-model-demos>
</ClientOnly>

#### 代码
```
data:{
    value: '1'
}
```
``` html
<g-input v-model="value"></g-input>
<div>
    value: {{value}}
</div>
```