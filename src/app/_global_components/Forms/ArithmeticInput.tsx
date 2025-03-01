import React, { useEffect, useState } from "react";
type Input = {
  handleNumber: (number: number) => void;
  Squared?: boolean;
  text?: string;
  input?: number;
};
function ArithmeticInput({ handleNumber, Squared, text, input }: Input) {
  // Start at 0 to ensure it doesn't go below 0.
  const [number, setNumber] = useState<number>(input || 0);

  // Decrement only if number is greater than 1.
  const decrement = () => {
    setNumber((prev) => (prev > 0 ? prev - 1 : prev));
  };

  // Increment function.
  const increment = () => {
    setNumber((prev) => prev + 1);
  };

  // Format number to have a leading zero if less than 10.
  const formattedNumber = number.toString().padStart(2, "0");
  useEffect(() => {
    if (number) {
      handleNumber(number);
    }
  }, [handleNumber, number]);
  useEffect(() => {
    setNumber(input || 0);
  }, [input]);
  return (
    <div
      className={`flex flex-row justify-between ${
        Squared ? "p-0" : "p-1"
      } items-center h-fit w-full border border-[#D9D9D9] ${
        Squared ? "" : "rounded-full"
      }`}
    >
      <button
        onClick={decrement}
        className={`w-[30px] h-[30px] md:w-[50px] md:h-[50px] text-[20px] ${
          Squared ? "bg-[#E74C3C] rounded-sm" : "rounded-[100%] bg-secondary"
        } text-white`}
      >
        -
      </button>
      <p className="text-[16px] md:text-[22px] font-[500] text-[#616161]">
        {formattedNumber} {text && text}
      </p>
      <button
        onClick={increment}
        className={`w-[30px] h-[30px] md:w-[50px] md:h-[50px] text-[20px] ${
          Squared ? "bg-[#1ABC9C] rounded-sm" : "rounded-[100%] bg-secondary"
        } text-white`}
      >
        +
      </button>
    </div>
  );
}

export default ArithmeticInput;
