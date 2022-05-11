const member = {
  name:'syoon',
  age:'24',
  sId: 2015012497,
}

// 생성자 함수
// 1. 생성자 함수는 함수의 이름을 반드시 대문자로 시작해야함
//2. 생성자 함수를 사용할 때는 앞에 new라는 키워드를 사용함
function Member(name, age, sId){
  this.name = name
  this.age=age
  this.sId=sId
}