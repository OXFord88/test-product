<template>
<div class="sidebar">
    <div class="header">
        <div class="logo">
            <span class="logo-image">I</span>
            <span class="logo-text">IPL监控平台</span>
        </div>
    </div>
    <div class="nav">
    <el-menu :default-active="$route.path" class="el-menu-nav" unique-opened router>
      <template v-for="(nav,index) in navData">
        <el-menu-item :index="nav.path" v-if="!nav.subNav">
            <i :class="nav.icon"></i><span>{{nav.title}}</span>
        </el-menu-item>
        <el-submenu :index="nav.path || String(index)" v-else>
          <template slot="title"><i :class="nav.icon"></i><span>{{nav.title}}</span></template>
          <template v-for="sn in nav.subNav">
            <el-menu-item :index="sn.path">
                <i :class="sn.icon"></i><span>{{sn.title}}</span>
            </el-menu-item>
          </template>
        </el-submenu>
      </template>
    </el-menu>
    </div>
  </div>
</template>

<script>
export default {
    methods: {
    },
    data(){
      return {
        navData:[
          {title:'首页',path:'/home',icon:'el-icon-document'},
          {title:'ISSUE集合',icon:'el-icon-document',path:'/issuecollo'},
          {title:'数据差异',icon:'el-icon-menu', subNav:[
            {title:'push&pull和appsflyer差异',path:'/appsflyerdiff'},
            {title:'push和pull差异',path:'/pushDiffPull'},
            {title:'push和pasta差异',path:'/pushDiffPasta'},
            {title:'安装留存',path:'/retentionComp'},
          ]}
        ]
      }
    }
}
</script>

<style lang="less">
.logo {
    height: 100%;
    background-color: rgba(255,255,255,.05);
    padding: 0 16px 0 24px;
    .logo-image {
        display: inline-block;
        background: #039BE5;
        width: 32px;
        min-width: 32px;
        height: 32px;
        line-height: 32px;
        text-align: center;
        font-size: 16px;
        font-weight: 500;
        color: #FFF;
        border-radius: 2px;
    }
    .logo-text {
        color: #FFF;
        margin-left: 16px;
        font-size: 16px;
    }
}
.nav {
  color: #fff;
  .el-menu {
    background-color: transparent;
    .el-menu-item {
      color: rgba(255,255,255,.7);
      &:hover{
        background: rgba(0,0,0,.1);
        color: #fff;
      }
      &.is-active {
          color: #fff!important;
          background-color: rgb(3,155,229)!important;
      }
    }
  }
  .el-submenu {
    &.is-active {
      background-color: rgba(0,0,0,.12);
      .el-submenu__title {
        background-color: rgba(0,0,0,.12);
      }
    }
    .el-menu {
      background-color: rgba(0,0,0,.12);
    }
    .el-submenu__title {
      color: rgba(255,255,255,.7);
      &:hover{
        background: rgba(0,0,0,.1);
        color: #fff;        
      }
    }
  }
}
</style>
