<template>
  <div class="py-[60px] bg-[#f8f9fb] w-[100%] h-[520px]">
    <div class="container">
     <div class="flex justify-between basis-[28%]" >
      <ul >
        <li v-for="(item, index) in tabs" :key="index"  @click="activeItem = index" 
            :class="activeItem == index ? 'active' : ' ' "  class="font-bold text-[25px] leading-[130%] uppercase text-[#b4b7bd] mb-[14px] cursor-pointer">
         
         {{item.theme}}
       
        </li>  
      
      </ul>
      
      <div class="flex  basis-[72%] overflow-y-auto h-[400px]">
        <div v-if="activeItem == 0" class="gap-[24px] ml-[6px] flex justify-between flex-wrap ">
          <div v-for="(item, index) in tabList1" :key="index" class="flex justify-between p-[20px] w-[376px] h-[102px] border border-[#ececec] border-solid bg-[#fff] rounded-[12px] hover:shadow-gray-500/50 shadow-lg transition-[.35s ease] regTheme">
                <span ><img  src="../../assets/img/pdf-file-svgrepo-com.svg" alt="" class="w-[36px] h-[48px]"></span>
                <div class="ml-[22px]" >
                <h3 class="text-[#0d2144] line-clamp-2 font-medium text-[16px] leading-[20px] " style="width: 300px  display: -webkit-box;  -webkit-box-orient: vertical;  -webkit-line-clamp: 2;  overflow: hidden">{{item.name}}</h3>
                <span class="font-[Roboto, sans] text-sm text-[rgba(45,44,61,.5)] leading-[130%] uppercase">
                    <svg class="inline " data-v-615e2bf4="" width="16" height="16" viewBox="0 0 16 16"
                    fill="none" xmln="https://www.w3.org/2000/svg">
                    <g data-v-615e2bf4="" opacity="0.5">
                        <path data-v-615e2bf4="" d="M5.5 8.20703L8 10.6877L10.5 8.20703" 
                        stroke="#0D2144" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path data-v-615e2bf4="" d="M8 10.3428V5.3125" stroke="#0D2144" stroke-width="1.5" 
                        stroke-linecap="round" stroke-linejoin="round"></path>
                        <path data-v-615e2bf4="" d="M2.75 11C2.75 10.5858 2.41421 10.25 2 10.25C1.58579 10.25 1.25 10.5858 1.25 
                        11H2.75ZM14.75 11C14.75 10.5858 14.4142 10.25 14 10.25C13.5858 10.25 13.25 10.5858 13.25 11H14.75ZM1.25 
                        11C1.25 11.6071 1.52195 12.1495 1.90413 12.5919C2.28663 13.0346 2.81082 13.4166 3.41285 13.7285C4.61804 
                        14.3527 6.23879 14.75 8 14.75V13.25C6.44871 13.25 5.06946 12.8973 4.10277 12.3965C3.61887 12.1459 3.26415 
                        11.8716 3.03923 11.6113C2.81399 11.3505 2.75 11.1429 2.75 11H1.25ZM8 14.75C9.76121 14.75 11.382 14.3527 
                        12.5871 13.7285C13.1892 13.4166 13.7134 13.0346 14.0959 12.5919C14.478 12.1495 14.75 11.6071 14.75 11H13.25C13.25 
                        11.1429 13.186 11.3505 12.9608 11.6113C12.7358 11.8716 12.3811 12.1459 11.8972 12.3965C10.9305 12.8973 9.55129 13.25 
                        8 13.25V14.75Z" fill="#0D2144"></path></g></svg> 
                        PDF:{{item.size}} </span>
                </div>
       
                </div>
        </div>
        <div v-if="activeItem  == 1" class=" gap-[24px] ml-[6px] flex justify-between flex-wrap ">
          <div v-for="(item, index) in tabList2" :key="index" class="flex justify-between p-[20px] w-[376px] h-[102px] border border-[#ececec] border-solid bg-[#fff] rounded-[12px] hover:shadow-gray-500/50 shadow-lg transition-[.35s ease] regTheme">
                <span ><img  src="../../assets/img/pdf-file-svgrepo-com.svg" alt="" class="w-[36px] h-[48px]"></span>
                <div class="ml-[22px]" >
                <h3 class="text-[#0d2144] line-clamp-2 font-medium text-[16px] leading-[20px] " style="width: 300px;  display: -webkit-box;  -webkit-box-orient: vertical;  -webkit-line-clamp: 2;  overflow: hidden;">{{item.name}}</h3>
                <span class="font-[Roboto, sans] text-sm text-[rgba(45,44,61,.5)] leading-[130%] uppercase">
                    <svg class="inline " data-v-615e2bf4="" width="16" height="16" viewBox="0 0 16 16"
                    fill="none" xmln="https://www.w3.org/2000/svg">
                    <g data-v-615e2bf4="" opacity="0.5">
                        <path data-v-615e2bf4="" d="M5.5 8.20703L8 10.6877L10.5 8.20703" 
                        stroke="#0D2144" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path data-v-615e2bf4="" d="M8 10.3428V5.3125" stroke="#0D2144" stroke-width="1.5" 
                        stroke-linecap="round" stroke-linejoin="round"></path>
                        <path data-v-615e2bf4="" d="M2.75 11C2.75 10.5858 2.41421 10.25 2 10.25C1.58579 10.25 1.25 10.5858 1.25 
                        11H2.75ZM14.75 11C14.75 10.5858 14.4142 10.25 14 10.25C13.5858 10.25 13.25 10.5858 13.25 11H14.75ZM1.25 
                        11C1.25 11.6071 1.52195 12.1495 1.90413 12.5919C2.28663 13.0346 2.81082 13.4166 3.41285 13.7285C4.61804 
                        14.3527 6.23879 14.75 8 14.75V13.25C6.44871 13.25 5.06946 12.8973 4.10277 12.3965C3.61887 12.1459 3.26415 
                        11.8716 3.03923 11.6113C2.81399 11.3505 2.75 11.1429 2.75 11H1.25ZM8 14.75C9.76121 14.75 11.382 14.3527 
                        12.5871 13.7285C13.1892 13.4166 13.7134 13.0346 14.0959 12.5919C14.478 12.1495 14.75 11.6071 14.75 11H13.25C13.25 
                        11.1429 13.186 11.3505 12.9608 11.6113C12.7358 11.8716 12.3811 12.1459 11.8972 12.3965C10.9305 12.8973 9.55129 13.25 
                        8 13.25V14.75Z" fill="#0D2144"></path></g></svg> 
                        PDF:{{item.size}} </span>
                </div>
       
                </div>
        </div>
        <div v-if="activeItem  == 2" class=" gap-[24px] ml-[6px] flex justify-between flex-wrap ">
          <div v-for="(item, index) in tabList3" :key="index" class="flex justify-between p-[20px] w-[376px] h-[102px] border border-[#ececec] border-solid bg-[#fff] rounded-[12px] hover:shadow-gray-500/50 shadow-lg transition-[.35s ease] regTheme">
                <span ><img src="../../assets/img/pdf-file-svgrepo-com.svg" alt="" class="w-[36px] h-[48px]"></span>
                <div class="ml-[22px]" >
                <h3 class="text-[#0d2144] line-clamp-2 font-medium text-[16px] leading-[20px] " style="width: 300px;  display: -webkit-box;  -webkit-box-orient: vertical;  -webkit-line-clamp: 2;  overflow: hidden;">{{item.name}}</h3>
                <span class="font-[Roboto, sans] text-sm text-[rgba(45,44,61,.5)] leading-[130%] uppercase">
                    <svg class="inline " data-v-615e2bf4="" width="16" height="16" viewBox="0 0 16 16"
                    fill="none" xmln="https://www.w3.org/2000/svg">
                    <g data-v-615e2bf4="" opacity="0.5">
                        <path data-v-615e2bf4="" d="M5.5 8.20703L8 10.6877L10.5 8.20703" 
                        stroke="#0D2144" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path data-v-615e2bf4="" d="M8 10.3428V5.3125" stroke="#0D2144" stroke-width="1.5" 
                        stroke-linecap="round" stroke-linejoin="round"></path>
                        <path data-v-615e2bf4="" d="M2.75 11C2.75 10.5858 2.41421 10.25 2 10.25C1.58579 10.25 1.25 10.5858 1.25 
                        11H2.75ZM14.75 11C14.75 10.5858 14.4142 10.25 14 10.25C13.5858 10.25 13.25 10.5858 13.25 11H14.75ZM1.25 
                        11C1.25 11.6071 1.52195 12.1495 1.90413 12.5919C2.28663 13.0346 2.81082 13.4166 3.41285 13.7285C4.61804 
                        14.3527 6.23879 14.75 8 14.75V13.25C6.44871 13.25 5.06946 12.8973 4.10277 12.3965C3.61887 12.1459 3.26415 
                        11.8716 3.03923 11.6113C2.81399 11.3505 2.75 11.1429 2.75 11H1.25ZM8 14.75C9.76121 14.75 11.382 14.3527 
                        12.5871 13.7285C13.1892 13.4166 13.7134 13.0346 14.0959 12.5919C14.478 12.1495 14.75 11.6071 14.75 11H13.25C13.25 
                        11.1429 13.186 11.3505 12.9608 11.6113C12.7358 11.8716 12.3811 12.1459 11.8972 12.3965C10.9305 12.8973 9.55129 13.25 
                        8 13.25V14.75Z" fill="#0D2144"></path></g></svg> 
                        PDF:{{item.size}} </span>
                </div>
       
                </div>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
    data:() =>{
        return{
            activeItem:0,
            
            
             tabs:[
            {
                id:0,
                theme:"Saylovchilar uchun"
            },
            {
                id:1,
                theme:"Ko`ngillilar uchun"
            },
            {
                id:2,
                theme:"Trenerlar uchun"
            },
        ],

         tabList1:[
            {
            id:0,
            name:" O'zbekiston Respublikasi Konstitutsiyasi ",
            size:"332,7 KB ",
            href:"/files/uz_constitution.pdf"
            },
            {
            id:1,
            name:"  O'zbekiston Respublikasi Saylov kodeksi  ",
            size:"598,8 KB ",
            href:"/files/uz_codex.pdf" 
            },
         ],
         
         tabList2:[
              {
            id:2,
            name:"O'zbekiston Respublikasining qonuni Siyosiy partiyalar to'g'risida  ",
            size:"431,9 KB ",
            href:"/files/partiya_uz.pdf"  
            },
            {
            id:3,
            name:" Saylov va referendumga tayyorgarlik ko‘rish hamda ularni o‘tkazish bilan bog‘liq bo‘lgan hujjatlarni saqlash, arxivga topshirish va yo‘q qilish tartibi to‘g‘risida  ",
            size:"212,4 KB ",
            href:"/files/referendum_uz.pdf"  
            },
            {
            id:4,
            name:" ЁШ САЙЛОВЧИ ҚЎЛЛАНМАСИ (Савол-жавоб шаклида)",
            size:"829,2 KB ",
            href:"/files/saylov_qollanma_uz.pdf"  
            }, 
         ],
         
         tabList3:[
            {
            id:5,
            name:" Okrug va uchastka saylov komissiyalari tarkibini shakllantirish bo‘yicha YO‘RIQNOMA ",
            size:"215,3 KB ",
            href:"/files/trener_komissiyatarkibi_uz.pdf"  
            },
            {
            id:6,
            name:"  O‘zbekiston Respublikasi saylovlarida xorijiy davlatlar va xalqaro tashkilotlardan qatnashadigan kuzatuvchilar to‘g‘risida NIZOM ",
            size:"383,6 KB ",
            href:"/files/trener_kuzatuvchilar_uz.pdf"  
            },
            {
            id:7,
            name:" O‘ZBEKISTON RESPUBLIKASI PREZIDENTINING QARORI O‘ZBEKISTON RESPUBLIKASI MARKAZIY SAYLOV KOMISSIYASI FAOLIYATINI TAKOMILLASHTIRISH BO‘YICHA TASHKILIY CHORATADBIRLAR TO‘RISIDA  ",
            size:"404,3 KB ",
            href:"/files/trener_qaror_uz.pdf"
            },
            {
            id:8,
            name:"  O‘ZBEKISTON RESPUBLIKASI SAYLOVCHILARINING YAGONA ELEKTRON RO‘YXATINI SHAKLLANTIRISH VA YURITISH CHORA-TADBIRLARI TO‘G‘RISIDA  ",
            size:"407,2 KB ",
            href:"/files/trener_vazirlamaxkamasi_ux.pdf"   
            },
            {
            id:9,
            name:" O‘ZBЕKISTON RЕSPUBLIKASI PRЕZIDЕNTI SAYLOVINING KONSTITUTSIYAVIY-HUQUQIY ASOSLARI. SAYLOV KODЕKSIGA KIRITILGAN O‘ZGARTISH HAMDA QO‘SHIMCHALARNING MAZMUN-MOHIYATI.",
            size:"408 KB ",
            href:"/files/1_uz.pdf"    
            },
            {
            id:10,
            name:"  INSON ONGIGA TA’SIR KO‘RSATISHNING SAMARALI VOSITALARI. ",
            size:"217 KB ",
            href:"/files/2_uz.pdf"  
            },
            {
            id:11,
            name:" NOTIQLIK SAN’ATIDA NUTQNI KUCHAYTIRUVCHI VA SALBIY TA’SIR ETUVCHI OMILLAR.  ",
            size:"233 KB ",
            href:"/files/3_uz.pdf"
            },
            {
            id:12,
            name:" Yangi O‘zbekistonda amalga oshirilgan islohotlarning qiyosiy tahlili: amaliy misollar  ",
            size:"212 KB ",
            href:"/files/4_uz.pdf"
            },
            {
            id:13,
            name:"  “Yangi O‘zbekistonda amalga oshirilgan islohotlarning qiyosiy tahlili: amaliy misollar  ",
            size:"271 KB ",
            href:"/files/5_uz.pdf"
            },
            {
            id:14,
            name:"   Yoshlarda ijtimoiy tarmoqlardan foydalanish ko‘nikmalarini rivojlantirish. Ijtimoiy tarmoqlar orqali targ‘ib qilishning zamonaviy vositalari.  ",
            size:"472 KB ",
            href:"/files/6_uz.pdf"
            } 
         ]
        
        }
    },

};
</script>

<style scoped>
.active::before {
  content: '';
  width: 10px;
  height: 10px;
  margin-right: 16px;
  transition: all .25s;
  border-radius:40px;
  transform: translate(50%, -17%);
  background-color: blue;
  display: inline-block;  
}

::-webkit-scrollbar {
  display: none;
}



</style>