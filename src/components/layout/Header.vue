<template>
  <div class="headerBox">
    <div class="headerLeft">
      <img :src="logo" alt="123" class="logo">
      <span>ARS审批报销系统</span>
    </div>
    <div class="headerRight">
        <el-dropdown class="dropDown">
          <div class="iconLink dropDownItem">
            <font-awesome-icon size="2x" icon="language" />
          </div>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>中文</el-dropdown-item>
            <el-dropdown-item>English</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      <div class="iconLink">
        <el-badge :value="12">
          <font-awesome-icon size="lg" icon="bell" />
        </el-badge>
      </div>
      <div class="iconLink">
        <font-awesome-icon size="2x" icon="user-circle" />
      </div>
    </div>
  </div>
</template>

<script>
import logo from '@/assets/logo.jpg'
export default {
  name: 'Header',
  data () {
    return {
      logo
    }
  }
}
</script>

<style lang="less" scoped>
  .dropDown {
    height: 100%;
    outline: none;
  }
  .dropDownItem {
    color: #ffffff;
  }
  .headerLeft {
    margin-left: 20px;
    .flexSetting();
  }
  .iconLink {
    height: 100%;
    padding: 0 1rem;
    .flexSetting();
    &:hover {
      background-color: #233648;
    }
  }
  .headerBox {
    .flexSetting(row, center, space-between);
    height: inherit;
    color: #ffffff;
    font-size: 14px;
  }
  .logo {
    width: 40px;
    margin-right: 20px;
  }
  .headerRight {
    height: 100%;
    .flexSetting()
  }
</style>
