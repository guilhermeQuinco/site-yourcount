import React from "react";

const Grid = () => {
  return (
    <section className="w-full overflow-hidden mt-[200px]">
      <div className="max-container padding-container">
        <div className="grid grid-cols-4 auto-rows-[300px] gap-4 ">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              className={`border rounded-2xl ${
                index === 0 || index === 3 || index === 1 ? "col-span-2 " : ""
              } `}
            >
              <span>{index + 1}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Grid;
