

export const Boton = ({ children }) => {
  return (
    <div className='d-inline-block mt-5'>
      <button
        className='btn btn-primary mx-auto d-block'
        style={{ width: 'fit-content', backgroundColor: '#1e1e2d' }}
      >
        {children}
      </button>
      <div className='mt-3'>
        <button
          className='btn btn-info text-white'
          style={{ width: 'fit-content', backgroundColor:"#009EF7"}}
        >
          {children}
        </button>
        <div className='bg-success d-inline-block rounded'>
          <button className='btn btn-info text-white' 
          style={{ width: 'fit-content', backgroundColor:"#50cd89"}}>
            {children}
          </button>
        </div>
      </div>
    </div>
  );
};

