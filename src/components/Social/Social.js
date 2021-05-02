import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram'

const Social = () => {
    return (
        <div className="mt-5 mb-4 ml-2">
            <a className="p-2" target="blank" href="https://www.linkedin.com/in/md-rakibul-hasan-44b7b0201/"><LinkedInIcon className="svg-icons mr-3 mb-4" /></a>
            <a className="p-2" target="blank" href="https://github.com/rakibulhasan933/"><GitHubIcon className="github-icon mr-3 mb-4" /></a>
            <a className="p-2" target="blank" href="mailto:rakibulmd933@gmail.com"><EmailIcon className="svg-icons mr-3 mb-4" /></a>
            <a className="p-2" target="blank" href="https://www.instagram.com/mdrakibulhassan.rakib/"><InstagramIcon className="svg-icons mr-3 mb-4" /></a>
            <a className="p-2" target="blank" href="https://www.facebook.com/mdrakibulhassan.rakib6/"><FacebookIcon className="svg-icons mb-4" /></a>
        </div>
    );
};

export default Social;