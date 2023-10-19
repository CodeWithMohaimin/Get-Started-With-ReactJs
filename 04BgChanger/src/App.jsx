import { useState } from "react";
import Button from "./components/Button";

function App() {
  const [color, setColor] = useState("#333");

  return (
    <>
      <div
        className="h-[100vh] relative w-full"
        style={{ backgroundColor: color }}
      >
        <div className="flex flex-col gap-[15px] absolute left-0 top-1/2 transform -translate-y-1/2 pl-[30px]">
          <Button colorName="red" bgColor={() => setColor("#ff7d7d")} />
          <Button colorName="blue" bgColor={() => setColor("#7474eb")} />
          <Button colorName="teal" bgColor={() => setColor("#40c5b8")} />
          <Button colorName="olive" bgColor={() => setColor("#baba05")} />
        </div>
      </div>
    </>
  );
}

export default App;
