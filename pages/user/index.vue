<template>
  <div class="sub">
    <div class="sub-title">
      <h4>회원관리</h4>
      <p>등록된 회원의 정보를 확인할 수 있습니다.</p>
    </div>

    <div class="contents">
      <div class="list-head">
        <div class="userCount">
          <span>회원수</span>
          <strong>1,304</strong>
        </div>
        <div class="userSearch">
          <input type="text" placeholder="번호검색">
          <el-button>
            <span class="material-icons">search</span>
          </el-button>
        </div>
      </div>

      <div class="list">
        <div class="item" v-for="(item, index) in 10" :key="index">
          <div class="left">
            <span>010-8525-4561</span>
            <div class="userPoint">
              <label>남은포인트</label>
              <strong>14,500P</strong>
            </div>
          </div>

          <div class="right">
            <el-button @click="() => router.push({path:'/user/1'})">
              포인트<br/>충전/차감
            </el-button>
            <el-button>
              포인트<br/>사용내역
            </el-button>
          </div>
        </div>
      </div>
      <div class="list-bottom">
        <el-button>더보기</el-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

definePageMeta({ layout:'default' })
const router = useRouter();

</script>

<style lang="scss" scoped>

.list-head{
  display:flex;
  border-bottom:1px solid #e2e2e2;
  .userCount{
    align-items: center;
    flex:1;
    display:flex;
    justify-content: center;
    border-right:1px solid #e2e2e2;

    span{
      margin-right:10px;
      font-size:14px;
      color:#797979;
    }
    strong{
      font-weight:600;
      font-size:14px;
    }
  }
  .userSearch{
    display:flex;
    align-items: center;
    flex:2;
    input{
      height:50px;
      border:0;
      width:100%;
      padding:0 10px;

      outline: none;;
    }
    .el-button{
      height:50px;
      border:0px;
    }
  }
}
.list{
  .item{
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding:0 20px;
    min-height:90px;
    border-bottom:1px solid #e2e2e2;

    .left{
      span{
        font-weight:600;
      }
      .userPoint{
        display:flex;
        align-items: center;
        gap:5px;
        margin-top:8px;
        label{
          font-size:11px;
          background:#F4F4FB;
          padding:4px;
          border-radius:3px;
        }
        strong{
          font-size:14px;
          font-weight:500;
          color:#0044FF;
        }
      }
    }

    .right{
      display:flex;
      align-items: center;
      gap:5px;
      .el-button{
        height:50px;
        text-align:left;
        line-height:1.3;
        font-size:11px;
        margin:0;
        padding:0 10px;
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