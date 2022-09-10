import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {
  Container,
  Nav as BootstrpNav,
  Navbar,
  NavItem,
} from 'react-bootstrap';

export const Nav: React.FC<any> = (props) => {
  const { resetGame, screenMode } = props;
  return (
    <Navbar bg="light" variant="light">
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
            <BootstrpNav.Link onClick={() => resetGame()}>Restart</BootstrpNav.Link>
          </BootstrpNav>
        )}
      </Container>
    </Navbar>
  );
};
