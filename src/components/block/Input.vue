<template>
    <input  :value="modelValue" @input = "updateInput">
</template>

<script>


export default {
	name: 'Input',
	props: {
		modelValue: [String, Number],
		
	},
	methods: {
		updateInput(e) {
			this.$emit('update:modelValue', e.target.value)
	
        },
       
	},
}
</script>
