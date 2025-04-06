import { JSX } from "react"
import { NavButtons } from "../stringPage/StringPage";
import { Nav } from "../../shared/components/Nav/Nav";

const buttonText: NavButtons[] = [{ name: "Listado", path: "list" }];


export const Crud = ():JSX.Element => {
  return (
    <Nav buttonsText={buttonText}/>
  )
}
