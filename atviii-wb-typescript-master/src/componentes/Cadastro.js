import React, { useState } from 'react';
import './app.css';

export default function Cadastro(props) {
  const estiloBotao = `btn waves-effect waves-light botao_cadastrar botao ${props.tema}`;

  const [name, setName] = useState('');
  const [socialName, setSocialName] = useState('');
  const [email, setEmail] = useState('');
  const [celular, setCelular] = useState('');
  const [cpf, setCpf] = useState('');
  const [dataEmissao, setDataEmissao] = useState('');
  const [rg, setRg] = useState('');
  const [nomeProduto, setNomeProduto] = useState('');
  const [quant, setQuant] = useState('');
  const [preco, setPreco] = useState('');

  function cadastrarUsuario(e) {
    e.preventDefault();
    console.log(
      `Usuário ${name} com nome social ${socialName}, telefone ${celular}, e-mail ${email}, CPF ${cpf}, data de emissão ${dataEmissao} e RG ${rg} foi cadastrado com sucesso!`,
    );
  }

  function cadastrarProdutoServico(e) {
    e.preventDefault();
    console.log(`Produto/Serviço ${nomeProduto} com quantidade ${quant} e preço ${preco} foi cadastrado com sucesso!`);
  }

  return (
    <div className="container">
      <div className="row containeTable" id="cadastro">
        <div className="row">
          <form className="col s12" onSubmit={cadastrarUsuario}>
            <h4>Cadastro de Cliente</h4>
            <div className="row">
              <div className="input-field col s12">
                <input
                  id="nome"
                  type="text"
                  className="validate"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder='Nome Completo'
                />
                
              </div>
              <div className="input-field col s12">
                <input
                  id="nome_social"
                  type="text"
                  className="validate"
                  value={socialName}
                  onChange={(e) => setSocialName(e.target.value)}
                  required
                  placeholder='Nome Social'
                />
              </div>
              <div className="input-field col s12">
                <input
                  id="email"
                  type="email"
                  className="validate"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder='E-Mail'
                />
              </div>
              <div className="input-field col s12">
                <input
                  id="telefone"
                  type="text"
                  className="validate"
                  value={celular}
                  onChange={(e) => setCelular(e.target.value)}
                  required
                  placeholder='Telefone'
                />
              </div>
              <div className="input-field col s12">
                <input
                  id="cpf"
                  type="text"
                  className="validate"
                  value={cpf}
                  onChange={(e) => setCpf(e.target.value)}
                  required
                  placeholder='CPF'
                />
              </div>
              <div className="input-field col s12">
                <input
                  id="data_emissao"
                  type="date"
                  className="validate"
                  value={dataEmissao}
                  onChange={(e) => setDataEmissao(e.target.value)}
                  required
                />
                <label htmlFor="data_emissao">Data Emissão</label>
              </div>
              <div className="input-field col s12">
                <input
                  id="rg"
                  type="text"
                  className="validate"
                  value={rg}
                  onChange={(e) => setRg(e.target.value)}
                  required
                  placeholder='RG'
                />
  
              </div>
              <div className="row">
                <div className="col s12">
                  <button className={estiloBotao} type="submit"  name="action">
                    Cadastrar
                    <i className="material-icons right">send</i>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <br />
      <div className="row containeTable" id="cadastro">
        <form className="col s12" onSubmit={cadastrarProdutoServico}>
          <h4>Cadastro de Produtos & Serviços</h4>
          <div className="row">
            <div className="input-field col s12">
              <input
                id="nome"
                type="text"
                className="validate"
                value={nomeProduto}
                onChange={(e) => setNomeProduto(e.target.value)}
                required
              />
              <label htmlFor="nome">Nome</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input
                id="quantidade"
                type="text"
                className="validate"
                value={quant}
                onChange={(e) => setQuant(e.target.value)}
                required
              />
              <label htmlFor="quantidade">Quantidade</label>
            </div>
            <div className="input-field col s12">
              <input
                id="preco"
                type="text"
                className="validate"
                value={preco}
                onChange={(e) => setPreco(e.target.value)}
                required
              />
              <label htmlFor="preco">Preço</label>
            </div>
          </div>
          <div className="row">
            <div className="col s12">
              <button className={estiloBotao} type="submit" name="action">
                Cadastrar
                <i className="material-icons right">send</i>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
