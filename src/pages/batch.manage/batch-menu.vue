<template>
  <div>
    <el-row :gutter="20">
        <el-col :md="4">
          <el-menu v-model="$route.name" :router="true">
            <el-menu-item index="notifications">
              <i class="el-icon-menu"></i>
              <span slot="title">消息列表</span>
            </el-menu-item>
            <el-menu-item index="repos">
              <i class="el-icon-setting"></i>
              <span slot="title">批量管理项目</span>
            </el-menu-item>
          </el-menu>
        </el-col>
        <el-col :md="20">
          <div class="batch-container">
            <router-view></router-view>
          </div>
      </el-col>
    </el-row>
  </div>
</template>


<script>
export default {
  name: 'batch-menu',
  data () {
    return {
    }
  },
  methods: {
    redirect () {
    }
  }
}
</script>
