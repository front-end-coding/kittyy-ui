
## Button 按钮

<script setup>
import { Button }from '@ui1024/components'
</script>

### 基本按钮
<pre class="pre">
  <Button type="primary">主要按钮</Button>
  <Button type="success">成功按钮</Button>
  <Button type="info">信息按钮</Button>
  <Button type="warning">警告按钮</Button>
  <Button type="danger">危险按钮</Button>
</pre>

### 圆角按钮
<pre class="pre">
  <Button type="primary" round>主要按钮</Button>
  <Button type="success" round>成功按钮</Button>
  <Button type="info" round>信息按钮</Button>
  <Button type="warning" round>警告按钮</Button>
  <Button type="danger" round>危险按钮</Button> 
</pre>


### 禁用状态
<pre class="pre">
  <Button type="primary" disabled>主要按钮</Button>
  <Button type="success" disabled>成功按钮</Button>
  <Button type="info" disabled>信息按钮</Button>
  <Button type="warning" disabled>警告按钮</Button>
  <Button type="danger" disabled>危险按钮</Button> 
</pre>

### 加载中
<pre class="pre">
  <Button type="primary" icon="loading" iconPosition="left">加载中</Button>
</pre>

### 不同尺寸
<pre class="pre">
  <Button type="primary" size="medium">主要按钮</Button>
  <Button type="info" size="small">信息按钮</Button>
  <Button type="warning" size="mini">警告按钮</Button>
</pre>



### 圆形
<pre class="pre">
  <Button type="primary" circle icon="delete" iconPosition="left"></Button>
  <Button type="success" circle icon="delete" iconPosition="left"></Button>
  <Button type="info" circle icon="delete" iconPosition="left"></Button>
  <Button type="warning" circle icon="delete" iconPosition="left"></Button>
  <Button type="danger" circle icon="delete" iconPosition="left"></Button> 
</pre>

<style lang="less" scoped>
  .pre {
    display: flex;
    Button + Button {
      margin-left: 10px;
    }
  }
</style>



