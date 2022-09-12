import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { cloneDeep } from 'lodash';
import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { BattleField } from './components/BattleField';
import { Nav } from './components/Nav';
import { Stats } from './components/Stats';
import { shipTypes } from './constants/constants';
import { getMaxHits } from './helpers/getMaxHits';
import { useDispatch } from 'react-redux';
import { battleshipActions } from './store/battleship.slice';

function App() {
  const { setFlotilla, setMaxHits } = battleshipActions;

  const dispatch = useDispatch();

  const [screenMode, setScreenMode] = useState<string>('');

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

  const updateDimensions = (dimension: number) => {
    if (dimension < 900) {
      setScreenMode('tablet');
    } else {
      setScreenMode('desktop');
    }
  };
  return (
    <div className="main-content">
      <Nav screenMode={screenMode} />
      <Container fluid>
        {screenMode === 'desktop' ? (
          <div className="show-grid">
            <Stats />
            <BattleField />
          </div>
        ) : (
          <div className="show-grid">
            <BattleField />
            <Stats />
          </div>
        )}
      </Container>
    </div>
  );
}

export default App;
