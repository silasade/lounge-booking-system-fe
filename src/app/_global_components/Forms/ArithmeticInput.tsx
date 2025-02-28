import React, { useEffect, useState } from "react";
type Input = {
  handleNumber: (number: number) => void;
  Squared?: boolean;
  text?: string;
};
function ArithmeticInput({ handleNumber, Squared, text }: Input) {
  // Start at 1 to ensure it doesn't go below 1.
  const [number, setNumber] = useState<number>(1);

  // Decrement only if number is greater than 1.
  const decrement = () => {
    setNumber((prev) => (prev > 1 ? prev - 1 : prev));
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
