
const pushData = async function (cep){
    const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then((response) => response.json())
        .then((data) => data)

    return resposta 
}



const atualizarModal = async function (cep){
    const resultado = await pushData(cep)
    const modal = document.getElementsByClassName('modal')

    const html =  `
                        <p class="params" id="firstParam">{</p>
                        <div class="text">
                            <div class="attribute">
                                <p class="key">"numCEP" </p>
                                <div class="value">
                                    <p class="params">:</p>
                                    <p class="apiText" id="numCep">"${resultado.cep}"</p>
                                </div>
                            </div>
                            <div class="attribute">
                                <p class="key">"cidade" </p>
                                <div class="value">
                                    <p class="params">:</p>
                                    <p class="apiText" id="cidade">"${resultado.localidade}"</p>
                                </div>
                            </div>
                            <div class="attribute">
                                <p class="key">"estado" </p>
                                <div class="value">
                                    <p class="params">:</p>
                                    <p class="apiText" id="estado">"${resultado.uf}"</p>
                                </div>
                            </div>
                            <div class="attribute">
                                <p class="key">"endereco" </p>
                                <div class="value">
                                    <p class="params">:</p>
                                    <p class="apiText" id="endereco">"${resultado.logradouro}"</p>
                                </div>
                            </div>
                            <div class="attribute">
                                <p class="key">"bairro" </p>
                                <div class="value">
                                    <p class="params">:</p>
                                    <p class="apiText" id="bairro">"${resultado.bairro}"</p>
                                </div>
                            </div>
                            <div class="attribute">
                                <p class="key">"complemento" </p>
                                <div class="value">
                                    <p class="params">:</p>
                                    <p class="apiText" id="complemento">"${resultado.complemento}"</p>
                                </div>
                            </div>
                        </div>
                        <p class="params">}</p>
                    `
    
    modal[0].innerHTML = html
}

let input = document.getElementById("input")

input.addEventListener("keypress", (e) => {
    
    const cep = input.value

    if(e.key == "Enter"){
        atualizarModal(cep)
    }   
})