import { Routes, Route, Navigate } from "react-router";
import { ROUTE_PATHS } from "@/routes/routePaths";
import { MainLayout } from "@/layouts/MainLayout/MainLayout";

import { HomePage } from "@/pages/HomePage/HomePage";
import { AboutPage } from "@/pages/AboutPage/AboutPage";
import { PackageListPage } from "@/pages/PackageListPage/PackageListPage";
import { PackageDetailPage } from "@/pages/PackageDetailPage/PackageDetailPage";
import { RouteListPage } from "@/pages/RouteListPage/RouteListPage";
import { RouteDetailPage } from "@/pages/RouteDetailPage/RouteDetailPage";
import { GalleryPage } from "@/pages/GalleryPage/GalleryPage";
import { BookingPage } from "@/pages/BookingPage/BookingPage";
import { NotFoundPage } from "@/pages/NotFoundPage/NotFoundPage";

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path={ROUTE_PATHS.home} element={<HomePage />} />
        <Route path={ROUTE_PATHS.about} element={<AboutPage />} />
        <Route path={ROUTE_PATHS.aboutLegacy} element={<Navigate to={ROUTE_PATHS.about} replace />} />
        <Route path={ROUTE_PATHS.packages} element={<PackageListPage />} />
        <Route path={ROUTE_PATHS.packageDetail} element={<PackageDetailPage />} />
        <Route path={ROUTE_PATHS.routes} element={<RouteListPage />} />
        <Route path={ROUTE_PATHS.routeDetail} element={<RouteDetailPage />} />
        <Route path={ROUTE_PATHS.gallery} element={<GalleryPage />} />
        <Route path={ROUTE_PATHS.booking} element={<BookingPage />} />
        <Route path={ROUTE_PATHS.notFound} element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
