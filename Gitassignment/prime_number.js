function prime(no){
  let count =0
  for(let i=0;i<=no;i++){
    if(no%i==0){
      count++}
  }
  if(count==2){
    console.log("Prime no")
  }
  else{
    console.log("Not Prime Number")
  }

}
prime(6)
