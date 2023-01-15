<template>
    <div v-for="(item, index) in tabList" :key="index" class="flex justify-between p-[20px] w-[376px] h-[102px] border border-[#ececec] border-solid bg-[#fff] rounded-[12px] hover:shadow-gray-500/50 shadow-lg transition-[.35s ease] regTheme"> 
        <img  src="../../assets/img/pdf-file-svgrepo-com.svg" alt="" class="w-[36px] h-[48px]">
              <div class="ml-[22px]" >
                <h3 class="text-[#0d2144] line-clamp-2 font-medium text-[16px] leading-[20px] " style="width: 295px;  display: -webkit-box;  -webkit-box-orient: vertical;  -webkit-line-clamp: 2;  overflow: hidden;">{{item.name}}</h3>
                <span class="font-[Roboto, sans] text-sm text-[rgba(45,44,61,.5)] leading-[130%] uppercase">
                    <a :href='item.href' :download='item.href'><svg class="inline " data-v-615e2bf4="" width="16" height="16" viewBox="0 0 16 16"
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
                        PDF:{{item.size}}</a>
                </span>
              </div>
    </div>
       
</template>

<script>


export default {
 name: "Tab",

props:[
    "tabList"
]
}
</script>
