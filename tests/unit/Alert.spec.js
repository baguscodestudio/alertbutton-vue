import { mount } from '@vue/test-utils';
import Alert from '@/components/Alert.vue';
import SpecialButton from '@/components/SpecialButton.vue';

describe('Alert.vue', () => {
  it('renders the alert with all subcomponents', () => {
    const wrapper = mount(Alert, {
      props: {
        show: true,
        buttonTextPrimary: 'Submit',
      },
      slots: {
        title: 'This is a header',
        description: 'This is the description',
      },
    });
    expect(wrapper.find('[data-test="title"]').text()).toBe('This is a header');
    expect(wrapper.find('[data-test="description"]').text()).toBe(
      'This is the description'
    );
    expect(wrapper.findComponent(SpecialButton).exists()).toBeTruthy();
    expect(wrapper.findComponent(SpecialButton).text()).toBe('Submit');
  });
  it('renders the title only', () => {
    const wrapper = mount(Alert, {
      props: {
        show: true,
      },
      slots: {
        title: 'This is a title only',
      },
    });
    expect(wrapper.classes()).toContain('items-center');
    expect(wrapper.findComponent(SpecialButton).exists()).toBeFalsy();
    expect(wrapper.find('[data-test="title"]').text()).toBe(
      'This is a title only'
    );
    expect(wrapper.find('[data-test="description"]').exists()).toBeFalsy();
  });
  it('renders the description only', () => {
    const wrapper = mount(Alert, {
      props: {
        show: true,
      },
      slots: {
        description: 'This is a description only',
      },
    });
    expect(wrapper.classes()).toContain('items-start');
    expect(wrapper.findComponent(SpecialButton).exists()).toBeFalsy();
    expect(wrapper.find('[data-test="description"]').text()).toBe(
      'This is a description only'
    );
    expect(wrapper.find('[data-test="title"]').exists()).toBeFalsy();
  });
});
