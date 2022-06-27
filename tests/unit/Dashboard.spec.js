import { mount, RouterLinkStub } from '@vue/test-utils'
import DashboardView from '@/components/Dashboard.vue'

describe('Mounted App', () => {
    
  let wrapper;
  const getData = jest.fn()
  beforeEach(() => {
    wrapper = mount(DashboardView, {
      data() {
        return {
            showList: [],
        }
      },
      global: {
        stubs: {
            'router-link': RouterLinkStub,
        }
    },
    })
  })
  test('DashboardView component exists', () => {
    expect(wrapper.exists()).toBe(true)
  })
  

    global.fetch = jest.fn(() => Promise.resolve({
        json: () => Promise.resolve(getData)
    }));

    describe('fetch data', () => {
        let data;
        beforeEach(async () => {
            data = await getData();
        });
        it('created() should get called when component mounts.', () => {
            let spy;
            spy = jest.spyOn(DashboardView, 'created');
            wrapper = mount(DashboardView);
            expect(spy).toHaveBeenCalled();
            spy.mockReset();
        });
    });
 })
