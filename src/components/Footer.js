import React from "react";
import './Footer.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default () => {
    const linkVideo = 'https://www.youtube.com/watch?v=tBweoUiMsDg';
    const linkGithub = 'https://github.com/samuelrebula';
    const linkLinkedin = 'https://www.linkedin.com/in/samuel-rebula/';

    return (
        <footer>
            <div className="footer--references">
                Feito para estudo durante o The Odin Project. <br/>
                por Samuel Rebula <br/>
                    <div className="footer--socials">
                
                        <a href={linkGithub} target="_blank" rel="noopener noreferrer">
                            <GitHubIcon style={{ margin: '0 8px', fontSize: '42px', color: 'white' }} />
                        </a>
                        <a href={linkLinkedin} target="_blank" rel="noopener noreferrer">
                            <LinkedInIcon style={{ margin: '0 8px', fontSize: '42px', color: 'white' }} />
                        </a>
                    </div>
                Direitos de imagem para Netflix <br/>
                Dados obtidos do site Themoviedb.org <br/>
                Referência: <a href={linkVideo} target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>
                    Clone do NETFLIX em REACTJS</a>
                <a> por Bonieky Lacerda</a>
                
            </div>
        </footer>
    )
}