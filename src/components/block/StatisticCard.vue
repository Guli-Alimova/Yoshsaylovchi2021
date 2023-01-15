<template>
    <div data-aos="zoom-in-up"
     data-aos-duration="1500"
     data-aos-easing="ease-in-out"
      class="w-[320px] h-[196px] bg-white border border-[#ececec] rounded-xl pt-[64px] pb-[32px] px-[24px] mt-[86px] text-center relative "  
    v-for="(item, index) in statistic" :key="index">
    <icon :name="item.img" class="absolute top-[-53px] left-[111px]"/>
        <span class="font-bold text-[36px] leading-[130%] text-[#171d28]">{{item.number}}</span>
        <p class="font-medium text-[20px] leading-[130%] text-[#798894]">{{item.name}}</p> 
    </div>
</template>

<script >
import icon from "../block/icon.vue"

export default {
    components: {icon},
    name:'Static',
    props:['statistic']
    
}
</script>