import React from 'react';
// import { Link } from 'react-router-dom';
import HeroHeaderWithPhoto from '../../components/specific/HeroHeaderWithPhoto';
import DownloadResumeArea from '../../components/specific/DownloadResumeArea';

class Home extends React.Component {
    render() {
        return (
            <div>
                <HeroHeaderWithPhoto />
                <DownloadResumeArea />
            </div>
        );
    }
}

module.exports = Home;
