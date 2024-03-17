import './style.css';


function Main() {
  return (
  <main>
    <div className='produto'>
        <label>
            Produto:<input type="text"  name='produto'/>
        </label>
    </div>
    <div className='quantidade'>   
        <label>
            Quantidade:<input type="number"  name='quantidade'/>
        </label>
    </div>
    <div className='valor_unitario'>
        <label>
            Valor:  R$<input type="number"  name='valor_unitario'/>
        </label>
    </div>
    <div className='total_produto'>
        <label>
            Valor Total: R$<input type="number"  name='total_produto'/>
        </label>
    </div>
    
    <div className='botao'>
        <button> + </button>
    </div>


  </main>
  );
}

export default Main;