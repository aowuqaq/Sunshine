<template>
	<view>
		<view @click="testResquest" class="root">
			<text>获取图片</text>
		</view>
		<view @click="testUploadImg" class="root">
			<text>上传图片</text>
		</view>
		<view @click="testGetHtml" class="root">
			<text>获取html</text>
		</view>
		<view @click="testGetHoleAnnoun" class="root">
			<text>获取树洞公告</text>
		</view>
		<img :src="resourcePath" alt="">
		<u-parse :html="texthtml"></u-parse>
		<view>
			<text>{{title}}</text>
			<text>{{content}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				resourcePath: '',
				texthtml: '',
				title: '',
				content: ''
			}
		},
		onload() {

		},
		methods: {
			testResquest: function() {
				uni.request({
					url: 'http://www.sunshine2020cc.cn/getimage/test.png',
					method: 'GET',
					responseType: 'ArrayBuffer',
					header: {
						'content-type': 'application/json'
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
			testUploadImg: function() {
				const usertoken = uni.getStorageSync('usertoken');
				uni.chooseImage({
					success: (chooseImageRes) => {
						const tempFilePaths = chooseImageRes.tempFilePaths;
						uni.uploadFile({
							url: 'http://www.sunshine2020cc.cn/upload/img',
							filePath: tempFilePaths[0],
							fileType: 'image',
							name: 'file',
							header: {
								'Token': usertoken
							},
							success: (uploadFileRes) => {
								console.log('ajax success')
								console.log(uploadFileRes);
							}
						});
					}
				});
			},
			testGetHtml: function() {
				uni.request({
					url: 'http://www.sunshine2020cc.cn/gethtml/sunshine/3iuWLmCAMVpvAoR.html',
					method: 'GET',
					responseType: 'text',
					header: {
						'Token': uni.getStorageSync('usertoken'),
						'content-type': 'application/json'
					},
					success: (res) => {
						this.texthtml = res.data;
						console.log(res);
					}
				})
			},
			//	这是铜铜的书信的获取公告的函数
			testGetHoleAnnoun: function() {
				uni.request({
					url: 'http://www.sunshine2020cc.cn:8080/post/getPost',
					method: 'POST',
					data:{
						id:'3'
					},
					header: {
						'content-type': 'application/json',
					},
					success: (res) => {
						console.log(res)
						this.title = res.data.title
						this.content = res.data.content
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	.root {
		width: 200rpx;
		height: 100rpx;
		border: 2rpx solid red;
	}
</style>
