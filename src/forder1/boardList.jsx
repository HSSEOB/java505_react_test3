import React from "react";
import BoardItem from "./BoardItem";

const boardItemList = [
  {boardIdx: 100, boardTitle:"게시판 글 제목 100번",baordUserId:"test1",  boardCreateDate: "2023-01-03 12:40"},
  {boardIdx: 101, boardTitle:"게시판 글 제목 101번",baordUserId:"test2",  boardCreateDate: "2023-01-03 12:41"},
  {boardIdx: 102, boardTitle:"게시판 글 제목 102번",baordUserId:"test3",  boardCreateDate: "2023-01-03 12:42"}
]

function BoardList(){
  boardItemList.map((item)=>{
    return <BoardItem idx={item.boardIdx} title={item.boardTitle} userId={item.baordUserId} createDt={item.boardCreateDate}/>
  });
  return(
    <div className={"container mx-auto"}>
      <table className={"table table-hover table-striped"}>
        <thead>
          <th>글번호</th>
          <th>글제목</th>
          <th>글쓴이</th>
          <th>등록시간</th>
        </thead>
        <tbody>

          {/*<BoardItem idx={"100"} title={"게시판 글 제목 100번"} userId={"test1"} createDt={"2023-01-03 12:40"}/>*/}
          {/*<BoardItem idx={"101"} title={"게시판 글 제목 101번"} userId={"test2"} createDt={"2023-01-03 12:41"}/>*/}
          {/*<BoardItem idx={"102"} title={"게시판 글 제목 102번"} userId={"test3"} createDt={"2023-01-03 12:42"}/>*/}
        </tbody>
      </table>
    </div>
  );
}

export default BoardList;