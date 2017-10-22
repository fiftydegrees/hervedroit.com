import React from 'react';
// import { Link } from 'react-router-dom';
import HeroHeaderWithPhoto from '../../components/specific/HeroHeaderWithPhoto';
import DownloadResumeArea from '../../components/specific/DownloadResumeArea';
import ArticlesArea from '../../components/specific/ArticlesArea';
import ProjectsArea from '../../components/specific/ProjectsArea';

class Home extends React.Component {
    render() {
        return (
            <div>
                <HeroHeaderWithPhoto />
                <DownloadResumeArea />
                <ArticlesArea />
                <ProjectsArea />
            </div>
        );
    }
}

module.exports = Home;
