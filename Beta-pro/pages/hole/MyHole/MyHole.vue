<template>
	<view style="width: 750rpx;height: 1000rpx;">
		<u-subsection :list="list" :current="curNow" active-color="#00BFFF" @change="sectionChange"></u-subsection>

		<view v-show="curNow === 0" class="tab_first">
			<u-card :title="title" :sub-title="subTitle" :thumb="thumb">
				<view class="" slot="body">
					<view class="u-body-item u-flex u-border-bottom u-col-between u-p-t-0">
						<view class="u-body-item-title u-line-2">这是文章的正文</view>
						<image src="https://img11.360buyimg.com/n7/jfs/t1/94448/29/2734/524808/5dd4cc16E990dfb6b/59c256f85a8c3757.jpg"
						 mode="aspectFill"></image>
					</view>

				</view>
				<view style="display: flex;justify-content: space-around;" slot="foot">
					<u-icon name="chat-fill" size="34" color="" label="30点赞"></u-icon>
					<u-icon name="chat-fill" size="34" color="" label="30评论"></u-icon>
					<u-icon name="chat-fill" size="34" color="" label="30转发"></u-icon>
				</view>
			</u-card>
			
			<u-card :title="title" :sub-title="subTitle" :thumb="thumb">
				<view class="" slot="body">
					<view class="u-body-item u-flex u-border-bottom u-col-between u-p-t-0">
						<view class="u-body-item-title u-line-2">这是文章的正文</view>
						<image src="https://img11.360buyimg.com/n7/jfs/t1/94448/29/2734/524808/5dd4cc16E990dfb6b/59c256f85a8c3757.jpg"
						 mode="aspectFill"></image>
					</view>
			
				</view>
				<view style="display: flex;justify-content: space-around;" slot="foot">
					<u-icon name="chat-fill" size="34" color="" label="30点赞"></u-icon>
					<u-icon name="chat-fill" size="34" color="" label="30评论"></u-icon>
					<u-icon name="chat-fill" size="34" color="" label="30转发"></u-icon>
				</view>
			</u-card>
		</view>

		<view v-show="curNow === 1" class="tab_second">
			<u-card :title="answer" :sub-title="subTitle" :thumb="thumb">
				<view class="" slot="body">
					<view class="u-body-item u-flex u-border-bottom u-col-between u-p-t-0">
						<view class="u-body-item-title u-line-2">这是回复的内容</view>
						<image src="https://img11.360buyimg.com/n7/jfs/t1/94448/29/2734/524808/5dd4cc16E990dfb6b/59c256f85a8c3757.jpg"
						 mode="aspectFill"></image>
					</view>
			
				</view>
				<view style="display: flex;justify-content: space-around;" slot="foot">
					<u-icon name="chat-fill" size="34" color="" label="30评论"></u-icon>
				</view>
			</u-card>
			<u-card :title="answer" :sub-title="subTitle" :thumb="thumb">
				<view class="" slot="body">
					<view class="u-body-item u-flex u-border-bottom u-col-between u-p-t-0">
						<view class="u-body-item-title u-line-2">这是回复的内容</view>
						<image src="https://img11.360buyimg.com/n7/jfs/t1/94448/29/2734/524808/5dd4cc16E990dfb6b/59c256f85a8c3757.jpg"
						 mode="aspectFill"></image>
					</view>
			
				</view>
				<view style="display: flex;justify-content: space-around;" slot="foot">
					<u-icon name="chat-fill" size="34" color="" label="30评论"></u-icon>
				</view>
			</u-card>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
						name: '我的树洞'
					},
					{
						name: '我的评论'
					}
				],
				curNow: 0,
				title: '这是文章的标题',
				subTitle: '2021-01-19',
				thumb: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg',
				answer:'这是回复的标题'
			}
		},
		methods: {
			sectionChange(index) {
				this.curNow = index;
			}
		}
	}
</script>

<style lang="scss">
	page{
		background-color: #F8F8FF;
	}
	.tab_first {
		width: 750rpx;
		height: 1500rpx;
	}

	.tab_second {
		width: 750rpx;
		height: 1500rpx;
	}

	.u-card-wrap {
		background-color: $u-bg-color;
		padding: 1px;
	}

	.u-body-item {
		font-size: 32rpx;
		color: #333;
		padding: 20rpx 10rpx;
	}

	.u-body-item image {
		width: 120rpx;
		flex: 0 0 120rpx;
		height: 120rpx;
		border-radius: 8rpx;
		margin-left: 12rpx;
	}
</style>
