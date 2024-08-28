let myPromise = new Promise(function (resolve,reject) {
    try {
        var a=3;
        var b=5;
        if(a+b==10) {
            console.log("wrong");
            resolve("correct value");
        }
        else {
            reject("wrong value");
            throw ("sum is 8");
        }
    }
    catch(err){
        console.log(err+" check1");
    }
});


myPromise.then(result => console.log(result +"pro")).catch(err => console.log(err + "check 2"));