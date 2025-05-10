import App from './App';
import root from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

const mainTag = document.getElementById('root');
const raiz = root.createRoot(mainTag);
raiz.render(<BrowserRouter> <App /></BrowserRouter>);