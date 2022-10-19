<template>
  <div class="sub">
    <div class="sub-title">
      <h4>키오스크 설정</h4>
      <p>키오스크를 원격으로 제어합니다.</p>
    </div>
    <div class="contents">
      <div class="list">
        <div class="item" @click="visible = true">
          <div class="text">
            <strong>프로그램 재실행</strong>
            <span>키오스크 프로그램을 종료 후 다시 시작합니다.</span>
          </div>
          <span class="material-icons">arrow_forward</span>
        </div>
        <div class="item">
          <div class="text">
            <strong>전원종료 후 다시 시작</strong>
            <span>전원을 완전히 종료 후 다시 전원이 켜집니다.</span>
          </div>
          <div class="arrow">
            <span class="material-icons">arrow_forward</span>
          </div>
        </div>
      </div>
    </div>

    <DialogMessage v-model="visible"/>
  </div>
</template>

<script lang="ts" setup>
const visible = ref(false)
</script>

<style lang="scss" scoped>
.list{
  display:flex;
  flex-direction: column;
  padding:20px;
  gap:10px;
  

  .item{
    display:flex;
    align-items: center;
    min-height:90px;
    border:1px solid #e2e2e2;
    border-radius:10px;
    padding:15px;

    &:active{
      background:#f2f2f2;
    }

    .text{
      flex:1;
      display:flex;
      flex-direction: column;
      align-items: flex-start;
      gap:10px;
      strong{
        font-size:16px;
        font-weight:600;
      }
      span{
        color:#898989;
        font-size:13px;
      }
    }
    .arrow{ 
      span{

      }
    }
    
  }
}



</style>