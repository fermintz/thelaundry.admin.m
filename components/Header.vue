<template>
  <header>
    <div class="left">
      <el-button circle @click="visible = true">
        <span class="material-icons">menu</span>
      </el-button>
      <div class="logo">
        <nuxt-link to="/">
          <img src="~/assets/img/logo_b.png" />
        </nuxt-link>
      </div>
    </div>
    
    <div class="right">
      <el-button plain>
        <img src="~/assets/img/kakao_x1.png" />
        <span>카톡상담</span>
      </el-button>
    </div>
  </header>

  <Drawer v-model="visible" />
</template>

<script lang="ts" setup>
const visible = ref(false);

</script>

<style lang="scss" scoped>

header{
  position: sticky;
  top:0;
  width:100%;
  display:flex;
  align-items: center;
  height:70px;
  background:#fff;
  z-index:9;

  .left{
    flex:1;
    display:flex;
    align-items: center;

    .logo{
      img{
        height:22px;
      }
    }

    .el-button{
      border:0;
      width:60px;
      height:60px;
      border-radius:5px;
      span{
        color:#292929;
      }
    }

  }
  .right{
    margin-right:10px;

    .el-button{
      height:30px;
      border-radius:15px;
      background:#FAE100;
      overflow:hidden;
      border:0;
      padding:0 10px;
      img{
        height:15px;
      }
      span{
        font-size:11px;
        margin-left:5px;
      }
    }
  }
}

</style>