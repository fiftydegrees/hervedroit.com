import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './ProjectsArea.scss';
import Project from './Project';
import DSProjects from '../../../assets/data/projects.json';

const getProjects = () => (DSProjects.projects);

class ProjectsArea extends Component {
    render() {
        return (
            <div
                className={'flex-container section section-light'}
                styleName='ProjectsArea'>
                <div
                    className={'area flex-d flex-d-column flex-ai flex-ai-center flex-jc flex-jc-center'}>
                    <h2>
                        {'Side Projects'}
                    </h2>
                    <p>
                        {'I love to deal with side projects to improve my development skills, test new concepts or even realize crazy ideas such as pitching in the subway.'}
                    </p>
                    <hr />
                    <h3>
                        {'Latest Projects'}
                    </h3>
                    {
                        getProjects()
                            .map((project) => {
                                return (
                                    <Project
                                        CTA={project.CTA}
                                        key={project.key}
                                        link={project.link}
                                        rawDescription={project.rawDescription}
                                        title={project.title}
                                        vectors={project.vectors}
                                        year={project.year} />
                                );
                            })
                    }
                </div>
            </div>
        );
    }
}

export default CSSModules(ProjectsArea, styles);
