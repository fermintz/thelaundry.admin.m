<template>
  <div class="main">
    <section class="calendar-wrap">
      <div class="control">
        <el-button class="button" @click="dec(1)">
          이전
        </el-button>
        <el-button class="text" plain text>
          {{ $dayjs(month).format('YYYY.MM') }}
        </el-button>
        <el-button class="button" @click="inc(1)">
          다음
        </el-button>
      </div>
      <div class="week-text">
        <label>일</label>
        <label>월</label>
        <label>화</label>
        <label>수</label>
        <label>목</label>
        <label>금</label>
        <label>토</label>
      </div>

      <div class="week" v-for="(week, weekIndex) in calendar" :key="weekIndex">
        <dl v-for="(day, dayIndex) in week" :key="dayIndex" :class="{not:$dayjs(day).isBefore($dayjs(month).startOf('month')) || $dayjs(day).isAfter($dayjs(month).endOf('month'))}">
          <dt>
            <span>{{ $dayjs(day).format('D') }}</span> 
          </dt>
          <dd class="eq" v-show="Math.round(Math.random())">
            <span>장비</span>
            <strong>123,000</strong>
          </dd>
          <dd class="cash" v-show="Math.round(Math.random())">
            <span>현금</span>
            <strong>158,000</strong>
          </dd>
          <dd class="card" v-show="Math.round(Math.random())">
            <span>카드</span>
            <strong>969,000</strong>
          </dd>
        </dl>
      </div>
    </section>

    <section class="sales_sum">
      <div class="head">
        <h4>{{ $dayjs(month).format('MM') }}월매출 요약</h4>
      </div>
      <div class="cont">
        <dl>
          <dt>장비 직접결제</dt>
          <dd>320,500 원</dd>
        </dl>
        <dl>
          <dt>키오스크 현금충전</dt>
          <dd>578,000 원</dd>
        </dl>
        <dl>
          <dt>키오스크 카드충전</dt>
          <dd>1,485,000 원</dd>
        </dl>
        <el-divider />
        <dl class="total">
          <dt>총 매출</dt>
          <dd>2,530,000 원</dd>
        </dl>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { useCounter } from '@vueuse/shared';

const { $dayjs } = useNuxtApp();
const { inc, dec, count } = useCounter(0, { max: 0, min: -12 })
const { month, calendar } = useCalendar();

watch(count, value => {
  month.value = $dayjs().add(value, 'month').toDate()
})


</script>

<style lang="scss" scoped>
.main{
  width:100%;
}
.calendar-wrap{
  box-sizing: border-box;
  padding:20px;

  .control{
    display:flex;
    justify-content: space-between;

    .text{
      font-size:20px;
      font-weight:800;
      font-family:'Roboto';
      color:#292929;
    }

    .button{
      border-radius:12px;
      overflow:hidden;
    }
  }

  .week-text{
    display:flex;
    height:40px;
    border-radius:20px;
    background:#f5f5f7;
    align-items: center;
    margin:20px 0;

    label{
      flex:1;
      text-align:center;
      font-size:12px;
    }

    label:first-child{
      color:#EB1464
    }
    label:last-child{
      color:#0044FF;
    }
  }

  .week{
    display:grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    gap:2px;


    dl:nth-child(7n + 1){
      dt{
        color:#EB1464;
      }
    }
    dl:nth-child(7n){
      dt{
        color:#0044FF;
      }
    }

    dl{
      overflow:hidden;
      margin-bottom:20px;

      &.not{
        visibility: hidden;
      }
      &.today{
        dt{
          span{
            color:#fff;
          }
        }
        dt:after{
          content:'';
          display:block;
          position: absolute;
          width:28px;
          height:28px;
          border-radius:15px;
          background:#292929;
          z-index:1;
        }
      }

      dt{
        display:flex;
        align-items: center;
        justify-content: center;
        height:36px;
        span{
          position: relative;
          z-index:2;
        }
      }
      dd{
        display:flex;
        flex-direction: column;
        align-items: center;
        text-align:center;
        background:#f2f2f2;
        border-radius:3px;
        padding:5px 2px;
        margin-bottom:2px;
        span{
          font-size:9px;
          margin-bottom:3px;
        }
        strong{
          font-size:9px;
          font-family:'Roboto';
        }

        &:last-child{
          margin-bottom:0;
        }
      }

      dd.cash{
        background:#FBF4F6;
      }
      dd.card{
        background:#F4F4FB;
      }
    }
  }
}



.sales_sum{
  padding:30px 20px;


  .head{
    display:flex;
    align-items: center;
    margin-bottom:15px;
    h4{
      font-size:18px;
      font-weight:600;
    }
  }
  .cont{
    border:1px solid #e2e2e2;
    padding:20px;
    border-radius:5px;
    dl{
      display:flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom:12px;

      &:last-child{
        margin-bottom:0;
      }

      dt{
        color:#797979;
        font-size:12px;
      }
      dd{
        font-size:14px;
      }
    }

    dl.total{
      dt{
        color:#292929;
        font-size:14px;
      }
      dd{
        color:#EB1464;
        font-weight:600;
        font-size:16px;
      }
    }
  }
}
</style>