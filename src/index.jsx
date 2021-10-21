import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/header';
import Contacts from './components/contacts';
import Personalinfo from './components/personal-info';
import Skills from './components/skills';
import Projects from './components/projects/projects';
import WorkingExperience from './components/working-experience';
import Education from './components/education';
import EnglishLanguageSkills from './components/english';

    const Cv = () => {

    const skills = [
        {label: "OOP", id: 1},
        {label:"HTML", id: 2},
        {label:"CSS", id: 3},
        {label:"BEM", id: 4},
        {label:"JavaScript", id: 5},
        {label:"React", id: 6},
        {label:"Agile", id: 7},
        {label:"Scrum", id: 8},
        {label:"Jira", id: 9},
        {label:"Git", id: 10}
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
                    <Projects />
                </section>
                <section className="mainPageContainer__rightPart">
                    <WorkingExperience />
                    <Education />
                    <EnglishLanguageSkills />
                </section>
            </main>
        </div>
    </div>
    );
}

ReactDOM.render(<Cv />,
    document.getElementById('root')
);