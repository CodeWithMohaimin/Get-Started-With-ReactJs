import React from "react";

function MohaiminCurrency() {
  return (
    <div className="px-[22px]">
      <div className="max-w-[1100px] w-full mx-auto border-b-[1px] border-[#444] text-center pt-[40px] md:pt-[140px]">
        <div className="flex justify-center">
          <img className="rounded-full" src="/owner.png" alt="Owner" />
        </div>
        <h1 className="text-[21px] md:text-[38px] font-bold text-[#444]">
          Currency Converter
        </h1>
        <p className="text-[11px] md:text-[18px] text-[#666] mt-[5px] mb-[16px] ">
          This Project is absolutely free for use. Created by{" "}
          <span className="text-[#3d00e0]">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/programmermohaimin/"
            >
              @Mohaimin
            </a>
          </span>{" "}
          Islam
        </p>
      </div>

      <div className="flex flex-col max-w-[1100px] w-full mx-auto mt-[100px]">
        <label htmlFor="amount">Amount</label>
        <input id="amount" type="text" placeholder="Amount" />

        <label className="mt-[50px]" htmlFor="from">
          From
        </label>
        <input id="from" type="" placeholder="Country" />

        <label className="mt-[10px]" htmlFor="to">
          To
        </label>
        <input id="to" type="text" placeholder="Country" />

        <div className="flex justify-end">
          <button className="border-[2px] border-[#0013e9] mt-[15px] font-[700] px-[25px] py-[7px] text-[#fff] bg-[#0013e9]">
            Convert
          </button>
        </div>

        <div className="text-center mt-[40px]">
          <h3>Exchange Rate</h3>
          <p>00.00</p>
        </div>
      </div>
    </div>
  );
}

export default MohaiminCurrency;
