import './App.css';
import Groups from './components/groups';
import Header from './components/header';
import NextButton from './components/nextButton';
import Pots from './components/pots';
import { useState } from 'react';
import jsonData from './components/teams.json';
import AlertOnFirstRender from './components/explanation';

function App() {
  const [potsTeams, setPotsTeams] = useState(jsonData);
  const [groupsTeams, setgroupsTeams] = useState([]);
  const [count, setCount] = useState(0);

  const handleTeamDraw = () => {
    const groups = ["A", "B", "C", "D","E","F","G","H"];
  
    const groupIndex =  Math.floor(Math.random() * 8);
    const group = groups[groupIndex];

    const newTeam = potsTeams[count];
    newTeam.group = group;

    setgroupsTeams((prevgroupsTeams) => [...prevgroupsTeams, newTeam]);
    //console.log(groupsTeams)
    const newPotsValue = potsTeams.filter((item, index) => index !== 0);
    setPotsTeams(newPotsValue);

    if(potsTeams[count] === 0){
      setCount(count + 1);
    }

  };

  return (
    <div className="App">
      <AlertOnFirstRender />
      <Header />
      <NextButton handleClick={handleTeamDraw}/>
      
      <div className="grid-container">
        <Pots teams={potsTeams}/>
        <Groups teams={groupsTeams} />
      </div>
     
    </div>
  );
}

export default App;
