<template>
<div class="w-[380px]  m-[20px]">
    <h3 class="font-bold text-[18px] leading-[22px] text-center uppercase text-white py-[32px] bg-[#061734] rounded-t-xl">Saylov uchastkamni aniqlash</h3>

    <form action="" class="p-[32px] bg-[#0d2144] rounded-b-xl">
        <label for="" class="text-[16px] leading-[20px] text-white opacity-[.75]">Pasport seriya va raqamingizni kiriting</label>
        <div class="flex justify-between gap-[12px] mt-[8px] mb-[20px]">
            <input type="text" placeholder="AA" class="p-[9px] w-[48px] uppercase rounded-[8px] text-[16px] leading-[20px] text-[#93a3be] bg-[hsla(0,0%,100%,.1)] border-[hsla(0,0%,100%,.2) border">
            <input type="text" placeholder="1234567" class="w-[100%] p-[9px] rounded-[8px] text-[16px] leading-[20px] text-[#93a3be]  bg-[hsla(0,0%,100%,.1)] border-[hsla(0,0%,100%,.2) border">
        </div>

        <label for="" class="text-[16px] leading-[20px] text-white opacity-[.75]">Tug'ilgan kun</label>
        <input type="text" placeholder="dd.mm.yyyy" class="w-[100%] p-[9px] rounded-[8px] text-[16px] leading-[20px] text-[#93a3be]  bg-[hsla(0,0%,100%,.1)] border-[hsla(0,0%,100%,.2) border mt-[8px]">
        <div class="relative  py-[14px] rounded-[8px] text-[14px] leading-[20px] text-[#93a3be]  bg-[hsla(0,0%,100%,.1)] border-[hsla(0,0%,100%,.2) border mt-[24px] text-center">
            <!-- <button class="p-[10px] bg-[#132543] absolute top-0 left-0 rounded-l-xl h-[100%] border-none"><svg class="" width="24" height="24" viewBox="0 0 24 24" fill="none" xmln="https://www.w3.org/2000/svg">/n<path d="M13.125 17.625L18.75 12L13.125 6.375" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>/n<path d="M5.25 17.625L10.875 12L5.25 6.375" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>/n</svg></button>
            O'ngga suring -->
             <swipeButton text="O'ngga suring"
                 shake-animation="true"
                 :color="getButtonColor"
                 @submit="actionMethod"
            
                  /> 
        </div>
        <button class=" w-[100%] p-[12px] text-[16px] leading-[20px] text-white rounded-[8px] border-none cursor-pointer mt-[24px] bg-[hsla(0,0%,100%,.4)]">Saylov uchastkasini izlash</button>

        <div class="flex justify-betweenv gap-[16px] mt-[24px]">
            <svg xmln="https://www.w3.org/2000/svg" width="200" height="80" viewBox="0 0 80 80" fill="none" class="identity__info-img ">
                <path  opacity="0.7" d="M56.8056 7.92425C51.3484 6.05578 46.9362 3.61592 43.5888 1.37161C41.4117 -0.0874131 38.5899 -0.0874131 36.4128 1.37161C33.0639 3.61592 28.6532 6.05578 23.1945 7.92425C17.253 9.95772 11.8889 10.6911 7.74408 10.9049C6.11699 10.989 4.85963 12.3334 4.86574 13.962C4.9238 30.2649 5.92908 50.2376 23.1945 67.5015C25.7291 70.0361 32.3016 75.2626 36.4357 78.4908C38.5319 80.127 41.4667 80.127 43.5628 78.4908C47.697 75.2626 54.2695 70.0361 56.8041 67.5015C74.0695 50.2376 75.0748 30.2649 75.1344 13.9605C75.1405 12.3319 73.8816 10.9874 72.256 10.9034C68.1112 10.6895 62.7471 9.95772 56.8056 7.92425Z" fill="url(#paint0_linear123)"></path>
                <path d="M61.3875 26.2241C61.3875 27.0033 61.082 27.7824 60.5014 28.3783L39.7374 49.1423L37.5359 51.3423C36.3641 52.5141 34.462 52.5141 33.2902 51.3423L31.0886 49.1423L22.5468 40.6005C21.3705 39.4088 21.3705 37.4685 22.5468 36.2769C23.1427 35.6963 23.9218 35.3908 24.7163 35.3908C25.4955 35.3908 26.2746 35.6963 26.8705 36.2769L35.4123 44.8187L56.1763 24.0547C57.368 22.8783 59.3082 22.8783 60.4999 24.0547C61.082 24.6505 61.3875 25.4297 61.3875 26.2241Z" fill="white"></path>
                <defs>
                    <linearGradient id="paint0_linear123" x1="40" y1="0.277726" x2="40" y2="79.7191" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#42D778"></stop>
                        <stop offset="0.428" stop-color="#3DCA76"></stop>
                        <stop offset="1" stop-color="#34B171"></stop>
                    </linearGradient>
                </defs>
            </svg>
            <p class="font-normal text-[14px] leading-[140%] opacity-[.75] text-white"> Siz kiritgan ma’lumotlar hech qayerda saqlanib qolinmaydi. Ma’lumotlar to’g’ridan-to’g’ri elections.gov.uz dan olib kelinmoqda. </p>
        </div>
    </form>

</div>

</template>

<script>

import { ref, computed } from 'vue';
import swipeButton from 'vue3-swipe-button';
import 'vue3-swipe-button/dist/swipeButton.css';

export default {
  components: { swipeButton },

  setup() {
    const show = ref(false);
    
    const getButtonColor = computed(() => show.value ? 'green' : '#132543');
    
    const actionMethod = () => show.value = !show.value;

    return { actionMethod, getButtonColor };
  },
}
</script>

