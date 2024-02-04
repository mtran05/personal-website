import { useEffect } from 'react';
import { toggle } from './../../App.js';
import '../../StyleSheets/OptionStyle/academic.css';
import emu from './../../Images/emu.png';
import sat from './../../Images/SAT.jpg';

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
                    <a href="#" onClick={e => e.preventDefault()} onFocus={() => {toggle("#sat")}}><i class="fa fa-caret-square-o-right"></i></a>
                    <span class="card-text fw-bold">Digital SAT</span>
                    <div id="sat" class="hidden rounded">
                        <a href='#' onClick={e => {e.preventDefault(); toggle("#sat")}}><i class="fa fa-close"></i></a>
                        <img src={sat}></img>
                        <strong>SAT</strong> – Scholastic Assessment Test<br/>
                        <strong>Overall: 1430</strong><br/>
                        Date Taken: March 11, 2023<br/>
                        <div class="row">
                            <div class="col-lg" style={{padding: "0 1.3rem", marginTop: "1rem"}}>
                                <span class="fw-bold" style={{display: "block", marginBottom: 0.3 + 'rem', paddingBottom: 0.3 + 'rem', borderBottom: "1.5pt solid black"}}>Evidence-Based Reading & Writing: 630</span>
                                Information and Ideas<br/>
                                <div class="bar rounded">   <div class="e e3-7"></div>    </div>
                                Craft and Structure<br/>
                                <div class="bar rounded">   <div class="e e4-7"></div>    </div>
                                Expression of Ideas<br/>
                                <div class="bar rounded">   <div class="e e7-7"></div>    </div>
                                Standard English Conventions<br/>
                                <div class="bar rounded">   <div class="e e7-7"></div>    </div>
                            </div>
                            <div class="col-lg" style={{padding: "0 1.3rem", marginTop: "1rem"}}>
                                <span class="fw-bold" style={{display: "block", marginBottom: 0.3 + 'rem', paddingBottom: 0.3 + 'rem', borderBottom: "1.5pt solid black"}}>Mathematics: 800</span>
                                Algebra<br/>
                                <div class="bar rounded">   <div class="e e7-7"></div>    </div>
                                Advanced Math<br/>
                                <div class="bar rounded">   <div class="e e7-7"></div>    </div>
                                Problem-Solving & Data Analysis<br/>
                                <div class="bar rounded">   <div class="e e7-7"></div>    </div>
                                Geometry and Trigonometry<br/>
                                <div class="bar rounded">   <div class="e e7-7"></div>    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div id="transcript"><span class="h4 fw-bold text-decoration-underline">Transcript</span></div>
            <div class="collection">
                <div class="card rounded">
                    <a href="#" onClick={e => e.preventDefault()} onFocus={() => {getData("fall 2023", "#fa23", emu); toggle("#fa23")}}><i class="fa fa-caret-square-o-right"></i></a>
                    <span class="card-text fw-bold">Fall 2023</span>
                    <div id="fa23" class="hidden rounded content">
                    </div>
                </div>

                <div class="card rounded">
                    <a href="#" onClick={e => e.preventDefault()} onFocus={() => {getData("winter 2024", "#wi24", emu); toggle("#wi24")}}><i class="fa fa-caret-square-o-right"></i></a>
                    <span class="card-text fw-bold">Winter 2024</span>
                    <div id="wi24" class="hidden rounded content">
                    </div>
                </div>

                <div class="card rounded">
                    <a href="#" onClick={e => e.preventDefault()} onFocus={() => {getData("Summer 2024", "#su24", emu); toggle("#su24")}}><i class="fa fa-caret-square-o-right"></i></a>
                    <span class="card-text fw-bold">Summer 2024</span>
                    <div id="su24" class="hidden rounded content">
                    </div>
                </div>

                <div class="card rounded">
                    <a href="#" onClick={e => e.preventDefault()} onFocus={() => {getData("fall 2024", "#fa24", emu); toggle("#fa24")}}><i class="fa fa-caret-square-o-right"></i></a>
                    <span class="card-text fw-bold">Fall 2024</span>
                    <div id="fa24" class="hidden rounded content">
                    </div>
                </div>

                <div class="card rounded">
                    <a href="#" onClick={e => e.preventDefault()} onFocus={() => {getData("winter 2025", "#wi25", emu); toggle("#wi25")}}><i class="fa fa-caret-square-o-right"></i></a>
                    <span class="card-text fw-bold">Winter 2025</span>
                    <div id="wi25" class="hidden rounded content">
                    </div>
                </div>

                <div class="card rounded">
                    <a href="#" onClick={e => e.preventDefault()} onFocus={() => {getData("Summer 2025", "#su25", emu); toggle("#su25")}}><i class="fa fa-caret-square-o-right"></i></a>
                    <span class="card-text fw-bold">Summer 2025</span>
                    <div id="su25" class="hidden rounded content">
                    </div>
                </div>

                <div class="card rounded">
                    <a href="#" onClick={e => e.preventDefault()} onFocus={() => {getData("fall 2025", "#fa25", emu); toggle("#fa25")}}><i class="fa fa-caret-square-o-right"></i></a>
                    <span class="card-text fw-bold">Fall 2025</span>
                    <div id="fa25" class="hidden rounded content">
                    </div>
                </div>

                <div class="card rounded">
                    <a href="#" onClick={e => e.preventDefault()} onFocus={() => {getData("winter 2026", "#wi26", emu); toggle("#wi26")}}><i class="fa fa-caret-square-o-right"></i></a>
                    <span class="card-text fw-bold">Winter 2026</span>
                    <div id="wi26" class="hidden rounded content">
                    </div>
                </div>

                <div class="card rounded">
                    <a href="#" onClick={e => e.preventDefault()} onFocus={() => {getData("Summer 2026", "#su26", emu); toggle("#su26")}}><i class="fa fa-caret-square-o-right"></i></a>
                    <span class="card-text fw-bold">Summer 2026</span>
                    <div id="su26" class="hidden rounded content">
                    </div>
                </div>

                <div class="card rounded">
                    <a href="#" onClick={e => e.preventDefault()} onFocus={() => {getData("fall 2026", "#fa26", emu); toggle("#fa26")}}><i class="fa fa-caret-square-o-right"></i></a>
                    <span class="card-text fw-bold">Fall 2026</span>
                    <div id="fa26" class="hidden rounded content">
                    </div>
                </div>

                <div class="card rounded">
                    <a href="#" onClick={e => e.preventDefault()} onFocus={() => {getData("winter 2027", "#wi27", emu); toggle("#wi27")}}><i class="fa fa-caret-square-o-right"></i></a>
                    <span class="card-text fw-bold">Winter 2027</span>
                    <div id="wi27" class="hidden rounded content">
                    </div>
                </div>
            </div>
        </div>
    );
}

//------------------------------------------------------------------------------------------------------------------------------------

export async function getData(target, element, logo=null) {
    if(!document.querySelector(`${element}`).innerHTML) {
        let loading = document.createElement("div");
        loading.setAttribute("class", "loader");
        let inner1 = document.createElement("div");
        inner1.setAttribute("class", "inner one");
        loading.appendChild(inner1);
        let inner2 = document.createElement("div");
        inner2.setAttribute("class", "inner two");
        loading.appendChild(inner2);
        let inner3 = document.createElement("div");
        inner3.setAttribute("class", "inner three");
        loading.appendChild(inner3);
        document.querySelector(`${element}`).appendChild(loading);

        let data;
        try {
            data = (await (await fetch(`https://p-website-backend-2bab0b8dbecb.herokuapp.com/academic/${target}`)).json())[0];
        } catch (error) {
            alert("Failed to get data");
            loading.setAttribute("class", "hidden");
            toggle(`${element}`);
        }
        //console.log(data);

        if(logo) {
            console.log(logo);
            let image = document.createElement("img");
            image.setAttribute("src", `${logo}`);
            document.querySelector(`${element}`).appendChild(image);
        }

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
        loading.setAttribute("class", "hidden");
    }
}