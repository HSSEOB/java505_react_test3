import React from "react";

const students = [
  {id:1, name: "Inje"},
  {id:2, name: "Steve"},
  {id:3, name: "Jabs"},
  {id:4, name: "Bob"}
]


// 리스트 : 비슷한 데이터를 모아둔 것
// key : 리액트에서 각 객체나 아이템을 구분할 수 있는 고유값
// 리액트에서는 해당 리스트 사이에서 엘리먼트를 구분 할 수 있는 고유한 값이면 됨
// id를 사용, id라는 것 자체가 고유한 값이라는 의미이므로 key값으로 사용 할 수 있다.

function AttendanceBook(){
  return(
    <ul>
      {students.map((student)=>{
        return <li>{student.name}</li>;
          }
        )
      }
    </ul>
  );
}

export default AttendanceBook;