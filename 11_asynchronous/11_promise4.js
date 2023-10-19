function getData()
{
    console.log('one');
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('three');
            resolve(40);
        },2000);
        
    });
}
function getDataTwo()
{
    console.log('two');
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('four');
            resolve(100);
        },3000);
       
    });
}
getData()
    .then(x=> x+1)
    .then(console.log);
console.log('Middle');
getDataTwo()
    .then(x=>x*3)
    .then(console.log)
console.log('End');

//41
//300