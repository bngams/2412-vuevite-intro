import { mount } from '@vue/test-utils';
import HelloWorld from './HelloWorld.vue'
import { describe, expect, it } from 'vitest';

describe('HelloWorld.vue', () => {
    it('should display the msg prop in h1 title', () => {
        // wanted result
        const wantedResult = 'Testing msg';
        // init component
        const wrapper = mount(HelloWorld, {
            props: { msg: wantedResult } 
        });
        // check component msg dipslay
        const h1FromComponentTemplate = wrapper.find('h1')?.text();
        // assertion
        expect(h1FromComponentTemplate).toContain(wantedResult);
    })
});