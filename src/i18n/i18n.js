import CookiesHelper from "../utils/Cookies";
import VueI18n from "vue-i18n";
import Vue from "vue";


Vue.use(VueI18n)
const messages = {
    zh:{
        friendLink:"友链",
        friend:'朋友们',
        about:'关于',
        article:'文章',
        previouspage:"上一页",
        nextpage:"下一页"
    },
    en:{
        friendLink:'FriendLinks',
        friend:'The friend',
        about:'about',
        article:'article',
        previouspage:"Previous",
        nextpage:"Next"
    },
    jp:{
        friendLink:'フレンズ',
        friend:'フレンズ',
        about:'私について',
        article:'文章',
        previouspage:"前のページ",
        nextpage:"次のページ"
    }
}

const i18n = new VueI18n({
    locale: 'zh', // set locale
    messages, // set locale messages
  })

export default i18n