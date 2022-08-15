import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import { TransactionProvider } from './context/TransactionContext';

ReactDOM.render(
  <TransactionProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </TransactionProvider>,  
  document.getElementById('root')
)
// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// )


