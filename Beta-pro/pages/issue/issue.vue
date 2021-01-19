<template>
	<!-- <view class="root">
		<input type="text" placeholder="标题......" v-model="title" class="title-input">
		<input type="text" placeholder="你的故事......" v-model="textMessage" class="title-input" style="height: 1000rpx;">
	</view> -->
	<view class="container">
		<input class="title-input" :placeholder="placeholder" @ready="onEditorReady" v-model="title">
		<editor id="editor" class="title-input" :placeholder="placeholder" @ready="onEditorReady" style="height: 1000rpx;"
		 v-model="textMessage"></editor>
		<button type="warn" @tap="undo">撤销正文</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: "",
				textMessage: "",
				placeholder: "标题......"
			};
		},
		methods: {
			onEditorReady() {
				// #ifdef MP-BAIDU
				this.editorCtx = requireDynamicLib('editorLib').createEditorContext('editorId');
				// #endif

				// #ifdef APP-PLUS || H5 ||MP-WEIXIN
				uni.createSelectorQuery().select('#editor').context((res) => {
					this.editorCtx = res.context
				}).exec()
				// #endif
			},
			undo() {
				this.editorCtx.undo()
			}
		}
	}
</script>

<style lang="scss">
	page {
		width: 750rpx;
		height: auto;
		display: flex;
		flex-direction: column;
		background-color: #F8F8FF;
	}

	.root {
		width: 750rpx;
		height: auto;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.title-input {
		margin: 5% 0;
		width: 100%;
		height: 100rpx;
		border: 2rpx solid #B0C4DE;
		border-radius: 15rpx;
	}

	.container {
		padding: 10px;
	}

	#editor {
		width: 100%;
		height: 50rpx;
	}

	button {
		margin-top: 10px;
	}
</style>
