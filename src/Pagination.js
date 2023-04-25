import React, { useState } from "react";
import "./Paging.css";
import Pagination from "react-js-pagination";

const Paging = ({
  activePage,
  itemsCountPerPage,
  totalItemsCount,
  pageRangeDisplayed,
  onChange,
}) => {
  return (
    <Pagination
      // 현재 페이지
      activePage={activePage}
      // 한 페이지당 보여줄 게시글 개수 (pageSize)
      itemsCountPerPage={itemsCountPerPage}
      // 게시글의 총 개수 (Total Count)
      totalItemsCount={totalItemsCount}
      // 페이지 네비게이션 내에서 보여줄 페이지의 범위
      pageRangeDisplayed={pageRangeDisplayed}
      // 페이지가 변경될 때 핸들링해줄 함수
      onChange={onChange}
      // 이전을 나타낼 텍스트 화살표
      prevPageText={"‹"}
      // 다음을 나타낼 텍스트 화살표
      nextPageText={"›"}
    />
  );
};

export default Paging;
