import './Repositorio14.css'
import CodigoHtml14 from './Codigos/Codigo14';
import LinkSite14 from './Link-site/Link14';

function Repositorio14(){
    return(
     <div className='repositorioLink14'> 
     <button onClick={Abrir14}>REPOSITORIO</button>
          <div id='codigo14' className="codigo14">
              <button onClick={Fechar14}>X</button>

                  <CodigoHtml14 />
                  <br />
                  <LinkSite14 />
                   
          </div>
     </div>
    );
  } 
  
  export default Repositorio14;

  function Abrir14(){
    var codigo = document.getElementById('codigo14')

      codigo.style.display='block'

  }
  function Fechar14(){
    var codigo = document.getElementById('codigo14')

    codigo.style.display='none'

  }