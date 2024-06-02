
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

function registrarHistoricoAlteracao(aMensagem){
  //RN.05 - Histórico de Alterações
  const ulHistoricoAlteracao = document.getElementById("historicoAlteracao");
  const liHistorico = document.createElement("li");
  liHistorico.textContent = aMensagem;
  ulHistoricoAlteracao.appendChild(liHistorico);  
}

function registrarEPI(epi, quantidade, colaborador, cargo, ca){
  let dataTransacao = registrarDataTransacao(); /*ok resolvido */

  let validaCamposObrigatorios = validarCamposObrigatorios(epi, quantidade, colaborador, cargo, ca, dataTransacao); /*resolvido*/
  let validaQuantidadeEPI = validarQuantidadeEPI(quantidade); /* resolvido */
  let validaCA = validarCA(ca);

  if(validaCamposObrigatorios){
    if(validaQuantidadeEPI){
      if(validaCA){
        return "Transação registrada! " + epi + ", Qtde: " + quantidade + ", Colaborador: " + colaborador + ", Cargo: " + cargo + ", CA: " + ca + ", Data: " 
 + dataTransacao;
      } else {
        return "Problemas na Validação de CA do EPI!";
      }
    } else {
      return "Problemas na Validação de Quantidade de EPIs Entregues!";
    }
  } else {
    return "Problemas na validação de campos obrigatórios!";
  }
}

function registrarEntrega() {
  let epi = document.getElementById("epi").value;
  let quantidade = document.getElementById("quantidade").value;
  let colaborador = document.getElementById("colaborador").value;
  let cargo = document.getElementById("cargo").value;
  let ca = document.getElementById("ca").value;

const mensagem = registrarEPI(epi, quantidade, colaborador, cargo, ca);

registrarHistoricoAlteracao(mensagem);
} 