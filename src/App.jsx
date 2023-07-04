import { useState } from 'react'
import { ViewUser } from './components/ViewUser'

function App() {

  return (
    <>

      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Ver perfil
      </button>
      <div className="modal fade" id="exampleModal" tabIndex="-1">
        <div className="modal-dialog" style={{ maxWidth: '650px' }}>
          <div className="modal-content" style={{ backgroundColor: '#F1F1F1' }}>
            <ViewUser />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
