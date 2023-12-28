// 필요한 모듈 useState과 컴포먼트 한 button, user을 불러온다
import React, { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import User from "./components/User";

// App이라는 이름의 함수형 컴포넌트를 선언
const App = () => {
  // useState 훅을 사용하여 상태 변수를 초기화
  const [users, setUsers] = useState([
    {
      id: 1,
      title: "리액트 공부하기",
      body: "리액트 기초를 공부해봅시다.",
      isDone: false,
    },
    {
      id: 2,
      title: "리액트 공부",
      body: "리액트 기초를 공부해봅시다.",
      isDone: true,
    },
  ]);

  // title이라는 변수와 setTitle이라는 함수를 선언
  // useState("")는 React의 useState 훅을 사용하여 상태를 관리하겠다는 것을 의미
  const [title, setTitle] = useState("");
  // body라는 변수와 setBody라는 함수를 선언
  // useState("")를 사용하여 상태를 초기화하고, 여기서도 초기값으로 빈 문자열("")을 전달하여 body 상태 변수의 초기값이 빈 문자열이 되도록 함

  // 이렇게 선언된 상태 변수들은 컴포넌트가 렌더링될 때 초기값("")으로 설정되고 이후에는 각각의 set 함수를 사용하여 값을 업데이트할 수 있음
  // 이러한 상태 변수는 컴포넌트가 렌더링될 때부터 시작하여 사용자와의 상호작용하기 위함임.
  // 그래서 이러한 상태 변수를 사용하여 컴포넌트의 상태를 추적하고 관리할 수 있음.
  const [body, setBody] = useState("");

  // 이벤트 핸들러: 입력 필드의 값이 변경될 때마다 호출됨
  const bodyChangeHandler = (event) => {
    // 입력한 값이 event.target.value로 들어옴
    setBody(event.target.value);
  };

  // 이벤트 핸들러: 입력 필드의 값이 변경될 때마다 호출됨
  const titleChangeHandler = (event) => {
    // 입력한 값이 event.target.value로 들어옴
    setTitle(event.target.value);
  };

  // 버튼 클릭 이벤트 핸들러: 새로운 사용자를 추가
  const clickAddButtonHandler = () => {
    // 새로운 사용자 객체를 생성
    const newUser = {
      id: users.length + 1, // 현재 사용자 수에 1을 더한 값을 새로운 사용자의 ID로 설정
      title, // 입력된 제목을 새로운 사용자의 제목으로 설정
      body, // 입력된 내용을 새로운 사용자의 내용으로 설정
      isDone: false, // 새로운 사용자는 완료되지 않은 상태로 초기화.
    };

    // 기존 사용자 목록에 새로운 사용자를 추가한 새 배열을 생성하여 setUsers 함수를 통해 업데이트(불변성 유지)
    setUsers([...users, newUser]);

    // 입력 필드 초기화: setTitle과 setBody 함수를 사용하여 title과 body 상태를 빈 문자열로 초기화
    setTitle("");
    setBody("");
  };

  // 삭제버튼 이벤트
  const clickRemoveButtonHandler = (id) => {
    // filter 함수 사용해서 내가 선택한 id값 외에 것들만 배열로 생성
    const updatedUsers = users.filter((user) => user.id !== id);

    // setUsers 함수를 사용하여 업데이트된 배열로 사용자 상태를 업데이트
    setUsers(updatedUsers);
  };

  // 완료버튼 이벤트: 특정 ID의 사용자의 'isDone' 속성을 토글하고 사용자 목록을 업데이트
  const clickCompleteButtonHandler = (id) => {
    // 일치하는 사용자인 경우 해당 사용자 객체를 복사({ ...user })하여 새로운 객체를 생성하고 'isDone' 속성을 현재의 반대 값으로 토글(T -> F)(F -> T)
    // 일치하지 않으면 원래의 값 반환
    const updatedUsers = users.map((user) =>
      user.id === id ? { ...user, isDone: !user.isDone } : user
    );

    // setUsers 함수를 사용하여 업데이트된 배열로 사용자 상태를 업데이트
    setUsers(updatedUsers);
  };

  // filter 함수를 사용하여 users 배열을 순회하면서, 'isDone' 속성이 false인 사용자만을 포함하는 새로운 배열을 생성
  // 따라서 workingTasks 배열에는 완료되지 않은 작업들만이 포함
  // doneTasks는 그 반대
  const workingTasks = users.filter((user) => !user.isDone);
  const doneTasks = users.filter((user) => user.isDone);

  return (
    <div className="titleDiv">
      <div className="MyTodoListReact">
        <div>My Todo List</div>
        <div>React</div>
      </div>

      <div className="titleList">
        <div>
          제목 :&nbsp; <input value={title} onChange={titleChangeHandler} />
          내용 :&nbsp; <input value={body} onChange={bodyChangeHandler} />
        </div>

        <div>
          <Button clickAddButtonHandler={clickAddButtonHandler}>
            추가하기
          </Button>
        </div>
      </div>

      {/* 작업 중인 작업 표시 */}

      <div className="title">
        <h2>Working.. 🔥</h2>
        <div className="app-style">
          {workingTasks.map(function (item) {
            return (
              <User
                // React에서 배열을 렌더링할 때 각 항목에 고유한 key 속성을 제공
                key={item.id}
                // item prop은 User 컴포넌트에 현재 Todo 항목의 데이터를 전달하고 이를 통해 User 컴포넌트는 각 Todo 항목 에 대한 정보를 렌더링할 수 있음
                item={item}
                // User 컴포넌트에게 Todo 항목을 삭제하는 함수를 전달한다 User 컴포넌트는 이 함수를 호출하여 해당 Todo 항목을 삭제할 수 있음
                removeFunction={clickRemoveButtonHandler}
                // User 컴포넌트에게 Todo 항목의 완료 여부를 토글하는 함수를 전달한다 User 컴포넌트는 이 함수를 호출하여 해당 Todo 항목의 완료 여부를 변경할 수 있음
                completeFunction={clickCompleteButtonHandler}
              />
            );
          })}
        </div>

        {/* 완료된 작업 표시 */}
        <h2>Done..! 🎉</h2>
        <div className="app-style">
          {doneTasks.map(function (item) {
            return (
              <User
                key={item.id}
                item={item}
                removeFunction={clickRemoveButtonHandler}
                completeFunction={clickCompleteButtonHandler}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
