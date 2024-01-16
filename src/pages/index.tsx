import {ROUTE_CONSTANTS} from "../shared/config/routes";
// @ts-ignore
import React, {FC} from "react";
import {Route,Routes} from "react-router-dom";
import {ServicePage} from "./services";
import {SelectedServicePage} from "./selectedService /ui";
import { NotFound } from "./not-found";

export const Router: FC = () => (
    <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path={ROUTE_CONSTANTS.HOME} element={< ServicePage />} />
        <Route path={ROUTE_CONSTANTS.SERVICE} element={<SelectedServicePage />} />
        <Route path={ROUTE_CONSTANTS.NOT_FOUND} element={<NotFound />} />
    </Routes>
);
