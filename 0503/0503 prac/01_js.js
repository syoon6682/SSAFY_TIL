axios

.get('https://jsonplaceholder.typicode.com/users')
.then((res) => {
  return res.data
}) // 다음 then 인자는 현재 then의 return 값, 즉, 직전 성공값을 인자로 받음
.then((rlt) => {
  console.log(rlt)
}) // then chaining을 할때는 상단이 return을 해야하며 then method는 항상 promise 객체를 return

.catch((err) => {
  console.log(err)
})

// 하단 함수는 catch와 동일! (이렇게 해석하니까 catch의 작동 방식을 알거 같음)
// .then(undefined (err) =>{
//   console.log(err)
// })
