import { useEffect } from 'react';
import '../../StyleSheets/OptionStyle/resume.css';

function Resume() {

    useEffect(() => {
        if(document.querySelector(".doc").getBoundingClientRect().top > document.documentElement.clientHeight) {
            document.querySelector(".doc").scrollIntoView(true);
        }
    });
    
    return(
        <iframe class="doc" src="https://onedrive.live.com/embed?resid=6bad1d2a25292cba%2171458&amp;authkey=!AJEPrh1O9S78Vy0&amp;em=2&amp;wdPrint=0&amp;wdEmbedCode=0" frameborder="0"></iframe>
    );
}

export default Resume;