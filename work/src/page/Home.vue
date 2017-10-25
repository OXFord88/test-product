// 账单页面
<template>
<div>
    <el-card>
        <ul class="card_list">
            <li>今日总重: {{todayData.totalWeight}} <i>kg</i></li>
            <li>花费: {{todayData.price}} <i>元</i></li>
            <li>均价: {{todayData.averagePrice}} <i>kg/元</i></li>
        </ul>
    </el-card>
    <el-button class="add-btn" type="primary" @click.native.prevent="add">添加</el-button>
    <el-table :data="dataList" border>
        <el-table-column type="index" width="40"></el-table-column>
        <el-table-column label="毛重(kg)" prop="grossWeight"></el-table-column>
        <el-table-column label="皮重(kg)" prop="tareWeight"></el-table-column>
        <el-table-column prop="netweight" label="净重(kg)"></el-table-column>
        <el-table-column prop="price" label="单价(元/kg)"></el-table-column>
        <el-table-column prop="sundry" label="杂项(kg)"></el-table-column>
        <el-table-column prop="totalprice" label="总价(元)" sortable></el-table-column>
        <el-table-column prop="time" label="时间" width="110" sortable></el-table-column>
        <el-table-column label="操作" width="140">
            <template scope="scope">
               <el-button size="small" @click.native.prevent="add(scope)">编辑</el-button>
               <el-button size="small" type="danger">删除</el-button>
            </template>
        </el-table-column>
    </el-table>
    <v-maskbox v-if="show" v-on:sendData="addOrDetail" :rowData="rowMsg"></v-maskbox>
</div>
</template>
<script>
//import { mapGetters, mapActions } from 'vuex';
//import Vue from 'vue'
import request from '../api/request';
import vMaskbox from '../components/MaskBox';
export default {
    data() {
        return {
            show: false,
            rowMsg: {},
            todayData: {
                totalWeight: 100,
                price: 200,
                averagePrice: 20
            },
            dataList: []
        }
    },
    computed: {
    },
    components: {vMaskbox},
    methods: {
        addOrDetail(data) {
//            this.show = false;
//            console.log(data)
            this.show = data.show;
            if (data.formData) {
                // 请求编辑or添加接口
            }
        },
        add(data) {
            console.log(data)
            this.show = true;
            if (data) {
                this.rowMsg = data.row;
            } else {
                this.rowMsg = ''
            }
        }
    },
    created() {
       let _this = this;
       request.getAllList().then(res => {
//           console.log(res)
           this.dataList = res.data
       });
//       request.addOrModify({id:1}).then(data => {
//           console.log(data)
//       })
    },
    mounted() {

    }
}
</script>
<style scoped lang="less">
.header {
    margin-left: 20px;
}
.title {
    font-weight: bold;
}
.card_list {
    padding: 0;
    margin: 0;
    li {
        line-height: 30px;
        display: inline-block;
        margin-right: 30px;
    }
}
.add-btn {
    float: right;
    margin: 20px 0 10px;
}
</style>