module.exports = {
    content: ["./index.html",
            "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        container:{
            center:true ,
            padding:'20px',
            screens:{
                sm:'640px',
                md:'768px',
                lg:'1180px',
                xl:'1180px'
            },
            transitionTimingFunction: {
              'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
              'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
            }
      
         
        }
      },
    },
    plugins: [],
  }