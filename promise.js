var myPromise = new Promise((acc,rej)=>{
    let watch_time = 1
    if(watch_time<2){
        rej("session was too bad")
    }
})

myPromise.then(msg=>console.log("eligible for angular")).catch(err=>console.log("please try js"))