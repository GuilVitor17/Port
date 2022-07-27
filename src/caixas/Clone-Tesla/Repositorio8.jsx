import './Repositorio8.css'
import CodigoHtml8 from './Codigos/Codigo8';
import LinkSite8 from './Link-site/Link8';

function Repositorio8(){
    return(
     <div className='repositorioLink8'> 
     <button onClick={Abrir8}>REPOSITORIO</button>
          <div id='codigo8' className="codigo8">
              <button onClick={Fechar8}>X</button>

                  <CodigoHtml8 />
                  <br />
                  <LinkSite8/>
                   
          </div>
     </div>
    );
  } 
  
  export default Repositorio8;

  function Abrir8(){
    var codigo = document.getElementById('codigo8')

      codigo.style.display='block'

  }
  function Fechar8(){
    var codigo = document.getElementById('codigo8')

    codigo.style.display='none'

  }