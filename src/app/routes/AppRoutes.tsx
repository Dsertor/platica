import { StringPage } from "../pages/stringPage/StringPage";
import { Home } from "../pages/home/Home";
import { Route, Routes } from "react-router-dom";
import { FindElementInString } from "../pages/stringPage/components/findElementInString/FindElementInString";
import { SelectButtonInfo } from "../shared/components/SelectButtonInfo/SelectButtonInfo";
import { Crud } from "../pages/crud/Crud";
import { List } from "../pages/crud/components/List/List";
import { RenderPage } from "../pages/render/RenderPage";
import { UseMemo } from "../pages/render/components/UseMemo";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="string" element={<StringPage />}>
                <Route index element={<SelectButtonInfo />}></Route>
                <Route path="string-position" index element={<FindElementInString />}></Route>
            </Route>

            <Route path="CRUD" element={<Crud />}>
                <Route index element={<SelectButtonInfo />}></Route>
                <Route path="list" element={<List />}></Route>
            </Route>
            <Route path="render" element={<RenderPage/>}>
                <Route index element={<SelectButtonInfo />}></Route>
                <Route path="useMemo" element={<UseMemo/>}></Route>
            </Route>
        </Routes>
    );
};
