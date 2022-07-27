import './Repositorio10.css'
import CodigoHtml10 from './Codigos/Codigo10';
import LinkSite10 from './Link-site/Link10';

function Repositorio10(){
    return(
     <div className='repositorioLink10'> 
     <button onClick={Abrir10}>REPOSITORIO</button>
          <div id='codigo10' className="codigo10">
              <button onClick={Fechar10}>X</button>

                  <CodigoHtml10 />
                  <br />
                  <LinkSite10 />
                   
          </div>
     </div>
    );
  } 
  
  export default Repositorio10;

  function Abrir10(){
    var codigo = document.getElementById('codigo10')

      codigo.style.display='block'

  }
  function Fechar10(){
    var codigo = document.getElementById('codigo10')

    codigo.style.display='none'

  }