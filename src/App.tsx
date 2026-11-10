import React from "react";
import { Button } from "./components/Button/Button";

function App() {
  return (
    <div
      style={{
        padding: "40px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        alignItems: "start"
      }}
    >
      {/* 1. The Default Button (Blue) */}
      <Button>Submit</Button>

      {/* 2. The Cancel/Warning Button (Yellow/Black) */}
      <Button
        background="#12a6ac"
        color="#000000"
        borderRadius="50px"
        padding="10px 24px"
        fontSize="12px"
      >
        Warning
      </Button>

      {/* 3. An Outline Button */}
      <Button
        background="transparent"
        color="#3b82f6"
        border="2px solid #3b82f6"
      >
        Outline
      </Button>

      {/* 4. A Full-Width Block Button */}
      <Button
        display="block"
        width="100%"
        background="#bd6c20"
        borderRadius="20px"
        fontSize="23px"
      >
        Full Width Success
      </Button>

      {/* 5. A Hidden Button */}
      <Button hide={true}>You cannot see me</Button>
    </div>
  );
}

export default App;
