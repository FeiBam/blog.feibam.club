<template>
    <div class="Article-Tag">
        <template v-for="item in Tags">
            <a v-bind:key="item.id" ><font-awesome-icon icon="fas fa-tag fa-fw"></font-awesome-icon>{{item}}</a>
        </template>
    </div>
</template>

<script>
    export default {
        name: "ArticleTags",
        props:{
            Tags:{
                type:Array,
                default:() => ([{id:0,name:'没有标签！'}])
            }
        }
    }
</script>
