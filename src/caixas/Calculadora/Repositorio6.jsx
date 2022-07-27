import './Repositorio6.css'
import CodigoHtml6 from './Codigos/Codigo2';
import LinkSite6 from './Link-site/Link6';

function Repositorio6(){
    return(
     <div className='repositorioLink6'> 
     <button onClick={Abrir6}>REPOSITORIO</button>
          <div id='codigo6' className="codigo6">
              <button onClick={Fechar6}>X</button>

                  <CodigoHtml6 />
                  <br />
                  <LinkSite6 />
                   
          </div>
     </div>
    );
  } 
  
  export default Repositorio6;

  function Abrir6(){
    var codigo = document.getElementById('codigo6')

      codigo.style.display='block'

  }
  function Fechar6(){
    var codigo = document.getElementById('codigo6')

    codigo.style.display='none'

  }