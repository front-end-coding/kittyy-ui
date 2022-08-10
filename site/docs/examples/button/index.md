
## Button 按钮

### 基本按钮
<div class="wrapper">
  <k-button type="primary">主要按钮</k-button>
  <k-button type="success">成功按钮</k-button>
  <k-button type="info">信息按钮</k-button>
  <k-button type="warning">警告按钮</k-button>
  <k-button type="danger">危险按钮</k-button>
</div>
<details>
<summary>展开查看</summary>

```vue
<template>
  <k-button type="primary">主要按钮</k-button>
  <k-button type="success">成功按钮</k-button>
  <k-button type="info">信息按钮</k-button>
  <k-button type="warning">警告按钮</k-button>
  <k-button type="danger">危险按钮</k-button>
</template>
```
</details>

### 圆角按钮
<div class="wrapper">
  <k-button type="primary" round>主要按钮</k-button>
  <k-button type="success" round>成功按钮</k-button>
  <k-button type="info" round>信息按钮</k-button>
  <k-button type="warning" round>警告按钮</k-button>
  <k-button type="danger" round>危险按钮</k-button> 
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
  <k-button type="primary" round>主要按钮</k-button>
  <k-button type="success" round>成功按钮</k-button>
  <k-button type="info" round>信息按钮</k-button>
  <k-button type="warning" round>警告按钮</k-button>
  <k-button type="danger" round>危险按钮</k-button> 
</template>
```
</details>

### 禁用状态
<div class="wrapper">
  <k-button type="primary" disabled>主要按钮</k-button>
  <k-button type="success" disabled>成功按钮</k-button>
  <k-button type="info" disabled>信息按钮</k-button>
  <k-button type="warning" disabled>警告按钮</k-button>
  <k-button type="danger" disabled>危险按钮</k-button> 
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
  <k-button type="primary" disabled>主要按钮</k-button>
  <k-button type="success" disabled>成功按钮</k-button>
  <k-button type="info" disabled>信息按钮</k-button>
  <k-button type="warning" disabled>警告按钮</k-button>
  <k-button type="danger" disabled>危险按钮</k-button> 
</template>
```
</details>

### 加载中
<div class="wrapper">
  <k-button type="primary" icon="loading" iconPosition="left">加载中</k-button>
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
  <k-button type="primary" icon="loading" iconPosition="left">加载中</k-button>
</template>
```
</details>

### 不同尺寸
<div class="wrapper">
  <k-button type="primary" size="medium">主要按钮</k-button>
  <k-button type="info" size="small">信息按钮</k-button>
  <k-button type="warning" size="mini">警告按钮</k-button>
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
  <k-button type="primary" size="medium">主要按钮</k-button>
  <k-button type="info" size="small">信息按钮</k-button>
  <k-button type="warning" size="mini">警告按钮</k-button>
</template>
```
</details>



### 圆形
<div class="wrapper">
  <k-button type="primary" circle icon="delete" iconPosition="left"></k-button>
  <k-button type="success" circle icon="delete" iconPosition="left"></k-button>
  <k-button type="info" circle icon="delete" iconPosition="left"></k-button>
  <k-button type="warning" circle icon="delete" iconPosition="left"></k-button>
  <k-button type="danger" circle icon="delete" iconPosition="left"></k-button> 
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
  <k-button type="primary" circle icon="delete" iconPosition="left"></k-button>
  <k-button type="success" circle icon="delete" iconPosition="left"></k-button>
  <k-button type="info" circle icon="delete" iconPosition="left"></k-button>
  <k-button type="warning" circle icon="delete" iconPosition="left"></k-button>
  <k-button type="danger" circle icon="delete" iconPosition="left"></k-button> 
</template>
```
</details>

<style lang="less" scoped>
  .wrapper {
    display: flex;
    margin-top: 10px;
    .k-button + .k-button {
      margin-left: 10px;
    }
  }
</style>



