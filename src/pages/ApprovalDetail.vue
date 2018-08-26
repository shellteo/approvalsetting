<template>
  <el-container>
    <el-container>
      <el-main style="background-color: #ffffff;">
      </el-main>
      <el-footer class="start-approval-footer">
        <el-button type="primary" size="small">
          <font-awesome-icon size="sm" icon="print" />
          <span style="margin-left: 5px;">预览打印</span>
        </el-button>
        <el-button type="primary" size="small">
          <font-awesome-icon size="sm" icon="save" />
          <span style="margin-left: 5px;">保存</span>
        </el-button>
        <el-button type="primary" size="small">
          <font-awesome-icon size="sm" icon="cloud-upload-alt" />
          <span style="margin-left: 5px;">提交</span>
        </el-button>
      </el-footer>
    </el-container>
    <el-aside width="300px">
      <ProcessChart></ProcessChart>
    </el-aside>
  </el-container>
</template>

<script>
import ProcessChart from '@/components/approvalDetail/ProcessChart'
export default {
  name: 'ApprovalDetail',
  components: {
    ProcessChart
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="less" scoped>
  .start-approval-footer {
    background-color: #FFFFFF;
    border-top: 1px solid #F5F5F7;
    box-shadow: 0 -10px 50px #F5F5F7;
    .flexSetting();
  }
</style>
