<template>
	<view class="all">
		<!--状态栏-->
		<!--顶部模块-->
		<view class="title">
			<view class="titleblank1"></view>
			<view class="bgimg">
				<!--属性-->
				<button></button>
			</view>
			<view class="titleblank2"></view>
			<!--布局空格-->
			<view class="u-demo-area">
				<u-toast ref="uToast"></u-toast>
				<u-tabs v-if="control" bg-color="#fafafa" :bold="bold" :active-color="activeColor" :list="list" ></u-tabs>
			</view>
			<view class="titleblank2"></view>
			<!--布局空格-->
			<view class="serach"  @click="goSearch()">
				<!--跳转至搜索界面-->
				<button></button>
			</view>
			<view class="titleblank1"></view>
			<!--选中线-->
			<view class="chosenline"></view>
		</view>
		<!--主题页面-->
		<view class="total">
			<view class="picture-title">
			<view class="u-demo-area">
				<u-toast ref="uToast"></u-toast>
				<u-swiper @change="change" :height="250" :list="list" :title="title" :effect3d="effect3d" 
				:indicator-pos="indicatorPos" :mode="mode" :interval="3000" @click="click"></u-swiper>
			</view>
			</view>
			<view class="articles">
				<view @click="goArticle()">
					<button>
						<view class="article">
							<!--文章导航-->
							<view class="article-picture">
								<!--发布时间-->
								<text>{{timing1}}</text>

							</view>

							<view class="information">
								<view class="article-title">
									<!--标题-->
									<text>{{title1}}</text>
								</view>
								<view class="blank1"></view>
								<view class="article-information">
									<view class="article-author">
										<!--作者-->
										<text>{{author1}}</text>
									</view>
									<view class="blank2"></view>
									<view class="article-reader">
										<!--阅读数-->
										<text>{{readers1}}</text>
									</view>
								</view>
							</view>

						</view>
					</button>
				</view>

				<view class="articles">
					<view @click="goArticle()">
						<button>
							<view class="article">
								<!--文章导航-->
								<view class="article-picture">
									<!--发布时间-->
									<text>{{timing2}}</text>

								</view>

								<view class="information">
									<view class="article-title">
										<!--标题-->
										<text>{{title2}}</text>
									</view>
									<view class="blank1"></view>
									<view class="article-information">
										<view class="article-author">
											<!--作者-->
											<text>{{author2}}</text>
										</view>
										<view class="blank2"></view>
										<view class="article-reader">
											<!--阅读数-->
											<text>{{readers2}}</text>
										</view>
									</view>
								</view>

							</view>
						</button>
					</view>

					<view class="articles">
						<view @click="goArticle()">
							<button>
								<view class="article">
									<!--文章导航-->
									<view class="article-picture">
										<!--发布时间-->
										<text>{{timing3}}</text>

									</view>

									<view class="information">
										<view class="article-title">
											<!--标题-->
											<text>{{title3}}</text>
										</view>
										<view class="blank1"></view>
										<view class="article-information">
											<view class="article-author">
												<!--作者-->
												<text>{{author3}}</text>
											</view>
											<view class="blank2"></view>
											<view class="article-reader">
												<!--阅读数-->
												<text>{{readers3}}</text>
											</view>
										</view>
									</view>

								</view>
							</button>
						</view>
					</view>
				</view>
			</view>
			<!--底部模块-->
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				/*顶部TAB*/

				list: [],
				data: [{
						name: '活动',
						count: 100
					},
					{
						name: '文章',
						count: 7
					},
					{
						name: '订阅'
					}],
					current: 0,
					sectionCurrent: 0,
					isScroll: true,
					tabCountIndex: 0,
					activeColor: this.$u.color['primary'],
					bold: true,
					control: true,
					offset: [5, -5],
					/*活动图片索引*/
				list: [{
						image: 'https://cdn.uviewui.com/uview/swiper/1.jpg',
						title: '昨夜星辰昨夜风，画楼西畔桂堂东'
					},
					{
						image: 'https://cdn.uviewui.com/uview/swiper/2.jpg',
						title: '身无彩凤双飞翼，心有灵犀一点通'
					},
					{
						image: 'https://cdn.uviewui.com/uview/swiper/3.jpg',
						title: '谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳'
					}
				],
				title: false,
				mode: 'round',
				indicatorPos: 'bottomCenter',
				effect3d: false,
					/*文章索引*/
					timing1: "33分钟前",
					title1: "互联网时代：灵魂的归属与栖息之地在何处",
					author1: "吴怼怼",
					readers1: "12k",
					timing2: "33分钟前",
					title2: "互联网时代：灵魂的归属与栖息之地在何处",
					author2: "吴怼怼",
					readers2: "12k",
					timing3: "33分钟前",
					title3: "互联网时代：灵魂的归属与栖息之地在何处",
					author3: "吴怼怼",
					readers3: "12k",
				}
			},

			onShow() {

				},
				methods: {
					click(index) {
						this.$refs.uToast.show({
							title: `点击了第${index + 1}张图片`,
							type: 'success'
						})
					},
					goSearch: function() {
						uni.reLaunch({
							url: '/pages/home/search'
						});
					},
					goArticle: function() {
						uni.reLaunch({
							url: '/pages/home/article'
						});
					},
					goActivity1: function() {
						uni.reLaunch({
							url: '/pages/home/activity'
						});
					},
					goActivity2: function() {
						uni.reLaunch({
							url: '/pages/home/activity'
						});
					},
					goActivity3: function() {
						uni.reLaunch({
							url: '/pages/home/activity'
						});
					},
				},
		}
</script>

<style lang="scss" scoped>
	@import "@/SCSS/global.scss";

	/*顶部选中线*/
	.chosenline {}

	.home {
		display: flex;
		flex-flow: column nowrap;
		justify-content: space-between;
		height: 8vh;
	}

	.homebutton {
		background-color: rgba(206, 255, 206, 1);
		width: 3vh;
		height: 3vh;
		align-self: center;
	}

	.hometext {
		width: 3vh;
		height: 2vh;
		line-height: 2vh;
		color: rgba(206, 255, 206, 1);
		font-size: 1vh;
		text-align: center;
		font-family: PingFangSC-regular;
	}

	.total {
		display: inline-flex;
		flex-flow: column nowrap;
	}

	.picture-title {
		flex: 3;
		display: inline-flex;
		justify-content: center;
		align-items: center;
	}


	.picture {
		width: 40vh;
		height: 20vh;
	}

	.articles {
		overflow-y: scroll;
		flex: 4;
		display: inline-flex;
		flex-direction: column;
	}

	.article {
		width: 100%;
		border: 1vh solid rgba(255, 255, 255, 1);
		display: inline-flex;
		flex-direction: row nowrap;
		align-self: flex-start;
	}



	.information {
		flex: 10;
		display: inline-flex;
		background-color: darkgreen;
		flex-flow: column nowrap;
		align-self: flex-start;
		height: 15vh;
	}

	.article-picture {
		background-image: url(./u=2792432903,20076664&fm=26&gp=0.jpg);
		background-size: cover;
		flex: 7;
		height: 15vh;
		display: inline-flex;
		justify-content: flex-start;
		align-items: flex-end;
		color: rgba(255, 255, 255, 1);
		text-align: left;
		font-family: PingFangSC-regular;
		font-size: 1vh;
	}


	.article-title {
		color: rgba(16, 16, 16, 1);
		text-align: left;
		font-family: PingFangSC-regular;
		font-size: 2vh;
		flex: 1;
	}

	.blank1 {
		flex: 1;
	}

	.article-information {
		display: inline-flex;
		flex-flow: row nowrap;
		justify-content: space-around;
	}

	.article-author {
		color: rgba(190, 190, 190, 1);
		text-align: left;
		font-family: PingFangSC-regular;
		font-size: 1vh;
		flex: 3;
	}

	.blank2 {
		flex: 10;
	}

	.article-reader {
		color: rgba(190, 190, 190, 1);
		text-align: right;
		font-family: SFUIText-regular;
		font-size: 1vh;
		flex: 1;
	}
</style>
