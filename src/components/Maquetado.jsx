import { useState } from "react";
import { Dropdown} from "react-bootstrap";

function Maquetado() {

    return (
        <section>
        <h1 className='text-center mt-4'> Noticias </h1>
        <hr />
        <article className='orden'>
        <div className='d-flex justify-content-around'>
          <h4 className='mt-4 p-4'>Buscar por categoria: </h4> 
          <Dropdown className="mt-4 p-4">
      <Dropdown.Toggle variant="dark" id="dropdown-basic">
        Categorias
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item value="top"> Ultimo momento </Dropdown.Item>
        <Dropdown.Item value="sports"> Deportes </Dropdown.Item>
        <Dropdown.Item value="entertainment"> Entretenimiento</Dropdown.Item>
        <Dropdown.Item value="technology">Tecnologia</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
        </div>
        <hr />
        </article>
        
       </section>
    )
}

export default Maquetado

