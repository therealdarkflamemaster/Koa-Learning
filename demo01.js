function getSomething(){
    return "Something"
}

async function testAsync(){
    return "Hello async"
}

async function test(){
    // async 可以接受 普通的返回值， 也可以 Promise 对象
    // await 必须在 async方法 里面
    const v1 = await getSomething();
    const v2 = await testAsync();

    console.log(v1);
    console.log(v2);
}

test();