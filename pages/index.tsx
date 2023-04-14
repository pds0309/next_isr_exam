import todoApi from "@/api/todoApi";
import { useState } from "react";
import axios from "axios";
export default function Home() {
  const [name, setName] = useState<string>("");

  const handleAddButtonClick = async () => {
    await todoApi.add({
      name,
      createdAt: new Date().toString(),
    });
    // XXX: 좋지 않은 방법
    await axios.get("/api/revalidate");
    setName("");
    if (typeof window !== "undefined") {
      alert("등록성공");
    }
  };
  return (
    <>
      MAIN
      <br />
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleAddButtonClick}>등록</button>
    </>
  );
}
