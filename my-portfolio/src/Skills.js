import React from "react";
import SkillCard from "./SkillCard";
import "./Skills.css";

const Skills = () => {
  return (
    <section id="skill-header" className="d-flex align-items-center">
      <div className="container-fluid ">
        <div className="skill-row">
          <div className="skill-topic">
            <p>Skills</p>
          </div>
          <div className="skill-info">
            <h4>
              Here are my skills in which I have worked & have some great
              experience in it...
            </h4>
            <SkillCard
              title="ReactJs"
              info="I lovdnvivvvvvvv ijdfosinnnnnnn dsovfiinsa sjrfdnnnnnn ifiosansdi
                    fodsjainnfdjvs dsfsbafjs"
              percent="105%"
            />
            <SkillCard
              title="Javascript"
              info="I lovdnvivvvvvvv ijdfosinnnnnnn dsovfiinsa sjrfdnnnnnn ifiosansdi
                    fodsjainnfdjvs dsfsbafjs"
              percent="105%"
            />
            <SkillCard
              title="Python"
              info="I lovdnvivvvvvvv ijdfosinnnnnnn dsovfiinsa sjrfdnnnnnn ifiosansdi
                    fodsjainnfdjvs dsfsbafjs"
              percent="102%"
            />
            <SkillCard
              title="Git & Github"
              info="I lovdnvivvvvvvv ijdfosinnnnnnn dsovfiinsa sjrfdnnnnnn ifiosansdi
                    fodsjainnfdjvs dsfsbafjs"
              percent="100%"
            />
            <SkillCard
              title="C++"
              info="I lovdnvivvvvvvv ijdfosinnnnnnn dsovfiinsa sjrfdnnnnnn ifiosansdi
                    fodsjainnfdjvs dsfsbafjs"
              percent="95%"
            />
            <SkillCard
              title="Data Structures & algorithms"
              info="I lovdnvivvvvvvv ijdfosinnnnnnn dsovfiinsa sjrfdnnnnnn ifiosansdi
                    fodsjainnfdjvs dsfsbafjs"
              percent="85%"
            />
            <SkillCard
              title="Vs code"
              info="I lovdnvivvvvvvv ijdfosinnnnnnn dsovfiinsa sjrfdnnnnnn ifiosansdi
                    fodsjainnfdjvs dsfsbafjs"
              percent="80%"
            />
            <SkillCard
              title="firebase"
              info="I lovdnvivvvvvvv ijdfosinnnnnnn dsovfiinsa sjrfdnnnnnn ifiosansdi
                    fodsjainnfdjvs dsfsbafjs"
              percent="75%"
            />
            <SkillCard
              title="Mongo db"
              info="I lovdnvivvvvvvv ijdfosinnnnnnn dsovfiinsa sjrfdnnnnnn ifiosansdi
                    fodsjainnfdjvs dsfsbafjs"
              percent="70%"
            />
            <SkillCard
              title="Nodejs"
              info="I lovdnvivvvvvvv ijdfosinnnnnnn dsovfiinsa sjrfdnnnnnn ifiosansdi
                    fodsjainnfdjvs dsfsbafjs"
              percent="60%"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
