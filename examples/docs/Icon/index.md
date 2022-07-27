
## Icon 图标

<script setup>
import { Icon }from '@ui1024/components'
</script>

### 基础图标

<div class="wrapper">
  <Icon name="loading" />
  <Icon name="plus-circle" />
  <Icon name="warning" />
  <Icon name="delete" />
  <Icon name="arrow-right" />
  <Icon name="arrow-left" />
  <Icon name="arrow-up" />
  <Icon name="arrow-down" />
  <Icon name="s-promotion" />
  <Icon name="tool" />
</div>

### 徽标提示

<div class="wrapper">
  <Icon name="loading" dot badge="1" />
  <Icon name="plus-circle" dot badge="2"/>
  <Icon name="warning" dot badge="3"/>
  <Icon name="delete" dot badge="4"/>
  <Icon name="arrow-right" dot badge="5"/>
  <Icon name="arrow-left" dot badge="6"/>
  <Icon name="arrow-up" dot badge="7"/>
  <Icon name="arrow-down" dot badge="8"/>
  <Icon name="s-promotion" dot badge="9"/>
  <Icon name="tool" dot badge="10"/>
</div>



<style lang="less" scoped>
.wrapper {
  display: flex;
}

.kitty-icon + .kitty-icon {
  margin-left: 10px;
}

.kitty-icon {
  width: 50px;
  height: 50px;
  font-size: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
