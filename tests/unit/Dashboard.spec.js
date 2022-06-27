import { mount, RouterLinkStub } from '@vue/test-utils'
import DisplayDetails from '@/views/DisplayDetails.vue'

describe('Mounted App', () => {
  let wrapper;
  const getDetails = jest.fn()
  const mockRoute = {
    params: {
      name: 'The Wire'
    }
  }
  const mockRouter = {
    push: jest.fn()
  }
  beforeEach(() => {
    wrapper = mount(DisplayDetails, {
      data() {
        return {
            showName: '',
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
        json: () => Promise.resolve(getDetails)
    }));
  test('DisplayDetails component exists', () => {
    expect(wrapper.exists()).toBe(true)
  })
  it('has searched for the show name called The Wire', () => {
    wrapper.setData({ showName:'The Wire' })
    expect(wrapper.vm.showName).toEqual('The Wire')
  })
 })
