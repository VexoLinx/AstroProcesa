import { useState } from "react";
import "./DropDown.css";

export default function Dropdown() {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState("Selecciona una opción");

    const options = ["Cormack", "Dinyx Solventation", "Electrostarolysis", "Ferron Exchange", "Gaskin Process", "Kazen Winnowing", "Pyrometric Chromalysis", "Thermonatic Deposition", "XCR Reaction"];

    const handleSelect = (option) => {
        setSelected(option);
        setOpen(false);
    };

    return (
        <div className={`dropdown ${open ? "open" : ""}`}>
            <button
                className="dropdown-toggle"
                onClick={() => setOpen(prev => !prev)}
                type="button"
            >
                <span className="text">{selected}</span>
                <svg
                    className="arrow"
                    width="25"
                    height="25"
                    viewBox="0 0 24 24"
                    aria-hidden="true">

                    <path
                        d="M8 5l8 7-8 7"
                        fill="none"
                        stroke="white"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </button>

            {open && (
                <ul className="dropdown-menu">
                    {options.map((option) => (
                        <li
                            key={option}
                            onClick={() => handleSelect(option)}
                            className={option === selected ? "selected" : ""}
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}