<template>
<div id="app">
    <div class="container">
        <!--<v-sidebar></v-sidebar>-->
        <div class="content-container">
            <v-head v-if="$route.path !== '/login'"></v-head>
            <div class="content">
              <router-view></router-view>
            </div>
            <!--<v-footer></v-footer>-->
        </div>
    </div>
</div>
</template>
<script>
import vHead from '../components/Header.vue';
//import vFooter from '../components/Footer.vue';
//import vSidebar from '../components/Sidebar.vue';
export default {
    components: {
        vHead
//        vFooter
//        vSidebar
    }
}
</script>
<style>
@import "../assets/styles/common.css"
</style>
