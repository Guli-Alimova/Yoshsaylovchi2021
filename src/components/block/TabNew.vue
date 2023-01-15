<template>
  <div class="py-[60px] bg-[#f8f9fb] w-[100%] h-[520px]">
    <div class="container">
      <div class="flex justify-between">
      <div class="basis-[28%]" >
        <ul>
        <li v-for="(item, index) in tabs" :key="index"  @click="activeItem = index" 
            :class="activeItem == index ? 'active' : ' ' "  class="font-bold text-[25px] leading-[130%] uppercase text-[#b4b7bd] mb-[14px] cursor-pointer">    
         {{item.theme}}
        </li>  
      
        </ul>
      </div>
      
      <div class=" basis-[72%] overflow-y-auto h-[400px]">    
        <div  v-if="activeItem == 0" class="gap-[24px] ml-[6px] flex  flex-wrap " >
            <tab-card :tabList ="tabList1"/>
        </div>
              
        <div v-if="activeItem  == 1" class=" gap-[24px] ml-[6px] flex flex-wrap ">   
        <tab-card :tabList ="tabList2"/>
        </div>

        
        <div v-if="activeItem  == 2" class=" gap-[24px] ml-[6px] flex  flex-wrap ">  
             <tab-card :tabList ="tabList3"/>
        </div>
      </div>
    
      </div>  
    </div>
  </div>
</template>

<script>

import TabCard from "../block/TabCard.vue"
export default {

  components:{
    TabCard
  },
  
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
  transform: translate(50%, -32%);
  background-color: blue;
  display: inline-block;  
}

::-webkit-scrollbar {
  display: none;
}



</style>