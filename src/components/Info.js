
import './homelogin.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importe o CSS do Bootstrap



function Info(){
    return(
        <div class="container-fluid my-5 px-0"> 
          <div class="p-5 text-center bg-body-custom rounded-3">
          <svg class="bi mt-4 mb-3 styled-svg" width="100" height="100"></svg>
            <img class="logo-bottom" src="Fotos/logo.png" alt="Logo"></img>
            <h1 class="text-body-emphasis">Saiba direito dos seus direitos!</h1>
            <p class="col-lg-8 mx-auto fs-5 text-muted">
              O Código de Defesa do Consumidor estabelece que produtos e serviços devem oferecer informação adequada, com especificação correta de quantidade, características, composição, qualidade, tributos incidentes e preço, bem como sobre os riscos que apresentem.
            </p>
            <div class="d-inline-flex gap-2 mb-5">
              <a href="Login e cadastro/login.html" class="d-inline-flex align-items-center btn btn-primary btn-lg px-4 rounded-pill" type="button">
                Entrar
              </a>
              <a href="Login e cadastro/cadastro.html" class="btn btn-outline-secondary btn-lg px-4 rounded-pill" type="button">
                Cadastre-se
              </a>
            </div>
          </div>
        </div>
    )
        
}

export default Info;