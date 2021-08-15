import './App.css';

import React from 'react';
import ReactDOM from 'react-dom';
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import ComFilhos from './components/basicos/ComFilhos';
import Condicional from './components/basicos/Condicional';
import Card from './components/layout/Card';
import Repeticao from './components/basicos/Repeticao';
import CondicionalComIf from './components/basicos/CondicionalComIf'

//import App from './App';

export default (props) => (
  <div className="App">
    <Card titulo="Primeiro Componente">
      <Primeiro/>
    </Card>
    <Card titulo="Segundo Componente">
      <ComParametro 
        titulo='meu titulo' 
        subtitulo='deus esta aqui'
      />
    </Card>
    <Card titulo="Terceiro Componente">
      <ComFilhos>
        <ul>
          <li>Ana</li>
          <li>Bia</li>
          <li>Carlos</li>
        </ul>
      </ComFilhos>      
    </Card>
    <Card titulo="Repetição Componente">
      <Repeticao></Repeticao>
    </Card>

    <Card titulo="Condicional Componente">
      <Condicional numero={11}></Condicional>
    </Card>
    
    <Card titulo="Condicional com if Componente">
      <CondicionalComIf numero={12}></CondicionalComIf>
    </Card>
  </div>
);
