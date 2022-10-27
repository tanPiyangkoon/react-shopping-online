import React from 'react'
 import Layout from './modules/ui/components/Layout'
 import { ConnectedRouter } from 'connected-react-router'
 import store ,{history} from './app/store';
 import {Provider} from 'react-redux'





export default function App() {
  return (
    <Provider store={store}>
    
    <ConnectedRouter history={history}>
      <Layout></Layout>
     </ConnectedRouter>
    </Provider>
  
  )
}
