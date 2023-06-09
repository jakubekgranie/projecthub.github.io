var check = 0;
var lastButton;

function startAnimation1(){
    document.getElementById("vid_bg").play();

    document.getElementById('loading_header').classList.add('dp-none');
    animationForwarder('animelem1-1', 'animelem1-2', 'anim-1', 0)
    document.getElementById('animelem1-1').classList.remove('dp-none');
    document.getElementById('animelem1-2').classList.remove('dp-none');
    const animelem13 = document.getElementById('animelem1-3');
    animelem13.classList.add('anim-1');
    animelem13.classList.remove('dp-none');
    animationForwarder('skip', 'headertext', 'headertexttransformed', 330);
}
function anFrwdPreset(){
    if(check == 0){
        check = 1;
        anFrwdDoubleExec('sectionlang1', 'sectionlang2', 'slash1-lang', 'slash2-lang', 'anim-fadeintb', 250, 'anim-blink', 100, 0);
        animationForwarder('skip', 'langCentral', 'anim-fadeinmod', 650)
    }
}
function langPicker(buttonid){
    if(lastButton != buttonid){
        const langDiv = document.getElementById('sectionlang1');
        const langParagraph = document.getElementById('sectionlang2');
        const langHeading = document.getElementById('sectionlang1p2');
        
        const cpp = document.getElementById('cpp');
        const html = document.getElementById('html');
        const js = document.getElementById('js');
        const css = document.getElementById('css');

        if(lastButton != null){
            const lastImage = 'icon-' + lastButton;
            document.getElementById(lastImage).classList.remove('lang-icon-onclick');
        }
        const latestImage = 'icon-' + buttonid;
        document.getElementById(latestImage).classList.add('lang-icon-onclick');

        lastButton = buttonid;
    
        const n_a = "not-allowed";

        cpp.onclick = "null";
        html.onclick = "null";
        js.onclick = "null";
        css.onclick = "null";

        cpp.style.cursor = n_a;
        html.style.cursor = n_a;
        js.style.cursor = n_a;
        css.style.cursor = n_a;

        setTimeout(() => {cpp.style.cursor = null;
            html.style.cursor = null;
            js.style.cursor = null;
            css.style.cursor = null;

            document.getElementById(buttonid).style.cursor = n_a;
        }, 1000);

        if(langDiv.classList.contains('anim-fadeintb') == true){
            langDiv.classList.remove('anim-fadeintb');
            langParagraph.classList.remove('anim-fadeintb');
        }
        if(langDiv.classList.contains('op-0') == true){
            langDiv.classList.remove('op-0');
            langParagraph.classList.remove('op-0');
        }
        langDiv.classList.add('animSwitchByFadeInLang');
        setTimeout(() => {langParagraph.classList.add('animSwitchByFadeInLang')}, 100);
        setTimeout(() => {
    
            setTimeout(() => {document.getElementById('sectionlang1').classList.remove('animSwitchByFadeInLang');
                langParagraph.classList.remove('animSwitchByFadeInLang');
                document.getElementById('cpp').onclick = function() {langPicker('cpp')};
                document.getElementById('html').onclick = function() {langPicker('html')};
                document.getElementById('js').onclick = function() {langPicker('js')};
                document.getElementById('css').onclick = function() {langPicker('css')};}, 490);

            if(buttonid == 'cpp'){
                langHeading.textContent = "C++";
                langParagraph.textContent = "C++ is one of the most renowned programming languages in the world, used in making a wide variety of programs/apps, mostly direct executables. I want to be fully competent at it, even though it is not one of the languages I'll need as a webmaster.";
            }
            if(buttonid == 'html'){
                langHeading.textContent = "HTML";
                langParagraph.textContent = "HTML's my personal favorite for obvious reasons: its potential for shaping something creative when associated, nesting style and overall not limiting my imagination. I just love doing stuff in it.";
            }
            if(buttonid == 'js'){
                langHeading.textContent = "Javascript";
                langParagraph.textContent = "Javascript is one of my recent 'discoveries'. Immediately after I dived into it, determination sprung into action. Being very powerful, my persona constantly tries to learn something new about it to empower my web developer adventures with fancy techniques.";
            }
            if(buttonid == 'css'){
                langHeading.textContent = "CSS";
                langParagraph.textContent = "There's not much to say here except for that it's a critical extension of html, or at least I perceive it as. Being a key to expressing one's power, I admire the fact that I'll carry it between the palms of my hand till the very end.";
            }
        }, 510);
    }
}
function langStats(){
    anFrwdDoubleExec('sectionlang12', 'sectionlang22', 'slash1-lang2', 'slash2-lang2', 'anim-fadeintb', 250, 'anim-blink', 100, 0);

    const ids = ['html', 'css', 'cpp', 'js'];
    setTimeout(() => {
        for(let i = 0; i < 4; i++){
            setTimeout(() => {document.getElementById('holder_' + ids[i]).classList.add('holder-transformations')}, (i * 25));
        }
    }, 500);
    setTimeout(() => {
        for(let i = 0; i < 4; i++){
            setTimeout(() => {document.getElementById('baricon_' + ids[i]).classList.add('icon-image-transformations')}, (i * 100));
            setTimeout(() => {unravelBars(ids[i])}, (i * 100 + 225));
        }
    }, 725)
}
function unravelBars(langId){
    for(let i = 0; i < 10; i++){
        setTimeout(() => {
        let bar = "bar_" + langId + (i + 1);
        document.getElementById(bar).classList.add('anim-fadeintr2');
        }
        , (90 * i));
    }
}

function anFrwdDoubleExec(identifier, identifier2, identifier3, identifier4 ,anim_id, wait_time, anim_id2, wait_time2, secondExecutionWaitTime){
    animationForwarder(identifier, identifier2, anim_id, wait_time);
    setTimeout(() => {animationForwarder(identifier3, identifier4, anim_id2, wait_time2)}, secondExecutionWaitTime);
}
function animationForwarder(identifier, identifier2, anim_id, wait_time){
    if(identifier != 'skip'){
        document.getElementById(identifier).classList.add(anim_id);
    }
    setTimeout(() => {document.getElementById(identifier2).classList.add(anim_id)}, wait_time);
}
