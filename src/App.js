import React ,{useEffect,useState} from 'react'
import './index.css'

function Apps() {
const apiKey='11e298d440c17e9fcd1cdfce11437e7f'

const [city, setCity] = useState("")
const [resualt,setResualt]=useState([{}])
const [rek, setRek] = useState(false)
const sets=(pro)=>{
  console.log(pro)
  setRek(!rek)
}

  const setWeather=(event)=>{
    if(event.key=='Enter'){
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
       .then(res=>res.json())
       .then(data=>{
        setResualt(data)
        console.log(data)
        setCity('')
         
       })
    }
  }
  

    const getParsedDate=(s)=>{
    let months=['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let days=['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saterday', 'sunday'];
    
    let day=days[s.getDay()]
    let date=s.getDate()
    let month=months[s.getMonth()]
    let year=s.getFullYear()

    return `${day} ${date} ${month} ${year}`
  }


  return (
    <div className="App">
      {/* 1-qisim   */ }
         <div  className='theeagle'>
                <input  placeholder='Serch city weather..'  onChange={(e)=>setCity(e.target.value)}   value={city} onKeyPress={setWeather} /> 
                  {
                    /**
                     *   <div  className='cheked'>
                        <h1><input  type='checkbox'/><span>temp_min</span></h1>
                        <h1><input  type='checkbox'/><span>temp_min</span></h1>
                        <h1><input  type='checkbox'/><span>temp_min</span></h1>
                        <h1><input  type='checkbox'/><span>temp_min</span></h1>
                        <h1><input  type='checkbox'/><span>temp_min</span></h1>
                    </div>* */
                  }
          </div>

      {/*2 qisim*/}


        <div  className='zarif'>
                       <div  className='fixed'>
                           <button onClick={()=>sets('F')}>F</button>
                           <button onClick={()=>sets('C')}>C</button>
                       </div>
                    {typeof(resualt.main)==='undefined' ?
    
                         (   <div className="neons">
                                        <h1><em>zarif jorayev -weather-api  01.01.2022  new year 2:20 PM</em></h1>
                              </div>
                         ):
                         (
                         <div>
                         <h1  className='country'>  {resualt.name}  {resualt.sys.country}</h1>
                         <p>{getParsedDate(new Date())}</p>
                                  <span  className='card'>                           
                                       <h1>{
                                                  rek? (Math.round(resualt.main.temp-273)):(Math.round(resualt.main.temp))
                                        
                                         }<sup  className='degre'>0</sup>{rek? 'C': 'F'}</h1>
                                   </span>
                                   <h1  className='cloud'>{resualt.weather[0].main}</h1>
                         </div>
     )

         }
         {
          resualt.cod==='404' ?(
            <div class="neons">
            <h1><em>zarif jorayev -weather-api bunday shaxar mavjud emas</em></h1>
  </div>

          ):(
            <></>
          )
         }

       
        </div>
    </div>
  );
}

export default Apps;
