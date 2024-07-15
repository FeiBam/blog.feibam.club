<template>
    <BaseContent>
        <div class="Article-Main">
            <BaseHead :Title="$T('friendLink')" :creator="{Name:'FeiBam',Date:'2021-4-4'}">
            </BaseHead>
            <h3 style="color: #04bbf8;font-size: 21px;margin-top: 1.5em;margin-bottom: 1em"><i class="el-icon-link"></i>{{$T('friend')}}</h3>
            <div class="LinkContainer">
                <template v-for="item of FriendLink">
                    <FriendLinkItem
                        :key="item.id"
                        :link="item.Link"
                        :friend-name="item.FriendName"
                        :friend-img="item.FriendImg"
                    ></FriendLinkItem>
                </template>
            </div>
        </div>
    </BaseContent>
</template>

<script>
import BaseContent from "../Pubilc/components/BaseContent";
import BaseHead from "../Pubilc/components/ArticleHead/components/BaseHead";
import FriendLinkItem from './components/FriendLinkItem'
export default {
    name: "index",
    components:{
        BaseContent,
        BaseHead,
        FriendLinkItem
    },
    data(){
        return{
            FriendLink: [
                {
                    id:0,
                    Link:'https://blw.moe/',
                    FriendImg:'https://blw.moe/juan_head55.png',
                    FriendName:'派兹'
                },
                {
                    id:1,
                    Link:'https://n0099.net/',
                    FriendImg:'https://secure.gravatar.com/avatar/dd653350e3f7684319d676f14438d3f2?s=44&d=mm&r=g',
                    FriendName:'N0099'
                },
                {
                    id:2,
                    Link:'https://buyi.dev/',
                    FriendImg:'https://avatars.githubusercontent.com/u/26303007?v=4',
                    FriendName:'陈布衣'
                },
                {
                    id:3,
                    Link:"https://controlnet.space/",
                    FriendImg:'https://avatars.githubusercontent.com/u/12800094?v=4',
                    FriendName:"ControlNet"
                },
                {
                    id:4,
                    Link:"https://blog.nest.moe/",
                    FriendImg:"https://blog.nest.moe/images/user_avatar.png",
                    FriendName:"快到ni里来"
                },
                {
                    id:5,
                    Link:"https://luanxu-dev.github.io/",
                    FriendImg:"https://avatars.githubusercontent.com/u/13693243?v=4",
                    FriendName:"乱乱乱序"
                },
                {
                    id:6,
                    Link:"https://ixz.im/",
                    FriendImg:"https://avatars.githubusercontent.com/u/5248842?v=4",
                    FriendName:"Juict"
                },
                {
                    id:7,
                    Link:"https://agen233.top/",
                    FriendImg:"https://bu.dusays.com/2024/06/12/6669abc539646.jpg",
                    FriendName:"利欧大人"
                }

            ]
        }
    }
}
</script>
