<template>
  <el-table :data="tableData" style="width: 100%" border header-cell-class-name="tableHeaderClass">
    <el-table-column prop="id" label="审批编号" fixed="left"></el-table-column>
    <el-table-column prop="formName" label="业务类型"></el-table-column>
    <el-table-column prop="submittedName" label="申请人"></el-table-column>
    <el-table-column prop="lastModifiedDate" label="申请时间"></el-table-column>
    <el-table-column prop="money" label="金额">
      <template slot-scope="scope">
        <span style="font-weight: bolder;">{{scope.row.money.toFixed(2)}}</span>
      </template>
    </el-table-column>
    <el-table-column prop="status" label="审批状态">
      <template slot-scope="scope">
        <el-tag type="info">{{scope.row.status}}</el-tag>
      </template>
    </el-table-column>
    <el-table-column label="操作" fixed="right">
      <template slot-scope="scope">
        <el-button type="text" size="mini">详情</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: 'SearchBox',
  components: {
  },
  data () {
    return {
      tableData: [
        {
          id: 'ars00001',
          formName: '差旅报销单',
          submittedName: 'zx',
          lastModifiedDate: '2018-08-13',
          money: 1000,
          status: '待审批'
        },
        {
          id: 'ars00002',
          formName: '差旅报销单',
          submittedName: 'zx',
          lastModifiedDate: '2018-08-13',
          money: 100,
          status: '待审批'
        }
      ]
    }
  }
}
</script>

<style scoped>
</style>
