import React from 'react';
import './App.css';
import IdCard from './components/IdCard'
import Greetings from './components/Greetings'
import Random from './components/Random'

const people = [
  { lastName: 'Doe', firstName: 'John', gender: 'male', height: 178, birth: "1992-07-14", picture: "https://randomuser.me/api/portraits/men/44.jpg" },
  { lastName: 'Dolores', firstName: 'Obrien', gender: 'female', height: 172, birth: "1988-05-11", picture: "https://randomuser.me/api/portraits/women/44.jpg" }
]

function App() {
  return (
<>

{/* IdCard - Iteration 1 */}
    <div className='App'>

      <h1>IdCard</h1><h3>Iteration 1</h3>
      <IdCard id={people[1]} />
      <IdCard id={people[0]} />
 {/* Check map() again for showing all objects in the array    */}

    </div>


{/* Greetings - Iteration 2 */}
<div className='App'>
<h1>Greetings</h1><h3>Iteration 2</h3>
<Greetings lang="de">Ludwig</Greetings>
<Greetings lang="fr">François</Greetings>
<Greetings lang="es">Consuelo</Greetings>

</div>

{/* Random - Iteration 3 */}
<div className='App'>
<h1>Random</h1><h3>Iteration 3</h3>
<Random min={33} max={44}/>
  <Random min={55} max={101}/>
</div>


{/* ColorBox - Iteration 4 */}

</>
  );
}

export default App;