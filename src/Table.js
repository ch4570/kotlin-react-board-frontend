import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Paging from "./Pagination";

const Board = () => {
  const [activePage, setActivePage] = useState(1);
  const [articles, setArticles] = useState([]);
  const [pageable, setPageable] = useState([]);
  const [totalElements, setTotalElements] = useState([]);

  useEffect(() => {
    // 초기 렌더링 시, 첫 페이지 데이터를 가져온다.
    getData(activePage - 1);
  }, [activePage]);

  const getData = (page) => {
    axios
      .get(`http://localhost:9000/board?page=${page}`)
      .then((response) => {
        setArticles(response.data.content);
        setPageable(response.data.pageable);
        setTotalElements(response.data.totalElements);
      })
      .catch((error) => console.log(error));
  };

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };

  const write = () => {
    window.location.href = "/board/write";
  };

  return (
    <>
      <Table striped bordered hover style={{ marginTop: 100 }}>
        <thead>
          <tr>
            <th>게시글 번호</th>
            <th>게시글 제목</th>
            <th>작성자</th>
            <th>등록일</th>
          </tr>
        </thead>
        <tbody>
          {articles.map((article) => {
            return (
              <tr>
                <td key={article.id}>{article.id}</td>
                <td>{article.title}</td>
                <td>{article.author}</td>
                <td>{article.createdDate}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <button
        type="button"
        className="btn btn-primary"
        style={{ float: "right", marginRight: "30px" }}
        onClick={write}
      >
        게시글 등록
      </button>
      <Paging
        // 현재 페이지
        activePage={activePage}
        // 한 페이지당 보여줄 게시글 개수 (pageSize)
        itemsCountPerPage={pageable.pageSize}
        // 게시글의 총 개수 (Total Count)
        totalItemsCount={totalElements}
        // 페이지 네비게이션 내에서 보여줄 페이지의 범위
        pageRangeDisplayed={5}
        // 페이지가 변경될 때 핸들링해줄 함수
        onChange={handlePageChange}
      />
    </>
  );
};

export default Board;
