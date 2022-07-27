import './Repositorio4.css'
import CodigoHtml4 from './Codigos/Codigo4';
import LinkSite4 from './Link-site/Link4';

function Repositorio4(){
    return(
     <div className='repositorioLink4'> 
     <button onClick={Abrir4}>REPOSITORIO</button>
          <div id='codigo4' className="codigo4">
              <button onClick={Fechar4}>X</button>

                  <CodigoHtml4 />
                  <br />
                  <LinkSite4 />
                   
          </div>
     </div>
    );
  } 
  
  export default Repositorio4;

  function Abrir4(){
    var codigo = document.getElementById('codigo4')

      codigo.style.display='block'

  }
  function Fechar4(){
    var codigo = document.getElementById('codigo4')

    codigo.style.display='none'

  }