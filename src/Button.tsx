import React from "react";

type ButtonProps = {
    label: string;
    onclick: () => void;
}

export const Button: React.FC<ButtonProps> = ({label, onclick}) => {
    return <button onClick={onclick}>{label}</button>;
};