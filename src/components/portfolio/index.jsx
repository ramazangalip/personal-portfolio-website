import React, { useState } from "react";

import Section from "../shared/section";
import Filters from "./filters";
import Showcase from "./showcase";

import "./style.scss";

const projectsData = [
    {
        id: 1,
        name: "Ecommerce Website",
        tags: ["web-app", "mobile-app"],
        media: {
            thumbnail: require("../../images/portfolio/1.png"),
        },
    },
    {
        id: 2,
        name: "Nike Shoes Wbsite",
        tags: ["web-page"],
        media: {
            thumbnail: require("../../images/portfolio/2.png"),
        },
    },
    {
        id: 3,
        name: "Starbucks  Landing Page",
        tags: ["web-page"],
        media: {
            thumbnail: require("../../images/portfolio/3.png"),
        },
    },
    {
        id: 4,
        name: "Akbank Website Project",
        tags: ["web-app", "mobile-app"],
        media: {
            thumbnail: require("../../images/portfolio/4.png"),
        },
    },
    {
        id: 5,
        name: "Netflix Demo",
        tags: ["web-app", "web-page"],
        media: {
            thumbnail: require("../../images/portfolio/5.png"),
        },
    },
];

const Portfolio = () => {
    const [projects, setProjects] = useState(projectsData);
    const [transition, setTransition] = useState(false);

    const filterProjects = (tag) => {
        setTransition("zoomout");

        setTimeout(() => {
            if (tag !== "all") {
                const filteredProjects = projectsData.filter((f) =>
                    f.tags.includes(tag)
                );
                setProjects(filteredProjects);
            } else {
                setProjects(projectsData);
            }
            setTransition("zoomin");
        }, 200);

        setTimeout(() => {
            setTransition(false);
        }, 600);
    };

    return (
        <Section
            id="portfolio"
            title="Benim Portfolyoma Göz Atın"
            background="light"
        >
            <div className="portfolio-content-wrapper">
                <Filters filterProjects={(tag) => filterProjects(tag)} />
                <Showcase
                    data={projects}
                    transition={transition}
                />
            </div>
        </Section>
    );
};

export default Portfolio;
