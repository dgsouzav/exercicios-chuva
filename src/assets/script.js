// function expand() {
//     const content = document.getElementById('resume');
//     content.classList.toggle('collapsed');

//     const btn = document.querySelector('.btn-ver-mais');
//         if (content.classList.contains('collapsed')) {
//          btn.innerText = 'ver mais...';
//         } else {
//          btn.innerText = 'ver menos...';
//         }   

//         if (!content.classList.contains('collapsed')) {
//             content.scrollIntoView({ behavior: 'smooth' });
//         } else {
//         content.parentNode.scrollIntoView({ behavior: 'smooth' });
//     }

//     function topicComponent(assunto, conteudo) {
//         return `
//             <div class="topic">
//                 <h4 class="h4-title">${assunto}</h4>
//                 <p class="p-sub-title">Carlos Henrique Santos</p>
//                 <p>${conteudo}</p>
//                 <div class="topic-actions">
//                     <img src="img/3pontos.svg" alt="mais">
//                     <img src="img/coracao.svg" alt="like">
//                     <p>1 like</p>
//                     <p>1 resposta</p>
//                 </div>
//             </div>
//         `;
//     }
//     function createTopic(event) {
//             event.preventDefault();
//             const assunto = document.getElementById("assunto").value;
//             const conteudo = document.getElementById("conteudo").value;
//             document.getElementById("topic").innerHTML += topicComponent(assunto, conteudo);
//         }

    // function btn(){
    //     const btns = document.querySelectorAll('.btn-side-menu');
    //     btns.forEach(btn => {
    //     btn.addEventListener('click', () => {
    //         btns.forEach(btn => btn.classList.remove('selected'));
    //         btn.classList.add('selected');
    //     });
    // });
    // }
}