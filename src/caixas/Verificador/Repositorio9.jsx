import './Repositorio9.css'
import CodigoHtml9 from './Codigos/Codigo9';
import LinkSite9 from './Link-site/Link9';

function Repositorio9(){
    return(
     <div className='repositorioLink9'> 
     <button onClick={Abrir9}>REPOSITORIO</button>
          <div id='codigo9' className="codigo9">
              <button onClick={Fechar9}>X</button>

                  <CodigoHtml9 />
                  <br />
                  <LinkSite9 />
                   
          </div>
     </div>
    );
  } 
  
  export default Repositorio9;

  function Abrir9(){
    var codigo = document.getElementById('codigo9')

      codigo.style.display='block'

  }
  function Fechar9(){
    var codigo = document.getElementById('codigo9')

    codigo.style.display='none'

  }