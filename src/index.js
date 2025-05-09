import App from './App';
import root from 'react-dom/client';

const mainTag = document.getElementById('root');
const raiz = root.createRoot(mainTag);
raiz.render(<App />);