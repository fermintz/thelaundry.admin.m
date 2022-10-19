<template>
  <el-drawer
    v-model="show"
    direction="ltr"
    size="70%"
    :show-close="false"
    custom-class="drawer"
  >
    <template #header="{close}">
      <div class="head">
        <div class="logo" @click="$router.push('/')">
          <img src="~/assets/img/logo_b.png" />
        </div>
        <div class="btns">
          <el-button @click="()=>{$router.push('/mypage'), show = false}" >정보수정</el-button>
          <el-button @click="close">로그아웃</el-button>
        </div>
      </div>
    </template>

    <div class="contents">
      <dl>
        <dt>매출관리</dt>
        <dd>
          <nuxt-link to="/" @click="show=false">
            매출캘린더
          </nuxt-link>
          <nuxt-link to="/sales/eqUse" @click="show=false">
            장비 사용내역
          </nuxt-link>
          <nuxt-link @click="show=false" to="/sales/pointChage">
            kiosk 포인트충전 내역
          </nuxt-link>
          <nuxt-link @click="show=false" to="/sales/pointUse">
            kiosk 포인트사용 내역
          </nuxt-link>
        </dd>
      </dl>
      <el-divider />
      <dl>
        <dt>장비관리</dt>
        <dd>
          <nuxt-link @click="show=false" to="/option/remote">
            장비원격제어
          </nuxt-link>
          <nuxt-link @click="show=false" to="/option/kiosk">
            키오스크설정
          </nuxt-link>
        </dd>
      </dl>
      <el-divider />
      <dl>
        <dt>회원관리</dt>
        <dd>
          <nuxt-link to="/user" @click="show=false">
            회원목록
          </nuxt-link>
        </dd>
      </dl>
    </div>
  </el-drawer>
</template>

<script setup lang="ts">
const props = defineProps<{
  modelValue: boolean
}>();

const emits = defineEmits<{
  (e: 'update:modelValue', state: boolean): void
}>();

const show = computed({
  get() {
    return props.modelValue;
  },
  set(change: boolean) {
    emits('update:modelValue', change)
  }
})



</script>

<style lang="scss" scoped>

.drawer{
  .head{
    display:flex;
    flex-direction: column;
    align-items: center;
    padding:30px 20px;
    border-bottom:1px solid #e2e2e2;
    .logo{
      img{
        height:30px;
      }
    }
    .btns{
      margin-top:20px;
      display:flex;
      align-items: center;
    }
  }

  .contents{
    dl{
      dt{
        font-size:16px;
        font-weight:bold;
        margin-bottom:15px;
      }
      dd{
        display:flex;
        flex-direction: column;

        a{
          display:flex;
          align-items: center;
          font-size:15px;
          height:34px;
          padding:0 5px;
        }
      }
    }
  }
}
</style>