import { shallowMount } from '@vue/test-utils';
import SpecialButton from '@/components/SpecialButton.vue';

describe('SpecialButton.vue', () => {
  it('renders a Hello button', async () => {
    const wrapper = shallowMount(SpecialButton, {
      slots: {
        default: 'Hello',
      },
    });
    expect(wrapper.text()).toBe('Hello');
  });
  describe('button contains correct classes', () => {
    it('contains default class', () => {
      const wrapper = shallowMount(SpecialButton);
      expect(wrapper.classes()).toContain('btn');
      expect(wrapper.classes()).toContain('btn-primary');
    });
    it('contains flex row reverse class', () => {
      const wrapper = shallowMount(SpecialButton, {
        props: {
          variant: 'text-icon',
        },
      });
      expect(wrapper.classes()).toContain('flex-row-reverse');
    });
    it('contains secondary class', () => {
      const wrapper = shallowMount(SpecialButton, {
        props: {
          type: 'secondary',
        },
      });
      expect(wrapper.classes()).toContain('btn-secondary');
    });
  });
});
