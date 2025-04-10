
import { JSX } from "react";
import { Nav } from "../../shared/components/Nav/Nav";

export type NavButtons = {
    name: string;
    path: string;
};

const buttonText: NavButtons[] = [{ name: "Letra en una posición", path: "string-position" }];

export const StringPage = (): JSX.Element => {
    return (
        <Nav buttonsText={buttonText}/>
    );
};
