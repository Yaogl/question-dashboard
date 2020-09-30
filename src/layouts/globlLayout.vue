<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
      <div class="logo">
          题库管理
      </div>
      <a-menu theme="dark" mode="inline" v-model:selectedKeys="selectedKeys">
        <a-menu-item key="1">
          <!-- icon预留 -->
          <span>题库管理</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <!-- <menu-unfold-outlined
          v-if="collapsed"
          class="trigger"
          @click="() => (collapsed = !collapsed)"
        /> 收起按钮 -->
        <!-- <menu-fold-outlined v-else class="trigger" @click="() => (collapsed = !collapsed)" /> -->
      </a-layout-header>
      <a-layout-content
        :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
      >
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
export default {
  data() {
    return {
      selectedKeys: ['1'],
      collapsed: false,
    };
  },
};
</script>
<style>
#components-layout-demo-custom-trigger{
  height: 100%;
}

#components-layout-demo-custom-trigger .logo {
  line-height: 40px;
  font-size: 16px;
  font-weight: 600;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
  color: #fff;
}
</style>
