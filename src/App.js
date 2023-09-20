import './App.css';
import Groups from './components/groups';
import Header from './components/header';
import NextButton from './components/nextButton';
import Pots from './components/pots';
import { useState, useEffect } from 'react';
import jsonData from './components/teams.json';
import AlertOnFirstRender from './components/explanation';

function App() {
  const [potsTeams, setPotsTeams] = useState(jsonData);
  const [groupsTeams, setgroupsTeams] = useState([]);
  const [currentPot, setCurrentPot] = useState(0);
  const groups = ["A", "B", "C", "D","E","F","G","H"];
  let [remainingGroups, setRemainingGroups] = useState(groups); //remaining groups of the current pot

  const handleTeamDraw = () => {
    const group = drawTeam(potsTeams[0].country, remainingGroups);

    const newTeam = potsTeams[0];
    newTeam.group = group;

    //Add team to groups
    setgroupsTeams((prevgroupsTeams) => [...prevgroupsTeams, newTeam]);

    //Remove drawn team
    const remainingPots = potsTeams.filter((item, index) => index !== 0);
    setPotsTeams(remainingPots);

    //Remove group
    setRemainingGroups(remainingGroups.filter((item) => item !== group));

  };

  useEffect(() => {
    if (remainingGroups.length === 0) {
      setRemainingGroups(groups);
      setCurrentPot(currentPot + 1);
    } 
  }, [remainingGroups, currentPot, groups]);
  
  function drawTeam(country, groups){
    const availableGroups=[];

    //filter groups without teams that shares country with the drawnTeam
    groups.forEach(group => {
        const groupTeams = groupsTeams.filter(team => team.group === group);
        const teamsFromGroupCountry = groupTeams.filter(team => team.country === country);
        
        if(teamsFromGroupCountry.length === 0){
            availableGroups.push(group);
        }
    });

    //draw team
    const index = Math.floor(Math.random() * availableGroups.length);
    const group = availableGroups[index];

    return group;
  }

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
