import '../../StyleSheets/OptionStyle/about.css';

function About() {
    return(
        <div id="about" class="card rounded">
            <div class="card-body">
                <div class="card-text">
                    <strong>Greetings!</strong><br/>
                    Welcome to Mason's Personal Website!
                </div>
                <hr/>
                <div class="card-text">
                    My preferred name is Mason and I am currently a college freshman majoring in <strong>Computer Science</strong> at
                    <strong> Eastern Michigan University</strong>.<br/><br/>

                    I just spent 1 month learning all the HTML, CSS, and JavaScript concepts as well as their frameworks and ended up building this website
                    as a project to test my understandings and challenge my design skills using purely CSS (with Bootstrap5)<br/><br/>

                    Besides, I also have 2 other projects, one of which is currently under planning and the other has ... unfortunately 
                    lots of bugs <i class='fas fa-bug'></i> At time of writing, its source code has yet to be made public, but it will be soon, 
                    and hopefully somebody can help me with this overwhelming task <i class='far fa-grin-beam-sweat'></i><br/><br/>

                    Anyways, if y'all need help doing projects, feels free to contact me and maybe we can collaborate via Git/GitHub!
                </div>
                <hr/>
                <div class="card-text">
                    <strong>Currently Desired Job:</strong> Web Developer/Front-end Engineer<br/>
                    <strong>Future position pathway:</strong> Full-stack Developer<br/><br/>
                    
                    <strong>Actively looking for job/internship:</strong> Yes<br/>
                    <strong>Job location prference:</strong> Remote<br/>
                    <strong>Practical experience:</strong> None, and I am currently looking for some<br/>
                    <strong>Compensation expectation:</strong> At least minimum wage if possible<br/>
                </div>
            </div>
        </div>
    );
}

export default About;