#  自制UI组件库
[![Build Status](https://www.travis-ci.org/xhzdcyy/UI-demo.svg?branch=master)](https://www.travis-ci.org/xhzdcyy/UI-demo)
## 介绍

一个基于vue的UI组件库，不断完善中。

##  开始使用

1.添加css样式

使用本框架请在css中开启border-box
```css
*,*::before,*::after{box-sizing: border-box}
```
你还需要设置一下默认颜色

2.安装
```
npm i --save xi-ui-demo
```

3.引入
```javascript
import { Button, ButtonGroup, Icon } from 'xi-ui-demo'
export default {
  name: 'app',
  components: {
    HelloWorld,
    'g-button': Button
  }
}
```
