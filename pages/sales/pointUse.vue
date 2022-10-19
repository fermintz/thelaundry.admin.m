<template>
  <div class="sub">
    <div class="sub-title">
      <h4>키오스크 포인트 사용내역</h4>
      <p>키오스크를 통해 포인트를 사용한 내역을 알려드립니다.</p>
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
          <span>총 포인트사용</span>
          <strong>
            184,000P
          </strong>
        </div>
        <div class="item">
          <div class="left">
            <strong>010-4417-3371</strong>
            <span>슈퍼 울트라 맥스 1번 세탁기</span>
            <span>16시 41분 42초</span>
          </div>          
          <div class="right">
            <strong>4,000P</strong>
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
    align-items: center;
    min-height:86px;
    border:1px solid #e2e2e2;
    border-radius:10px;
    padding:15px;

    .left{
      flex:1;
      display:flex;
      flex-direction: column;
      gap:8px;
      strong{
        font-weight:500;
      }
      span{
        font-size:13px;
        color:#898989;
      }

    }
    .right{
      strong{
        font-size:18px;
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