<template>
	<view class="container">
		<input placeholder="标题" class="title-input" ></input>
		<jin-edit placeholder="请输入内容" @editOk="editOk" uploadFileUrl="/#"></jin-edit>
	</view>
</template>

<script>
	import jinEdit from '../../components/jin-edit/jin-edit.vue';
	export default {
		data() {
			return {
				title: "",
				textMessage: "",
				placeholder: "标题......"
			};
		},
		components: {
			jinEdit
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
