<template>
  <el-dialog v-model="show" width="90%" title="날짜선택">
    <div class="calendar">
      <div class="monthSelector">
        <el-button @click="dec(1)">이전</el-button>
        <h4>{{$dayjs(month).format('YYYY.MM')}}</h4>
        <el-button @click="inc(1)">다음</el-button>
      </div>

      <div class="week-text">
        <label v-for="(item, index) in ['일','월','화','수','목','금','토']" :key="index">
          {{item}}
        </label>
      </div>

      <div class="week" v-for="(week, weekIndex) in calendar" :key="weekIndex">
        <div class="day" v-for="(day, dayIndex) in week" :key="dayIndex" :class="{not:$dayjs(day).isBefore($dayjs(month).startOf('month')) || $dayjs(day).isAfter($dayjs(month).endOf('month'))}">
          <el-button text>{{$dayjs(day).format('D')}}</el-button>
        </div>
      </div>
    </div>
  </el-dialog>
</template>

<script lang="ts" setup>
import { useCounter } from '@vueuse/shared';
const props = defineProps<{
  modelValue: boolean
}>();

const emits = defineEmits<{
  (e: 'update:modelValue', state:boolean): void
}>()

const show = computed({
  get(){
    return props.modelValue;
  },
  set(change: boolean) {
    emits('update:modelValue', change)
  }
})


const { $dayjs } = useNuxtApp();
const { inc, dec, count } = useCounter(0, { max: 0, min: -12 })
const { month, calendar } = useCalendar();

watch(count, value => {
  month.value = $dayjs().add(value, 'month').toDate()
})
</script>

<style lang="scss" scoped>
.calendar{

  .monthSelector{
    display:flex;
    justify-content: space-between;
    align-items: center;
    h4{
      font-size:20px;
      font-weight:600;
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
    display:flex;
    align-items: center;
  }

  .day{
    width:calc(100% / 7);
    display:flex;
    align-items: center;
    justify-content: center;
  
    .el-button{
      width:100%;
      border-radius:5px;
      height:40px;
    }
  }

  .day.not{
    visibility: hidden;
  }
}
</style>