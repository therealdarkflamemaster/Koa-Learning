const Koa = require('koa');
const app = new Koa();
app.use(async(ctx)=>{
    if(ctx.url === '/index'){
        ctx.cookies.set(
            'MyName', 'Shengxiang', {
                domain:'127.0.0.1',
                path:'/index',
                maxAge: 1000*60*60,
                expires: new Data('2020-7-25'),
                httpOnly: false,
                overwrite: false
            }
        );
        ctx.body = "Cookies are ready."
    }else {
        if(ctx.cookies.get('MyName')){
            ctx.body = ctx.cookies.get('MyName');
        }else {
            ctx.body = "No Cookie"
        }
        
    }
});


app.listen(3000, ()=>{
    console.log('[demo10] serveur is starting ... at port 3000');
})
