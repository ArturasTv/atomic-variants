import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { atomic } from "atomic-variants";

const variants = atomic({
  base: "font-default leading-[1.2]",
  variants: {
    type: {
      light: "font-light",
      regular: "font-normal",
      medium: "font-medium",
      semiBold: "font-semibold",
      bold: "font-bold",
    },
    size: {
      extraSmall: "text-xs",
      small: "text-sm",
      normal: "text-base",
      large: "text-lg",
      extraLarge: "text-xl",
      x2Large: "text-2xl",
      x3Large: "text-3xl",
      x4Large: "text-4xl",
      x5Large: "text-5xl",
      x6Large: "text-6xl",
      x7Large: "text-7xl",
      x8Large: "text-8xl",
      x9Large: "text-9xl",
    },
    align: {
      center: "text-center",
      justify: "text-justify",
      left: "text-left",
      right: "text-right",
    },
    leading: {
      none: "leading-none",
      tight: "leading-tight",
      snug: "leading-snug",
      relaxed: "leading-relaxed",
      loose: "leading-loose",
    },
    tracking: {
      tighter: "tracking-tighter",
      tight: "tracking-tight",
      wide: "tracking-wide",
      wider: "tracking-wider",
      widest: "tracking-widest",
    },
  },
  responsiveVariants: true,
});

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div
        className={variants({
          size: {
            xs: "small",
            md: "extraLarge",
          },
        })}
      ></div>
    </>
  );
}

export default App;
