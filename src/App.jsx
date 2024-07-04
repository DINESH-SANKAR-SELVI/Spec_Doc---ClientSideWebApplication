import './App.css'

function App() {

  const Card = () => {
    return (
      <div style={{ height: '160px', width: '140px', margin: '3px', border: '1px solid black', borderRadius: '6px',textAlign:'center' }}>card
      </div>
    )
  }

  return (
    <div style={{ backgroundColor: 'White', width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', margin: '10px', width: '98%', height: '6vh', boxShadow: '3px 5px 10px 0px black', borderRadius: '6px' }}>

        <div className='title-container' style={{ margin: '3px', marginLeft: '10px' }}>
          <i><h2>Specification-Document</h2></i>
        </div>

        <div className="img-container" style={{ margin: '3px', marginRight: '6px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', height: '35px', width: '35px', border: '2px solid black', borderRadius: '50%', overflow: 'hidden' }} >
          <img src='src/assets/user-logo.png' width={'25px'} />
        </div>
      </div>
      <div style={{ margin: '10px', width: '98%', height: '90vh', boxShadow: '3px 5px 10px 0px black', borderRadius: '6px' }}>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-start'}}>

          <Card />
          <Card />
          <Card />

        </div>  
      </div>

    </div>
  )
}

export default App
