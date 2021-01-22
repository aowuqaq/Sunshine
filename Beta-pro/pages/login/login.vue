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
			<input class="indo" type="text" placeholder="text..." placeholder-style="color:grey" v-model="userName">
			<view class="in">password</view>
			<input class="indo" type="text" placeholder="text..." placeholder-style="color:grey" v-model="userPassword">
			<view class="in">验证码</view>
			<input class="indo" type="text" placeholder="text..." placeholder-style="color:grey" v-model="verifyCode">
			<image :src="verifyCodeImageSrc" class="verifyImage" @click="changeCodeImg()"></image>
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
				verifyCode: '',
				verifyCodeImageSrc: '',
				imageURL: '/static/back3.jpg',
				res: {
					statecode: ''
				}
			};
		},
		onLoad() {
			uni.request({
				url: this.$webUrl + '/getverified?width=100&height=50&length=5',
				method: 'GET',
				header: {
					'Token': uni.getStorageSync('token')
				},
				responseType: 'ArrayBuffer',
				success: (res) => {
					console.log(res);
					this.verifyCodeImageSrc = "data:image/png;base64," + uni.arrayBufferToBase64(res.data);
					uni.setStorage({
						key: 'token',
						data: res.cookies[0],
						success: function() {
							console.log('setStorageSuccess!');
						}
					});
				}
			})
		},
		methods: {
			goToRegist: function() {
				uni.redirectTo({
					url: '/pages/regist/regist',
					animationType: 'pop-in',
					animationDuration: 200,
				});
			},
			bindLogin: function() {
				const token = uni.getStorageSync('token');
				console.log(this)
				console.log(token)
				uni.request({
					url: this.$webUrl + '/user/login',
					method: 'POST',
					dataType: "application/json",
					data: {
						account: this.userName,
						password: this.userPassword,
						verifycode: this.verifyCode
					},
					header: {
						'Token': this.token,
						'content-type': 'application/json',
					},
					dataType: 'json',
					success: (res) => {
						console.log('ajax success!');
						console.log(res);
						if (res.data.status === "fail") {
							console.log('登录失败');

							uni.showToast({
								icon: 'none',
								title: '用户名或密码或验证码错误！',
							});
						} else if (res.data.status === 'success') {
							uni.showToast({
								title: '登陆成功',
								icon: 'success',
							});

							uni.switchTab({
								url: '/pages/home/home',
								animationType: 'pop-in',
								animationDuration: 200
							});
						}
						uni.request({
							url: 'http://www.sunshine2020cc.cn:80/test',
							method: 'POST',
							header: {
								'content-type': 'application/json;charset=utf-8'
							},
							success: (res) => {
								console.log(res);
							}
						})
						return;
					},
					//展示错误原因以及信息
					fail: () => {
						console.log('request fail');
						uni.showModal({
							content: 'login false',
							showCancel: false
						});
					},
					complete: () => {
						//加载完成
						this.loading = false;
					}
				});
			},
			changeCodeImg: function() {
				var num = Math.floor(Math.random() * (6 - 4 + 1) + 4); //生成一个随机数（防止缓存）
				this.verifyCodeImageSrc = 'http://www.sunshine2020cc.cn:80/getverified?width=100&height=50&length=' + num;
			}
		}
	}
</script>

<style lang="scss" scoped>
	page {
		height: 1800rpx;
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
		height: 25%;
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
		height: 1500rpx;
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

	.verifyImage {
		width: 200rpx;
		height: 100rpx;
		border: 1px solid red;
	}
</style>
