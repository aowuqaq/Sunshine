<<<<<<< HEAD
<template>
	<view class="content">
		<p>{{title}}</p>
		<button @click="">goBack</button>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				title: '登陆成功！',
			}
		},
		onShow() {
			
		},
		methods: {
=======
<template>
	<view class="content">
		<p>{{title}}</p>
		<button @click="">goBack</button>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				title: '登陆成功！',
			}
		},
		onShow() {
			
		},
		methods: {
>>>>>>> 6626a96fd85c3c6997a963c421e7f24db65dd6e3
			goBack:function(){
				uni.reLaunch({
				    url: '/pages/login/login'
				});
<<<<<<< HEAD
			}
		}
	}
</script>

<style>
=======
			}
		}
	}
</script>

<style>
>>>>>>> 6626a96fd85c3c6997a963c421e7f24db65dd6e3
</style>
