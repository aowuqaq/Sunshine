<template>
</template>

<script>
</script>

<style>
</style>

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
			<view class="letter" @click="goLetter()">
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