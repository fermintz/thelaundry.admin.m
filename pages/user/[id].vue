<template>
  <div class="userDetail">
    <div class="header">

      <el-button text @click="() => router.back()">
        <span class="material-icons">arrow_back</span>
      </el-button>      
      <h4><b>4561</b>님 사용내역</h4>
    </div>

    <div class="list">
      <div class="item">
        <div class="top">
          <div class="left">
            <label class="use">사용</label>
          </div>

          <div class="right">
            2022.09.21 16:34:30
          </div>
        </div>
        <div class="cont">
          <span><b>1번세탁기</b>에 포인트를 사용하였습니다.</span>
        </div>
        <div class="price">
          4,000원
        </div>
      </div>

      <div class="item" v-for="item in 10" :key="item">
        <div class="top">
          <div class="left">
            <label class="chage">충전</label>
            <span>카드</span>
          </div>

          <div class="right">
            2022.09.21 16:34:30
          </div>
        </div>
        <div class="cont">
          <span>포인트를 충전하였습니다.</span>
        </div>
        <div class="price">
          4,000원
        </div>
      </div>
    </div>

    <div class="list-bottom">
      <el-button>더보기</el-button>
    </div>
  </div>
</template>

<script lang="ts" setup>

definePageMeta({ layout: 'empty' });
const router = useRouter();

</script>

<style lang="scss" scoped>

.userDetail{
  padding:0 20px;

  .header{
    display:flex;
    align-items: center;
    height:70px;
    
    .el-button{
      height:50px;
      width:50px;
      margin-right:15px;
    }

    h4{
      font-size:18px;
      b{
        font-weight:600;
      }
    }
  }
}

.list{
  display:flex;
  flex-direction: column;
  gap:10px;
  .item{
    border:1px solid #e2e2e2;
    padding:15px;
    border-radius:10px;
    .top{
      display:flex;
      justify-content: space-between;
      margin-bottom:15px;

      .left{
        display:flex;
        align-items: center;
        gap:5px;
        label,span{
          display:flex;
          justify-content: center;
          align-items: center;
          padding:0 6px;
          border-radius:5px;
          height:20px;
          font-size:11px;
        }
        label{
          background:#e2e2e2;
          color:#fff;
        }
        span{ 
          border:2px solid #292929;
        }
        label.chage{background:#0044FF;}
        label.use{background:#E81657;}
      }

      .right{
        color:#797979;
        font-size:12px;
      }
    }

    .cont{
      span{
        font-size:16px;
        color:#292929;
        b{
          font-weight:bold;
        }
      }
    }
    .price{
      margin-top:8px;
      font-weight:600;
      color:#d22828;
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