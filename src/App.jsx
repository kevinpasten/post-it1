import { useState } from 'react'
import { Encabezado } from './components/Encabezado';
import { Notas } from './components/Notas';

export const App = () => {
  const [notas] = useState([]);

  return (
    <div>
      <Encabezado />
      <Notas notas={notas}/>
    </div>
  )
}
