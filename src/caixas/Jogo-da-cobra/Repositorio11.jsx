import './Repositorio11.css'
import CodigoHtml11 from './Codigos/Codigo11';
import LinkSite11 from './Link-site/Link11';

function Repositorio11(){
    return(
     <div className='repositorioLink11'> 
     <button onClick={Abrir11}>REPOSITORIO</button>
          <div id='codigo11' className="codigo11">
              <button onClick={Fechar11}>X</button>

                  <CodigoHtml11 />
                  <br />
                  <LinkSite11 />
                   
          </div>
     </div>
    );
  } 
  
  export default Repositorio11;

  function Abrir11(){
    var codigo = document.getElementById('codigo11')

      codigo.style.display='block'

  }
  function Fechar11(){
    var codigo = document.getElementById('codigo11')

    codigo.style.display='none'

  }