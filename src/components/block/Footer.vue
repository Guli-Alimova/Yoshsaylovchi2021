<template>
<div class="footer-wrapper pt-[135px] pb-[54px]">
    <div class="container">
        <div class="footer-container">
            <div class="flex gap-[28px] flex-col">
                <a href="/"> <img src="../../assets/img/footer_logo_uz_6qRZKhk.svg" alt=""></a>
                <p class="text-[14px] leading-[20px] text-white">Portalda e’lon qilingan materiallardan nusxa ko‘chirish, tarqatish va boshqa shakllarda foydalanish faqat tahririyat yozma roziligi bilan amalga oshirilishi mumkin.</p>

                <div class="flex items-center gap-[18px]">
                    <a data-aos="zoom-in-right" data-aos-duration="600" data-aos-easing="ease-in-out" class="w-[36px] h-[36px] p-[6px] bg-[rgba(13,33,68,.4392156862745098)] rounded-[8px] inline-flex items-center]" href="https://www.facebook.com/yoshlaragentligirasmiy/">
                        <icon name="facebook" /></a>

                    <a data-aos="zoom-in" data-aos-duration="600" data-aos-easing="ease-in-out" href="https://www.instagram.com/yoshlaragentligi/" class="w-[36px] h-[36px] p-[6px] bg-[rgba(13,33,68,.4392156862745098)] rounded-[8px] inline-flex items-center justify-center]">
                        <icon name="instagram" /></a>

                    <a data-aos="zoom-in" data-aos-duration="600" data-aos-easing="ease-in-out" href="https://twitter.com/youthagencyuz" class="w-[36px] h-[36px] p-[6px] bg-[rgba(13,33,68,.4392156862745098)] rounded-[8px] inline-flex items-center justify-center]">
                        <icon name="twitter" /></a>

                    <a data-aos="zoom-in" data-aos-duration="600" data-aos-easing="ease-in-out" href="https://www.youtube.com/channel/UCxE5i6ogttXt5-AKUpJn_jA/featured" class="w-[36px] h-[36px] p-[6px] bg-[rgba(13,33,68,.4392156862745098)] rounded-[8px] inline-flex items-center justify-center]">
                        <icon name="youtube" /></a>

                    <a data-aos="zoom-in-left" data-aos-duration="600" data-aos-easing="ease-in-out" href="https://www.youtube.com/channel/UCxE5i6ogttXt5-AKUpJn_jA/featured" class="w-[36px] h-[36px] p-[6px] bg-[rgba(13,33,68,.4392156862745098)] rounded-[8px] inline-flex items-center justify-center]">
                        <icon name="telegram" /></a>
                </div>
            </div>
            
            <div class="flex gap-[28px] flex-col">
                <div class="gap-[32px] items-center pb-[20px] border-b-1" v-for="(item, index) in pages" :key="index">
                    <router-link :to="item.href" class="font-bold
                    text-[18px]
                    leading-[22px] 
                    uppercase
                    text-[#fff] 
                    ease-in-out duration-[.3] hover:text-[#28a0ff] active:text-[#28a0ff]">{{item.link}}</router-link>
                </div>
                
                <div>
                    <a href="tel:1093"><icon name="tel"/>1093</a>
                    <a href="mailto:info@yoshsaylovchi.uz"><icon name="email"/>info@yoshsaylovchi.uz</a>
                    <a href="https://goo.gl/maps/fLDgc5ts23Y6zPqg9"><icon name="location"/> Toshkent 100011, Alisher Navoiy ko'chasi 11-uy</a>  
                </div>
                
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
