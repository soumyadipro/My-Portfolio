import React from "react";
import {
  workImgOne,
  workImgTwo,
  workImgThree,
  workImgFour,
  workImgFive,
  workImgSix,
  workImgSeven,
  workImgEight,
  workImgNine,
  workImgTen,
  workImgEleven,
  workImgTwelve
} from "../../assets";
import Title from "../home/Title";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <div>
      <Title title="Recent" subTitle="Projects" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 lgl:gap-10">
        <div className="px-6">
          <ProjectsCard
            title="KnowHive"
            category="Automate field engineer resolution notes to knowledge articles using React.js, Python, Tailwind.css, Hugging Face GPT-2, Flask, and REST APIs"
            image={workImgThree}
            githubLink=" https://github.com/SRDJ7/KnowHive-Frontend"
          />
          <ProjectsCard
            title="R-Cell"
            category="Developed a secure cryptocurrency platform utilizing HTML, CSS, JS, SQL, and blockchain technology to ensure robust 
            cryptographic security against counterfeiting and double-spending."
            image={workImgOne}
            githubLink="https://github.com/soumyadipro/R"
          />
          <ProjectsCard
            title="CSE Elective Navigator"
            category="Student app: login, elective selection, admin database, dashboards. Built with Node.js, Java, Android Studio, MySQLite, AWS."
            image={workImgTwo}
            githubLink="https://github.com/soumyadipro/CSE-Elective-Navigator"
          />
          <ProjectsCard
            title="Patient Load Balancer"
            category="Crafted a crucial medical resource assistance API utilizing MuleSoft, React.js, Python, MongoDB, and AWS infrastructure to offer essential aid during critical situations."
            image={workImgFive}
            githubLink="https://github.com/soumyadipro/Patient-Load-Balancer"
          />
          <ProjectsCard
            title="Sales Report"
            category="Crafted dynamic Power BI Sales reports with Microsoft Power BI, Spark, Kafka, and Hadoop, driving informed sales and marketing decisions."
            image={workImgTwelve}
            githubLink="https://github.com/soumyadipro/Sales-Report"
          />
          <ProjectsCard
            title="Tokyo Olympics"
            category="Implemented Python on Azure with Spark, Kafka, Snowflake, and Hadoop for real-time data analysis during the Tokyo Olympics, improving decision-making and event management while enhancing the athlete and fan experience."
            image={workImgTen}
            githubLink="https://github.com/soumyadipro/Tokyo-Olympics"
          />
        </div>
        <div className="px-6">
          <ProjectsCard
            title="Cybernated Cryptography"
            category="Built Java-based CYBERNATED CRYPTOGRAPHY using Swing for secure data transmission, preserving confidentiality."
            image={workImgFour}
            githubLink="https://github.com/soumyadipro/Cybernated-Cryptography"
          />
          <ProjectsCard
            title="Automated Referendum Tactics"
            category="Revolutionized voting with an online platform, Automated Referendum Tactic, enabling remote voting for candidates using C programming language."
            image={workImgSix}
            githubLink="https://github.com/soumyadipro/Automated-Referendum-Tactics"
          />
          <ProjectsCard
            title="Wildfire Analytics"
            category="Developed AWS Wildfire Analytics: Python and AWS used for data-driven wildfire management with advanced analytics and ML for improved emergency response."
            image={workImgEight}
            githubLink="https://github.com/soumyadipro/Wildfire-Analytics"
          />
          <ProjectsCard
            title="Accident Analysis"
            category="Enhanced accident analysis with Power BI, leveraging Python and Azure, to visualize data, identify patterns, and enhance safety measures for informed decision-making."
            image={workImgSeven}
            githubLink="https://github.com/soumyadipro/Accident-Analysis"
          />
          <ProjectsCard
            title="Counterfeit Anatomizer"
            category="Employed Python in Jupyter Notebook for ML-based classification of fake currency, including market duplicity checks, enhancing currency security measures."
            image={workImgNine}
            githubLink="https://github.com/soumyadipro/Counterfeit-Anatomizer"
          />
          <ProjectsCard
            title="Bayesian Architecture"
            category="Proposing an innovative vulnerability analysis architecture employing auto-encoding Bayesian algorithms, utilizing Python and ML, to enhance security by automatically identifying and assessing potential risks in computer systems."
            image={workImgEleven}
            githubLink="https://github.com/soumyadipro/VULNERABILITY-SCANNING-ARCHITECTURE-UTLIZING-AUTO-ENCODED-BAYESIAN-ALGORITHM"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
