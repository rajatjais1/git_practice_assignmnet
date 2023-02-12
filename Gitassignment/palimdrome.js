let str="hello"

let bag =""
for(let i=str.length-1;i>=0;i--){
  bag+=str[i]
}
if(str==bag){
  console.log("It is Palimdrome")
}
else{
  console.log("It is Not Palimdrome")
}
