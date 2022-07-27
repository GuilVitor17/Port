import './Repositorio2.css'
import CodigoHtml2 from './Codigos/Codigo2';
import LinkSite2 from './Link-site/Link2';

function Repositorio2(){
    return(
     <div className='repositorioLink2'> 
     
     <button onClick={Abrir2}>REPOSITORIO</button>
          <div id='codigo2' className="codigo2">
              <button onClick={Fechar2}>X</button>

                  <CodigoHtml2 />
                  <br />
                  <LinkSite2 />
                   
          </div>
     </div>
    );
  } 
  
  export default Repositorio2;

  function Abrir2(){
    var codigo = document.getElementById('codigo2')

      codigo.style.display='block'

  }
  function Fechar2(){
    var codigo = document.getElementById('codigo2')

    codigo.style.display='none'

  }