<template>
	<!-- 使用v-model双向绑定数据 -->
	<!-- <view class="bgimg"> -->
	<view class="bgimg" :style="{background: 'url('+imageURL+')'+'30%'+'100%'+'repeat'}">
		<!-- <image class="bgimg" src="../../static/back.jpg"></image> -->

		<view class='header'>
			<image src='../../static/logo.jpg'></image>
			<text>SUNSHINE</text>
			<text style="font-size:large">有光的地方便有希望</text>
		</view>

		<view class='content'>
			<view class="in">user</view>
			<!-- <view class="in">{{userName}}</view> -->
			<input class="indo" type="text" placeholder="text..." placeholder-style="color:grey" v-model="userName">
			<view class="in">password</view>
			<!-- <view class="in">{{userPassword}}</view> -->
			<input class="indo" type="text" placeholder="text..." placeholder-style="color:grey" password="true" v-model="userPassword">
		</view>

		<view class="buttonBox">
			<!-- 使用id强行修改border -->
			<button @click="bindLogin()" hover-class="none" type="default" plain="true" id="pra">
				<text>登录</text>
			</button>
			<button @click="goToRegist()" hover-class="none" type="default" plain="true" id="pra">
				<text>注册</text>
			</button>
		</view>

		<view class="message">
			<text>XDU_Team_GC</text>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				userName: '',
				userPassword: '',
				imageURL: '/static/back3.jpg'
			};
		},
		onLoad() {

		},
		methods: {
			goToRegist: function() {
				uni.redirectTo({
					url: '/pages/regist/regist',
					animationType: 'pop-in',
					animationDuration: 200
				});
			},
			bindLogin: function() {
				const data = {
					account: this.userName,
					password: this.userPassword
				};

				console.log(data);
				uni.request({
					// 服务器的URL
					url: 'xxxx',
					method: 'GET',
					data: {
						username: this.account,
						password: this.password
					},
					success: res => {
						if (res.statusCode == 404) {
							uni.showToast({
								icon: 'none',
								title: '密码或用户名错误',
							});
							return;
						}
						console.log(res);

						uni.showToast({
							icon: 'none',
							title: '登录成功',
						});

						uni.setStorage({
							key: 'username',
							data: this.account,
							success: function() {
								console.log("存储用户名到本地成功！");
							}
						});

						uni.switchTab({
							url: '/pages/home/home',
							animationType: 'pop-in',
							animationDuration: 200
						});
					},
					fail: () => {
						console.log("服务器请求失败!");
					},
					complete: () => {}
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	page {
		height: 1500rpx;
		width: 100%;
		background-size: 100% 100%;
		padding: 0;
		margin: 0;
	}

	#pra {
		border: none;
		border-bottom: 4rpx solid #6980C5;
	}

	.header {
		margin-top: 20%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		width: 100%;
		height: 20%;
	}

	.header image {
		width: 150rpx;
		height: 150rpx;
		border-radius: 50%;
		margin-bottom: 2%;
	}

	.header text {
		width: 100%;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		font-size: x-large;
		color: #6980C5;
	}

	.content {
		width: 50%;
		display: flex;
		flex-direction: column;
		justify-content: start;
		align-items: center;
		height: 15%;
	}

	.content .in {
		font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
		font-size: large;
		align-self: flex-start;
		// color: #AA9FBB;
		color: #51629E;
	}

	.content .indo {
		color: #e59e00;
	}

	.content input {
		border-bottom: 1px solid #969696;
	}

	.buttonBox {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		height: 10%;
		width: 100%;
		margin-bottom: 35%;
	}

	/deep/ button {
		width: 150rpx;
		height: 80rpx;
		align-items: center;
		justify-content: center;
		margin-left: 30rpx;
		margin-right: 30rpx;
		border-radius: 0;
	}

	button text {
		color: #6980C5;
		width: 100%;
		height: 100%;
	}

	.bgimg {
		height: 1300rpx;
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-color: #F7F6EE;
	}

	.message {
		position: fixed;
		bottom: 0rpx;
		width: 100%;
		height: 5%;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: #FFF8EC;
		border-top: 2rpx solid white;
		font-size: smaller;
	}
</style>
