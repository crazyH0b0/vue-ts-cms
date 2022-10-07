<script lang='ts' setup >
import { ref, computed } from 'vue'
import type { FormInstance } from 'element-plus'
import { getAssetsFile } from '@/utils/filePath'
import { validatePassword } from './validate'

// import SvgIcon from '@/components/SvgIcon/index.vue'
const ruleFormRef = ref<FormInstance>()

const loginForm = ref({
  username: 'super-admin',
  password: '123456'
})

const rules = ref({
  username: [{ message: '用户名为必填项', required: true, trigger: 'blur' }],
  password: [{ validator: validatePassword(), trigger: 'blur', required: true }]

})

// const submitForm = (formEl: FormInstance | undefined) => {
//   if (!formEl) return
//   formEl.validate((valid) => {
//     if (valid) {
//       console.log('submit!')
//     } else {
//       console.log('error submit!')
//       return false
//     }
//   })
// }

const imgList = computed(

  () => [

    getAssetsFile('/carousel/c1.svg'),
    getAssetsFile('/carousel/c2.svg'),
    getAssetsFile('/carousel/c3.svg'),
    getAssetsFile('/carousel/c4.svg'),
    getAssetsFile('/carousel/c5.svg')
  ]
).value
const bgUrl = computed(() => {
  const index = Math.floor(Math.random() * 10)
  const bg = `url(https://bing.biturl.top/?resolution=1920&format=image&index=${index}&mkt=zh-CN)`
  return bg
}).value

</script>

<template>

  <div class="min-h-full w-full   login-container ">
    <div class="container   ">
      <div class=" flex-1  flex justify-center h-full w-full  bg-[#a5d8ff]  ">
        <div class="flex flex-col  items-center justify-evenly ">
          <h1 class="text-3xl text-[#748ddf] font-bold">Login</h1>
          <el-form ref="ruleFormRef" :model="loginForm" status-icon :rules="rules">
            <el-form-item  prop="username">
              <el-icon color="#8492a2" class="svg-container" :size="20">
                <User />
              </el-icon>

                <!-- <SvgIcon iconName="user" class="w-4 h-4" /> -->

              <el-input v-model="loginForm.username" type="text" autocomplete="off" />
            </el-form-item>
            <el-form-item prop="password">
              <el-icon color="#8492a2" class="svg-container" :size="20">
                <Lock />
              </el-icon>
              <el-input v-model.number="loginForm.password" type="password" show-password />
            </el-form-item>
            <el-form-item>

              <el-button type="primary" class="w-full mt-4">登录</el-button>
            </el-form-item>

            <el-form-item>

<el-button type="warning" class="w-full mt-4" color="#626aef">注册</el-button>
</el-form-item>
          </el-form>

        </div>
      </div>
      <div class="flex-1 bg-[#9fe5d7] h-full   ">
        <el-carousel trigger="click" class="h-full overflow-y-hidden  "   arrow="never" >
          <el-carousel-item class="  md:mt-20 "  v-for="item in imgList" :key="item" >
           <div class="h-full  flex justify-center items-center   ">
            <img class="h-full "  :src="item" alt="">
           </div>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>

  </div>

</template>

<style scoped lang="scss">
.container {
  @apply grid grid-cols-1   sm:grid-cols-2 overflow-hidden opacity-95 xl:w-[50vw] xl:h-[60vh] sm:w-[80vw] sm:h-[50vh] ;
  // @apply flex   relative overflow-hidden opacity-95 xl:w-[50vw] xl:h-[60vh] sm:w-[80vw] sm:h-[50vh] ;
 border: 1px solid transparent;
 border-radius: 20px;
}

.login-container {
  @apply flex justify-center items-center relative ;
  background: v-bind('bgUrl');
  min-width: 400px;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  position: relative
}

.svg-container {
  @apply translate-x-3 z-20 translate-y-[-50%] absolute top-[50%];
}
:deep(.el-input) {
  @apply  md:w-full sm:w-40;
}
:deep(.el-form-item.is-error .el-input__wrapper) {
  @apply shadow-none;
}

:deep(.el-input__wrapper) {
  @apply rounded-full border-red-600 ;
  width: 300px;
  background-color: #EEF5F6;
  box-shadow: none;
  border: 3px #e7f5ff solid;

  input {
    color: #000;
    padding: 8px 24px;
  }

}
</style>
