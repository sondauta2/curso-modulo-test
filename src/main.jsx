import React from 'react';
import ReactDOM from 'react-dom/client';
import HelloWorld from './HelloWorld';
import {FirstModule} from './FirstModule';
import { CounterApp } from './CounterApp'


import './styles.css';


ReactDOM.createRoot(document.getElementById('root'))
    .render (
        <React.StrictMode>
{/*             <HelloWorld /> 
            <FirstModule name = "Manuel Castillo" title="Hola soy Goku" subTitle={123} /> 
 */}            
            <CounterApp valor = {10} />
        </React.StrictMode>
    ); 