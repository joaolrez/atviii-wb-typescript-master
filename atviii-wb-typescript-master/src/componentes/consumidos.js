
import 'materialize-css/dist/css/materialize.min.css';
import './app.css';


export default function consumidos(props){
        return (
            <section>
        <div className="container">
                <div className='col s12 m12 l4 estilo'>
                    <div className="containeTable">
                        <h5>Produtos e serviços mais consumidos</h5>
                        <table>
                            <thead>
                                <tr>
                                    <th>Nome</th>
                                    <th>Quantidade</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Corte de cabelo</td>
                                    <td>51</td>
                                </tr>
                                <tr>
                                    <td>Manicure</td>
                                    <td>23</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <br></br>
                <div className='col s12 m12 l4 estilo'>
                    <div className="containeTable">
                        <h5>Produtos e serviços mais consumidos  (Publico Feminino) </h5>
                        <table>
                            <thead>
                                <tr>
                                    <th>Nome</th>
                                    <th>Quantidade</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Corte de cabelo</td>
                                    <td>24</td>
                                </tr>
                                <tr>
                                    <td>Manicure</td>
                                    <td>23</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <br></br>
                <div className='col s12 m12 l4 estilo'>
                    <div className="containeTable">
                        <h5>Produtos e serviços mais consumidos  (Publico Masculino) </h5>
                        <table>
                            <thead>
                                <tr>
                                    <th>Nome</th>
                                    <th>Quantidade</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Corte de cabelo</td>
                                    <td>27</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
        );
    }

