import Link from "next/link";
import React, { useState } from "react";

const GNB = () => {
  const [id, setId] = useState<string>("");
  return (
    <div style={{ marginBottom: "60px" }}>
      <Link href="/">홈(등록하기)</Link>
      <br />
      <Link href="/ssg">SSG 페이지</Link>
      <br />
      <Link href="/isr-10">ISR-10초 페이지</Link>
      <br />
      <Link href="/isr-on-demand">ISR-on-demand 페이지</Link>
      <br />
      <Link href="/ssr">SSR 페이지</Link>
      <br />
      <input
        placeholder="이동할 id 입력"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <br />
      <Link href={`/fallbackfalse/${id}`}>
        id ${id}로 fallback-false 페이지 이동
      </Link>
      <br />
      <Link href={`/fallbacktrue/${id}`}>
        id ${id}로 fallback-true 페이지 이동
      </Link>
      <br />
      <Link href={`/fallbackblocking/${id}`}>
        id ${id}로 fallback-blocking 페이지 이동
      </Link>
      <br />
    </div>
  );
};

export default GNB;
