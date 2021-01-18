<template>
	<view class="all">
		<!--功能界面-->
		<view class="back">
			<view class="backhome"><text>返回</text></view>
			<view class="backmine"><text>功能</text></view>
		</view>
		<!--文章头部-->
		<view class="title">
			<!--文章标题-->
			<view class="article-title">
				<text>少人有走的路</text>
			</view>
			<!--文章作者介绍-->
			<view class="author">
				<view class="photo">
				<!--作者头像-->
				</view>
				<view class="name">
				<!--作者名称-->
				<text>心理咨询师</text>
				</view>
				<view class="time">
				<!--文章发布时间-->
				<text>xxxx.xx.xx</text>
				</view>
			</view>
			<view>
				<!--文章主旨概括-->
				<text>############</text>
			</view>
		</view>
		<!--文章主体-->
		<view class="body">
			<view class="article-picture">
			<!--文章插图-->
			</view>
			<view class="passage">
			<!--全文-->
			</view>
		</view>
		<!--文章页尾-->
		<view class="foot">
			<view>
				<!--版权说明-->
			</view>
			<view>
				<!--图片来源说明-->
			</view>
			<view>
				<!--关注作者-->
				<view>
					<!--作者头像-->
				</view>
				<view>
					<!--作者说明-->
					<view>
						<!--作者名称-->
					</view>
					<view>
						<!--作者签名-->
					</view>
				</view>
				<view>
					<!--订阅按钮-->
					<view>
						<!--加号按钮-->
					</view>
					<view>
						<!--订阅-->
					</view>
				</view>
			</view>
		</view>
		<!--评论显示-->
		<view class="comment">
			<view><!--评论插图--></view>
			<view><!--评论标题--></view>
			<!--评论详情-->
			<view>
				<!--单条评论-->
				<view>
					<!--第一行-->
					<view>
						<view><!--评论用户头像--></view>
						<view><!--评论用户名称--></view>
						<view><!--回复按钮--></view>
					</view>
					<!--第二行-->
					<view><!--回复详情--></view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
</script>

<style>
	.all{
		display: flex;
		flex-flow: column nowrap;
	}
	.back{
		display: inline-flex;
		flex-flow: row nowrap;
		align-content: space-around;
	}
	.backhome{
		text-align: start;
	}
	.backmine{
		text-align: end;
	}
	.title{
		display: inline-flex;
		flex-flow: column nowrap;
	}
	.article-title{
		text-align: start;
	}
	.author{
		display: inline-flex;
		flex-flow: row nowrap;
		align-content: space-around;
	}
	.photo{
		background-image: ;
	}
	.name{
		background-color: #007AFF;
	}
	.time{
		background-color: grey;
	}
</style>
