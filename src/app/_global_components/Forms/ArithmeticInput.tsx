import React, { useEffect, useState } from "react";
type Input = {
  handleNumber: (number: number) => void;
};
function ArithmeticInput({ handleNumber }: Input) {
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
    <div className="flex flex-row justify-between p-1 items-center h-fit w-full border border-[#D9D9D9] rounded-full">
      <button
        onClick={decrement}
        className="w-[30px] h-[30px] md:w-[50px] md:h-[50px] text-[20px] rounded-[100%] bg-secondary text-white"
      >
        -
      </button>
      <p className="text-[16px] md:text-[24px] font-[500]">{formattedNumber}</p>
      <button
        onClick={increment}
        className="w-[30px] h-[30px] md:w-[50px] md:h-[50px] text-[20px]  text-[20px] rounded-full bg-secondary text-white"
      >
        +
      </button>
    </div>
  );
}

export default ArithmeticInput;
