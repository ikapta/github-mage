<template>
  <div class="mage-login">
    <el-row>
      <el-col  :xs="16" :sm="10" :md="8" >
        <p class="mage-login--tip"><em>The user information stored in the sessionStorage only.</em></p>
        <el-form class="mage-login--form" :model="loginForm" :rules="ruleForm" ref="loginForm" label-width="60px">
          <el-form-item label="name" prop="name">
            <el-input type="text" v-model="loginForm.name" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="pass" prop="pass">
            <el-input type="password" v-model="loginForm.pass" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm">提交</el-button>
            <el-button @click="$refs.loginForm.resetFields()">重置</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import GitHubService from '@/service/github'
  import Store from '@/service/store'

  export default {
    name: 'home',
    data () {
      return {
        loginForm: {
          name: null,
          pass: null
        },
        ruleForm: {
          name: [{
            required: true,
            message: 'please type name'
          }],
          pass: [{
            required: true,
            message: 'please type password'
          }]
        }
      }
    },
    methods: {
      submitForm () {
        this.$refs.loginForm.validate(valid => {
          if (valid) {
            Store.set('authInfo', {
              username: this.loginForm.name,
              password: this.loginForm.pass
            })
            this.$router.push({
              name: 'batch/notifications'
            })
          } else {
            console.log('invalid')
          }
        })
      },
      async listNotifications () {
        await GitHubService.listNotifications()
      }
    }
  }

</script>

<style lang="sass" scoped>
  .mage-login
    &--tip
      margin-bottom: 20px
      text-align: center
    &--form
      min-wdith: 400px
    .el-row
      height: 100vh
      display: flex
      align-items: center
      justify-content: center
</style>
