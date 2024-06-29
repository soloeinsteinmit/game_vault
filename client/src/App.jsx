import { useState } from "react";
import "./App.css";
import { NextUIProvider } from "@nextui-org/system";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { Button } from "@nextui-org/button";

function App() {
  const [count, setCount] = useState(0);

  const rawgApiKey = import.meta.env.VITE_RAWG_API_KEY;
  console.log(rawgApiKey);

  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        <div className="flex flex-col gap-5 justify-center items-center">
          <h1 className="text-3xl font-bold ">GameVault v1.0</h1>
          <p>A clone of the website based on the RAWG API</p>
          <p>My API Key rawgApiKey here</p>
          <Button color="primary">Get started with GameVault</Button>
          <span className="text-xs">Made by Solomon Eshun</span>
        </div>
      </NextThemesProvider>
    </NextUIProvider>
  );
}

export default App;
