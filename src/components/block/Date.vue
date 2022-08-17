<template>
    <div class="flex justify-between w-[70%] my-0 mx-auto rounded-[12px] border-[1px] bg-[#fff] py-[20px] absolute left-[175px] bottom-[-83px]">
        <div>
            <p class="py-[12px] px-[30px] bg-[#0083ff] font-bold text-[#fff] uppercase rounded-tl-[12px] rounded-tr-[22px] rounded-br-[22px] inline absolute bottom-[155px]">Bugun, {{currentDate()}}</p>
        </div>
        <div class="border-r-[1px] px-[28px] w-[50%] mt-[28px]">
            <p class="font-medium text-[16px] mb-[8px] text-[#2d2c3d]">Prezident saylovigacha qolgan vaqt</p>
            <div class="flex justify-between" >
                <span>
                    <p class="text-center text-[33px] font-bold">{{displayDays}}</p>
                    <p class="text-[18px] text-[rgba(13,33,68,.3137254901960784)]">kun</p>
                </span>
                <span class="text-[33px] text-[#e0e0e0] font-extrabold">:</span>
                <span>
                    <p class="text-center text-[33px] font-bold">{{displayHours}}</p>
                    <p class="text-[18px] text-[rgba(13,33,68,.3137254901960784)]">soat</p>
                </span>
                <span class="text-[33px] text-[#e0e0e0] font-extrabold">:</span>
                <span>
                    <p class="text-center text-[33px] font-bold">{{displayMinutes}}</p>
                    <p class="text-[18px] text-[rgba(13,33,68,.3137254901960784)]">daqiqa</p>
                </span>
                <span class="text-[33px] text-[#e0e0e0] font-extrabold">:</span>
                <span>
                    <p class="text-center text-[33px] font-bold">{{displaySeconds}}</p>
                    <p class="text-[18px] text-[rgba(13,33,68,.3137254901960784)]">soniya</p>
                </span>
        
            </div>
        </div>
        <div class="px-[28px] w-[50%] mt-[28px]">
           <p class="font-medium text-[16px] mb-[8px] text-[#2d2c3d]">Saylov uchastkasini aniqlash </p> 
           <div class="flex ">
            <svg xmln="https://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none" class="loyiha-time__svg"><path d="M39.375 34.65C40.275 34.65 41.1 34.2375 41.7 33.5625C44.8125 29.775 50.0625 22.65 49.875 17.2125C49.6875 11.3625 45.075 6.75 39.375 6.75C33.675 6.75 29.0625 11.3625 28.875 17.2125C28.725 22.65 33.9375 29.8125 37.05 33.5625C37.65 34.275 38.475 34.65 39.375 34.65ZM35.625 17.25C35.625 15.1875 37.3125 13.5 39.375 13.5C41.4375 13.5 43.125 15.1875 43.125 17.25C43.125 19.3125 41.4375 21 39.375 21C37.3125 21 35.625 19.3125 35.625 17.25Z" fill="#0D2144"></path><path d="M26.0251 11.1C26.6251 10.9875 27.0376 10.3875 26.8876 9.75002C26.7751 9.15002 26.1751 8.73752 25.5376 8.88752C18.7876 10.35 13.2376 14.7375 10.3126 21C7.87511 26.25 7.61261 32.175 9.60011 37.6125C11.5876 43.05 15.5626 47.4375 20.8501 49.875C23.7751 51.225 26.8876 51.9375 30.0376 51.9375C32.5501 51.9375 35.0626 51.4875 37.5001 50.625C42.9751 48.6375 47.3251 44.6625 49.7626 39.375C50.8126 37.125 51.4501 34.7625 51.7126 32.325C51.7876 31.725 51.3376 31.1625 50.7001 31.0875C50.1001 31.0125 49.5376 31.4625 49.4626 32.1C49.2376 34.275 48.6751 36.4125 47.7376 38.4375C45.5251 43.1625 41.6251 46.725 36.7501 48.525C31.8751 50.2875 26.5501 50.0625 21.8626 47.8875C21.1501 47.55 20.4751 47.175 19.8001 46.7625C20.4376 46.725 21.1126 46.5375 21.7126 46.2C22.3876 45.825 23.1001 45.375 23.8876 44.85C24.4126 44.475 24.8626 43.9875 25.2001 43.425C25.5751 42.75 26.0251 42.0375 26.2501 41.2125C27.7126 35.5875 22.8376 35.3625 22.6876 34.125C22.5376 32.7375 24.3376 31.6875 25.4251 30.6C26.5126 29.5125 26.8501 27.825 26.2876 26.85C24.4876 23.625 20.2126 25.3125 19.8001 28.7625C19.5751 30.825 18.3376 32.925 17.2876 34.0125C16.2376 35.0625 14.1751 34.5 13.6126 32.9625C12.9751 31.2375 15.1876 30.6 14.8501 28.3875C14.7751 27.7875 14.1376 27.4875 13.3501 27.375L10.7626 27.45C11.0251 25.575 11.5876 23.7375 12.4126 22.0125C14.9626 16.35 19.9501 12.4125 26.0251 11.1Z" fill="#0D2144"></path></svg>
           <div>
            <p class="text-[18px] font-bold text-[#2d2c3d] uppercase leading-[23px]">Mening saylov uchastkam</p>
            <a href="" class="text-[18px] text-[#0083ff] pointer pt-[4px]">Izlash</a> 
           </div>
           
           </div>
        </div>
    </div>
</template>

<script>


export default {
    props:["year", "month", "date", "hours", "minutes", "seconds", "millisecond"],
    data: ()=>({
        displayDays:0,
        displayHours:0,
        displayMinutes:0,
        displaySeconds:0
    }),
    computed:{
      _seconds:() => 1000,
      _minutes(){
        return this._seconds * 60;
      } ,
      _hours(){
        return this._minutes * 60;
      },
      _days(){
        return this._hours * 24;
      },
      end(){
        return new Date(
            this.year,
            this.month,
            this.date,
            this.hours,
            this.minutes,
            this.seconds,
            this.millisecond
        )
      }
    },
    mounted(){
       this.showRemaining() 
    },
    
  methods: {
    formatNum: num => (num < 10 ? "0" + num : num),
    
    showRemaining(){
     const timer = setInterval(() => {
        const now = new Date()
        // const end = new Date(2022, 9, 22, 10, 10, 10, 10 )
        const distance = this.end.getTime() - now.getTime()

        if (distance < 0){
            clearInterval(timer)
            return;
        }

        const days = Math.floor(distance / this._days);
        const hours = Math.floor((distance % this._days) / this._hours);
        const minutes = Math.floor((distance % this._hours) / this._minutes);
        const seconds = Math.floor((distance % this._minutes) / this._seconds);
        this.displayMinutes = this.formatNum(minutes) ; 
        this.displaySeconds =  this.formatNum(seconds) ; 
        this.displayHours =  this.formatNum(hours) ; 
        this.displayDays =  this.formatNum(days) ; 
     }, 1000)   
    },


    
    currentDate() {
      const current = new Date();
     const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

      const date = `${current.getDate()}/${current.getMonth(month)+1}`;
      
      return date;
    },
    
  },
  
}

</script>


<style scoped>

</style>