<template>
<div class="footer-wrapper pt-[135px] pb-[54px]">
    <div class="container footer-container">
            <div class="flex gap-[28px] flex-col">
                <a href="/"> <img src="../../assets/img/footer_logo_uz_6qRZKhk.svg" alt=""></a>
                <p class="text-[14px] leading-[20px] text-white">Portalda e’lon qilingan materiallardan nusxa ko‘chirish, tarqatish va boshqa shakllarda foydalanish faqat tahririyat yozma roziligi bilan amalga oshirilishi mumkin.</p>

                <div class="flex items-center gap-[18px]">
                    <a data-aos="zoom-in-right" data-aos-duration="600" data-aos-easing="ease-in-out" class="w-[36px] h-[36px] p-[6px] bg-[rgba(13,33,68,.4392156862745098)] rounded-[8px] inline-flex items-center hover:bg-transparent  " href="https://www.facebook.com/yoshlaragentligirasmiy/">
                        <icon name="facebook" class="hover:stroke-red-900"/></a>

                    <a data-aos="zoom-in" data-aos-duration="600" data-aos-easing="ease-in-out" href="https://www.instagram.com/yoshlaragentligi/" class="w-[36px] h-[36px] p-[6px] bg-[rgba(13,33,68,.4392156862745098)] rounded-[8px] inline-flex items-center justify-center hover:bg-transparent ">
                        <icon name="instagram" class="hover:fill-red-900" /></a>

                    <a data-aos="zoom-in" data-aos-duration="600" data-aos-easing="ease-in-out" href="https://twitter.com/youthagencyuz" class="w-[36px] h-[36px] p-[6px] bg-[rgba(13,33,68,.4392156862745098)] rounded-[8px] inline-flex items-center justify-center hover:bg-transparent ">
                        <icon name="twitter" class="hover:fill-black" /></a>

                    <a data-aos="zoom-in" data-aos-duration="600" data-aos-easing="ease-in-out" href="https://www.youtube.com/channel/UCxE5i6ogttXt5-AKUpJn_jA/featured" class="w-[36px] h-[36px] p-[6px] bg-[rgba(13,33,68,.4392156862745098)] rounded-[8px] inline-flex items-center justify-center hover:bg-transparent ">
                        <icon name="youtube" /></a>

                    <a data-aos="zoom-in-left" data-aos-duration="600" data-aos-easing="ease-in-out" href="https://www.youtube.com/channel/UCxE5i6ogttXt5-AKUpJn_jA/featured" class="w-[36px] h-[36px] p-[6px] bg-[rgba(13,33,68,.4392156862745098)] rounded-[8px] inline-flex items-center justify-center hover:bg-transparent ">
                        <icon name="telegram" /></a>
                </div>
            </div>
            
            <div class="flex gap-[28px] flex-col">
                <div class="items-center pb-[20px] border-b border-[hsla(0,0%,100%,.1)] justify-between flex ">
                    <a v-for="(item, index) in pages" :key="index" :href="item.href"  class="font-bold
                    text-[18px]
                    leading-[22px] 
                    uppercase
                    text-[#fff] 
                    ease-in-out duration-[.3] hover:text-[#28a0ff] active:text-[#28a0ff] ">{{item.link}}</a>
               </div>
                
                <div class="text-white text-[14px] leading-[150%] ">
                    <a href="tel:1093" class="flex items-center gap-[12px] mb-[28px]"><icon name="tel"/>1093</a>
                    <a href="mailto:info@yoshsaylovchi.uz" class="flex items-center gap-[12px] mb-[28px]"><icon name="email"/>info@yoshsaylovchi.uz</a>
                    <a href="https://goo.gl/maps/fLDgc5ts23Y6zPqg9" class="flex items-center gap-[12px]"><icon name="location"/> Toshkent 100011, Alisher Navoiy ko'chasi 11-uy</a>  
                </div>
                
            </div>

               

            </div>
     
    </div>
</template>

<script>
import icon from "../block/icon.vue"

export default {
    components: {
        icon
    },
    name: "Pages",
    props: ['pages']
}
</script>

<style scoped>
.footer-wrapper {
    background-image: url(../../assets/img/footer.4fd9c1ff.png);
    background-repeat: no-repeat;
    background-size: cover;
}
.footer-container{
    display: grid;
    grid-template-columns: 30% 67%;
    grid-gap: 3%;
}


</style>
