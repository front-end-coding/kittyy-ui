
## k-icon 图标

<script setup>
import { KIcon  }from '@ui1024/components'
</script>

### 基础图标

<div class="wrapper">
  <k-icon name="loading" />
  <k-icon name="plus-circle" />
  <k-icon name="warning" />
  <k-icon name="delete" />
  <k-icon name="arrow-right" />
  <k-icon name="arrow-left" />
  <k-icon name="arrow-up" />
  <k-icon name="arrow-down" />
  <k-icon name="s-promotion" />
  <k-icon name="tool" />
</div>

### 徽标提示

<div class="wrapper">
  <k-icon name="loading" dot badge="1" />
  <k-icon name="plus-circle" dot badge="2"/>
  <k-icon name="warning" dot badge="3"/>
  <k-icon name="delete" dot badge="4"/>
  <k-icon name="arrow-right" dot badge="5"/>
  <k-icon name="arrow-left" dot badge="6"/>
  <k-icon name="arrow-up" dot badge="7"/>
  <k-icon name="arrow-down" dot badge="8"/>
  <k-icon name="s-promotion" dot badge="9"/>
  <k-icon name="tool" dot badge="10"/>
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
