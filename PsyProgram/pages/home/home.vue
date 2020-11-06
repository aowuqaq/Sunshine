<template>
	<view class="all">
		<!--状态栏-->
		<!--顶部模块-->
		<view class="title">
			<view class="titleblank1"></view>
			<view class="bgimg" @click="goBack()">
				<!--属性-->
				<button></button>
			</view>
			<view class="titleblank2"></view>
			<!--布局空格-->
			<view class="in">
				<!--跳转至活动页面-->
				<button></button>
				<text>活动</text>
			</view>
			<view class="titleblank1"></view>
			<!--布局空格-->
			<view class="passage">
				<!--文章页面亦是首页-->
				<button></button>
				<text>文章</text>
			</view>
			<view class="titleblank1"></view>
			<!--布局空格-->
			<view class="subscribe">
				<!--跳转至订阅界面-->
				<button></button>
				<text>订阅</text>
			</view>
			<view class="titleblank2"></view>
			<!--布局空格-->
			<view class="serach">
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
				<view class="picture">
					<!--活动图片滚动-->
					<view>
						<!--活动图片1-->
						<!--之后会引向新界面-->
						<button></button>
					</view>
					<view>
						<!--活动图片2-->
						<!--之后会引向新界面-->
						<button></button>
					</view>
					<view>
						<!--活动图片3-->
						<!--之后会引向新界面-->
						<button></button>
					</view>
				</view>
			</view>
			<view class="articles">
				<view class="article">
					<!--文章导航1-->
					<view class="article-picture">
						<!--配图1-->
						<image></image>
					</view>
					<view class="article-time">
						<!--发布时间1-->
						<text></text>
					</view>
					<view class="article-title">
						<!--标题1-->
						<text></text>
					</view>
					<view class="article-author">
						<!--作者1-->
						<text></text>
					</view>
					<view class="article-reader">
						<!--阅读数1-->
						<text></text>
					</view>
				</view>

				<view class="article">
					<!--文章导航2-->
					<view class="article-picture">
						<!--配图2-->
						<image></image>
					</view>
					<view class="article-time">
						<!--发布时间2-->
						<text></text>
					</view>
					<view class="article-title">
						<!--标题2-->
						<text></text>
					</view>
					<view class="article-author">
						<!--作者2-->
						<text></text>
					</view>
					<view class="article-reader">
						<!--阅读数2-->
						<text></text>
					</view>
				</view>

				<view class="article">
					<!--文章导航3-->
					<view class="article-picture">
						<!--配图3-->
						<image></image>
					</view>
					<view class="article-time">
						<!--发布时间3-->
						<text></text>
					</view>
					<view class="article-title">
						<!--标题3-->
						<text></text>
					</view>
					<view class="article-reader">
						<!--作者3-->
						<text></text>
					</view>
					<view class="article-reader">
						<!--阅读数3-->
						<text></text>
					</view>
				</view>
			</view>
		</view>
		<!--底部模块-->
		<view class="indo">
			<!--底部小视窗-->
			<!--首页界面-->
			<view class="home">
				<button>
					<view class="homebutton">
						<image></image>
					</view>
					<view class="hometext">
						<text>首页</text>

					</view>
				</button>
			</view>
			<!--跳转至树洞界面-->
			<view class="tree">
				<button>
					<view class="treebutton">
						<image></image>
					</view>
					<view class="treetext">

						<text>树洞</text>
					</view>
				</button>
			</view>
			<!--跳转至发布界面-->
			<view class="publish">
				<button>
					<view class="publishbutton">
						<image></image>
					</view>
					<view class="publishtext">

						<text>发布</text>
					</view>
				</button>
			</view>

			<!--跳转至书信界面-->
			<view class="letter">
				<button>
					<view class="letterbutton">
						<image></image>
					</view>
					<view class="lettertext">

						<text>书信</text>
					</view>
				</button>
			</view>

			<!--跳转至我的界面-->
			<view class="mine">
				<button>
					<view class="minebutton">
						<image></image>
					</view>
					<view class="minetext">

						<text>我的</text>
					</view>
				</button>
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
			goBack: function() {
				uni.reLaunch({
					url: '/pages/login/login'
				});
			}
		}
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
	}


	.picture {}

	.articles {
		overflow-y: scroll;
	}

	.article {
		text-align: center;
		border: 1rpx solid rgba(255, 255, 255, 1);
	}

	.article-picture {}

	.article-time {
		color: rgba(255, 255, 255, 1);
		text-align: left;
		font-family: PingFangSC-regular;
	}

	.article-title {
		color: rgba(16, 16, 16, 1);
		text-align: left;
		font-family: PingFangSC-regular;
	}

	.article-author {
		color: rgba(190, 190, 190, 1);
		text-align: left;
		font-family: PingFangSC-regular;
	}

	.article-reader {
		color: rgba(190, 190, 190, 1);
		text-align: right;
		font-family: SFUIText-regular;
	}
</style>
