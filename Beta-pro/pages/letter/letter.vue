<template>
	<!--整体页面-->
	<view class="all">
		<!--顶部搜索框-->
		<view class="title">
			<view class="search">
				<!--搜索框-->
				<view>
				</view>
				<view>
				</view>
				<view>
				</view>
			</view>
			<view class="serachblank">
			</view>
			<view class="cancel">
				<!--取消-->
			</view>
		</view>
		<view class="total">
			<view class="function">
					<view class="letterwriting">
						<!--写信-->
						<text>写信</text>
					</view>
					<view class="booking">
						<!--预约-->
						<text>预约</text>
					</view>
			</view>
			<!--岛屿来信-->
			<text>岛屿来信</text>
			<view class="islandletter">
				<view class="islandletterfunction">
					<!--岛屿来信功能-->
					<view class="mailbox">
						<view></view>
						<view></view>
						<view></view>
					</view>
					<view>
						<view></view>
						<view></view>
						<view></view>
					</view>
					<view>
						<view></view>
						<view></view>
						<view></view>
					</view>
				</view>
			</view>
			<!--医师预约-->
			<view class="doctor">

				<view></view>
				<view>
					<!--医师预约功能-->
					<view>
						<view></view>
						<view></view>
						<view></view>
					</view>
					<view>
						<view></view>
						<view></view>
						<view></view>
					</view>
				</view>
			</view>
			<view class="totalblank">
			</view>
		</view>
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
			goHome: function() {
				uni.reLaunch({
					url: '/pages/home/home'
				});
			}
		},
	}
</script>

<style>
	@import "@/SCSS/global.scss";

	.letter {
		display: flex;
		flex-flow: column nowrap;
		justify-content: space-between;
		height: 8vh;
	}

	.letterbutton {
		background-color: rgba(206, 255, 206, 1);
		width: 3vh;
		height: 3vh;
		align-self: center;
	}

	.lettertext {
		width: 3vh;
		height: 2vh;
		line-height: 2vh;
		color: rgba(206, 255, 206, 1);
		font-size: 1vh;
		text-align: center;
		font-family: PingFangSC-regular;
	}

	.title {
		display: flex;
		background-color: #C8C7CC;
		flex-flow: row nowrap;
		align-content: space-around;
	}

	.search {
		flex: 9;
		background-color: #007AFF;
		display: inline-flex;
	}

	.serachblank {
		flex: 1;
	}

	.cancel {
		flex: 1;
		background-color: red;
	}

	.total {
		display: flex;
		flex-flow: column nowrap;
	}

	.function {
		flex: 7;
		display: inline-flex;
		flex-direction: row;
		justify-content: center;
		align-content: center;
		background-color: #C0C0C0;
	}
	
	.letterwriting{
		flex: 5;
		text-align: center;
		background-color: purple;
	}
	
	.booking{
		flex: 5;
		text-align: center;
		background-color: #FFFF00;
	}
	
	.islandletter {
		flex: 13;
		background-color: #2C405A;
	}

	.doctor {
		flex: 9;
		background-color: #4CD964;
	}

	.totalblank {
		flex: 6;
		background-color: #999999;
	}
</style>
