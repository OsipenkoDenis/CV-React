import React from 'react';

const Skills = ({ skills }) => {
    
    const skillList = skills.map((item) => {
        return(
            <li key={item.id}>{item.label}</li>
        );
    });
    return (
        <article className="skills">
            <h3 className="skills__header">Skills</h3>
            <ul className="skills__list">
                { skillList }
            </ul>
        </article>
    );
}

export default Skills;