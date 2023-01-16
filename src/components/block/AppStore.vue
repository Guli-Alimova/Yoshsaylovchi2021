<template>
<div class="py-[44px] app-wrapper">
    <div class="container">
        <div class="relative flex ">
            <div class="w-[55%]">
                <h3 class="font-bold text-[28px] leading-[130%] text-white mb-[16px]">O‘zbekiston Respublikasi Prezidenti saylovi haqida</h3>
                <p class="text-[20px] leading-[150%] text-[#e2e5ea]">Saylov - 2021 haqida batafsil ma’lumotni Markaziy Saylov Komissiyasining saytidan olishingiz mumkin</p>
            </div>

            <div class="flex gap-[14px] items-center ">
                <app-button :app="app" />
            </div>
            
            <div data-aos="zoom-in-up"
                        data-aos-duration="1500"
                        data-aos-easing="ease-in-out"
                        class="absolute right-0 bottom-[-61px]">
                      <icon name="phone" />    
                    </div>

        </div>
    </div>
</div>
</template>

<script>
import icon from "../block/icon.vue"
import AppButton from "../block/AppButton.vue"

export default {
    components: {
        AppButton,
        icon
    },
    data() {
        return {
            app: [{
                    icon: "apple",
                    name: "appstore",
                    text: "orqali yuklang",
                    link: "https://apps.apple.com/us/app/saylov-2021/id1578455432",
                    hover: require('@/assets/img/Qrcode.png')
                },
                {
                    icon: "google",
                    name: "googleplay",
                    text: "orqali yuklang",
                    link: "https://play.google.com/store/apps/details?id=org.uicgroup.elections",
                    hover: require('@/assets/img/Qrcode.png')
                },

            ]
        }
    }
}
</script>

<style scoped>
.app-wrapper {
    background-image: url(../../assets/img/footer-top.bc429cfa.png);
    background-repeat: no-repeat;
    background-size: cover;
    /* background-position: center; */
}
</style>
