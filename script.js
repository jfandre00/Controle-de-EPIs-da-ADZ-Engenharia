function validarCamposObrigatorios(oEpi, aQuantidade, oColaborador, oCargo, oCa, aDataTransacao){
  //RN.01 - Validação de Campos Obrigatórios
  return oEpi && aQuantidade != null && oColaborador && oCargo && oCa != null && aDataTransacao;
} /*RESOLVIDO */

function validarQuantidadeEPI(aQuantidade){
  //RN.02 - Validação de Quantidade de EPI
  return aQuantidade > 0;
} /*RESOLVIDO */

function validarCA(oCa){
  //RN.03 - Validação de CA
  return oCa > 0;
} /* RESOLVIDO */

function registrarDataTransacao(){
  //RN.04 - Registro de Data da Transação
  return new Date().toLocaleString();
} /*RESOLVIDO*/

function registrarHistoricoAlteracao(aMensagem, ehSucesso){
  //RN.05 - Histórico de Alterações
  const ulHistoricoAlteracao = document.getElementById("historicoAlteracao");
  const liHistorico = document.createElement("li");
  liHistorico.textContent = aMensagem;
  // ulHistoricoAlteracao.appendChild(liHistorico);
  const divAlertContainer = document.getElementById("alertContainer");
  divAlertContainer.style.display = "none";

  if(ehSucesso) {
    const liHistorico = document.createElement("li");
    liHistorico.textContent = aMensagem;
    ulHistoricoAlteracao.appendChild(liHistorico); 
  } else {
    divAlertContainer.style.display = "block";
    divAlertContainer.className = "alert alert-danger";
    divAlertContainer.innerHTML = "<strong>Atenção!</strong> " + aMensagem;
  }
}

function registrarEPI(epi, quantidade, colaborador, cargo, ca){
  let dataTransacao = registrarDataTransacao(); /*ok resolvido */

  let validaCamposObrigatorios = validarCamposObrigatorios(epi, quantidade, colaborador, cargo, ca, dataTransacao); /*resolvido*/
  let validaQuantidadeEPI = validarQuantidadeEPI(quantidade); /* resolvido */
  let validaCA = validarCA(ca);

  if(validaCamposObrigatorios){
    if(validaQuantidadeEPI){
      if(validaCA){
        return {
          mensagem: "Transação registrada! " + epi + ", Qtde: " + quantidade + ", Colaborador: " + colaborador + ", Cargo: " + cargo + ", CA: " + ca + ", Data: " + dataTransacao,
          sucesso: true
        }
      } else {
        return {
          mensagem: "Problemas na Validação de CA do EPI!",
          sucesso: false
        }
      }
      } else {
        return { 
        mensagem: "Problemas na Validação de Quantidade de EPIs Entregues!",
        sucesso: false
        }
      }
      } else {
        return {
        mensagem: "Problemas na validação de campos obrigatórios!",
        sucesso: false
      }
      }
}

function registrarEntrega() {
  let epi = document.getElementById("epi").value;
  let quantidade = document.getElementById("quantidade").value;
  let colaborador = document.getElementById("colaborador").value;
  let cargo = document.getElementById("cargo").value;
  let ca = document.getElementById("ca").value;

const objeto = registrarEPI(epi, quantidade, colaborador, cargo, ca);

  registrarHistoricoAlteracao(objeto.mensagem, objeto.sucesso);
} 