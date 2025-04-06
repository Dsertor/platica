import { StringPage } from "../pages/stringPage/StringPage"
import { Home } from "../pages/home/Home"
import { Route, Routes } from "react-router-dom"
import { FindElementInString } from "../pages/stringPage/components/findElementInString/FindElementInString"
import { SelectButtonInfo } from "../shared/components/SelectButtonInfo/SelectButtonInfo"

export const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/string" element={<StringPage/>}>
          <Route index element={<SelectButtonInfo/>}></Route>
          <Route path="string-position" index element={<FindElementInString/>}></Route>
        </Route>
    </Routes>
  )
}
