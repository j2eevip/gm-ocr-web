<template>
  <div class="app-container dashboard-container">
    <div class="dashboard-text">
      name: {{ name }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  setup() {
    return {
      name: 'Hello world',
    };
  },
};
</script>

<style lang="scss" scoped>
.dashboard {
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
