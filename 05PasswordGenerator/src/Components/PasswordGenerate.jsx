import { useCallback, useEffect, useRef, useState } from "react";
import Toast from "./Toast";

const PasswordGenerate = () => {
  // Bg image = https://learnwithsumit.com/_next/static/media/pattern.afd33a3d.svg
  // Bg image = https://learnwithsumit.com/_next/static/media/pattern-dark.20747baf.svg

  const [password, setPassword] = useState("");
  const [length, setLength] = useState(14);
  const [numbersAllowed, setNumbersAllowed] = useState(false);
  const [charactersAllowed, setCharactersAllowed] = useState(false);

  // use ref hook
  const passwordRef = useRef(null);

  // Password Generator Function
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numbersAllowed) str += "0123456789";
    if (charactersAllowed) str += "!@#$%^&*()-_+={}[]|;:'<.>/,";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numbersAllowed, charactersAllowed, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numbersAllowed, charactersAllowed, passwordGenerator]);

  // Copy Password Function
  const copyPasswordToClipboard = () => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 19);
    window.navigator.clipboard.writeText(password);
  };

  return (
    <main className="lg:bg-[url('/bg1.png')] bg-cover bg-no-repeat bg-center md:bg-left">
      <section className="selection:bg-[#f5a1ea] selection:text-[#222] grid place-items-center h-screen px-[15px] max-lg:bg-[url('/bg5.jpg')] lg:bg-[#1e293b] lg:opacity-90 bg-cover bg-no-repeat bg-center md:bg-left">
        {/* Gradients 1*/}
        <div className="max-lg:hidden absolute top-0 right-0 overflow-x-hidden h-[150px] w-[150px] rounded-3xl bg-gradient-to-l from-[#4e58b9] to-[#4266da] blur-3xl opacity-60 filter"></div>
        {/* Gradients 2*/}
        <div className="max-lg:hidden absolute bottom-0 left-0 overflow-x-hidden h-[200px] w-[300px] rounded-3xl bg-gradient-to-l from-[#23295e] to-[#4266da] blur-3xl opacity-60 filter"></div>

        <div className="max-w-[555px] w-full border-[1px] border-[#888] mx-auto px-[9px] sm:px-[25px] py-[35px] relative">
          <a
            href="#documentation"
            className="text-[9px] sm:text-[14px] text-[#ffc53d] absolute bottom-0 right-0 border-b-[1px] border-[#ffc53d] m-[5px] font-semibold"
          >
            ✋Documentation
          </a>

          <h1 className="transition-all duration-300 mb-[25px] sm:mb-[30px] text-[21px] sm:text-[32px] text-[#b4b4b4]">
            Generate Your Password!
          </h1>

          <div className="flex">
            {/**************  Text Input filed **************/}
            <input
              className="w-full text-[12] sm:text-[21px] outline-none px-[12px] sm:px-[15px] py-[4px] sm:py-[7px] bg-[#555] rounded-l-md"
              spellCheck={false}
              type="text"
              value={password}
              onChange={passwordGenerator}
              ref={passwordRef}
            />
            {/************** Copy Button  **************/}
            <button
              onClick={copyPasswordToClipboard}
              className="text-[12px] sm:text-[21px] outline-none px-[15px] py-[7px] bg-[#0075ff] hover:bg-[#2242cd] duration-300 rounded-r-md"
            >
              Copy
            </button>
          </div>

          {/************** Messages  **************/}
          <div className="mb-[15px] sm:mb-[50px] mt-[5px] sm:mt-[7px] opacity-70 select-none">
            {length > 19 ? (
              <Toast message="You can copy maximum 19 characters" />
            ) : null}
          </div>

          <div className="grid grid-cols-2 place-items-center">
            {/************** Range Input Filed **************/}
            <input
              className="w-full"
              min={6}
              max={100}
              value={length}
              onChange={(e) => {
                setLength(e.target.value);
              }}
              type="range"
              name="length"
              id="length"
            />
            <label className="text-[12px] sm:text-[21px]" htmlFor="length">
              Length = {length}
            </label>
          </div>

          <div className="flex justify-between items-center border-[1px] border-[#888] p-[10px] my-[15px]">
            {/************** Number Input Filed **************/}
            <label className="text-[12px] sm:text-[21px]" htmlFor="numbers">
              Numbers
            </label>

            <input
              type="checkbox"
              defaultChecked={numbersAllowed}
              onChange={() => {
                setNumbersAllowed((prevValue) => !prevValue);
              }}
              name="numbers"
              id="numbers"
            />
          </div>

          <div className="flex justify-between items-center border-[1px] border-[#888] p-[10px] my-[15px]">
            {/************** Character Input Filed **************/}
            <label className="text-[12px] sm:text-[21px]" htmlFor="characters">
              Characters
            </label>
            <input
              type="checkbox"
              defaultChecked={charactersAllowed}
              onChange={() => {
                setCharactersAllowed((prevValue) => !prevValue);
              }}
              name="characters"
              id="characters"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default PasswordGenerate;
