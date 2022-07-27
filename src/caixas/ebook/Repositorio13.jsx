import './Repositorio13.css'
import CodigoHtml13 from './Codigos/Codigo13';
import LinkSite13 from './Link-site/Link13';

function Repositorio13(){
    return(
     <div className='repositorioLink13'> 
     <button onClick={Abrir13}>REPOSITORIO</button>
          <div id='codigo13' className="codigo13">
              <button onClick={Fechar13}>X</button>

                  <CodigoHtml13 />
                  <br />
                  <LinkSite13 />
                   
          </div>
     </div>
    );
  } 
  
  export default Repositorio13;

  function Abrir13(){
    var codigo = document.getElementById('codigo13')

      codigo.style.display='block'

  }
  function Fechar13(){
    var codigo = document.getElementById('codigo13')

    codigo.style.display='none'

  }