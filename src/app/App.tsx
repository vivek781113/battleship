import 'bootstrap/dist/css/bootstrap.min.css';

import { cloneDeep } from 'lodash';
import { useEffect, useState } from 'react';
import { Row, Container } from 'react-bootstrap';
import { BattleField } from './components/BattleField';
import { Nav } from './components/Nav';
import { Stats } from './components/Stats';
import { shipTypes } from './constants/constants';
import { getMaxHits } from './helpers/getMaxHits';
import './App.css';
import { useDispatch } from 'react-redux';
import { battleshipActions } from './store/battleship.slice';

function App() {
  const {
    setBattlefield,
    setFlotilla,
    setHits,
    setMaxHits,
    setShots,
  } = battleshipActions;

  const dispatch = useDispatch();

  const [screenMode, setScreenMode] = useState<any>(null);
  useEffect(() => {
    const maxHits = getMaxHits();
    let newFlotilla = cloneDeep(shipTypes);
    dispatch(setFlotilla(newFlotilla));
    dispatch(setMaxHits(maxHits));
  }, []);
  useEffect(() => {
    window.addEventListener('resize', () =>
      updateDimensions(window.innerWidth)
    );
    updateDimensions(window.innerWidth);

    return () => {
      window.removeEventListener('resize', () =>
        updateDimensions(window.innerWidth)
      );
    };
  }, []);


  const resetGame = () => {
    let newFlotilla = cloneDeep(shipTypes);
    dispatch(setBattlefield(null));
    setHits(0);
    setShots(0);
    setFlotilla(newFlotilla);
  };

  const updateDimensions = (dimension) => {
    if (dimension < 992) {
      setScreenMode('tablet');
    } else {
      setScreenMode('desktop');
    }
  };
  return (
    <div className="main-content">
      <Nav resetGame={resetGame} screenMode={screenMode} />
      <Container>
        {screenMode === 'desktop' ? (
          <Row className="show-grid">
            <Stats />
            <BattleField
              screenMode={screenMode}
            />
          </Row>
        ) : (
          <Row className="show-grid">
            <BattleField
              screenMode={screenMode}
            />
            <Stats />
          </Row>
        )}
      </Container>
    </div>
  );
}

export default App;
