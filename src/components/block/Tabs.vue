<template>
    <article>
        <header class="tabs">
            <ul >
                <li class="font-bold text-[25px] leading-[130%] uppercase text-[#b4b7bd] mb-[14px]" v-for = "(tab, index) in tabs" :key="index">
                    <div class="nav-item"
                        :class="{'is-active' : tab.isActive}"
                        @click="selectTab(tab)">
                        {{tab.name}}
                    </div>
                </li>
            </ul>
        </header>
        <section class="tabs-details">
            <slot></slot>
        </section>
    </article>
</template>

<script>

export default {
   data:() =>{
    return{
         tab:[
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
        ]
    }
   },
   methods:{
    selectTab(selectedTab){
        this.tabs.forEach(tab=>{
           tab.isActive = tab.name === selectedTab.name;
    })
    }
   },
   created(){
    this.tabs = this.$children
   }
}
</script>
