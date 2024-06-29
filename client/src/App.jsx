import "./App.css";
import { NextUIProvider } from "@nextui-org/system";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import RootLayout from "./layouts/RootLayout";
import DashboardLayout from "./layouts/DashboardLayout";
import Login from "./pages/auth/Login";
import SignIn from "./pages/auth/SignIn";
import GameVaultSite from "./pages/game_vault_site/GameVaultSite";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Login />} />
        <Route path="gamevault.sign-in" element={<SignIn />} />
        <Route path="game-vault" element={<GameVaultSite />} />
        <Route path="dashboard" element={<DashboardLayout />}></Route>
      </Route>
    )
  );

  const rawgApiKey = import.meta.env.VITE_RAWG_API_KEY;
  console.log(rawgApiKey);

  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        <RouterProvider router={router} />
      </NextThemesProvider>
    </NextUIProvider>
  );
}

export default App;
