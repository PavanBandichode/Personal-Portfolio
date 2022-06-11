import data from "../constants/constatnt";
import Basic from "./Basic";

const Skills = () => {
  let { basic, frontEnd, backEnd, buildTools, other } = data.techStack[0];

  return (
    <>
      <section className="skill-page">
        {" "}
        <h1>Skills...</h1>
        <div className="container">
          <Basic data={basic} title="Basic" />
          <Basic data={frontEnd} title="FrontEnd" />

          <Basic data={backEnd} title="BackEnd" />

          <Basic data={buildTools} title="BuildTools" />

          <Basic data={other} title="Other" />
        </div>
      </section>
    </>
  );
};

export default Skills;
