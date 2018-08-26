<template>
  <el-form :inline="true" :model="form" label-width="100px" style="background: #f5f5f5;">
    <el-form-item label="审批编号">
      <el-input class="fixedWith" size="small" v-model="form.name" placeholder="请输入审批编号"></el-input>
    </el-form-item>
    <el-form-item label="审批状态">
      <el-select class="fixedWith" size="small" v-model="form.region" placeholder="请选择审批状态">
        <el-option v-for="(item, index) in approvalStatusOptions" :label="item.label" :value="item.value" :key="index"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="审批类型">
      <el-select class="fixedWith" size="small" v-model="form.region" placeholder="请选择审批类型">
        <el-option v-for="(item, index) in typeOptions" :label="item.label" :value="item.value" :key="index"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="创建时间">
      <el-date-picker class="fixedWith" size="small" v-model="form.region" type="daterange" start-placeholder="开始日期" end-placeholder="结束日期">
      </el-date-picker>
    </el-form-item>
    <el-form-item label="申请人">
      <el-input class="fixedWith" size="small" v-model="form.name" placeholder="请输入申请人名称"></el-input>
    </el-form-item>
    <el-form-item label="金额范围">
      <el-input-number v-model="form.resource" :step="0.01" :precision="2" size="small" controls-position="right" :min="0" label="请输入金额"></el-input-number>
      <span>-</span>
      <el-input-number v-model="form.resource" :step="0.01" :precision="2" size="small" controls-position="right" :min="0" label="请输入金额"></el-input-number>
    </el-form-item>
    <el-form-item label=" ">
      <el-button type="primary" size="small">查询</el-button>
      <el-button size="small">清空</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: 'SearchBox',
  components: {
  },
  data () {
    return {
      approvalStatusOptions: [
        {label: '已保存', value: 'saved'},
        {label: '待审批', value: 'pending'},
        {label: '审批中', value: 'approval'},
        {label: '已驳回', value: 'dismissed'},
        {label: '审批通过', value: 'approved'},
        {label: '已支付', value: 'paid'}
      ],
      typeOptions: [
        {label: '费用报销单', value: 'expense'},
        {label: '差旅报销单', value: 'travel'},
        {label: '用款申请单', value: 'payment'},
        {label: '暂支单', value: 'temporary'},
        {label: '还款单', value: 'repayment'}
      ],
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    }
  }
}
</script>

<style scoped>
  .fixedWith {
    width: 275px;
  }
</style>
