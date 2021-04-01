<template>
    <el-container>
        <el-header height="80px">
            <Header/>
        </el-header>
        <el-container>
        <el-aside width="300px">
        </el-aside>
        <el-main>
            main
        </el-main>
        </el-container>

    </el-container>
</template>

<script>
import Header from './header.vue'
export default {
    components:{Header},
    data(){
        return {
            hello:'hello world'
        }
    }
}
</script>

<style lang="scss" scoped>
    .el-container{
        display:flex;
    }
    .el-header{
        background:var(--secondary-color);
    }
    
</style>
