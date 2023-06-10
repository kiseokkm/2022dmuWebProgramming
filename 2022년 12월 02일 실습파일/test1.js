//아래의 배열객체를 가지고 sort를 하여  출력 형태와 같이 나오도록  js를 작성하시오
var student =['재석','광희','형돈','명수'];
var student1 = [
    { name : "재석", age : 21},
    { name : "광희", age : 25},
    { name : "형돈", age : 13},
    { name : "명수", age : 44}
]

//==== 출 력 =======

/* 이름순으로 정렬 */

    // 광희, 명수, 재석, 형돈
    // 형돈, 재석, 명수, 광희

/* 나이순으로 정렬 */
    // 13, 21, 25, 44
    // 44, 25, 21, 13
student.sort();
console.log('-문자열로 정렬');
console.log(student.sort());
console.log('-문자열로정렬(역순)');
console.log(student.reverse());
console.log();

student1.sort((itemA,itemB)=>{
    return itemA.age - itemB.age; //오름차순
});
console.log('-객체 내부의 숫자로 정렬(오름차순)')
console.log(student1);

student1.sort((itemA,itemB) =>{
    return itemB.age - itemA.age; //내림차순
});
console.log('-객체 내부의 숫자로 정렬(내름차순)')
console.log(student1)
console.log()

    