import { mount, RouterLinkStub } from '@vue/test-utils'
import SearchShow from '@/views/SearchShow.vue'

describe('Mounted App', () => {
  let wrapper;
  const getShow = jest.fn()
  const mockRoute = {
    params: {
      name: 'GOT'
    }
  }
  const mockRouter = {
    push: jest.fn()
  }
  beforeEach(() => {
    wrapper = mount(SearchShow, {
      data() {
        return {
            show: '',
        }
      },
      global: {
        mocks: {
          $route: mockRoute,
          $router: mockRouter
        },
        stubs: {
            'router-link': RouterLinkStub,
        },
      }
    })
  })
    global.fetch = jest.fn(() => Promise.resolve({
        json: () => Promise.resolve(getShow)
    }));
  test('SearchShow component exists', () => {
    expect(wrapper.exists()).toBe(true)
  })
  it('has searched for the show name called GOT', () => {
    wrapper.setData({ show:'GOT' })
    expect(wrapper.vm.show).toEqual('GOT')
  })
 })
