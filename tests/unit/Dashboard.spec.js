import { mount, shallowMount } from '@vue/test-utils'
import DashboardView from '@/components/Dashboard.vue'

describe('Mounted App', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mount(DashboardView, {
      data() {
        return {
            showList: '',
        }
      },
    })
  })
  test('DashboardView component exists', () => {
    expect(wrapper.exists()).toBe(true)
  })

 })
