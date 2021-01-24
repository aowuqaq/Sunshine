<template>
	<view>
		<view @click="testResquest" class="root">
			<text>获取图片</text>
		</view>
		<view @click="testUploadImg" class="root">
			<text>上传图片</text>
		</view>
		<img :src="resourcePath" alt="">
	</view>
</template>

<script>
	export default {
		data() {
			return {
				resourcePath:''
			}
		},
		onload() {
			
		},
		methods: {
			testResquest:function(){
				uni.request({
					url: 'http://www.sunshine2020cc.cn/getimage/test.png',
					method: 'GET',
					responseType:'ArrayBuffer',
					header: {
						'content-type':'application/json'
					},
					success: (res) => {
						console.log(this.resourcePath)
						this.resourcePath = "data:image/png;base64," + uni.arrayBufferToBase64(res.data);
						console.log(this)
						console.log(this.resourcePath)
						console.log(res);
					}
				})
			},
			testUploadImg:function(){
				const usertoken=uni.getStorageSync('usertoken');
				uni.chooseImage({
				    success: (chooseImageRes) => {
				        const tempFilePaths = chooseImageRes.tempFilePaths;
				        uni.uploadFile({
				            url: 'http://www.sunshine2020cc.cn/upload/img',
				            filePath: tempFilePaths[0],
							fileType:'image',
				            name: 'file',
							header:{
								'Token':usertoken
							},
				            success: (uploadFileRes) => {
								console.log('ajax success')
				                console.log(uploadFileRes);
				            }
				        });
				    }
				});
			}
		}
	}
</script>

<style lang="scss">
	.root{
		width: 200rpx;
		height: 100rpx;
		border: 2rpx solid red;
	}
</style>
