<template>
  <div v-loading="loading">
    <el-table ref="multipleTable" :data="reposData" border tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55">
      </el-table-column>
      <el-table-column label="repository" width="180">
        <template scope="scope">
          <div><a :href="scope.row.repository.html_url">{{scope.row.repository.full_name}}</a></div>
        </template>
      </el-table-column>
      <el-table-column label="subject">
        <template scope="scope">
          <div><a :href="scope.row.subject.url">{{scope.row.subject.title}}</a></div>
        </template>
      </el-table-column>
      <el-table-column label="updated_at" >
        <template scope="scope">
          <div>{{scope.row.updated_at | date}}</div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import GithubService from '@/service/github'
  export default {
    name: 'home',
    data () {
      return {
        loading: false,
        reposData: [],
        multipleSelection: []
      }
    },
    mounted () {
      this.getNotifications()
    },
    methods: {
      async getNotifications () {
        this.loading = true
        this.reposData = await GithubService.listNotifications()
        this.loading = false
      },
      handleSelectionChange (val) {
        this.multipleSelection = val
      }
    }
  }

</script>
