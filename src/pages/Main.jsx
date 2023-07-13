import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
export default function Main() {
  const navigate = useNavigate();
  const [상품설명, set상품설명] = useState([
    {
      이름: "멋진 바지",
      가격: 20000,
      옵션: [28, 30, 32],
      좋아요수: "100개",
    },

    {
      이름: "멋진 셔츠",
      가격: 10000,
      옵션: ["small", "medium", "large"],
      좋아요수: "200개",
    },

    {
      이름: "멋진 신발",
      가격: 30000,
      옵션: [230, 240, 250, 260, 270],
      좋아요수: "300개",
    },
  ]);
  return (
    <>
      {/* main */}
      <main>
        {/* 케러셀 */}
        <section
          style={{
            backgroundColor: "#4E4FEB",
            color: "white",
            height: "300px",
            lineHeight: "300px",
            textAlign: "center",
            fontSize: "24px",
          }}
        >
          케러셀
        </section>
        {/* 여름 추천템 */}
        <section
          style={{
            marginTop: "56px",
            textAlign: "center",
          }}
        >
          <h2
            onClick={() => {
              alert("진짜 이동할 거야?");
              navigate("/products");
            }}
          >
            🔥 여름 추천템 🔥
          </h2>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "24px",
            }}
          >
            {상품설명.map((상품) => (
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
            ))}
            <Link to="/products">
              <div>더보기</div>
            </Link>
          </div>
        </section>
        {/* 추가적인 데이터 */}
        <section
          style={{
            marginTop: "56px",
            textAlign: "center",
          }}
        >
          <h2>🔥 세일 상품 🔥</h2>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "24px",
            }}
          >
            <div
              style={{
                width: "200px",
                height: "240px",
                backgroundColor: "#EEEEEE",
              }}
            >
              상품1
            </div>
            <div
              style={{
                width: "200px",
                height: "240px",
                backgroundColor: "#EEEEEE",
              }}
            >
              상품2
            </div>
            <div
              style={{
                width: "200px",
                height: "240px",
                backgroundColor: "#EEEEEE",
              }}
            >
              상품3
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
