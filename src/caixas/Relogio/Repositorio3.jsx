import './Repositorio3.css'
import CodigoHtml3 from './Codigos/Codigo3';
import LinkSite3 from './Link-site/Link3';

function Repositorio3(){
    return(
     <div className='repositorioLink3'> 
     <button onClick={Abrir3}>REPOSITORIO</button>
          <div id='codigo3' className="codigo3">
              <button onClick={Fechar3}>X</button>

                  <CodigoHtml3 />
                  <br />
                  <LinkSite3 />
                   
          </div>
     </div>
    );
  } 
  
  export default Repositorio3;

  function Abrir3(){
    var codigo = document.getElementById('codigo3')

      codigo.style.display='block'

  }
  function Fechar3(){
    var codigo = document.getElementById('codigo3')

    codigo.style.display='none'

  }