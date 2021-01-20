<!-- <template>
	<view>
	<view class="u-search-box">
		<view class="u-search-inner">
			<u-icon name="search" color="#a4a4a4" :size="40"></u-icon>
			<text class="u-search-text">搜索我的好友</text>
		</view>
	</view>
	<view class="wrap">
		<swiper class="swiper-box" :current="swiperCurrent" @transition="transition" @animationfinish="animationfinish">
			<swiper-item class="swiper-item">
				<scroll-view scroll-y style="height: 100%;width: 100%;" @scrolltolower="reachBottom">
						<view class="order" v-for="(res, index) in orderList[0]" :key="res.id">
							<view class="item" v-for="(item, index) in res.goodsList" :key="index">
								<view class="left"><u-avatar :src="item.goodsUrl"  mode="square" size="80"></u-avatar></image></view>
								<view class="content">
									<view class="title u-line-2">{{ item.title }}</view>
									<view class="type">{{ item.type }}</view>
								</view>
							</view>
						</view>
						<u-loadmore :status="loadStatus[0]" bgColor="#f2f2f2"></u-loadmore>
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</view>
</template> -->

<!-- <script>
	export default {
		data() {
			return {
				orderList: [[], [], [], []],
				dataList: [
					{
						id: 1,
						goodsList: [
							{
								goodsUrl: 'https://uviewui.com/common/logo.png',
								title: '马云',
								type: '标签：钱不是问题',
							
							}
							
						]
					},
						{
							id: 2,
							goodsList: [
								{
									goodsUrl: 'https://uviewui.com/common/logo.png',
									title: '马化腾',
									type: '标签：不充值怎么玩游戏',
								
								}
								
							]
						}
				],	
				current: 0,
				swiperCurrent: 0,
				dx: 0,
				loadStatus: ['loadmore','loadmore','loadmore','loadmore'],
			};
		},
		onLoad() {
			this.getOrderList(0);
			this.getOrderList(1);
			this.getOrderList(3);
		},
		methods: {
			reachBottom() {
				// 此tab为空数据
				if(this.current != 2) {
					this.loadStatus.splice(this.current,1,"loading")
					setTimeout(() => {
						this.getOrderList(this.current);
					}, 1200);
				}
			},
			// 页面数据
			getOrderList(idx) {
				for(let i = 0; i < 5; i++) {
					let index = this.$u.random(0, this.dataList.length-1);
					let data = JSON.parse(JSON.stringify(this.dataList[index]));
					data.id = this.$u.guid();
					this.orderList[idx].push(data);
				}
				this.loadStatus.splice(this.current,1,"loadmore")
			},
			transition({ detail: { dx } }) {
				this.$refs.tabs.setDx(dx);
			},
			animationfinish({ detail: { current } }) {
				this.$refs.tabs.setFinishCurrent(current);
				this.swiperCurrent = current;
				this.current = current;
			}
		}
	};
</script> -->
// <style>
// /* #ifndef H5 */
// page {
// 	height: 100%;
// 	background-color: #f2f2f2;
// }
// /* #endif */
// </style>
// <style lang="scss">
// 	.u-search-box {
// 		padding: 18rpx 30rpx;
// 	}
// 	.u-search-inner {
// 		background-color: rgb(234, 234, 234);
// 		border-radius: 100rpx;
// 		display: flex;
// 		align-items: center;
// 		padding: 10rpx 16rpx;
// 	}
	
// 	.u-search-text {
// 		font-size: 30rpx;
// 		color: $u-tips-color;
// 		margin-left: 10rpx;
// 	}
// 	.order {
// 		background-color: #ffffff;
// 		border-bottom: 10rpx solid #f0f0f0;
// 		box-sizing: border-box;
// 		padding: 5rpx;
// 		font-size: 28rpx;
// 		.item {
// 			display: flex;
// 			margin: 20rpx 0 0;
// 			.left {
// 				margin-right: 20rpx;
// 			}
// 			.content {
// 				.title {
// 					font-family: "microsoft yahei";
// 					font-size: 30rpx;
// 					font-weight:bolder;
// 					line-height: 50rpx;
// 				}
// 				.type {
// 					margin: 10rpx 0;
// 					font-size: 24rpx;
// 					color: $u-tips-color;
// 				}
// 			}
// 		}
// 	}
	
// 	.wrap {
// 		display: flex;
// 		flex-direction: column;
// 		height: calc(100vh - var(--window-top));
// 		width: 100%;
// 	}
// 	.swiper-box {
// 		flex: 1;
// 	}
// 	.swiper-item {
// 		height: 100%;
// 	}

</style>
