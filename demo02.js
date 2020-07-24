const Koa = require('koa');
const app = new Koa();
app.use(async(ctx)=>{
    let url = ctx.url; // ctx.url 是 请求地址

    // 从request 中接受get请求
    let request = ctx.request;
    let req_query = request.query;
    let req_querystring = request.querystring;

    // 从上下文ctx中直接获取get请求

    let ctx_query = ctx.query;
    let ctx_querystring =  ctx.querystring;

    ctx.body = {
        url,
        req_query,
        req_querystring,
        ctx_query,
        ctx_querystring
    }
});


app.listen(3000, ()=>{
    console.log('[demo02] serveur is starting ... at port 3000');
})

// http://127.0.0.1:3000/?user=lisx&age=18
// {"url":"/?user=lisx&age=18","req_query":{"user":"lisx","age":"18"},"req_querystring":"user=lisx&age=18"}