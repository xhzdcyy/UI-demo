const expect = chai.expect;
import Vue from 'vue'
import Col from '../src/col'

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe('Col', () => {
    it('存在.', () => {
        expect(Col).to.exist;
    });

    it('接受span属性', () => {
        const div = document.createElement('div');
        document.body.appendChild(div);
        const Constructor = Vue.extend(Col);
        const vm = new Constructor({
            propsData: {
                span: '1',
            }
        }).$mount(div);
        expect( vm.$el.classList.contains('col-1')).to.eq(true)
        vm.$el.remove();
        vm.$destroy();
    })

    it('接受offset属性', () => {
        const div = document.createElement('div');
        document.body.appendChild(div);
        const Constructor = Vue.extend(Col);
        const vm = new Constructor({
            propsData: {
                offset: '1',
            }
        }).$mount(div);
        expect( vm.$el.classList.contains('offset-1')).to.eq(true)
        vm.$el.remove();
        vm.$destroy();
    })

    it('接受phone属性', () => {
        const div = document.createElement('div');
        document.body.appendChild(div);
        const Constructor = Vue.extend(Col);
        const vm = new Constructor({
            propsData: {
                phone: {span:1,offset: 1}
            }
        }).$mount(div);
        // expect( vm.$el.classList.contains('offset-phone-1')).to.eq(true)
        expect( vm.$el.classList.contains('col-phone-1')).to.eq(true)
        vm.$el.remove();
        vm.$destroy();
    })

})
