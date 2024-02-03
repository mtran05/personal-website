import { useEffect } from 'react';
import { toggle } from './../../App.js';
import '../../StyleSheets/OptionStyle/academic.css';
import emu from './../../Images/emu.png';

export default function Academic() {

    useEffect(() => {
        if(document.querySelector("#academic").getBoundingClientRect().top > document.documentElement.clientHeight) {
            document.querySelector("#academic").scrollIntoView(true);
        }
    });
    
    return(
        <div id="academic">
            <div class="h4 fw-bold text-decoration-underline">Test Scores</div>
            <div class="collection">
                <div class="card rounded">
                    <a href="#" onClick={e => e.preventDefault()} onFocus={() => {toggle("#sat")}} onBlur={() => {toggle("#sat")}}><i class="fa fa-caret-square-o-right"></i></a>
                    <span class="card-text fw-bold">SAT</span>
                    <div id="sat" class="hidden rounded">
                        EBRW: 630<br/>
                        Math: 800<br/>
                        Total: 1430
                    </div>
                </div>
            </div>
            
            <div id="transcript"><span class="h4 fw-bold text-decoration-underline">Transcript</span></div>
            <div class="collection">
                <div class="card rounded">
                    <a href="#" onClick={e => e.preventDefault()} onFocus={() => {getData("fall 2023", "#fa23"); toggle("#fa23")}}><i class="fa fa-caret-square-o-right"></i></a>
                    <span class="card-text fw-bold">Fall 2023</span>
                    <div id="fa23" class="hidden rounded content">
                    </div>
                </div>

                <div class="card rounded">
                    <a href="#" onClick={e => e.preventDefault()} onFocus={() => {getData("winter 2024", "#wi24"); toggle("#wi24")}}><i class="fa fa-caret-square-o-right"></i></a>
                    <span class="card-text fw-bold">Winter 2024</span>
                    <div id="wi24" class="hidden rounded content">
                    </div>
                </div>
            </div>
        </div>
    );
}

//------------------------------------------------------------------------------------------------------------------------------------

export async function getData(target, element, logo=null) {
    if(!document.querySelector(`${element}`).innerHTML) {
        let data = (await (await fetch(`https://p-website-backend-2bab0b8dbecb.herokuapp.com/academic/${target}`)).json())[0];
        //console.log(data);

        if(logo) {console.log("hey")}

        let button = document.createElement("a");
        button.setAttribute("href", "#");
        let icon = document.createElement("i");
        icon.setAttribute("class", "fa fa-close");
        button.appendChild(icon);
        button.addEventListener("click", e => {e.preventDefault(); toggle(`${element}`);});
        document.querySelector(`${element}`).appendChild(button);

        let bold = document.createElement("strong");
        bold.appendChild(document.createTextNode(String(data.term).toUpperCase()));
        document.querySelector(`${element}`).appendChild(bold);
        document.querySelector(`${element}`).appendChild(document.createElement("br"));
        document.querySelector(`${element}`).appendChild(document.createTextNode(`Total credits: ${data.term_credits} hours`));
        document.querySelector(`${element}`).appendChild(document.createElement("br"));
        document.querySelector(`${element}`).appendChild(document.createTextNode(`GPA: ${data.term_gpa}`));

        let table = document.createElement("table");
        table.setAttribute("class", "table table-hover mt-2");
        let thead = document.createElement("thead");
        let tbody = document.createElement("tbody");
        tbody.setAttribute("class", "table-group-divider");

        let row = document.createElement("tr");
        let col0 = document.createElement("th");
            col0.setAttribute("scope", "col");
            col0.appendChild(document.createTextNode("Course"));
        let col1 = document.createElement("th");
            col1.setAttribute("scope", "col");
            col1.appendChild(document.createTextNode("Description"));
        let col2 = document.createElement("th");
            col2.setAttribute("scope", "col");
            col2.setAttribute("class", "text-center");
            col2.appendChild(document.createTextNode("Credits"));
        let col3 = document.createElement("th");
            col3.setAttribute("scope", "col");
            col3.setAttribute("class", "text-center");
            col3.appendChild(document.createTextNode("Grade"));
        row.appendChild(col0);
        row.appendChild(col1);
        row.appendChild(col2);
        row.appendChild(col3);
        thead.appendChild(row);
        table.appendChild(thead);

        for(let e of data["info"]) {
            let row = document.createElement("tr");

            let col0 = document.createElement("td");
            col0.appendChild(document.createTextNode(e.course_id));

            let col1 = document.createElement("td");
            col1.appendChild(document.createTextNode(e.course_description));

            let col2 = document.createElement("td");
            col2.setAttribute("class", "text-center");
            col2.appendChild(document.createTextNode(e.credit_hours));

            let col3 = document.createElement("td");
            col3.setAttribute("class", "text-center");
            col3.appendChild(document.createTextNode(e.grade));

            row.appendChild(col0);
            row.appendChild(col1);
            row.appendChild(col2);
            row.appendChild(col3);
            tbody.appendChild(row);
        }
        table.appendChild(tbody);
        document.querySelector(`${element}`).appendChild(table);
    }
}