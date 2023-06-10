//map(), foreach(0 메소드를 사용하여 작성 하시오


let array1 = [1, 4,9, 16];

//1)   expected output: Array [2, 8, 18, 32]

//2)  expected output: "1"
 //   expected output: "4"
//    expected output: "9"
 //   expected output: "16"
 // map() 메소드
 console.log('--- map() 메소드 ---');
 let outputA = array1.map((item, index) => {
     // 배열의 모든 요소를 제곱해서 새로운 배열을 만듭니다.
     return item * 2;
 });
 console.log(outputA);
 console.log(`expected output:Array[${outputA}]`);

 // forEach() 메소드
console.log('--- forEach() 메소드 ---');
array1.forEach((item, index) => {
    console.log(`expected output:"${item}"`);
});