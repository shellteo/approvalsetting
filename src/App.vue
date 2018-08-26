<template>
  <el-container style="height: 100%">
    <el-header style="background-color: #32475A;"><Header></Header></el-header>
    <el-container>
      <SideBar></SideBar>
      <router-view/>
    </el-container>
  </el-container>
</template>

<script>
import Header from '@/components/layout/Header'
import SideBar from '@/components/layout/SideBar'
export default {
  name: 'App',
  components: {
    Header: Header,
    SideBar: SideBar
  }
}
</script>

<style lang="less">
  @import "style/main.less";
  .el-header {
    padding: 0;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #C1C1C1;
    border-radius: 4px;
  }
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  .el-table .tableHeaderClass {
    background: #FAFAFA!important;
  }
</style>
