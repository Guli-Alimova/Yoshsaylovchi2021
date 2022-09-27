<template>
<div class="relative hero">
    <div class="container">
        <div class="flex items-center justify-between">
        <div class="w-[44%] pt-[144px] pb-[280px]">
        <a class="text-[18px]
        leading-[22px]
        text-[#0083ff] 
        pointer" href="/">#KelajagingUchunOvozBer</a>
        <h1 class="font-bold
        text-[40px]
        leading-[48px] 
        text-[#fff] 
        mt-[20px]
        mb-[12px]">Saylov 2021: Yangi hayot uchun, O‘zbekiston uchun</h1>
        <p class="text-[16px]
        leading-[20px]
        text-[#fff] ">Saylovlarda faol qatnashing. Yangi hayot uchun, yurtimiz uchun ovoz bering. Bee’tibor bo‘lmang!</p>
    </div>
    <!-- <div> -->
       <!-- <span class="absolute z-20 top-[-12px] right-[-114px]">
        <svg class="w-[737px] h-[546px]"  viewBox="0 0 737 546" fill="none" xmln="https://www.w3.org/2000/svg"><path d="M491.564 177.476C575.991 94.1343 680.855 30.2711 795.936 0C796.064 73.6981 795.936 147.46 796 221.222C694.266 261.392 604.666 330.3 538.248 416.962C465.572 415.877 392.896 416.963 320.283 416.132C371.118 497.941 406.115 589.265 423.997 683.783C352.917 684.038 281.774 683.783 210.694 683.911C197.538 564.231 113.494 456.749 0.0735263 416.069C0.392842 341.029 -0.564996 265.926 0.584541 190.887C92.6113 206.789 181.126 248.875 246.33 316.506C274.813 345.372 297.995 378.836 318.751 413.514C365.754 327.81 420.676 245.426 491.564 177.476Z" fill="white" fill-opacity="0.1"></path></svg>
       </span> -->
       
        <el-carousel width="300px" height="546px" direction="vertical" :autoplay="false">
            <el-carousel-item  v-for="item in slider" :key="item">
               <img class="relative" :src="item.img" alt="">
            </el-carousel-item>
        </el-carousel>
    <!-- </div>     -->
        </div>
      
    </div>
    <Date :year="2022"
    :month="10"
    :date="19"
    :hours="24"
    :minutes="60"
    :seconds="60"
    :millisecond="50"
    />
    
</div>
</template>

<script>
import Date from "../block/Date.vue"
export default {
data(){
    return{
        slider:[{
            img: require("@/assets/img/slide.68a15f11.png")
        },
        {
            img: require("@/assets/img/slide.68a15f11.png")
        },
        {
            img: require("@/assets/img/slide.68a15f11.png")
        },
        {
            img: require("@/assets/img/slide.68a15f11.png")
        },
        {
            img: require("@/assets/img/slide.68a15f11.png")
        },
        {
            img: require("@/assets/img/slide.68a15f11.png")
        }]
    }
},
components:{
    Date
}
}
</script>

<style>
.el-carousel__indicator.el-carousel__indicator--vertical.is-active{
    width: 20px;
    height: 20px;
    border:2px solid #fff;
    color:#fff;
    border-radius:50px;
    padding:11px;
    text-align: center;
    display: flex;
    justify-content: center;
}
.el-carousel__indicator.el-carousel__indicator--vertical{
    width: 20px;
    height: 20px;
    border:1px solid #fff;
    color:#fff;
    border-radius:50px;
    padding:11px;
    text-align: center;
    display: flex;
    justify-content: center;
}
.el-carousel__indicator .el-carousel__indicator--vertical .is-active button{
    transform: translate(-5%, -51%);
}
 .el-carousel__indicators--vertical{
    display: flex;
    flex-direction: column;
    gap:20px;
}


.el-carousel_item.is-animating{
    top:40px;
}
.hero .el-carousel  {
   width: 590px;
}


.el-carousel__indicator button{
    /* width: 10px;
    height: 8px; */
    opacity: 0.8;
    border:1px solid rgba(255, 255, 255, 0.6);
    border-radius: 20px;
    padding:6px;
    background-color: #fff;
    transform: translate(5%, -51%);
   
}


</style>
