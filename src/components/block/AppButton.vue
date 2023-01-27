<template>
    <div class="app" v-for="(item, index) in app" :key="index" >
        <a  :href="item.link" class="app py-[4px] px-[10px] bg-[#1e1e1e] rounded-[4px] cursor-pointer outline-none border-[0.5px] border-white flex gap-[8px] items-center">
        <icon :name="item.icon"/>
        <div>
            <icon :name="item.name"/>
            <p class="text-[9px] text-white text-center">{{item.text}}</p>
       
        </div>
        <img :src="item.hover" class="opacity-0 w-[120px] h-[120px] absolute top-[-68px] p-[8px] rounded-[6px] bg-[rgba(13,33,68,.7019607843137254)]" alt="">
        </a>
        
        
    </div>
    
</template>

<script>
import icon from "../block/icon.vue"

export default {
  components: {icon},
   name:'App',
    props:['app']
}
</script>


<style scoped>
.app:hover img{

    opacity:1;
    transition: .4s ease-in-out;
    /* transform: scale(120px, 50%); */
  
}
</style>