import { useState } from "react";
import BarraNavegacao from "./barraNavegacao";
import Cadastro from "./Cadastro";
import Listagem from "./listagem";
import ProdutosServicos from "./produtos_servicos";
import MelhoresClientes from "./melhoresClientes";
import Consumidos from "./consumidos";

export default function Roteador() {
    const [tela, setTela] = useState('Clientes');

    const seletorView = (valor, e) => {
        e.preventDefault();
        setTela(valor);
    };

    const construirView = () => {
        if (tela === 'Clientes') {
            return (
                <>
                    <BarraNavegacao seletorView={seletorView} tema="purple lighten-4" botoes={['Clientes','Melhores Clientes', 'Cadastros', 'Produtos / Serviços', 'Consumidos']} />
                    <Listagem tema="purple lighten-4" />
                </>
            );
        } else if (tela === 'Cadastros') {
            return (
                <>
                    <BarraNavegacao seletorView={seletorView} tema="purple lighten-4" botoes={['Clientes','Melhores Clientes', 'Cadastros', 'Produtos / Serviços', 'Consumidos']} />
                    <Cadastro tema="purple lighten-4" />
                </>
            );
        } else if (tela === 'Melhores Clientes') {
            return (
                <>
                    <BarraNavegacao seletorView={seletorView} tema="purple lighten-4" botoes={['Clientes','Melhores Clientes', 'Cadastros', 'Produtos / Serviços', 'Consumidos']} />
                    <MelhoresClientes tema="purple lighten-4" />
                </>
            );
    }
        else if (tela === 'Produtos / Serviços') {
            return (
                <>
                    <BarraNavegacao seletorView={seletorView} tema="purple lighten-4" botoes={['Clientes','Melhores Clientes', 'Cadastros', 'Produtos / Serviços', 'Consumidos']} />
                    <ProdutosServicos tema="purple lighten-4" />
                </>
            );
        }else if (tela === 'Consumidos') {
            return (
                <>
                    <BarraNavegacao seletorView={seletorView} tema="purple lighten-4" botoes={['Clientes','Melhores Clientes', 'Cadastros', 'Produtos / Serviços', 'Consumidos']} />
                    <Consumidos tema="purple lighten-4" />
                </>
            );
        }
    };

    return construirView();
}