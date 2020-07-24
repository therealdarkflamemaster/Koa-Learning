const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();

let home = new Router();
home
.get('/shengxiang', async(ctx)=>{
    ctx.body = 'Home belongs to Shengxiang';
})
.get('/todo', async(ctx)=>{
    ctx.body = 'Home belongs to Todo';
})

let page = new Router();
page
.get('/shengxiang', async(ctx)=>{
    ctx.body = 'Page belongs to Shengxiang';
})
.get('/todo', async(ctx)=>{
    ctx.body = 'Page belongs to Todo';
})

let router = new Router(); // 父级路由
router.use('/page', page.routes(), page.allowedMethods());
router.use('/home', home.routes(), home.allowedMethods());

app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(3000,()=>{
    console.log("[demo08] starting at port 3000 ...")
})