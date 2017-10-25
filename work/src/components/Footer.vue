<template>
  <footer class="footer" v-once>Copyright &copy; {{getYear}} Baidu. All Rights Reserved.</footer>
</template>
<script type="text/javascript">
  export default {
    computed: {
      getYear(){
        return new Date().getFullYear()
      }
    }
  }
</script>
<style>
.footer {
    background: #fff;
    padding: 15px;
    text-align: center;
    color: #7A7676;
    font-size: 12px;
    /*width: 100%;*/
    border-top: 1px solid #eff0f4;
}
</style>
