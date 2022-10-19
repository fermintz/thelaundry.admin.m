<template>
  <div class="sub">
    <div class="sub-title">
      <h4>원격 장비제어</h4>
      <p>원격제어를 통해 장비에 금액을 투입할 수 있습니다.</p>
    </div>
    <div class="contents">
      <div class="eq-list">
        <div class="item" @click="visible = true" v-for="item in 10" :key="item"> 
          <div class="info">
            <div class="labels">
              <label>세탁기</label>
              <label>19kg</label> 
            </div>
            <strong>슈퍼 울트라 맥스 1번 세탁기</strong>
          </div>
          <span class="material-icons">
            arrow_forward
          </span>
        </div>
      </div>
    </div>

    <DialogRemote v-model="visible"/>
  </div>
</template>

<script lang="ts" setup>
const visible = ref(false)
</script>

<style lang="scss" scoped>
.eq-list{
  display:flex;
  flex-direction: column;
  padding:20px;
  gap:10px;
  
  .item{
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding:15px;
    border:1px solid #e2e2e2;
    border-radius:10px;
    min-height:85px;

    &:active{
      background:#f2f2f2;
    }

    .info{
      display:flex;
      flex-direction: column;
      .labels{
        display:flex;
        gap:5px;
        align-items: center;
        label{
          display:flex;
          justify-content: center;
          align-items: center;
          font-size:12px;
          padding:0 5px;
          border-radius:5px;
          height:20px;
          background:#f2f2f7;
        }
      }
      strong{
        font-size:15px;
        margin-top:10px;
      }
    }
  }
}
</style>