let pro = Promise.reject(20);
const double = (x)=> x*2;
pro.then(double,err=> Promise.reject(4))
   // .catch(err=>(console.log('Err ',err),10))
    .then(x=> x+1, x=> x + 5)
    .then(console.log);

    let pro1 = Promise.resolve(20);
    const double1 = (x)=> x*2;
    pro1.then(double1,err=> Promise.reject(4))
       // .catch(err=>(console.log('Err ',err),10))
        .then(x=> x+1, x=> x + 5)
        .then(console.log);