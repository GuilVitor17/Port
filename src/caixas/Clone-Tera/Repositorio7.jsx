import './Repositorio7.css'
import CodigoHtml7 from './Codigos/Codigo7';
import LinkSite7 from './Link-site/Link7';

function Repositorio7(){
    return(
     <div className='repositorioLink7'> 
     <button onClick={Abrir7}>REPOSITORIO</button>
          <div id='codigo7' className="codigo7">
              <button onClick={Fechar7}>X</button>

                  <CodigoHtml7 />
                  <br />
                  <LinkSite7 />
                   
          </div>
     </div>
    );
  } 
  
  export default Repositorio7;

  function Abrir7(){
    var codigo = document.getElementById('codigo7')

      codigo.style.display='block'

  }
  function Fechar7(){
    var codigo = document.getElementById('codigo7')

    codigo.style.display='none'

  }