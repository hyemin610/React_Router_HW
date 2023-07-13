import React from "react";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [상품설명, set상품설명] = useState([
    {
      아이디: 1,
      이름: "멋진 바지",
      가격: 20000,
      옵션: [28, 30, 32],
      좋아요수: "100개",
    },

    {
      아이디: 2,
      이름: "멋진 셔츠",
      가격: 10000,
      옵션: ["small", "medium", "large"],
      좋아요수: "200개",
    },

    {
      아이디: 3,
      이름: "멋진 신발",
      가격: 30000,
      옵션: [230, 240, 250, 260, 270],
      좋아요수: "300개",
    },
  ]);
  return (
    <>
      <div
        style={{
          marginTop: "56px",
          textAlign: "center",
        }}
      >
        <h2>🔥 여름 추천템 🔥</h2>
        <button
          onClick={() => {
            setSearchParams({
              sort: "price",
            });
          }}
        >
          가격순정렬
        </button>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "24px",
          }}
        >
          {상품설명.map((상품) => (
            //상품.아이디로 접근했을 때 안돼서 낙심함.  상품.아이디는 숫자니까 url로 넣을 때는 문자열로 들어가야함 그러기 위해서 템플릿 리터럴을 사용하는 것임 `${자바스크립트문법이나 변수}` 쓴다는 것!!!!!(기억하기), 이 반대는 Number 문자열을 숫자로 돌림
            <Link to={`/products/${상품.아이디}`}>
              <div
                style={{
                  width: "200px",
                  height: "240px",
                  backgroundColor: "#068FFF",
                }}
              >
                <div>{상품.이름}</div>
                <div>{상품.가격}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
