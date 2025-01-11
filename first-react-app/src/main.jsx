import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Moviecontext from './context/Moviecontext.jsx'

createRoot(document.getElementById('root')).render(

    // <BrowserRouter> // WHEN TO WORK WITH ROUTES UNCOMMENT
    //     <App />
    // </BrowserRouter>

    // TO PROCEED WITH CONTEXT API NEED TO WRAP THE APP WITH CONTEXT API COMPONENT
    <Moviecontext>
        <App />
    </Moviecontext>

)
