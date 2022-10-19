<template>
  <div class="sub">
    <div class="sub-title">
      <h4>키오스크 포인트 충전내역</h4>
      <p>키오스크를 통해 포인트를 충전한 내역을 알려드립니다.</p>
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
          <dl>
            <dt>총 충전금액</dt>
            <dd>329,000원</dd>
          </dl>
          <dl>
            <dt>현금</dt>
            <dd>129,000원</dd>
          </dl>
          <dl>
            <dt>카드</dt>
            <dd>200,000원</dd>
          </dl>
        </div>
        <div class="item" v-for="item in 3" :key="item">
          <div class="icon">
            <label class="cash">현금</label>
          </div>
          <div class="info">
            <strong>010-4417-3371</strong>
            <span>16시 41분 12초</span>
          </div>
          <div class="price">
            <strong>
              4,000원
            </strong>
          </div>
        </div>
        <div class="item">
          <div class="icon">
            <label class="card">현금</label>
          </div>
          <div class="info">
            <strong>010-4417-3371</strong>
            <span>16시 41분 12초</span>
          </div>
          <div class="price">
            <strong>
              5,500원
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
    align-items: center;
    background:#f8f8f8;
    border-radius:5px;

    dl:first-child{
      border-right:1px solid #e2e2e2;
      margin-right:20px;
    }
    
    dl{
      flex:1;
      dt{
        font-size:12px;
        color:#898989;
      }
      dd{
        font-weight:500;
        margin-top:8px;
        font-size:14px;
      }
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

    .icon{
      label{
        display:flex;
        align-items: center;
        justify-content: center;
        width:50px;
        height:50px;
        background:#f2f2f2;
        border-radius:5px;
        margin-right:20px;
      }
      label.cash{
        background:#FBF4F6;
        color:#8A5D6A;
      }
      label.card{
        background:#F4F4FB;
        color:#8484BF;
      }
    }
    .info{
      display:Flex;
      flex-direction: column;
      flex:1;
      gap:5px;
      strong{
        font-size:16px;
        font-weight:500;
      }
      span{
        font-size:12px;
        color:#898989;
      }
    }
    .price{
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