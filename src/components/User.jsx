// User.js
import React from "react";

const User = ({ item, removeFunction, completeFunction }) => {
  return (
    <div>
      {item.isDone ? (
        <div>
          <p>Working.. 🔥</p>
          <div key={item.id} className="component-style">
            {item.title}
            <br />
            {item.body}
            <div className="User-button">
              <button onClick={() => removeFunction(item.id)}>삭제하기</button>
              <button onClick={() => completeFunction(item.id)}>완료</button>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <p>Done..! 🎉</p>
          <div key={item.id} className="component-style">
            {item.title}
            <br />
            {item.body}
            <div className="User-button">
              <button onClick={() => removeFunction(item.id)}>삭제하기</button>
              <button onClick={() => removeFunction(item.id)}>취소</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default User;
