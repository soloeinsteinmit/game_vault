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
import DashboardContent from "./pages/dashboard/DashboardContent";
import Genres from "./pages/dashboard/partials/Genres";
import Platforms from "./pages/dashboard/partials/Platforms";
import GenreLayout from "./layouts/GenreLayout";
import GenresList from "./pages/dashboard/partials/GenresList";
import PlatformList from "./pages/dashboard/partials/PlatformList";
import PlatformLayout from "./layouts/PlatformLayout";
import DevelopersList from "./pages/dashboard/partials/DevelopersList";
import PublishersList from "./pages/dashboard/partials/PublishersList";
import TagsList from "./pages/dashboard/partials/TagsList";
import CreatorsList from "./pages/dashboard/partials/CreatorsList";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Login />} />
        <Route path="gamevault.sign-in" element={<SignIn />} />
        <Route path="gamevault.io" element={<GameVaultSite />} />
        <Route path="dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardContent />} />

          <Route path="developers" element={<DevelopersList />} />
          <Route path="publishers" element={<PublishersList />} />
          <Route path="tags" element={<TagsList />} />
          <Route path="creators" element={<CreatorsList />} />

          <Route path="genres" element={<GenreLayout />}>
            <Route index element={<GenresList />} />
            <Route path=":genreId" element={<Genres />} />
          </Route>
          <Route path="platforms" element={<PlatformLayout />}>
            <Route index element={<PlatformList />} />
            <Route path=":genreId" element={<Platforms />} />
          </Route>
          {/* <Route path="platforms" element={< />} /> */}
        </Route>
      </Route>
    )
  );

  // const rawgApiKey = import.meta.env.VITE_RAWG_API_KEY;
  // console.log(rawgApiKey);

  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        <RouterProvider router={router} />
      </NextThemesProvider>
    </NextUIProvider>
  );
}

export default App;
