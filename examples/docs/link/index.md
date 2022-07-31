## Link 超链接

<script setup>
import { Link }from '@ui1024/components'
import { onMounted } from 'vue'
onMounted(() => {
  console.log(22);
  const ele = document.querySelector('.vp-doc').querySelectorAll('a');
  ele.forEach((a) => {
    console.log(123, a, a.style)
    a.removeAttribute('color')
  })

})
</script>

### 基本链接
<div class="pre">
  <Link type="primary">主要按钮</Link>
  <Link type="success">成功按钮</Link>
  <Link type="info">信息按钮</Link>
  <Link type="warning">警告按钮</Link>
  <Link type="danger">危险按钮</Link>
</div>


### 禁用状态
<div class="pre">
  <Link type="primary" disabled>主要按钮</Link>
  <Link type="success" disabled>成功按钮</Link>
  <Link type="info" disabled>信息按钮</Link>
  <Link type="warning" disabled>警告按钮</Link>
  <Link type="danger" disabled>危险按钮</Link> 
</div>


<style lang="less">
  .pre {
    display: flex;
    .k-link + .k-link {
      margin-left: 10px;
      color: !important;
    }
  }
</style>



