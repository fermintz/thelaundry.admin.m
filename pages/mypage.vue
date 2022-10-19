<template>
  <div class="sub">
    <div class="sub-title">
      <h4>내 정보</h4>
      <p>비밀번호 및 내정보를 변경할 수 있습니다.</p>
    </div>
    <div class="contents">
      <dl>
        <dt>비밀번호 변경</dt>
        <dd>
          <input type="text" placeholder="현재 비밀번호 입력">
          <input type="text" placeholder="새 비밀번호 입력">
        </dd>
      </dl>
      <div class="bottom">
        <el-button text>
          변경하기
        </el-button>
      </div>
      
    </div>

    <DialogMessage v-model="visible"/>
  </div>
</template>

<script lang="ts" setup>
const visible = ref(false)
</script>

<style lang="scss" scoped>

.contents{
  padding:20px;
  dl{
    dt{
      font-size:14px;
      margin-bottom:10px;
    }
    dd{
      display:flex;
      flex-direction: column;
      align-items: center;
      gap:10px;

      input{
        width:100%;
        height:45px;
        padding:0 10px;
        border:1px solid #c2c2c2;
        border-radius:5px;
      }
    }
  }
  .bottom{
    display:flex;
    justify-content: center;
    margin-top:20px;
    .el-button{
      width:100%;
      background:#292929;
      color:#fff;
      height:45px;
      padding:0 20px;
      border-raidus:5px;
    }
  }
  
}



</style>