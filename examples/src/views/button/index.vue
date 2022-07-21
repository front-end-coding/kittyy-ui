<template>
  <div class="wrapper">
    <Button type="primary" size="medium">主要</Button>
    <Button type="warning" size="small">警告</Button>
    <Button type="info" size="small">信息</Button>
    <Button type="danger" size="mini">危险</Button>
  </div>
</template>
<script lang="ts" setup>
import { Button } from '@ui1024/components'

</script>
<style lang="less" scoped>
.wrapper {
  padding: 20px;
  Button +Button {
    margin-left: 10px;
  }
}
</style>