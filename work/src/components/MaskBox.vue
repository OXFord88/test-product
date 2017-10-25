<template>
    <div class="alert-box">
        <div class="mask"></div>
        <div class="box-content">
            <div class="box-title">
                <span>{{title}}</span>
                <i class="el-icon-close close" @click="close()"></i>
            </div>
            <div class="box-cont">
                <div>
                    <div class="flex-list">
                        <span>毛重</span>
                        <el-input v-model="formData.grossWeight"></el-input>
                        <i>kg</i>
                    </div>
                    <div class="flex-list">
                        <span>皮重</span>
                        <el-input v-model="formData.tareWeight"></el-input>
                        <i>kg</i>
                    </div>
                </div>
                <div>
                    <div class="flex-list">
                        <span>净重</span>
                        <el-input v-model="formData.netweight"></el-input>
                        <i>kg</i>
                    </div>
                    <div class="flex-list">
                        <span>单价</span>
                        <el-input v-model="formData.price"></el-input>
                        <i>元/kg</i>
                    </div>
                </div>
                <div>
                    <div class="flex-list">
                        <span>杂项</span>
                        <el-input v-model="formData.sundry"></el-input>
                        <i>kg</i>
                    </div>
                </div>
            </div>
            <div class="box-btn">
                <el-button type="primary" @click="close(true)">确定</el-button>
            </div>
        </div>
    </div>
</template>
<script>
   export default {
       data() {
           return {
               title: '添加',
               formData: {
                   grossWeight: '',
                   tareWeight: '',
                   netweight: '',
                   price: '',
                   sundry: 100
               }
           }
       },
       props: ['rowData'],
       mounted() {
           if (this.rowData) {
               this.title = '编辑';
               this.formData = this.rowData;
           }
       },
       methods: {
           close(flag) {
//               console.log(this.formData)
               let json = {};
               json.show = false;
               if (flag) {
                   json.formData = this.formData;
               } else {
                   json.formData = '';
               }
               this.$emit('sendData', json)
           }
       }
   }
</script>
<style lang="less">
    .alert-box {
        width: 100%;
        height: 100%;
        position: fixed;
        left: 0;
        top: 0;
        z-index: 2000;
        .box-title {
            padding: 20px;
            position: relative;
            border-bottom: 1px solid #eee;
            margin-bottom: 20px;
            text-align: center;
            span {
                font-weight: bold;
            }
        }
        .box-btn {
            position: absolute;
            bottom: 20px;
            right: 20px;
        }
        .flex-list {
            .el-input, .el-input__inner {
                width: 160px;
            }
        }
        .box-cont > div {
            display: flex;
        }
    }
    .close {
        color: #666;
        float: right;
        cursor: pointer;
        &:hover {
            color: #20a0ff
        }
    }
    .alert-box .mask {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        background: #000;
        opacity: .4;
    }
    .alert-box .box-content {
        width: 600px;
        min-height: 260px;
        box-sizing: border-box;
        background: #fff;
        border-radius: 5px;
        position: absolute;
        left: 50%;
        top: 100px;
        margin-left: -300px;
        padding-bottom: 60px;
    }
</style>