import React from "react";
import ResumeTitle from "./ResumeTitle";
import { MdWork } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <div className="w-full grid grid-cols-9 px-6">
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Experience" icon={<MdWork />} />
        <ResumeCard
          badge="Feb'23-April'23"
          title="Data Analyst Intern"
          subTitle="CAIR,DRDO"
          des="Developed an ML-powered document classifier utilizing Apache Spark, Python, and Apache Kafka for scalable processing of 
          large document volumes; also contributed to Rakshak Arohan, a women's security project, employing HTML, CSS, JS, and 
          Python for crime rate prediction."
        />
       
      </div>
      <div className="w-full h-full hidden lgl:flex justify-center items-center">
        <span className="w-[1px] h-full bg-zinc-800 inline-flex"></span>
      </div>
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Education" icon={<GiGraduateCap />} />
        <ResumeCard
          badge="2019 - 2023"
          title="New Horizon College of Engineering"
          subTitle="Bangalore"
          des="Branch-CSE,CGPA-9.29"
        />
        <ResumeCard
          badge="2018 - 2019"
          title="Holy Rock School (XII)"
          subTitle="Burdwan"
          des="Marks-75.16%"
        />
        
      
      </div>
    </div>
  );
};

export default Education;
