import { mount, shallowMount } from '@vue/test-utils'
import NavbarView from '@/components/Navbar.vue'

describe('Mounted App', () => {
  let wrapper
  const mockRoute = {
    params: {
      name: 'The Wire'
    }
  }
  const mockRouter = {
    push: jest.fn()
  }
  beforeEach(() => {
    wrapper = mount(NavbarView, {
      data() {
        return {
            show: '',
        }
      },
      global: {
        mocks: {
          $route: mockRoute,
          $router: mockRouter
        }
      }
    })
  })
  test('NavbarView component exists', () => {
    expect(wrapper.exists()).toBe(true)
  })
  it('has searched for the show name called The Wire', () => {
    wrapper.setData({ show:'The Wire' })
    expect(wrapper.vm.show).toEqual('The Wire')
  })
  it('push route params on button click', () => {
    wrapper.setData({ show: 'The Wire' })
    const button = wrapper.find('button')
    button.trigger('click')
    expect(mockRouter.push).toHaveBeenCalledTimes(1)
  }) 
 })
