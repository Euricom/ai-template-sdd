import { Routes, Route } from "react-router-dom";
import { AppLayout } from "./components/app-layout";
import NotMatch from "./pages/NotMatch";
import Dashboard from "./pages/Dashboard";
import ProductsPage from "./pages/products/Page";
import UsersPage from "./pages/users/Page";

export default function Router() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="" element={<Dashboard />} />
        <Route path="pages">
          <Route path="products" element={<ProductsPage />} />
          <Route path="users" element={<UsersPage />} />
        </Route>
        <Route path="*" element={<NotMatch />} />
      </Route>
    </Routes>
  );
}
