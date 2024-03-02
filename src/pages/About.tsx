import styled from "styled-components";
import GlobalCard from "../components/GlobalCard";
import NavBar from "../components/NavBar/NavBar";
import SingleInfo from "../components/SingleInfo";
import StudyCard from "../components/StudyCard";
import { colors } from "../styles/globalStyles";
import { StudyMessage } from "./messages/study-message";
import { GlobalCardMessage } from "./messages/global-card-message";
import { GeneralInfo } from "./messages/general-info";

const swDeveloper = "software-developer-640.jpg";
const research = "science_640.jpg";
const teaching = "mathematics_640.jpg";
const logoUmng = "umng.png";
const logoUfsc = "ufsc_v1.png";

const Abt = {
  container: styled.div`
    display: grid;
    grid-template-columns: 400px 800px auto;
  `,
  colMedium: styled.div`
    background-color: ${colors.bc2};
  `,
  hr: styled.hr`
    border-top: 1px solid #bbb;
    margin-left: 100px;
    margin-right: 100px;
  `,
  setCard: styled.div`
    height: 300px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 20px;
    margin-left: 100px;
    margin-right: 100px;
  `,
  lastColumn: styled.div`
    background-color: ${colors.bc1};
    widh: 100%;
  `,
  menu: styled.div``,
};

const About = () => {
  return (
    <Abt.container>
      <Abt.menu>
        <NavBar />
      </Abt.menu>
      <Abt.colMedium>
        <SingleInfo
          title={GeneralInfo.spa.aboutMe.title}
          description={GeneralInfo.spa.aboutMe.description}
        />
        <Abt.hr />
        <SingleInfo
          title={GeneralInfo.spa.experience.title}
          description={GeneralInfo.spa.experience.description}
        />
        <Abt.setCard>
          <GlobalCard
            title={GlobalCardMessage.spa.developer.title}
            description={GlobalCardMessage.spa.developer.description}
            urlFig={swDeveloper}
          />
          <GlobalCard
            title={GlobalCardMessage.spa.reseacher.title}
            description={GlobalCardMessage.spa.reseacher.description}
            urlFig={research}
          />
          <GlobalCard
            title={GlobalCardMessage.spa.professor.title}
            description={GlobalCardMessage.spa.professor.description}
            urlFig={teaching}
          />
        </Abt.setCard>
        <Abt.hr />
        <SingleInfo
          title="Study"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos harum eaque odit voluptas dolores exercitationem qui atque! Facilis officiis voluptatibus rem! Quia, at dignissimos repellat alias tenetur explicabo aperiam. Non. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis autem ea velit. Architecto iure cumque maxime, reprehenderit minima ut, accusantium, ipsum incidunt repudiandae nesciunt sint libero aliquid! Architecto perspiciatis ratione quas voluptatibus sit et asperiores nulla voluptas aut dolorem dolore repellat praesentium in, ipsam eius consequatur. Sapiente eum molestias"
        />
        <StudyCard
          title={StudyMessage.spa.titelPhd}
          university="Universidade Federal de Santa Catarina - UFSC"
          local="Florianópolis, SC, Brasil"
          year={2020}
          urlLogo={logoUfsc}
        />
        <StudyCard
          title={StudyMessage.spa.titleMsc}
          university="Universidade Federal de Santa Catarina - UFSC"
          local="Florianópolis, SC, Brasil"
          year={2012}
          urlLogo={logoUfsc}
        />
        <StudyCard
          title={StudyMessage.spa.titleEng}
          university="Universiad Militar Nueva Granada - UMNG"
          local="Florianópolis, SC, Brasil"
          year={2008}
          urlLogo={logoUmng}
        />
      </Abt.colMedium>
      <Abt.lastColumn>
        <div>Redes sociales</div>
        <div>Idiomas</div>
        <div>Lenguajes de programación</div>
      </Abt.lastColumn>
    </Abt.container>
  );
};

export default About;
