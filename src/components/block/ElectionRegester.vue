<template>
<div class="py-[64px] election-hero">
    <div class="container">
        <h3 class="font-medium leading-[30px] text-white text-[24px] text-center">Saylov jarayonlarida ko‘ngilli yoki trener sifatida qatnashish uchun ro‘yxatdan o‘ting</h3>
        <div class="pt-[120px] flex justify-between">
        <ElectionRegesterCard :election="election"/>
        </div>
    </div>
   
</div>
  
</template>


<script >
import ElectionRegesterCard from "../block/ElectionRegesterCard.vue"
export default {
   
    components:{
        ElectionRegesterCard
    },
    data() {
        return{
            election:[{
                id:0,
                name:"Ko'ngilli",
                image:require('@/assets/img/kongilli.png'),
                href:""
            },
            {
                id:1,
                name:"Trener",
                image:require('@/assets/img/trener.png'),
                href:""
            }]
        }
    }
       
}
</script>

<style>
.election-hero{
    background-image: url(../../assets/img/regBg.5d473129.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}
</style>