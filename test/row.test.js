const expect = chai.expect;
import Vue from 'vue'
import Row from '../src/row'
import Col from '../src/col'

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe('Row', () => {
    it('存在.', () => {
        expect(Row).to.exist;
    });

    it('接受gutter属性', (done) => {
        Vue.component('g-row',Row);
        Vue.component('g-col',Col);
        const div = document.createElement('div');
        document.body.appendChild(div);
        div.innerHTML=`
        <g-row gutter="20">
            <g-col span="12"></g-col>
            <g-col span="12"></g-col>
        <g-row>
        `
        const vm = new Vue({
            el:div
        });
        // console.log(vm.$el.outerHTML);
        setTimeout(()=>{
            // console.log(vm.$el.outerHTML);
            const rowElement = vm.$el.querySelector('.row');
            expect(getComputedStyle(rowElement).marginRight).to.eq('-10px');
            expect(getComputedStyle(rowElement).marginLeft).to.eq('-10px');
            const colElement = vm.$el.querySelectorAll('.col');
            expect(getComputedStyle(colElement[0]).paddingRight).to.eq('10px');
            expect(getComputedStyle(colElement[1]).paddingLeft).to.eq('10px');
            done();
            },1500)
    })
})
