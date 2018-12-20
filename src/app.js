import Vue from 'vue';
import Button from './button';
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'
import chai from 'chai';
import spies from 'chai-spies'

Vue.component('g-button', Button);
Vue.component('g-icon', Icon);
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input', Input)

new Vue({
    el: '#app',
    data: {
        loading1: false,
        loading2: true,
        loading3: true,
        message: 'hi'
    },
    methods: {
        inputChange(e) {
            console.log(e.target.value);
        }
    }
})
