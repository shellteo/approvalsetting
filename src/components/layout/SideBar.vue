<template>
  <el-aside class="side-box">
    <ul class="card-box">
      <li v-for="(item, i) in sideBar" :key="i" class="card-box-item" :class="{'checked':current === i}" @click="handleChange(i, item.link)">
        <font-awesome-icon size="lg" :icon="item.icon" /><span>{{item.title}}</span>
      </li>
    </ul>
  </el-aside>
</template>

<script>
export default {
  name: 'SideBar',
  data () {
    return {
      current: 0,
      sideBar: [
        {
          title: '首页',
          icon: 'tachometer-alt',
          link: 'home'
        },
        {
          title: '发起审批',
          icon: 'file-signature',
          link: 'startApproval'
        },
        {
          title: '我审批的',
          icon: 'file-invoice',
          link: 'approvalList'
        },
        {
          title: '我发起的',
          icon: 'file-invoice',
          link: 'approvalList'
        },
        {
          title: '我关注的',
          icon: 'file-invoice',
          link: 'approvalList'
        },
        /*{
          title: '审批配置',
          icon: 'file-invoice',
          link: 'approvalSetting'
        },*/
        {
          title: '审批表单配置',
          icon: 'file-invoice',
          link: 'approvalFormConfig'
        },
        {
          title: '流程图配置',
          icon: 'file-invoice',
          link: 'flowChartConfig'
        }
      ]
    }
  },
  methods: {
    handleChange (i, link) {
      this.current = i
      this.$router.push(link)
    }
  }
}
</script>

<style scoped>
  .side-box {
    width: 250px!important;
    padding: 20px;
    font-size: 14px;
  }
  .card-box {
    background-color: #ffffff;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    height: 400px;
  }
  ul {
    padding: 10px 0 30px 0;
    margin-bottom: 0;
    margin-top: 0;
    list-style: none;
  }
  .card-box-item {
    height: 50px;
    display: flex;
    align-items: center;
    padding-left: 19px;
    color: #6b737b!important;
    cursor: pointer;
  }
  .card-box-item span {
    margin-left: 15px;
  }
  .card-box-item:nth-child(1) span {
    margin-left: 7px!important;
  }
  .card-box-item:nth-child(2) span {
    margin-left: 7px!important;
  }
  .card-box-item:hover {
    color: #2b3441!important;
    background-color: #EBEEF5;
    font-weight: 500;
  }
  .checked {
    color: #2b3441!important;
    background-color: #EBEEF5;
    font-weight: 500!important;
  }
</style>
