const data=[{
    name:'혼자 공부하는 파이썬',
    price:18000,
    publisher:'한빛미디어'
},
{
    name:"html5 웹 프로그래밍 입문",
    price:26000,
    publisher:'한빛 아카데미'
}]

//자료를 json으로 변환
console.log(JSON.stringify(data))
console.log(JSON.stringify(data,null,2))
//json 문자열을 다시 js 객체로 변환
// console.log(JSON.parse(JSON))