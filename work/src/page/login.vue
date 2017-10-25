<template>
    <div class="login">
        <div class="login-type">
            <el-radio class="radio" v-model="loginType" label="1">员工登录</el-radio>
            <el-radio class="radio" v-model="loginType" label="2">管理员登录</el-radio>
            <el-radio class="radio" v-model="loginType" label="3">超级管理员登录</el-radio>
        </div>
        <el-card>
            <span>用户名</span>
            <el-input type="text" placeholder="请输入用户名"></el-input>
            <span>密码</span>
            <el-input type="password" placeholder="请输入密码"></el-input>
            <el-button type="primary" class="login-btn">登录</el-button>
        </el-card>

    </div>
</template>
<style lang="less">
.login-msg {
    margin: 0 auto;
    padding-top: 20px;
    .flex-list {
        /*margin-left: 100px;*/
        flex-direction: column;
        span {
            text-align: left;
        }
    }
}
.login-type {
    text-align: center;
}
.login {
    .el-card {
        width: 400px;
        margin: 0 auto;
        margin-top: 20px;
        .el-input {
            width: 100%;
            margin: 10px 0;
        }
        .el-card__body > span {
            color: #666;
        }
    }
    .login-btn {
        width: 100%;
        margin-top: 20px;
    }
}
</style>
<script>
    export default {
        data() {
            return {
                loginType: '1'
            }
        }
    }
</script>