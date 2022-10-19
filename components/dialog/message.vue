<template>
  <el-dialog v-model="show" custom-class="remoteDialog" :show-close="false" width="90%"> 
    <div class="head">
      <h2>
        <label>프로그램 재실행</label>
      </h2>
    </div>

    <div class="cont">
      프로그램을 재실행 하시겠습니까?
    </div>

    <div class="footer">
      <el-button @click="show = false">취소</el-button>
      <el-button @click="openBox" class="complete">확인</el-button>
    </div>
  </el-dialog>
</template>

<script lang="ts" setup>
import {ElMessage} from 'element-plus'

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

const openBox = ()=>{
  ElMessage({
    type:'info',
    message:'재실행이 완료되었습니다.'
  })
}

</script>

<style lang="scss" scoped>
.remoteDialog{
  .head{
    display:flex;
    align-items: center;
    padding:20px;
    line-height:1;
    
    h2{
      display:flex;
      align-items: center;
      font-size:18px;
      font-weight:600;
      color:#292929;
    }
  }
  .cont{
    padding:0 20px;
    font-size:16px;

    .name{
      margin-bottom:15px;
      b{
        color:#0044FF;
      }
    }
    .inputBox{
      display:flex;
      align-items: flex-end;
      border-bottom:2px solid #292929;

      input{
        flex:1;
        width:100%;
        border:0;
        height:45px;
        text-align:left;
        padding-right:10px;
        font-size:24px;
        outline: none;
        font-weight:600;
        background:transparent;
        
      }
      span{
        font-size:16px;
        line-height:1.4;
        margin-bottom:8px;
      }
    }
  }
  .footer{
    display:flex;
    justify-content: flex-end;
    padding:20px;
    gap:10px;

    .el-button{
      margin:0;
      border:1px solid #c2c2c2;
      height:36px;
    }

    .complete{
      background:#292929;
      color:#fff;
      border:0;
    }
  }
}
</style>