<template>
    <el-container>
        <el-header height="80px">
            header
        </el-header>
        <el-container>
        <el-aside width="300px">
            aside
        </el-aside>
        <el-main>
            main
        </el-main>
        </el-container>

    </el-container>
</template>

<script>

export default {
    data(){
        return {
            hello:'hello world'
        }
    }
}
</script>

<style lang="sass" scoped>
    .el-container{
        display:flex;
    }
</style>
