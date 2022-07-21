<template>
  <div class="nav">
    <div>
      <h2>this is doc</h2>
    </div>
    <div>
      <ul>
        <li>
          <router-link to="/button">Button</router-link>
        </li>
      </ul>
    </div>
  </div>

</template>

<script setup lang="ts">
</script>

<style scoped lang="less">
.nav {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>