<template>
  <div class="sub">
    <div class="sub-title">
      <h4>장비 현금 사용내역</h4>
      <p>장비에 직접 현금으로 결제한 내역을 알려드립니다.</p>
    </div>
    <div class="contents">
      <div class="dateSelector">
        <el-button class="button" @click="dec(1)" text>
          <span class="material-icons">chevron_left</span>
        </el-button>
        <el-button text @click="visible = true" class="month">
          {{$dayjs(month).format('YYYY.MM.DD') }}
        </el-button>
        <el-button class="button" @click="inc(1)" text>
          <span class="material-icons">chevron_right</span>
        </el-button>
      </div>

      

      <div class="list">
        <div class="total">
          <span>총 사용금액</span>
          <strong>
            184,000원
          </strong>
        </div>
        <div class="item" v-for="item in 6" :key="item">
          <div class="left">
            <strong>울트라 맥스 M1 아이세탁기 1번</strong>
            <span>16시 41분 12초</span>
          </div>
          <div class="right">
            <strong>
              4,000원
            </strong>
          </div>
        </div>
      </div>

      <div class="list-bottom">
        <el-button>더보기</el-button>
      </div>
    </div>

    <CalendarDialog v-model="visible" />
  </div>
</template>

<script lang="ts" setup>
import { useCounter } from '@vueuse/shared';

const visible = ref(false)

const { $dayjs } = useNuxtApp();
const {inc, dec, count} = useCounter(0, {max: 0, min: -30})
const { month } = useCalendar();

watch(count, value => {
  month.value = $dayjs().add(value, 'day').toDate()
})

</script>

<style lang="scss" scoped>
.dateSelector{
  padding:0 10px;
  display:flex;
  justify-content: space-between;
  align-items: center;
  height:60px;
  border-bottom:1px solid #e2e2e2;
  .el-button{
    width:50px;
    height:50px;
  }
  .month{
    font-size:20px;
    font-weight:600;
    width:unset;
  }
}


.list{
  display:flex;
  flex-direction: column;
  gap:10px;
  padding:20px;

  .total{
    display:flex;
    padding:15px;
    justify-content:space-between;
    align-items: center;
    background:#f8f8f8;
    border-radius:5px;
    span{
      font-size:14px;
    }
    strong{
      font-weight:500;
    }
  }

  .item{
    display:flex;
    justify-content: space-between;
    align-items: center;
    min-height:86px;
    border:1px solid #e2e2e2;
    border-radius:10px;
    padding:15px;
    

    .left{
      flex:1;
      margin-right:30px;
      display:flex;
      flex-direction: column;
      gap:5px;
      strong{
        font-size:15px;
        line-height:1.3;
      }
      span{
        display:flex;
        align-items: center;
        font-size:13px;
        gap:5px;
        color:#797979;
      }
    }
    .right{
      display:flex;
      flex-direction: column;
      gap:6px;
      strong{
        font-weight:600;
        color:#E81657;
      }
    }
  }
}

.list-bottom{
  display:flex;
  align-items: center;
  justify-content: center;
  padding:20px;
  .el-button{
    height:40px;
    border-radius:20px;
    min-width:100px;
    border:0;
    background:#f2f2f2;
  }
}
</style>