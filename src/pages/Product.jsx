import React, { useState } from "react";
import { useParams } from "react-router-dom";

export default function Product() {
  const { id } = useParams();
  //useParams는 함수라서 ()해서 실행해줘야함 안해서 안됐음 ㅜ
  console.log(useParams);
  const [고르기, set고르기] = useState("");
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
  // 필터하고 맵 써야한다면 필터한 거 명명해서 두고 그걸로 맵 돌리기 (아이디어 기억하기)
  // Number 는 id를 숫자로 변환하는 데 사용됨. Url에서 id가 추출되면 문자열로 추출되는데 이를 숫자로 바꿔서 상품목록의 아이디(숫자)와 비교하기 위해 Number라는 js내장된 것을 씀.
  const 필터한상품 = 상품설명.filter((상품) => 상품.아이디 === Number(id));
  console.log(Number(id));
  return (
    <>
      <div>
        <h1>상세 페이지</h1>
        <div
          style={{
            display: "flex",
            gap: "44px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {필터한상품.map((상품1) => (
            <>
              <div
                style={{
                  width: "200px",
                  height: "240px",
                  backgroundColor: "#068FFF",
                }}
              >
                <div>{상품1.이름}</div>
              </div>
              <div>
                <h3>가격:{상품1.가격}</h3>
                <h3>좋아요:{상품1.좋아요수}</h3>
                <h3>구매옵션</h3>

                <select
                  style={{
                    width: "100px",
                  }}
                  onChange={(e) => {
                    set고르기(e.target.value);
                  }}
                >
                  {/* value를 빈값으로 처리해서 선택하세요를 선택했을 때 아무것도 나오지 않게 함. */}
                  <option value="">선택하세요</option>
                  {/* 필터한 상품을 맵돌린 거에 또 맵을 돌려서 옵션 안에 있는 거 하나하나에 접근할 수 있게 됨*/}
                  {상품1.옵션.map((사이즈) => (
                    <option value={사이즈}>{사이즈}</option>
                  ))}
                </select>
                <div>구매옵션:{고르기}</div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}
