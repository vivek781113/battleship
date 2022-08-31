import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { shipTypes } from './constants/constants';
import './App.css';
// import Nav from "./components/Nav";

import Battlefield from './components/Battlefield';
import Stats from './components/Stats';
import { getBattleField, makeClone } from './helpers/generateBattleField';
import _ from 'lodash';


function App() {

  const [battleField, setBattleField] = useState<any>(() => null);
  const [flotilla, setFlotilla] = useState<any>(() => null);
  const [shots, setShots] = useState(() => 0);
  const [hits, setHits] = useState(() => 0);
  const [maxHits, setMaxHits] = useState(() => 0);
  const [screenMode, setScreenMode] = useState(() => null);

  const onCellClick = (x: any, y: any) => {
    let newBattleField = makeClone(battleField);
    let shot = shots + 1;
    let newFlotilla: any = [...flotilla];
    let cellValue = battleField[x][y];
    if (cellValue >= 100) {
      switch (cellValue) {
        case 100:
          newFlotilla[0].hits = newFlotilla[0].hits + 1;
          break;
        case 200:
          newFlotilla[1].hits = newFlotilla[1].hits + 1;
          break;
        case 300:
          newFlotilla[2].hits = newFlotilla[2].hits + 1;
          break;
        case 400:
          newFlotilla[3].hits = newFlotilla[3].hits + 1;
          break;
        case 500:
          newFlotilla[4].hits = newFlotilla[4].hits + 1;
          break;
      }
      newBattleField[x][y] = 'hitted';
      setBattleField(newBattleField);
      setShots(shot);
      setHits(hits + 1);
      setFlotilla(newFlotilla);
    } else {
      newBattleField[x][y] = 'miss';
      setBattleField(newBattleField);
      setShots(shot);
    }
  }


  const onClick = () => {
    let newFlotilla = _.cloneDeep(shipTypes);
    setBattleField(getBattleField());
    setHits(0);
    setShots(0);
    setFlotilla(newFlotilla);
  }

  let statsPanel = (
    <Stats
      flotilla={flotilla}
      hits={hits}
      shots={shots}
    />
  );
  let battleFieldPanel = (
    <Battlefield
      hits={hits}
      battleField={battleField}
      onClick={() => onClick()}
      onCellClick={(x: any, y: any) => onCellClick(x, y)}
      screenMode={screenMode}
    />
  );


  return (
    <div className='main-content'>
      {/* <Nav
        resetGame={() => this.resetGame()}
        screenMode={screenMode}
      /> */}
      <Container>
        {
          screenMode === 'desktop'
            ? <Row className='show-grid'>{statsPanel}{battleFieldPanel}</Row>
            : <Row className='show-grid'>{battleFieldPanel}{statsPanel}</Row>
        }
      </Container>
    </div>
  );
}

export default App
