<template>
<div class="relative">
  <iframe  src="https://maps.google.com/maps?q=Tashkent%20Dates%20Products&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed" width=100% height=600 allowfullscreen></iframe>
<map-register class="absolute top-0 left-20" />
</div> 

</template>


<script >
 import MapRegister from "../block/MapRegister.vue"
 
export default {
  components :{
    MapRegister
  }
}
</script>
