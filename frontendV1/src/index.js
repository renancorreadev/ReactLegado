import ReactDOM from 'react-dom'; 
import React from 'react'
import './index.css'

import Test from './components/ClassComponentEX'


const el = document.getElementById('root');

ReactDOM.render(<>
    {/* <Default />
    <PropsComponent 
      name="teste" 
      title="Ola" 
      content="kofsofkwijefjiefjiesifjsijfsjief"
     />1 */}

    <div>
        <Test person="Renan" name="Renan Cesar" age="20" city="lorena" />
    </div>
 
</>, el);