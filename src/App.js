// App.js
import React, { Component } from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { useDarkMode } from './useDarkMode';
import { lightTheme, darkTheme } from './theme';
import { GlobalStyles } from './global';
import Toggle from './Toggle';
import { Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import MarcosText from './MarcosText';
import Media from 'react-bootstrap/Media';
import logo from './icons/pp.jpg';


function App() {
  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  if (!componentMounted) {
    return <div />
  };

  return (

    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <Container fluid="md">
          <Row>
            <Col> <h1>Marco Barbato</h1></Col>
            <Toggle theme={theme} toggleTheme={toggleTheme} />
          </Row>
        </Container>
        <hr></hr>    
        
            <MarcosText></MarcosText>
        <footer>
          <Container>

            <Row>
              <Col md={{ span: 8, offset: 1 }}>
                <h2> Über Mich </h2>
                  <div class="fixed ...">
                  Hallo, ich bin ein young Professional, der eine Leidenschaft dafür hat neue Dinge zu erlernen.
                  Da diese Webseite mein erstes Projekt mit React darstellt, würde ich mich über Verbesserungsvorschläge oder Feedback freuen.
                  </div>
              </Col>
              <Col md={{ span: 1, offset: 0 }}>
                <img src={logo} rounded alt="logo" width="150" height="150" alt="test" title="testpic" />

              </Col>
            </Row>
          </Container>

        </footer>
      </>
    </ThemeProvider>
  );

}

export default App;

