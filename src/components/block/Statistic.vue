<template>
<div class="pt-[48px] pb-[100px] bg-[#f8f9fb]">
    <div class="container">
        <h3 class="font-bold text-[40px] leading-[48px] text-[#0d2144] border-b-2 border-blue-600">Statistika</h3>
        <div class="flex justify-between flex-wrap mt-[86px]">
            <statistic-card :statistic="statistic" />
        </div>     
    </div>
</div>
</template>

<script>
import StatisticCard from "../block/StatisticCard.vue"


export default {
    components: {
        StatisticCard
    },
    data() {
        return {
            statistic: [

                {
                    img: "people",
                    number: "6 993 924",
                    name: "Umumiy saylovchi yoshlar soni"
                },
                {
                    img: 'election',
                    number: "880 155",
                    name: "Birinchi marta saylovda qatnashayotgan yoshlar soni"
                },
                {
                    img: 'globe',
                    number: "400 000",
                    name: "Chet elda saylovchi yoshlar soni"
                },
                {
                    img: 'man',
                    number: "767 251",
                    name: "Ta'lim muassasalaridagi saylovchi yoshlaar soni"
                },
                {
                    img: 'woman',
                    number: "1 089 120",
                    name: "Korxona-tashkilotlardagi saylovchi yoshlar soni"
                },
                {
                    img: 'building',
                    number: "4 537 553",
                    name: "Mahallalardagi saylovchi yoshlar soni"
                },
            ]
        }
    },

}
</script>
