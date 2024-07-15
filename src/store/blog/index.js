import { MutationsMixin,ActionsMixin } from './Mixin'
import { AsyncErrCatch } from '../../utils/AsyncErrCatch'

import request from '../../api/index'
import markdown from 'markdown-it'
const Md = new markdown()
const BlogModel = {
    namespaced: true,
    state:() =>({
        ViewArticleData:null,
        ViewPage:{},
        ViewTag:'',
        Articles:[],
        Tags:[],
        ArticleLimit:0,
        AllPage:0,
        NowPage:0,
        ArticleNum:0,
        isLoad:true,
        Lang:''
    }),
    getters:{
    },
    mutations:{
        [MutationsMixin.addArticle]( state , ArticleObject ){
            ArticleObject.SubjectHtml =  Md.render(ArticleObject.Subject)
            state.Articles.push(ArticleObject)
        },
        [MutationsMixin.setTags]( state , Tags){
            state.Tags = Tags
        },
        [MutationsMixin.setPageInfo](state , infoData){
            if(infoData.ArticleNumofLang < infoData.PageArticleLimit) state.AllPage = 1
            if((infoData.ArticleNumofLang % infoData.PageArticleLimit) !== 0) state.AllPage = Number((infoData.ArticleNumofLang / infoData.PageArticleLimit).toFixed()) + 1
            if((infoData.ArticleNumofLang % infoData.PageArticleLimit) === 0) state.AllPage = infoData.ArticleNumofLang / infoData.PageArticleLimit
            state.ArticleLimit = infoData.PageArticleLimit
            state.ArticleNum = infoData.ArticleNumofLang
        },
        [MutationsMixin.ViewArticle](state , ArticleId){
            state.ViewArticleData = state.Articles[ArticleId]
            for(let Article of state.Articles){
                if (ArticleId === Article.id) {
                    state.ViewArticleData = Article
                    break
                }
            }
        },
        [MutationsMixin.clearPage](state){
            state.Articles = []
        }
    },
    actions:{
        [ActionsMixin.ViewArticle]({ commit  }, ArticleId){
            commit(MutationsMixin.ViewArticle,(Number(ArticleId)))
            return true
        },
        async [ActionsMixin.GetPage]( { state , commit } , PageNum) {
            state.isLoad = true
            await commit(MutationsMixin.clearPage)
            if (PageNum > state.AllPage) throw new Error('PageNumErr')
            const [err, res] = await AsyncErrCatch(request.GetPage(PageNum, state.Lang))
            if (err) {
                throw err
            }
            state.isLoad = false
            Object.entries(res.data.data).slice(0,res.data.data.index).forEach(([key,item])=>{
                item = {
                    ...item,
                    Creator:{
                        Name:"FeiBam",
                        Date:item.createDate
                    }
                }
                item = {...item,...item.Article}
                item.id = Number(item.id)
                item.id += 1
                commit(MutationsMixin.addArticle,item)
            })
            return true
        },
        async [ActionsMixin.GetPageInfo]( { state, commit} ){
            const [err,PageInfo] = await AsyncErrCatch(request.getPageInfo())
            if(err) throw err
            if(PageInfo.data.ArticleNum === 0){
                state.isLoad = false
                return false
            }
            commit(MutationsMixin.setPageInfo,PageInfo.data)
            return true
        },
        async [ActionsMixin.GetArticle] ( { commit }, id){
            const [err,res] = await AsyncErrCatch(request.getArticleById(id))
            if(err) throw err
            if(res.data.code !== 1) throw Error('Not Found')
            let ArticleData = res.data.data
            let ArticleObject = {
                Creator:{
                    Name:ArticleData.Account.Name,
                    Date:ArticleData.Article.createDate
                },
                ...ArticleData.Article,
                id:Number(ArticleData.id) + 1
            }
            commit(MutationsMixin.addArticle,ArticleObject)
            return true
        }
    }
}


export default BlogModel