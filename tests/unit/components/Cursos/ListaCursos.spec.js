import ListaCursos from '@/components/Cursos/ListaCursos';
import { mount } from '@vue/test-utils';

describe('ListaCursos', () => {
  it('should mount the component', () => {
    const wrapper = mount(ListaCursos, {
      propsData: {
        cursos: [],
      },
    });

    expect(wrapper.exists()).toBe(true);
  });

  it('should display 2 courses', () => {
    const wrapper = mount(ListaCursos, {
      propsData: {
        cursos: [
          { title: 'curso 1', grade: [11, 22, 33] },
          { title: 'curso 2' },
        ],
      },
    });

    const titles = wrapper.findAll('h3');
    const lis = wrapper.findAll('li');

    expect(titles).toHaveLength(2);
    expect(lis).toHaveLength(3);
    expect(wrapper.text()).toContain('curso 1');
    expect(wrapper.text()).toContain('curso 2');
  });

  it('should emit event when card gets clicked', () => {
    const wrapper = mount(ListaCursos, {
      propsData: {
        cursos: [{ title: 'curso 1', grade: [11, 22, 33] }],
      },
    });

    wrapper.find('section').trigger('click');

    expect(wrapper.emitted().update).toBeTruthy();
    expect(wrapper.emitted().update.length).toBe(1);
  });
});
