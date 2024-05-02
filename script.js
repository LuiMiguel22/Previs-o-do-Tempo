async function buscaCidade(cidade){
    try{
        let chave = "ee9c11d5ffd41af5aa18d844cc9d6385";
        let request = await fetch(` https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&appid=${chave}&lang=pt_br`);
        
        if(!request.ok){
            alert('Erro! Tente novamente.');
        }else{
            let response = await request.json();
            console.log(response);
            return response;
        }
    }catch(error){
        alert('Erro! Tente novamente.');
        console.log("erro: ",error);
    }
}
async function tempoCidade(cidade){
    
    let infoTempo = await buscaCidade(cidade);
    let cidades = document.querySelector(".cidades");
    cidades.classList.add('info-temperatura')
    cidades.innerHTML = `
    <p class="cidade"><i class="fa-solid fa-location-dot"></i> ${infoTempo.name}</p>
    <p class="temperatura">${infoTempo.main.temp} ° C</p>
    <p class="condicao">${infoTempo.weather[0].description}</p>
    `
}
let button = document.querySelector(".pesquisar");
button.addEventListener('click', ()=>{
    let cidade = document.querySelector('.cidade').value;
    tempoCidade(cidade);
});

let cidades = document.querySelector(".cidades");
cidades.addEventListener('click', (event)=>{
    if(event.target.tagName=='BUTTON'){
        let cidade = event.target.id;
        tempoCidade(cidade);
    }
    
})