import '../../StyleSheets/OptionStyle/projects.css';
import xyz from '../../Images/xyz.png';

function Projects() {
    return(
        <div id="projects">
            <div class="row">
                <div class="col-xl-6">
                    <div class="card rounded">
                        <div id="Desmosv2" class="card-body">
                            <div class="card-title fw-bold h4"><span class="text-decoration-underline">Desmos 2.0</span> <i class='fas fa-calculator'></i>  <img id="xyz" src={xyz}></img></div>
                            <p class="card-text small"><span class="fw-bold">Description:</span>
                            &nbsp;Inherites basic Desmos features and enables graphing in 3D dimension</p>
                            <p class="card-text small"><span class="fw-bold">Progress:</span> Planning <i class='fas fa-circle rounded-circle'></i><br/>
                            <span class="fw-bold">Source Code:</span> Not yet published</p>
                        </div>
                    </div>
                </div>
                
                <div class="col-xl-6">
                    <div class="card rounded">
                        <div id="Crypto" class="card-body">
                            <div class="card-title fw-bold h4"><span class="text-decoration-underline">CDM</span> <i class='fas fa-database'></i></div>
                            <p class="card-text small"><span class="fw-bold">Description:</span>
                            &nbsp;Stands for "Cryptocurrency Data Manager", made with React & Node</p>
                            <p class="card-text small"><span class="fw-bold">Progress:</span> Debugging <i class='fas fa-circle rounded-circle'></i><br/>
                            <span class="fw-bold">Source Code:</span> Not yet published (Soon)</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-xl-6">
                    <div class="card rounded">
                        <div id="MalphaX" class="card-body">
                            <div class="card-title fw-bold h4"><span class="text-decoration-underline">MalphaX</span> <i class='fas fa-microchip'></i></div>
                            <p class="card-text small"><span class="fw-bold">Description:</span>
                            &nbsp;Data visualizer and analyzer AI</p>
                            <p class="card-text small"><span class="fw-bold">Progress:</span> Planning <i class='fas fa-circle rounded-circle'></i><br/>
                            <span class="fw-bold">Source Code:</span> Not yet published</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;