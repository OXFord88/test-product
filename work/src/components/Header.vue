<template>
    <header class="header topbar clearfix">
      <!--<div class="switch-icon">-->
        <!--<el-switch v-model="isProduct" on-text="" off-text="" @change="taggleProduct"></el-switch>-->
        <!--<span>产品名/包名</span>-->
      <!--</div>-->
      <ul class="switch-icon">
          <li :class="{'active': $route.path == '/home'}" @click="toPage('/home')"><i class="el-icon-menu icon"></i>账单</li>
          <li :class="{'active': $route.path == '/count'}" @click="toPage('/count')"><i class="el-icon-document icon"></i>统计</li>
      </ul>
      <div class="user-menu">
        <div class="avatar-wrapper"><img class="avatar" src="../assets/images/profile.jpg"></div>
        <span class="username">username</span>
      </div>
    </header>
</template>

<script>
export default{
    computed: {
    },
    methods: {
        toPage(str) {
            this.$router.push({
                path: str
            })
        }
    }
}
</script>
<style lang="less" scoped>
.topbar {
  background-color: rgb(255,255,255);
  color: rgb(0,0,0);
  .active, .active .icon {
      color: #20a0ff;
  }
}
.clearfix {
    overflow: hidden;
}
.switch-icon {
  float: left;
  padding-left: 20px;
  li {
      list-style: none;
      display: inline-block;
      margin-right: 20px;
      line-height: 64px;
      height: 64px;
      cursor: pointer;
      i {
          margin-right: 5px;
          color: #666;
      }
  }
}
.user-menu {
  height: 64px;
  line-height: 64px;
  padding: 0 16px;
  float: right;
  .avatar-wrapper {
    display: inline-block;
    .avatar {
        width: 40px;
        height: 40px;
        margin: -3px 8px 0 0;
        border-radius: 50%;
        vertical-align: middle;
    }
  }
  .username {
    font-size: 17px;
    font-weight: 500;
    text-align: center;
  }
}
</style>
