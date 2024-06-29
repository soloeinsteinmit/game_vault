import { useState } from "react";
import "./App.css";
import { NextUIProvider } from "@nextui-org/system";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { Button } from "@nextui-org/button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="light">
        <div className="flex flex-col justify-center items-center">
          <h1>GameVault</h1>
          <Button>Get started with GameVault</Button>
          <p>Made by Solomon Eshun</p>
        </div>
      </NextThemesProvider>
    </NextUIProvider>
  );
}

export default App;
