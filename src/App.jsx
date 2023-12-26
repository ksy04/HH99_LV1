// App.js
import React, { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import User from "./components/User";

const App = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      title: "리액트 공부하기",
      body: "리액트 기초를 공부해봅시다.",
      isDone: true,
    },
    {
      id: 2,
      title: "리액트 공부",
      body: "리액트 기초를 공부해봅시다.",
      isDone: false,
    },
  ]);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const bodyChangeHandler = (event) => {
    setBody(event.target.value);
  };

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const clickAddButtonHandler = () => {
    const newUser = {
      id: users.length + 1,
      title: title,
      body: body,
      isDone: false,
    };

    setUsers([...users, newUser]);
    setTitle("");
    setBody("");
  };

  const clickRemoveButtonHandler = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  };

  const clickCompleteButtonHandler = (id) => {
    const updatedUsers = users.map((user) =>
      user.id === id ? { ...user, isDone: !user.isDone } : user
    );
    setUsers(updatedUsers);
  };

  // 완료되지 않은 작업과 완료된 작업으로 나누기
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
                key={item.id}
                item={item}
                removeFunction={clickRemoveButtonHandler}
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
