<template>
  <el-container>
    <el-header class="start-approval-header">
      <el-radio-group v-model="currentApproval" size="small">
        <el-radio-button label="差旅报销单">差旅报销单</el-radio-button>
        <el-radio-button label="暂支单">暂支单</el-radio-button>
        <el-radio-button label="还款单">还款单</el-radio-button>
        <el-radio-button label="用款申请单">用款申请单</el-radio-button>
        <el-radio-button label="费用报销单">费用报销单</el-radio-button>
      </el-radio-group>
    </el-header>
    <el-main class="startApproval">
      <el-collapse v-model="activeNames">
        <el-collapse-item name="baseInfo">
          <template slot="title">
            <div class="collapseTitle">基础信息</div>
          </template>
          <BaseInfo></BaseInfo>
        </el-collapse-item>
      </el-collapse>
    </el-main>
    <el-footer class="start-approval-footer">
      <el-button type="primary" size="small" @click="addBudgetDetail">
        <font-awesome-icon size="sm" icon="plus" />
        <span style="margin-left: 5px;">添加明细</span>
      </el-button>
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
    <el-dialog
      title="添加明细"
      top="100px"
      :visible.sync="dialogVisible"
      width="60%">
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </el-container>
</template>

<script>
import BaseInfo from '@/components/startApproval/BaseInfo'
import {getAll} from '../apis/index'
export default {
  name: 'StartApproval',
  data () {
    return {
      currentApproval: '暂支单',
      activeNames: ['baseInfo'],
      dialogVisible: false
    }
  },
  components: {
    BaseInfo
  },
  methods: {
    // 添加明细
    addBudgetDetail () {
      this.dialogVisible = true
    }
  },
  mounted () {
    getAll().then((res) => {
      console.log(JSON.parse(res.data))
    })
  }
}
</script>

<style lang="less" scoped>
  .start-approval-header {
    .flexSetting();
    height: auto!important;
    padding: 20px 0 0 0;
    background-color: #ffffff;
  }
  .title {
    font-size: 14px;
    color: #606266;
    margin: 20px 0;
  }
  .startApproval {
    background-color: #ffffff;
  }
  .collapseTitle {
    color: #000;
    font-size: 15px;
  }
  .start-approval-footer {
    background-color: #FFFFFF;
    border-top: 1px solid #F5F5F7;
    box-shadow: 0 -10px 50px #F5F5F7;
    .flexSetting();
  }
</style>
