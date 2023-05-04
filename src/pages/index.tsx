import { useEffect } from "react";
import yayJpg from "../assets/yay.jpg";

function getAllSession() {
  const keys = Object.keys(sessionStorage);
  return keys.reduce<Record<string, string | null>>((acc, cur) => {
    acc[cur] = sessionStorage.getItem(cur);
    return acc;
  }, {});
}

export default function HomePage() {
  const handleHyperlink = (flag: boolean) => {
    window.open("http://localhost:8000/", "_blank", flag ? "noopener" : "");
  };

  useEffect(() => {
    console.group();
    console.table(getAllSession());
    sessionStorage.setItem("test", new Date().valueOf().toString());
    console.table(getAllSession());
    console.groupEnd();
  }, []);

  return (
    <div>
      <h2>Yay! Welcome to umi!</h2>
      <p>
        <img src={yayJpg} width="388" />
      </p>
      <p>
        To get started, edit <code>pages/index.tsx</code> and save to reload.
      </p>
      <button onClick={() => handleHyperlink(false)}>
        open new tab without nooperner
      </button>
      <button onClick={() => handleHyperlink(true)}>
        open new tab with nooperner
      </button>
    </div>
  );
}
