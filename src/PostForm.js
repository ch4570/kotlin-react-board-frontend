import React, { useState } from "react";
import axios from "axios";

const PostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const submit = (e) => {
    e.preventDefault();

    const article = {
      title: title,
      content: content,
    };

    axios
      .post("http://localhost:9000/board/write", JSON.stringify(article), {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        alert("게시글 등록이 성공했습니다.");
        console.log(res.data);
      })
      .catch((error) => {
        alert("게시글 등록 중 오류가 발생했습니다.");
        console.log(error);
      });
  };

  return (
    <form onSubmit={submit}>
      <div>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </div>
      <div>
        <label>Content:</label>
        <textarea
          value={content}
          onChange={(event) => setContent(event.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default PostForm;
