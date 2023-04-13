import Link from "next/link";
import React from "react";

const GNB = () => {
  return (
    <div style={{ marginBottom: "60px" }}>
      <Link href="/submit">등록 페이지</Link>
      <br />
      <Link href="/ssg">SSG 페이지</Link>
      <br />
      <Link href="/isr-10">ISR-10초 페이지</Link>
      <br />
      <Link href="/isr-on-demand">ISR-on-demand 페이지</Link>
      <br />
    </div>
  );
};

export default GNB;
