import styled from "styled-components";
import GlobalCard from "../components/GlobalCard";
import NavBar from "../components/NavBar/NavBar";
import SingleInfo from "../components/SingleInfo";
import StudyCard from "../components/StudyCard";
import { colors } from "../styles/globalStyles";

const swDeveloper = "software-developer-640.jpg";
const research = "science_640.jpg";
const teaching = "mathematics_640.jpg";
const logoUmng = "umng.png";
const logoUfsc = "ufsc_v1.png";

const Abt = {
  container: styled.div`
    display: grid;
    grid-template-columns: 400px 1000px auto;
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
};

const About = () => {
  return (
    <Abt.container>
      <div>
        <NavBar />
      </div>
      <Abt.colMedium>
        <SingleInfo
          title="Summary"
          description="Hi there 👋, I am a Telecommunications engineer and Full-Stack developer using the MERN Stack and, also, familiarized with software development using agile methodologies such as SCRUM. Daily I use: React, Javascript, CSS, Styled-components, Nodejs. I have more than 13 years of experience in telecommunication system research and, among them, 3 years as professor in systems and telecommunications engineering, in Brasilian and Colombian universities."
        />
        <Abt.hr />
        <SingleInfo
          title="Experience"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos harum eaque odit voluptas dolores exercitationem qui atque! Facilis officiis voluptatibus rem! Quia, at dignissimos repellat alias tenetur explicabo aperiam. Non. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis autem ea velit. Architecto iure cumque maxime, reprehenderit minima ut, accusantium, ipsum incidunt repudiandae nesciunt sint libero aliquid! Architecto perspiciatis ratione quas voluptatibus sit et asperiores nulla voluptas aut dolorem dolore repellat praesentium in, ipsam eius consequatur. Sapiente eum molestias"
        />
        <Abt.setCard>
          <GlobalCard
            title="Developer"
            description="asdjsalkd jlksadj lksajdsalk jdlk"
            urlFig={swDeveloper}
          />
          <GlobalCard
            title="Researcher"
            description="asdjsalkd jlksadj lksajdsalk jdlk"
            urlFig={research}
          />
          <GlobalCard
            title="Professor"
            description="asdjsalkd jlksadj lksajdsalk jdlk"
            urlFig={teaching}
          />
        </Abt.setCard>
        <Abt.hr />
        <SingleInfo
          title="Study"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos harum eaque odit voluptas dolores exercitationem qui atque! Facilis officiis voluptatibus rem! Quia, at dignissimos repellat alias tenetur explicabo aperiam. Non. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis autem ea velit. Architecto iure cumque maxime, reprehenderit minima ut, accusantium, ipsum incidunt repudiandae nesciunt sint libero aliquid! Architecto perspiciatis ratione quas voluptatibus sit et asperiores nulla voluptas aut dolorem dolore repellat praesentium in, ipsam eius consequatur. Sapiente eum molestias"
        />
        <StudyCard
          title="PhD, Electrical Engineer"
          university="Universidade Federal de Santa Catarina - UFSC"
          local="Florianópolis, SC, Brasil"
          year={2020}
          urlLogo={logoUfsc}
        />
        <StudyCard
          title="MSc, Electrical Engineer"
          university="Universidade Federal de Santa Catarina - UFSC"
          local="Florianópolis, SC, Brasil"
          year={2012}
          urlLogo={logoUfsc}
        />
        <StudyCard
          title="Eng, Telecommunications Engineer"
          university="Universiad Militar Nueva Granada - UMNG"
          local="Florianópolis, SC, Brasil"
          year={2008}
          urlLogo={logoUmng}
        />
      </Abt.colMedium>
      <div>col 3</div>
    </Abt.container>
  );
};

export default About;
