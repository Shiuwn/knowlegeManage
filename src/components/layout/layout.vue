<template>
    <el-container  class="km-container">
        <el-header height="80px" class="km-header">
            <Header/>
        </el-header>
        <el-container>
        <el-aside width="200px" class="km-aside">
            <Sidebar/>
        </el-aside>
        <el-main class="km-main">
            main
        </el-main>
        </el-container>

    </el-container>
</template>

<script>
import Header from './header.vue'
import Sidebar from './sidebar'
export default {
    components:{Header,Sidebar},
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
    .km-header{
        position:fixed;
        right:0;
        left:0;
        top:0;
    }    
    .km-container{
        padding-top:80px;
    }
    .km-aside{
        position:fixed;
        left:0;
        top:80px;
        bottom:0;
    }
    .km-main{
        padding-left:200px;
    }
</style>
