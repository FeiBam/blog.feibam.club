

const Host = process.env.NODE_ENV !== 'development' ? `https://127.0.0.1:8000/api` : 'https://feibam.club/api';


const AdminApi = {
    Login:{
        Method:'POST',
        PATH:'/admin/login'
    },   //Method:POST
    TokenTest:{
        Method: 'GET',
        PATH:'/admin/test'
    },
    createArticle:{
        Method:'POST',
        PATH:'/admin/createArticle'
    },
    getAllTag:{
        Method:'GET',
        PATH:'/admin/getAllTags'
    },
    addTag:{
        Method:'POST',
        PATH:'/admin/createTag'
    },
    deleteTag:{
        Method:'POST',
        PATH:'/admin/deleteTag'
    },
    restoreTag:{
        Method:'POST',
        PATH:'/admin/restoreTag'
    },
}


const BlogApi  = {
    GetPageInfo:{
        Method:'POST',
        PATH:'/page/getPageInfo'
    },
    getArticleById:{
        Method:'POST',
        PATH:'/Article/'
    },
    getArticleTags:{
        Method:'GET',
        PATH:'/page/ArticleTag'
    },
    GetPage:{
        Method:'POST',
        PATH:'/page'
    }
}


let METHOD = {
    POST:"POST",
    GET:"GET",
    PUT:"PUT",
    DELETE:"DELETE"
}
export {
    AdminApi,
    BlogApi,
    Host,
    METHOD
}