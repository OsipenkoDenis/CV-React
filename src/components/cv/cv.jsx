// eslint-disable-next-line prettier/prettier
import React from "react";
import Header from "../header";
import Contacts from "../contacts";
import Personalinfo from "../personal-info";
import Skills from "../skills";
import Projects from "../projects";
import WorkingExperience from "../working-experience";
import Education from "../education";
import EnglishLanguageSkills from "../english";
import "./cv.css";

const Cv = () => {

    const skills = [
        {label: "OOP", id: 1},
        {label:"HTML", id: 2},
        {label:"CSS", id: 3},
        {label:"SASS", id: 4},
        {label:"BEM", id: 5},
        {label:"JavaScript", id: 6},
        {label:"React", id: 7},
        {label:"Agile", id: 8},
        {label:"Scrum", id: 9},
        {label:"Jira", id: 10},
        {label:"Git", id: 11},
        {label:"Jest", id: 12}
    ];
    return(
    <div className="mainPageWrapper">
        <div className="mainPageContainer">
            <Header />
            <main className="mainPageContainer__content">
                <section className="mainPageContainer__leftPart">
                    <Contacts />
                    <Personalinfo />
                    <Skills skills={skills}/>
                </section>
                <section className="mainPageContainer__rightPart">
                    <Projects />
                    <WorkingExperience />
                    <Education />
                    <EnglishLanguageSkills />
                </section>
            </main>
        </div>
    </div>
    );
}
export default Cv;