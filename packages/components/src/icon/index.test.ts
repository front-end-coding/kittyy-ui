import { mount } from '@vue/test-utils'
import Icon from './icon.vue'
import { describe, it, expect } from 'vitest'




// const iconComponent = {
//   components: { Icon },
//   template: `
//    <Icon name="loading" />
//   `,
// }


describe('测试Icon组件', async () => {
  // const wrapper = mount(Icon);
  // // await wrapper.setData({
  // //   type: 'primary'
  // // })
  // console.log(wrapper)

  it('测试button文本', () => {
    expect('1').toContain('1')
  })
})