function takeLongTime(){
    return new Promise(resolve => {
        setTimeout(()=>resolve("long Time value"), 1000)
    });
}

async function test(){
    console.log("wait 1 seond ...")
    const v = await takeLongTime();
    console.log(v);
}



test();

