const Koa = require('koa');
const app = new Koa();
const Router = require('koa-router');
const router = new Router();


router
    .get('/',(ctx, next)=>{
        ctx.body="hello,world";
    })
    .get('/todo',(ctx, next)=>{
        ctx.body = "Todo page";
    })

app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(3000,()=>{
    console.log("[demo06] starting at port 3000 ...")
})