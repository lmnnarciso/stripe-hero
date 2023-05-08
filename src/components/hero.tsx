import classnames from "classnames";
import { useState } from "react";

export const persons = [
  {
    img: "https://unsplash.com/photos/mzN7eMmv9IM/download?force=true&w=590&h=640",
    title:
      "chief financial officer and executive vice president for global finance, aon plc",
    name: "Christa Davies",
  },
  {
    img: "https://unsplash.com/photos/oifclaPX5oM/download?force=true&w=590&h=640",
    title: "revenue and financial management, stripe",
    name: "Vivek Sharma",
  },
  {
    img: "https://unsplash.com/photos/fghYlu1ec2U/download?force=true&w=590&h=640",
    title: "head of product marketing, stripe",
    name: "Tanya Khakbaz",
  },
  {
    img: "https://unsplash.com/photos/a5XdeIb9Zso/download?force=true&w=590&h=640",
    title: "head of global sales, stripe",
    name: "Eileen O'Mara",
  },
  {
    img: "https://unsplash.com/photos/RDUyi9YXPxk/download?force=true&w=590&h=640",
    title: "founder, pulley",
    name: "Yin Wu",
  },
  {
    img: "https://unsplash.com/photos/TMZuhaL2kHo/download?force=true&w=590&h=640",
    title: "ceo and cofounder, crowdai",
    name: "Devaki Raj",
  },
  {
    img: "https://unsplash.com/photos/XO25cX2_0iE/download?force=true&w=590&h=640",
    title: "co-head of payments, wix",
    name: "Amit Sagiv",
  },
  {
    img: "https://unsplash.com/photos/DLKR_x3T_7s/download?force=true&w=590&h=640",
    title: "general partner, andreessen horowitz",
    name: "Angela Strange",
  },
];

export function Hero() {
  const [selected, setSelected] = useState(0);
  return (
    <div className="flex justify-center items-center h-full w-full ">
      <ul className="flex justify-start max-w-[1200px] gap-8">
        {/* https://unsplash.com/photos/DLKR_x3T_7s/download?force=true&w=590&h=640 */}

        {persons.map((person, index) => (
          <li
            className={classnames(
              "h-[640px] transition-[width] duration-700 relative",
              selected === index ? "w-[48%]" : " w-[8%] hover:w-[12.5%]"
            )}
            onClick={() => {
              setSelected(index);
            }}
            key={person.name}
            // transition={{
            //   ease: "easeIn",
            //   duration: 0.2,
            // }}
          >
            <div className="h-full relative overflow-hidden rounded-2xl">
              <img
                width={545}
                height={640}
                src={person.img}
                className="h-full object-cover  grayscale "
              />
              <div
                className={classnames(
                  "absolute h-[500px] w-[500px] inset-0 opacity-25 duration-300",
                  selected === index
                    ? " before:absolute before:bottom-0 before:left-[-546px] before:right-0 before:top-[-148px] before:z-10 before:bg-texture md:absolute md:transition-opacity"
                    : "",
                  selected === index
                    ? "after:absolute after:bottom-[-280px] after:left-0 after:right-[-434px] after:top-0 after:z-10 after:bg-texture"
                    : ""
                )}
              ></div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
