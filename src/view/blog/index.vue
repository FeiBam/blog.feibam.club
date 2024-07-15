<template>
    <div>
        <BlogLayout>
            <template v-slot:header>
                <Header></Header>
            </template>
            <template v-slot:Content>
                <Main style="max-width: 80vw;margin: auto"></Main>
            </template>
            <template v-slot:Icons>
                <Icons></Icons>
            </template>
        </BlogLayout>
    </div>
</template>

<script>
    import BlogLayout from "../../layout/BlogLayout";
    import Header from './Head/index'
    import Main from './Main/index'
    import Icons from './Icons/index'
    //import { mapActions } from 'vuex'
    export default {
        name: "index",
        components:{
            BlogLayout,
            'Header':Header,
            'Main':Main,
            'Icons':Icons
        },
    }
</script>

<style scoped>
</style>