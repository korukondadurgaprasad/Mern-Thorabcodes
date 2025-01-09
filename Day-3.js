// function doSomething(name)
// {
//     console.log("Iam Working " +name)
// }
// doSomething("prasad")

// function doSomething(name)
// {
//     console.log("Iam Working " )
//     name()
// }

// doSomething(function(){
//     console.log("Iam Second Function")
// })





function doSomething(name)
{
    console.log("Iam Working " )
    name(23)
}

doSomething(function(a){
    console.log("Iam Second Function",a)
})









doSomething=(name)=>{
    console.log("Iam Working ")
}
doSomething((a)=>{

    console.log("Iam Second Function",a)
})








                               // Arrow functions

// function add(){
//     console.log(2+3);
// }



add=()=>{
    console.log(2+3);
}
add()


// add=(a,b)=>{
//     console.log(a+b);
// }
// add(a,b)

// add=(a,b)=>console.log(a+b)
// add(20,30)



add=(a,b)=>{
    return a+b
}
console.log(add(900,30))



                     //foreach -- used to loop though the array

                let nums=[45,67,89,90]
                nums.forEach((element,index,arr)=>{
                    console.log(element,index,arr)
                })

                nums.forEach((e)=>{
                    console.log(e)
                })





                // let avengers=[
                //     {id:1,name:"thor",age:1500}
                //     ,
                //     {id:2,name:"captain",age:1000}
                //     ,
                //     {id:3,name:"ironman",age:500}
                //     ]
                // avengers.forEach((av,id,arr)=>{
                //     console.log(av)
                // })
                // avengers.forEach((av,id,arr)=>{
                //     console.log(av.name)
                // })




                           //map--- always return something in an array 

                let num=[45,67,89,90]
                let r=num.map((e,i,a)=>{
                    console.log(e,i,a)
                    return e+90
                })
                console.log(r)



                let avengers=[
                    {id:1,name:"thor",age:1500},
                    {id:2,name:"captain",age:1000},
                    {id:3,name:"ironman",age:500}
                    ]
               let names = avengers.map((av,id,arr)=>{
                    console.log(av.name)
                    return av.name
                })
                console.log(names)

                // names.forEach((n)=>{
                //     console.log(n)
                // })






                            //filter--- always return something in an array (print according to the condition)
                  let nu=[45,23,45,65,7789,9865] 
                  let u=nu.filter((n,i,a)=>{
                    return n===45
                  })
                  console.log(u)




                  let avenger=[
                    {id:1,name:"thor",age:1500},
                    {id:2,name:"captain",age:1000},
                    {id:3,name:"ironman",age:500}
                    ]
                    let av=avenger.filter((av,i,a)=>{
                        return av.age>1000 && av.id%2==0
                        })
                        console.log(av)






                        //find --
                        //find always return one value
                        let avenge=[
                            {id:1,name:"thor",age:1500},
                            {id:2,name:"captain",age:1000},
                            {id:3,name:"ironman",age:500}
                            ]
                            let avu=avenge.find((av,i,a)=>{
                                return av.id==2
                                })
                            console.log(avu)

                            let nnu=[45,23,45,65,7789,9865] 
                            let o=nu.find((n,i,a)=>{
                              return n===45
                            })
                            console.log(o)




// detructuring ---- copy

let obj={name:"prasad",age:27}
console.log(obj.name)

// let name =obj.name
// let age=obj.age

let {name,age}=obj
console.log(name)


//spread operator

let n=[45,67,89,23,34]; // make the value open remove the container
console.log(n)
console.log(...n)


let a=[...n];
console.log(a)

let m=[...n,100,200,300] // make the value open and add the
console.log(m)




let x=[1,2,2,4,5,6]
let s=x

x[1]=97
console.log(x,s)


//deep copy
let b=[...x]
x[1]=67
console.log(x,b)




function Something(b,...a){
    console.log(b,a)
}
Something(1,2,3,4,5,6,7,8,9)
