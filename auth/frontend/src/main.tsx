
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router} from "react-router-dom"
import AppRoutes from './AppRoutes'
import "../app/globals.css"
import Auth0 from './auth0/Auth0Naviagte'
import {QueryClient,QueryClientProvider} from "react-query"
import { Toaster } from 'sonner'
const client = new QueryClient({
  defaultOptions:{
    queries:{
      refetchOnWindowFocus:false
    }
  }
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Router>
<QueryClientProvider client={client}>
    <Auth0>

    <AppRoutes/>
    <Toaster visibleToasts={1} position='bottom-right' richColors/>
    </Auth0>
</QueryClientProvider>
  </Router>
 
)
