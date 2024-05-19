import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from "styled-components"
import GlobalStyles from  './styles/global'

/*
  Importando o nosso contexto criado no 'myContext.js'.
  Usamos o 'MyContext' por volta das nossas rotas (Routes) para que
  seja possível acessá-lo em todas as rotas da aplicação.
*/ 
import { AuthProvider } from './hooks/auth';

import { Routes } from './routes';

import theme from './styles/theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />  
          <AuthProvider>
            <Routes />
          </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
)
