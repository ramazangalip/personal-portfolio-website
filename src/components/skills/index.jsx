import React from "react";
import { AiOutlineCloudDownload } from "react-icons/ai";

import CallToAction from "../shared/CallToAction";
import TechIcons from "../../images/tech-icons.png";
import Section from "../shared/section";
import Resume from "../../download/file-sample_150kB.pdf";

import "./style.scss";

const Skills = () => {
    return (
        <Section
            background="dark"
            id="skills"
        >
            <div className="skills-content-wrapper">
                <div className="left-col">
                    <img
                        src={TechIcons}
                        alt="JavaScript, React, CSS, HTML, SASS, Photoshop, Figma"
                    />
                </div>
                <div className="right-col">
                    <h2>Yeteneklerim</h2>
                    <p>


Geniş bir web geliştirme yelpazesinde uzmanlaştım ve HTML, CSS, JavaScript ve React konularındaki yeteneklerimle projelerinizi hayata geçirebilirim. Temel web teknolojileri olan HTML, CSS ve JavaScript'i kullanarak estetik ve kullanıcı dostu arayüzler oluşturabilirim. Aynı zamanda React gibi popüler bir kütüphaneyi etkili bir şekilde kullanarak modern web uygulamaları geliştirebilirim. Hem tek sayfalık uygulamalarda hem de karmaşık projelerde çalışma deneyimim sayesinde kodları verimli ve modüler bir şekilde yazabilirim. Karşılaştığım zorlukları yaratıcı çözümlerle aşma yeteneğine sahibim. Teknik bilgilerimi güçlü iletişim becerilerimle birleştirerek ekip içinde kolayca işbirliği yapabilirim. Hızla değişen web dünyasındaki yenilikleri yakından takip ediyor, projelerimi her zaman en iyi uygulamalara uygun şekilde güncellemeye ve optimize etmeye özen gösteriyorum. Tüm bu özelliklerimle modern web geliştirme zorluklarına meydan okuyan ve her seviyede projeye değer katan bir geliştirici olarak size yardımcı olabilirim.

                    </p>
                    <CallToAction
                        text="Cv mi indir"
                        icon={<AiOutlineCloudDownload />}
                        action={() => window.open(Resume)}
                    />
                </div>
            </div>
        </Section>
    );
};

export default Skills;
