<template>
<div>
    <div class="flex justify-between w-[100%] ">  
        <div  class="basis-[60%] h-[100%]">
          <div class="relative w-[100%] h-[100%]">   
                <div> 
                <iframe v-if="switchVideo" :src="switchVideo ? switchVideo.video : video[0].video" width="762" height="552" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
                <img v-else class="object-cover w-[100%] h-[552px]" :src="switchVideo ? switchVideo?.image : video[0].image" alt="video">     
                <span @click="toggleClass()"  v-bind:class="[isActive ? 'blue' : 'white' ]" class=" w-[100px] h-[100px] z-10 absolute top-[50%] left-[50%] p-[8px] rounded-[50%] border-2 border-white flex items-center justify-center translate-x-[-50%] translate-y-[-50%] hover:border-dotted" ><svg width="16" height="16" class="w-[48px] h-[48px] items-center" viewBox="0 0 16 16" fill="none" xmln="https://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0)">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.288 7.7415L4.53552 1.56854C3.95695 1.26249 3.29419 1.29426 3.29419 2.39292V14.5482C3.29419 15.5526 4.00521 15.7109 4.53552 15.3726L14.288 9.19964C14.6894 8.79678 14.6894 8.14436 14.288 7.7415Z" fill="white"></path>
                        </g>
                        <defs>
                            <clipPath id="clip0">
                                <rect width="15.0588" height="15.0588" fill="white" transform="translate(0.470703 0.470581)"></rect>
                            </clipPath>
                        </defs>
                    </svg>
                </span>
                </div>
                
                <div v-bind:class="[isActive ? 'blue': 'white']" class="top-0 left-0  z-1 absolute w-[100%] h-[100%]"></div>
                

                <div class="container">
                    <div class="absolute flex h-auto b-[36px] translate-x-[-50%] left-[50%] w-[90%] top-[71%]">
                        <div class="w-[100%]">
                            <h2 class="font-bold text-[28px] leading-[40px] text-white">{{switchVideo ? switchVideo.name : video[0].name}}</h2>
                            <div class="flex justify-between mb-2">
                                <span class="text-[#a1a1a1] text-sm">{{switchVideo ? switchVideo.date : video[0].date}}</span>
                                <span class="text-white text-sm px-[6px] py-[2px] bg-[hsla(0,0%,100%,.2)] text-end">{{switchVideo ? switchVideo.time : video[0].time}}</span>
                            </div>

                        </div>

                    </div>

                </div>

            </div> 
        </div>

        <div  class="bg-[#0f1c34] p-[64px] basis-[40%] cursor-pointer h-[552px] overflow-y-scroll "> 
            <ul>
                <li v-for="(item, index) in video" :key="index" @click="playVideo(item.id)" class="relative flex bg-[rgba(61,64,71,.2)] mb-3 w-[100%] hover:bg-[rgba(68,127,236,.1)]">
                    <div class="relative">
                            <img class="absolute top-0 bottom-0 left-0 right-0 object-cover w-full h-full" :src="item.image" alt="video">
                            <iframe width="116" height="100" :src="item.video"></iframe>
                            <span  class="w-[35px] h-[35px] z-10 absolute left-[50%] top-[50%] p-[8px] rounded-[50%] border-2 translate-x-[-50%] translate-y-[-50%] border-white hover:border-dotted"><svg width="16" height="16" class="items-center" viewBox="0 0 16 16" fill="none" xmln="https://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0)">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.288 7.7415L4.53552 1.56854C3.95695 1.26249 3.29419 1.29426 3.29419 2.39292V14.5482C3.29419 15.5526 4.00521 15.7109 4.53552 15.3726L14.288 9.19964C14.6894 8.79678 14.6894 8.14436 14.288 7.7415Z" fill="white"></path>
                                </g>
                                <defs>
                                    <clipPath id="clip0">
                                        <rect width="15.0588" height="15.0588" fill="white" transform="translate(0.470703 0.470581)"></rect>
                                    </clipPath>
                                </defs>
                            </svg>
                        </span>
                    </div>
                        
                        <div class="top-0 left-0 bg-[rgba(19,30,52,.8)] z-1 absolute w-[100%] h-[100%]"></div>
                    

                    <div class="z-10 w-[100%]">
                        <div class="py-[12px] px-[10px]">
                            <div class="z-10 flex items-center justify-between mb-2">
                                <span class="text-[#a1a1a1] text-sm ">{{item.date}}</span>
                                <span class="text-white text-sm px-[6px] py-[2px] bg-[hsla(0,0%,100%,.2)]">{{item.time}}</span>
                            </div>
                            <h2 class="font-medium text-[14px] leading-[20px] text-white videoTheme">{{item.name}}</h2>
                        </div>
                    </div>
                </li> 
                <a href="https://www.youtube.com/channel/UCX56mtcUc4w6ShBlCmBPC2g" target="_blank" class="inline-flex font-medium text-[14px] leading-[17px] text-white items-center gap-[16px] mt-[16px]">
                    <svg width="26" height="24" viewBox="0 0 26 24" fill="none" 
                    xmln="https://www.w3.org/2000/svg"><path 
                    d="M24.8108 5.81639C24.5273 4.7078 23.692 3.8347 22.6313 3.53841C20.7089 3 13 3 13 3C13 3 5.29119 3 3.36868 3.53841C2.30805 3.83475 1.47271 4.7078 1.1892 5.81639C0.674072 7.82578 0.674072 12.0182 0.674072 12.0182C0.674072 12.0182 0.674072 16.2106 1.1892 18.22C1.47271 19.3286 2.30805 20.1653 3.36868 20.4616C5.29119 21 13 21 13 21C13 21 20.7088 21 22.6313 20.4616C23.692 20.1653 24.5273 19.3286 24.8108 18.22C25.326 16.2106 25.326 12.0182 25.326 12.0182C25.326 12.0182 25.326 7.82578 24.8108 5.81639ZM10.4788 15.8246V8.2118L16.9219 12.0183L10.4788 15.8246Z" fill="#0083FF"></path></svg>
                    <span>Barchasi</span>
                    </a>
            </ul>
        </div>

      
    </div>

</div>
</template>

<script>
export default {
    data() {
        return {
            video: [{
                    id:1,
                    video: "https://www.youtube.com/embed/eRTLkIWRtsw",
                    image: "https://img.youtube.com/vi/eRTLkIWRtsw/maxresdefault.jpg",
                    name: "Kelajaging uchun ovoz ber! / Келажагинг учун овоз бер!",
                    date: "14 sentyabr 2021",
                    time: "1:08"
                },
                {
                    id:2,
                    video: "https://www.youtube.com/watch?v=3DdxF5NNTLg",
                    image: "https://img.youtube.com/vi/3DdxF5NNTLg/maxresdefault.jpg",
                    name: " «Ёш сайловчи-2021» форуми ва ўқув семинарлари",
                    date: "14 sentyabr 2021",
                    time: "6:14"
                },
                {
                    id:3,
                    video: "https://www.youtube.com/embed/yt6wXeJbyCI",
                    image: "https://img.youtube.com/vi/yt6wXeJbyCI/maxresdefault.jpg",
                    name: " Новости 24 | Повышение правовой грамотности молодых избирателей в Каракалпакстане",
                    date: "14 sentyabr 2021",
                    time: "2:43"
                },
                {
                    id:4,
                    video: "https://www.youtube.com/embed/SwRfNYBbShg",
                    image: "https://img.youtube.com/vi/SwRfNYBbShg/hqdefault.jpg",
                    name: " My5: Qoraqalpog’iston Respublikasida “Yosh saylovchi” loyihasi o’tkazilmoqda.",
                    date: "14 sentyabr 2021",
                    time: "1:53"
                },
                {
                    id:5,
                    video: "https://www.youtube.com/embed/G5GMPs63ok4",
                    image: "https://i.ytimg.com/vi_webp/G5GMPs63ok4/maxresdefault.webp",
                    name: " Jasur Jumayev, `Jasorat` medali sohibi",
                    date: "30 sentyabr 2021",
                    time: "5:03"
                },
                {
                    id:6,
                    video: "https://www.youtube.com/embed/SttAmW1MgMI",
                    image: "https://i.ytimg.com/vi_webp/SttAmW1MgMI/maxresdefault.webp",
                    name: " Suhrob Abduhafizov, Toshkent shahar `Kelajak liderlari` klubi prezidenti",
                    date: "30 sentyabr 2021",
                    time: "1:40"
                },
                {
                    id:7,
                    video: "https://www.youtube.com/embed/4rigmM0vOes",
                    image: "https://i.ytimg.com/vi_webp/4rigmM0vOes/maxresdefault.webp",
                    name: " Sarvar Bahodirov, jurnalist",
                    date: "1 oktabr 2021",
                    time: "2:14"
                },
                {
                    id:8,
                    video: "https://www.youtube.com/embed/lY7PrlsKqr8",
                    image: "https://i.ytimg.com/vi_webp/lY7PrlsKqr8/maxresdefault.webp",
                    name: "Shaxzod Bahodirov, `Kelajak bunyodkori` medali sohibi",
                    date: "30 sentyabr 2021",
                    time: "1:45"
                },
                {
                    id:9,
                    video: "https://www.youtube.com/embed/VuUoIrfmvlA",
                    image: "https://i.ytimg.com/vi_webp/VuUoIrfmvlA/maxresdefault.webp",
                    name: "1-videodars. Saylov nima?",
                    date: "4 oktabr 2021",
                    time: "3:10"
                },
                {
                    id:10,
                    video: "https://www.youtube.com/embed/L1KbtAVUKtk",
                    image: "https://i.ytimg.com/vi_webp/VuUoIrfmvlA/maxresdefault.webp",
                    name: "2-videodars. Saylov prinsiplari",
                    date: "4 oktabr 2021",
                    time: "5:05"
                },
                {
                    id:11,
                    video: "https://www.youtube.com/embed/Yfud3AF0FJE",
                    image: "https://i.ytimg.com/vi_webp/VuUoIrfmvlA/maxresdefault.webp",
                    name: "3-videodars. Aktiv saylov va passiv saylov",
                    date: "4 oktabr 2021",
                    time: "1:45"
                },
                {
                    id:12,
                    video: "https://www.youtube.com/embed/H6eDXGdyShU",
                    image: "https://i.ytimg.com/vi_webp/VuUoIrfmvlA/maxresdefault.webp",
                    name: "4-videodars. Saylovchilarning huquqlari",
                    date: "4 oktabr 2021",
                    time: "1:41"
                },
                {
                    id:13,
                    video: "https://www.youtube.com/embed/3OmcKTmMs2E",
                    image: "https://i.ytimg.com/vi_webp/VuUoIrfmvlA/maxresdefault.webp",
                    name: "5-videodars. Saylovchilarning majburiyatlari",
                    date: "4 oktabr 2021",
                    time: "1:11"
                }
            ],
            
            videoItem:
                this.video?.splice(0,1),
                
            switchVideo:null,
            isActive:true,
         
        }
        
    },

    methods:{
        
    playVideo(id) {  
    
        this.switchVideo = this.video.find((element) => id ===  element.id)
      console.log(this.switchVideo)
        
    },   

    toggleClass() {
        this.isActive = !this.isActive
    }
      
    }
}
</script>

<style scoped>
::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-thumb {
    -webkit-box-shadow: inset 0 0 6px rgb(0 0 0 / 50%);
    border-radius: 8px;
    background-color: #061734;
}

::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px #061734;
    background: #4b586d;
}

.blue{
   background: rgba(19,30,52,.8);
}
.white{
    background: none;
    visibility: hidden;
    display: none;
}
.videoTheme{
    display: block;
  display: -webkit-box;
  /* height: 45px; */
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

</style>
