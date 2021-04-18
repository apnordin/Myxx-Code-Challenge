import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import theme from './theme';


ReactDOM.render(
    <App />,   
  document.querySelector('#root'),
);