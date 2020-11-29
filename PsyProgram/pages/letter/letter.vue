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
				<view>
					<view>
						<!--写信-->
					</view>
					<view>
						<!--预约-->
					</view>
				</view>
			</view>
			<!--岛屿来信-->
			<view class="islandletter">

				<view>

				</view>
				<view>
					<!--岛屿来信功能-->
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
		background-color: #C0C0C0;
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
