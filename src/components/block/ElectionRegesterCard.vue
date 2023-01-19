<template>
    <div class="registerCard p-[32px] rounded-[16px] hover:bg-[#061734] basis-[48%] cursor-pointer opacity-0 hover:opacity-[.75]" v-for="(item, index) in election" :key="index">
        <div class="flex flex-col  gap-[16px] items-center mb-[16px] justify-center regName">
            <div class="flex items-center justify-center " >
                <svg width="34" height="30" viewBox="0 0 34 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.9965 7.97442C24.6026 4.41461 29.0817 1.68679 33.9973 0.393799C34.0027 3.54171 33.9973 6.69234 34 9.84298C29.6546 11.5588 25.8274 14.5021 22.9905 18.2038C19.8862 18.1574 16.782 18.2038 13.6804 18.1683C15.8518 21.6626 17.3466 25.5634 18.1104 29.6006C15.0744 29.6115 12.0356 29.6006 8.9995 29.6061C8.43757 24.4941 4.84775 19.9032 0.00314057 18.1656C0.0167797 14.9604 -0.024133 11.7525 0.0249678 8.54726C3.95576 9.22649 7.73652 11.0241 10.5216 13.9129C11.7382 15.1459 12.7284 16.5752 13.615 18.0565C15.6227 14.3957 17.9686 10.8768 20.9965 7.97442Z" fill="#319C68"></path></svg>
                <p class="flex items-center mx-[12px] text-[24px] text-white leading-[30px] font-bold uppercase">{{item.name}}</p>
            </div> 
            <p class="text-[16px] leading-[140%] text-white  text-center">Yosh saylovchilardan iborat bo‘lgan ko‘ngillilar guruhiga a’zo bo‘lish uchun ro‘yxatdan o‘tish</p>
        </div>
            <div class=" h-[430px] ">
                <img  :src="item.image" alt="" class=" my-[0] mx-[auto] transition transform  hover:ease-in-out hover:translate-y-6">
            </div>
            <a href="" class=" py-[12px] px-[36px] block text-center bg-[#061734] border-dashed border-2 border-white-600 rounded-[8px] font-medium text-[16px] leading-[20px] uppercase text-white translate-y-[-10px] hover:bg-blue-700 hover:border-none">{{item.name}}</a>
    </div>
   

</template>

<script>

export default {
   name:'Reg',
    props:['election'],
    
}
</script>


<style scoped>
.registerCard{
    transition: .6s ease-in-out;
}
.registerCard:hover a {
    background-color: blue;
    border: none;
   
}


.registerCard:hover{
    background-image: url(../../assets/img/blurBg.e4beff97.png);
    background-color: #061734;
    border-radius:16px;
    background-size: 90%;
    background-position: 50%;
    background-repeat: no-repeat;
}
.registerCard:hover img{
      transition: .6s ease-in-out;
}
.registerCard:hover .regName{
    scale:1;
}


</style>