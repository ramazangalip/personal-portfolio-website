import React, { useState } from "react";

import "./style.scss";

const filtersData = [
    {
        name: "Hepsi",
        id: "all",
    },
    {
        name: "Ürünler",
        id: "product",
    },
    {
        name: "Web Sayfaları",
        id: "web-page",
    },
    {
        name: "Web Uygulamaları",
        id: "web-app",
    },
    {
        name: "Mobil Uygulamalar",
        id: "mobile-app",
    },
];

const Filters = ({ filterProjects }) => {
    const [active, setActive] = useState("");

    const clickHandler = (id) => {
        setActive(id);
        filterProjects(id);
    };

    return (
        <ul className="filters-menu-items">
            {filtersData.map((item) => (
                <li
                    key={item.id}
                    className={`filter-menu-item ${
                        active === item.id ? "active" : ""
                    }`}
                    onClick={() => clickHandler(item.id)}
                >
                    {item.name}
                </li>
            ))}
        </ul>
    );
};

export default Filters;
