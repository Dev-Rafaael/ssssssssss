import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter,RouterProvider} from 'react-router-dom'
import Home from './routes/Home.jsx'
import FaleConosco from './routes/faleConosco.jsx'
import Sobre from './routes/Sobre.jsx'
import PoliticaPrivacidade from './routes/PoliticaPrivacidade.jsx'
import Orçamento from './routes/orcamento.jsx'
import Images from './routes/images.jsx'
import {register} from 'swiper/element/bundle'
import Serviço from './routes/Serviço.jsx'
register()
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const router=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
      path:"/",
      element:<Home/>,
      }, {
        path:"/fale-conosco/",
        element:<FaleConosco/>
       },{
        path:"/sobre/",
        element:<Sobre/>  
        },
         {
        path:"/Politica-Privacidade/",
        element:<PoliticaPrivacidade/>  
        },
        {
          path:"/Orçamento-Eventos/",
          element:<Orçamento/>
        },
        {
          path:"/images/",
          element:<Images/>
        },
        {
          path:"Serviço/:title",
          element:<Serviço/>
        }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}/>
  </React.StrictMode>,
)
