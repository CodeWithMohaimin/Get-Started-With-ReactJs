import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <>
      <h1>Props Trick | CodeWithMohaimin</h1>
      <div className="flex justify-center gap-5 mt-[40px] md:mt-[100px] flex-wrap">
        <Card title="Iphone" btnText="Click me" />
        <Card />
      </div>
    </>
  );
}

export default App;
