<template>
	<view>
		<u-avatar :src="fanhui" mode="circle" @click="fanhui" ></u-avatar>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				src:'https://i.loli.net/2021/01/18/2SpctMQyTPh4kNB.png'
			}
		},
		methods: {
			fanhui(){
				uni.navigateTo({
					url:'../index'
				})
			}
		}
	}
</script>

<style>

</style>
