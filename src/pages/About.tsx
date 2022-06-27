import styled from "styled-components";
import GlobalCard from "../components/GlobalCard";
import NavBar from "../components/NavBar/NavBar";
import SingleInfo from "../components/SingleInfo";
import { colors } from '../styles/globalStyles';

const swDeveloper = 'software-developer-640.jpg';
const research = 'science_640.jpg';
const teaching = 'mathematics_640.jpg';

const Abt = {
  Container: styled.div`
    display: grid;
    grid-template-columns: 560px 800px auto;
  `,
  ColMedium: styled.div`
    background-color: ${colors.bc2};
  `,
  HR: styled.hr`
    border-top: 1px solid #bbb;
    margin-left: 100px;
    margin-right: 100px;
  `,
  SetCard: styled.div`
    height: 300px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 20px;
    margin-left: 100px;
    margin-right: 100px;
  `
}

function About() {
  return (
    <Abt.Container>
      <div>
        <NavBar />
      </div>
      <Abt.ColMedium>
        <SingleInfo
          title="Summary"
          description="Hi there 👋, I am a Telecommunications engineer and Full-Stack developer using the MERN Stack and, also, familiarized with software development using agile methodologies such as SCRUM. Daily I use: React, Javascript, CSS, Styled-components, Nodejs. I have more than 13 years of experience in telecommunication system research and, among them, 3 years as professor in systems and telecommunications engineering, in Brasilian and Colombian universities."
        />
        <Abt.HR/>
        <SingleInfo
          title="Experience"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos harum eaque odit voluptas dolores exercitationem qui atque! Facilis officiis voluptatibus rem! Quia, at dignissimos repellat alias tenetur explicabo aperiam. Non. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis autem ea velit. Architecto iure cumque maxime, reprehenderit minima ut, accusantium, ipsum incidunt repudiandae nesciunt sint libero aliquid! Architecto perspiciatis ratione quas voluptatibus sit et asperiores nulla voluptas aut dolorem dolore repellat praesentium in, ipsam eius consequatur. Sapiente eum molestias"
        />
        <Abt.SetCard>
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
        </Abt.SetCard>
        <Abt.HR/>
        <SingleInfo
          title="Study"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos harum eaque odit voluptas dolores exercitationem qui atque! Facilis officiis voluptatibus rem! Quia, at dignissimos repellat alias tenetur explicabo aperiam. Non. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis autem ea velit. Architecto iure cumque maxime, reprehenderit minima ut, accusantium, ipsum incidunt repudiandae nesciunt sint libero aliquid! Architecto perspiciatis ratione quas voluptatibus sit et asperiores nulla voluptas aut dolorem dolore repellat praesentium in, ipsam eius consequatur. Sapiente eum molestias"
        />
      </Abt.ColMedium>
      <div>
        col 3
      </div>
    </Abt.Container>
  )
}

export default About
