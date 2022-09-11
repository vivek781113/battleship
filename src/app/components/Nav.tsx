import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { useDispatch } from 'react-redux';
import { cloneDeep } from 'lodash';
import { battleshipActions } from '../store/battleship.slice';
import { shipTypes } from '../constants/constants';

import {
  Container,
  Nav as BootstrpNav,
  Navbar,
} from 'react-bootstrap';

export const Nav: React.FC<{ screenMode: string }> = ({ screenMode }) => {
  const {
    setBattlefield,
    setFlotilla,
    setHits,
    setShots,
  } = battleshipActions;

  const dispatch = useDispatch();
  const resetGame = () => {
    let newFlotilla = cloneDeep(shipTypes);
    dispatch(setBattlefield(null));
    dispatch(setHits(0));
    dispatch(setShots(0));
    dispatch(setFlotilla(newFlotilla));
  };
  return (
    <Navbar className="navbar-default">
      <Container fluid>
        <Navbar.Brand>
          {screenMode === 'desktop' ? (
            <BootstrpNav.Link href="/">
              {screenMode === 'desktop'
                ? 'Battleships React Application'
                : 'Battleships'}
            </BootstrpNav.Link>
          ) : (
            <BootstrpNav.Link onClick={() => resetGame()}>
              {screenMode === 'desktop'
                ? 'Battleships React Application'
                : 'Battleships'}
            </BootstrpNav.Link>
          )}
        </Navbar.Brand>
        {screenMode === 'desktop' && (
          <BootstrpNav>
            <BootstrpNav.Item onClick={() => resetGame()}>Restart</BootstrpNav.Item>
          </BootstrpNav>
        )}
      </Container>
    </Navbar>
  );
};
