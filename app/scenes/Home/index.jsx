import React from 'react';
import HeroHeaderWithPhoto from '../../components/specific/HeroHeaderWithPhoto';
import ContactArea from '../../components/specific/ContactArea';
import CSSModules from 'react-css-modules';
import DownloadResumeArea from '../../components/specific/DownloadResumeArea';
import ArticlesArea from '../../components/specific/ArticlesArea';
import ProjectsArea from '../../components/specific/ProjectsArea';
import styles from './Home.scss';

class Home extends React.Component {
    render() {
        return (
            <div>
                <HeroHeaderWithPhoto />
                <DownloadResumeArea />
                <ArticlesArea />
                <ProjectsArea />
                <ContactArea />
            </div>
        );
    }
}

export default CSSModules(Home, styles);
