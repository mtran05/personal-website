import pfp from '../Images/pfp.jpg';
import defaultPFP from '../Images/default.png';

import { Route, Routes } from 'react-router-dom';
import About from './SubMain/About.js'
import Academic from './SubMain/Academic.js';
import Resume from './SubMain/Resume.js';
import Projects from './SubMain/Projects.js';
import { useEffect } from 'react';

function Main() {

    useEffect(() => {
        setTimeout(() => {
            document.querySelector("#load-status").classList.remove("load1");
            document.querySelector("#load-status").classList.add("load2");
        }, 1000/2);
    });

    return(
        <main>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-4 divide">
                        <div id="main" class="card rounded">
                            <img class="card-img-top" src={defaultPFP}></img>
                            <div class="card-body">
                                <h3 class="card-title text-center"><strong>Quoc Thinh Tran</strong></h3>
                                <p class="card-text">
                                    <i class='fas fa-graduation-cap'></i> Bachelor of Applied Science in Computer Science 
                                    at Eastern Michigan University – Honors Program
                                </p>
                                <p class="card-text">
                                    <strong>Expertise and Interest:</strong><br/>
                                    <i class='fas fa-code'></i> Front-end design<br/>
                                    <i class='fas fa-server'></i> API development<br/>
                                    <i class='fas fa-user-secret'></i> Ethical hacking<br/>
                                    <i class='fas fa-project-diagram'></i> Machine learning<br/>
                                </p>
                                <p class="card-text">
                                    <strong>Programming skills:</strong><br/>
                                    <i class='fas fa-terminal'></i> Java, Python, JavaScript (React, Express & Node.js), 
                                    HTML5 & CSS3 (Bootstrap5), MongoDB, Git
                                </p>
                                <p class="card-text">
                                <i class='fas fa-book-reader'></i> Still improving myself everyday~
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-lg-8 wrapper">
                        <Routes>
                            <Route path="/" element={<About/>}></Route>
                            <Route path="/resume" element={<Resume/>}></Route>
                            <Route path="/projects" element={<Projects/>}></Route>
                            <Route path="/academic" element={<Academic/>}></Route>
                        </Routes>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Main;