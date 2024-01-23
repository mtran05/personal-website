import pfp from '../Images/pfp.jpg';
import defaultPFP from '../Images/default.png';

import { Route, Routes } from 'react-router-dom';
import About from './SubMain/About.js'
import Academic from './SubMain/Academic.js';
import Resume from './SubMain/Resume.js';
import Projects from './SubMain/Projects.js';

function Main() {
    return(
        <main>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-4">
                        <div class="card rounded">
                            <img class="card-img-top" src={defaultPFP}></img>
                            <div class="card-body">
                                <h3 class="card-title text-center"><strong>Quoc Thinh Tran</strong></h3>
                                <p class="card-text">Bachelor of Applied Science in Computer Science at Eastern Michigan University – Honors Program</p>
                                <p class="card-text">
                                    <strong>Expertise and Interest:</strong><br/>
                                    Front-end design<br/>
                                    API development<br/>
                                    Ethical hacking<br/>
                                    Machine learning<br/>
                                </p>
                                <p class="card-text">
                                    <strong>Programming skills:</strong><br/>
                                    Java, Python, JavaScript (React, Express & Node.js), HTML5 & CSS3 (Bootstrap5), MongoDB, Git
                                </p>
                                <p class="card-text">
                                    Still improving myself everyday~
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-8 wrapper">
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