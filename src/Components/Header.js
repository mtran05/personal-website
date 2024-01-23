import { Link } from 'react-router-dom';
import HTMLicon from '../Images/html-icon.png';
import projectIcon from '../Images/project-icon.png';
import resumeIcon from '../Images/resume-icon.png';
import schoolIcon from '../Images/school-icon.png';

function Header() {
    return (
        <header>
            <nav class="navbar navbar-expand-sm navbar-light fixed-top bg-custom">
                <div class="container-fluid">
                    <ul class="navbar-nav">
                        <img class="nav-item nav-icon" src={HTMLicon}/>
                        <li class="nav-item">
                            <Link to="/"><a class="nav-link"><strong>About me</strong></a></Link>
                        </li>

                        <img class="nav-item nav-icon" src={resumeIcon}/>
                        <li class="nav-item">
                            <Link to="/resume"><a class="nav-link"><strong>Resume</strong></a></Link>
                        </li>

                        <img class="nav-item nav-icon" src={projectIcon}/>
                        <li class="nav-item">
                            <Link to="/projects"><a class="nav-link" href="#"><strong>Projects</strong></a></Link>
                        </li>

                        <img class="nav-item nav-icon" src={schoolIcon}/>
                        <li class="nav-item">
                            <Link to="/academic"><a class="nav-link" href="#"><strong>Academic Records</strong></a></Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;