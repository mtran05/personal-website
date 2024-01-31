import { Link } from 'react-router-dom';
import HTMLicon from '../Images/html-icon.png';
import projectIcon from '../Images/project-icon.png';
import resumeIcon from '../Images/resume-icon.png';
import schoolIcon from '../Images/school-icon.png';
import { useEffect } from 'react';

export default function Header() {

    useEffect(() => {
        setTimeout(() => {
            document.querySelector("#load-status").classList.remove("load0");
            document.querySelector("#load-status").classList.add("load1");
        }, 0);
    });

    return (
        <header class="fixed-top bg-custom">
            <nav class="navbar navbar-expand-md navbar-light">
                <ul class="navbar-nav collapse navbar-collapse">
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
                        <Link to="/projects"><a class="nav-link"><strong>Projects</strong></a></Link>
                    </li>
                    <img class="nav-item nav-icon" src={schoolIcon}/>
                    <li class="nav-item">
                        <Link to="/academic"><a class="nav-link"><strong>Academic Records</strong></a></Link>
                    </li>
                </ul>
            </nav>
            <a class="nav-link" href="#" onClick={e => {e.preventDefault(); document.querySelector("#side-nav").classList.toggle("hiddenN");}}><i id="side-nav-button" class="fa fa-bars"></i></a>
            <div id="side-nav" class="rounded hiddenN">
                <nav class="navbar">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link to="/"><a class="nav-link"><i class='fas fa-info-circle'></i><strong>&ensp;About me</strong></a></Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/resume"><a class="nav-link"><i class='far fa-file-alt'></i><strong>&ensp;Resume</strong></a></Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/projects"><a class="nav-link"><i class='fas fa-tools'></i><strong>&ensp;Projects</strong></a></Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/academic"><a class="nav-link"><i class='fas fa-award'></i><strong>&ensp;Academic Records</strong></a></Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}