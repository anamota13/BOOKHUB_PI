import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './LiteraturaBrasileira.css';
import fundo from '../../assets/images/fundo.png';
import Footer from "../Footer/Footer";

function LiteraturaBrasileira() {
    return (

      
    
        <div className="conteudo-lit">
          
        <div className='img-lit'>

<img src={fundo} alt="Literatura Brasileira" className="lit" />


</div>


<div className="content-text-literatura">


          <p className="mt-4 text-lg">A história da literatura brasileira tem início em 1500 com a chegada dos portugueses no Brasil. Isso porque as sociedades que aqui estavam eram ágrafas, ou seja, não possuíam uma representação escrita.
       Assim, a produção literária começa quando os portugueses escrevem sobre suas impressões da terra encontrada e dos povos que aqui viviam.
Ainda que sejam diários e documentos históricos, esses representam, as primeiras manifestações escritas em território brasileiro.</p>
        
        <h3 className="text-3xl font-bold">Divisão da Literatura Brasileira</h3>
        <p className="mt-4 text-lg">
          A literatura brasileira é subdividida em duas grandes eras que acompanham a evolução política e econômica do País.
          A Era Colonial e a Era Nacional são separadas por um período de transição que corresponde à emancipação política do Brasil.
        </p>
        <p className="mt-4 text-lg">
          O <strong>Quinhentismo</strong> é registrado no decorrer do século XVI. Essa é a denominação genérica de um conjunto de textos que destacavam o Brasil como terra nova a ser conquistada.
          As duas manifestações literárias do período são a literatura de informação e a literatura dos jesuítas. A obra que mais merece destaque é a <strong>Carta de Pero Vaz de Caminha</strong>.
        </p>
        <Link to="/" className="mt-4 inline-block px-4 py-2 bg-gray-500 text-white rounded-lg">
          Voltar para Home
        </Link>

        </div>


      </div>
    );
  }

  export default LiteraturaBrasileira;