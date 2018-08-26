<template>
  <el-container>
    <el-main class="mainBox">
      <SearchBox></SearchBox>
      <Table style="margin-top: 20px"></Table>
      <el-pagination
        style="float: right;margin-top: 20px;"
        background
        layout="total, prev, pager, next, jumper"
        :total="2">
      </el-pagination>
    </el-main>
  </el-container>
</template>

<script>
import SearchBox from '@/components/approvalList/SearchBox'
import Table from '@/components/approvalList/Table'
export default {
  name: 'ApprovalList',
  data () {
    return {
    }
  },
  components: {
    SearchBox,
    Table
  }
}
</script>

<style scoped>
  .mainBox {
    background: #ffffff;
  }
</style>
