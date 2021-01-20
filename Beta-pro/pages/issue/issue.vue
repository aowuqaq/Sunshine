<template>
	<view class="container">
		<input placeholder="标题" class="title-input" @editOk="editOk"></input>
		<!-- <jin-edit placeholder="请输入内容"></jin-edit> -->
		<jxImgTextEdit ref="jxImgTextEdit" :editData="edits" @delImg="delImg"></jxImgTextEdit>
	</view>
</template>

<script>
	import jinEdit from '../../components/jin-edit/jin-edit.vue';
	import jxImgTextEdit from '@/components/jx-imgText-edit/jx-imgText-edit.vue';
	export default {
		data() {
			return {
				title: "",
				textMessage: "",
				placeholder: "标题......"
			};
		},
		components: {
			jinEdit,
			jxImgTextEdit
		},
		methods: {
			editOk(res) {
				console.log(res);
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
</style>
