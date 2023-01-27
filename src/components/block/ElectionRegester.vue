<template>
<div class="py-[64px] election-hero">
    <div class="container">
        <h3 class="election-title relative font-medium leading-[30px] text-white text-[24px] text-center">Saylov jarayonlarida ko‘ngilli yoki trener sifatida qatnashish uchun ro‘yxatdan o‘ting</h3>
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
.election-title::after{
    content: "";
    position: absolute;
    bottom: -12px;
    left:50%;
    width: 20%;
    height: 3px;
    border-radius: 4px;
    transform: translateX(-50%);
    background-color: #0083ff;
    transition: .6s ease-in-out;
}
.election-title:hover::after{
   width: 50%;
}
</style>