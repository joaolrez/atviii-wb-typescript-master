import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import './app.css';




export default  function produtos_servicos(props){

        let estilo = ``

        return (
            <>
                <div className="container">
                    <br></br>
                    <main>
                        <div className="leftwrapper">
                            <div className='col s12 m12 l6 estilo'>
                                <div className="containeTable">
                                    <h5>Produtos</h5>
                                    <table className="responsive-table">
                                        <thead>
                                            <tr>
                                                <th>Produtos</th>
                                                <th className="desc">Descrição</th>
                                                <th>Preço</th>
                                                <th>Editar</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Tinta de cabelo</td>
                                                <td >Tintas de diversas cores para pintar o cabelo</td>
                                                <td>R$ 79,99</td>
                                                <td><i className="material-icons">edit</i><i className="material-icons">delete</i></td>
                                            </tr>
                                            <tr>
                                                <td>Creme para a pele</td>
                                                <td>Creme para tratar a pele</td>
                                                <td> R$ 46,99  </td>
                                                <td><i className="material-icons">edit</i><i className="material-icons">delete</i></td>
                                            </tr>
                                            <tr>
                                                <td>Esmalte</td>
                                                <td>Esmaltes de diversas cores </td>
                                                <td>R$ 49,99  </td>
                                                <td><i className="material-icons">edit</i><i className="material-icons">delete</i></td>
                                            </tr>
                                            <tr>
                                                <td>Base</td>
                                                <td>Base para o rosto.</td>
                                                <td>R$ 199,99  </td>
                                                <td><i className="material-icons">edit</i><i className="material-icons">delete</i></td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <br></br>
                            <div className='col s12 m12 l6 estilo'>
                                <div className="containeTable">
                                    <h5>Serviços</h5>
                                    <table className="responsive-table">
                                        <thead>
                                            <tr>
                                                <th>Serviço</th>
                                                <th className="desc">Descrição</th>
                                                <th>Preço</th>
                                                <th>Editar</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Tratamento facial</td>
                                                <td >Tratatamento de pele facial M/F</td>
                                                <td>R$ 79,99</td>
                                                <td><i className="material-icons">edit</i><i className="material-icons">delete</i></td>
                                            </tr>
                                            <tr>
                                                <td>Corte de cabelo</td>
                                                <td>Corte de cabelo M/F</td>
                                                <td> R$ 50,00  </td>
                                                <td><i className="material-icons">edit</i><i className="material-icons">delete</i></td>
                                            </tr>
                                            <tr>
                                                <td>Manicure</td>
                                                <td>Pintura e tratamento das unhas</td>
                                                <td>R$ 59,99  </td>
                                                <td><i className="material-icons">edit</i><i className="material-icons">delete</i></td>
                                            </tr>
                                            <tr>
                                                <td>Harmonização Facial</td>
                                                <td>Harmonização facial com procedimentos minimamente invasivos para exaltar a sua beleza.</td>
                                                <td>R$ 129,99  </td>
                                                <td><i className="material-icons">edit</i><i className="material-icons">delete</i></td>
                                            </tr>
                                            <tr>
                                                <td>Massagem modeladora</td>
                                                <td>A massagem modeladora tem como objetivo modelar o corpo, reduzindo a circunferência e ativar a circulação sanguínea.</td>
                                                <td>R$ 99,99  </td>
                                                <td><i className="material-icons">edit</i><i className="material-icons">delete</i></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <br></br>
                    </main>
                </div>
            </>
        )
    }
