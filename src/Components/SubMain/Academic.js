import { useEffect } from 'react';
import '../../StyleSheets/OptionStyle/academic.css';

function Academic() {
    return(
        <div id="academic">
            <div class="h4 fw-bold">Test Scores</div>
            <div class="collection">
                <div class="card rounded fw-bold">
                    <a href="#" onClick={e => e.preventDefault()} onFocus={() => {toggle("#sat")}} onBlur={() => {toggle("#sat")}}><i class="fa fa-caret-square-o-right"></i></a>
                    <span class="card-text">SAT</span>
                    <div id="sat" class="hidden rounded">
                        EBRW: 630<br/>
                        Math: 800<br/>
                        Total: 1430
                    </div>
                </div>
                
            </div>
        </div>
    );
}

function toggle(element) {
    document.querySelector(`${element}`).classList.toggle("hidden");
}

export default Academic;    