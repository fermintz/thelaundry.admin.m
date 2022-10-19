<template>
  <div class="wrap">
    <div class="login">
      <div class="logo">
        <span>welcome</span>
        <img src="~/assets/img/logo_b.png"/>
      </div>

      <div class="form">
        <dl>
          <dt>이메일(아이디)</dt>
          <dd>
            <input type="text" placeholder="abc@naver.com"/>
          </dd>
        </dl>
        <dl>
          <dt>비밀번호</dt>
          <dd>
            <input type="text" placeholder="비밀번호를 입력해주세요"/>
          </dd>
        </dl>

        <el-button text>
          로그인
        </el-button>
      </div>
      <div class="bottom">
        <el-divider>
          문의하기
        </el-divider>
        <div class="btns">
          <el-button text circle>
            <img src="~/assets/img/kakao_x1.png">
          </el-button>
        </div>
        
      </div>
    </div>
  </div>
</template>


<script lang="ts" setup>
definePageMeta({
  layout:'empty'
})

</script>

<style lang="scss" scoped>
.wrap{
  display:flex;
  flex-direction: column;
  justify-content: center;
  height:100vh;
  padding:30px;
}

.logo{
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom:70px;
  span{
    margin-bottom:20px;
    color:#c2c2c2;
    letter-spacing: 5px;
  }
  img{
    height:40px;
  }
}

.form{
  display:flex;
  flex-direction: column;
  gap:20px;
  

  dl{
    dt{font-size:12px;margin-bottom:10px;}
    dd{
      input{
        height:50px;
        width:100%;
        border-radius:5px;
        border:1px solid #c2c2c2;
        padding:0 15px;
      }
    }
  }
  .el-button{
    width:100%;
    height:50px;
    border-radius:5px;
    background:#00a0e9;
    color:#fff;
  }
}


.bottom{
  margin-top:70px;

  .btns{
    display:flex;
    justify-content: center;
    align-items: center;
    gap:10px;

    .el-button{
      width:50px;
      height:50px;
      background:#ffe812;
      img{
        height:20px;
      }
    }
  }
}


</style>