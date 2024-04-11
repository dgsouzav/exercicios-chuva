function expand(){
    const resume = document.getElementById("resume");
    const btn = document.querySelector(".btn-ver-mais");
    if (resume.classList.contains("collapsed")) {
        resume.classList.remove("collapsed");
        btn.innerHTML = "ver menos...";
        window.scrollTo({
            top: resume.offsetTop,
            behavior: "smooth"
        });
    } else {
        resume.classList.add("collapsed");
        btn.innerHTML = "ver mais...";
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
}

function createTopic(event) {
    event.preventDefault();
    const assunto = document.getElementById("assunto");
    const conteudo = document.getElementById("conteudo");
    topic = topicComponent(assunto.value, conteudo.value);
    document.getElementById("topic").innerHTML += topic;
    assunto.value = "";
    conteudo.value = "";
    document.getElementById("form").classList.add("hidden");
    document.getElementById("topic-message").classList.remove("hidden");
    document.getElementById("show-topic-create").innerHTML = topic;
}

function topicComponent(assunto, conteudo) {
    return `
        <div class="topic">
            <h4 class="h4-title">${assunto}</h4>
            <p class="p-sub-title">Carlos Henrique Santos</p>
            <p>${conteudo}</p>
            <div class="topic-actions">
                <img src="img/3pontos.svg" alt="mais">
                <img src="img/coracao.svg" alt="like">
                <p>1 like</p>
                <p>1 resposta</p>
            </div>
        </div>
    `;
}

function ShowForm() {
    document.getElementById("discussion").classList.add("hidden");
    document.getElementById("form").classList.remove("hidden");
}

function returnForm() {
    document.getElementById("topic-message").classList.add("hidden");
    document.getElementById("form").classList.remove("hidden");
}

const btns = document.querySelectorAll('.btn-side-menu');
        btns.forEach(btn => {
        btn.addEventListener('click', () => {
            btns.forEach(btn => btn.classList.remove('selected'));
            btn.classList.add('selected');
        });
    });

function expandTopic(){
    console.log('expandTopic');
    const expandTopic = document.getElementById("expandTopic");
    if (expandTopic.classList.contains("collapsed")) {
        expandTopic.classList.remove("collapsed");
        window.scrollTo({
            top: expandTopic.offsetTop,
            behavior: "smooth"
        });
    } else {
        expandTopic.classList.add("collapsed");
        window.scrollTo({
            behavior: "smooth"
        });
    }
}