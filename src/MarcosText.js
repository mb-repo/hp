import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { css } from 'styled-components';


function MarcosText() {
    return (
        <div class="container mx-auto">
            <div>
                <Container fluid>
                    <Row>
                        <Col > <h2>Ausbildung</h2></Col>
                    </Row>
                </Container>
                <h2> </h2>
                <Container fluid>
                    <Row>
                    
                        <Col sm={3}> <p class="font-weight-bold">10/2017 - 03/2021</p></Col>
                        <Col sm={9}> <p class="font-weight-bold">Universität Hohenheim/Stuttgart, Master of Science Wirtschaftsinformatik</p>
            <ul>
                                <li>Vertiefung in Strategisches Informationsmanagement, Service Operations Management, Entrepreneurship, Management von IT-Unternehmen und Unternehmenssoftware, Innovationsmanagement</li>
                                <li>Masterarbeit mit dem Titel: “Entwicklung eines Vorgehensmodells für Agilität in High Reliability Organisations”</li>
                            </ul>
                        </Col>

                    </Row>
                </Container>
                <Container fluid>
                    <Row>
                        <Col sm={3}><p class="font-weight-bold">03/2012 - 07/2016</p></Col>
                        <Col sm={9}> <p class="font-weight-bold">Hochschule für Technik Stuttgart, Bachelor of Science Wirtschaftsinformatik </p>
                             <ul>
                                <li>Vertiefung in Pervasive Computing, Logistik und Beschaffung, IT-Infrastrukturmanagement</li>
                                <li>Bachelorarbeit mit dem Titel: “Analyse und Optimierung der Requirements Engineering-Methodik bei agilen Softwareprojekten innerhalb eines Großkonzerns”</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
                <Container fluid>
                    <Row>
                        <Col sm={3}><p class="font-weight-bold">09/2009 - 08/2011</p></Col>
                        <Col sm={9}><p class="font-weight-bold"> Theodor-Heuss-Schule Reutlingen, Fachhochschulreife</p>
            <ul>
                                <li>Schwerpunkt Wirtschaft</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
                <h2> </h2>
                <hr></hr>
                <Container fluid>
                    <Row>
                        <Col><h2>Erfahrung</h2></Col>
                    </Row>
                </Container>
                <h2> </h2>
                <Container fluid>
                    <Row>
                        <Col sm={3}> <p class="font-weight-bold">03/2016 - 09/2016</p></Col>
                        <Col sm={9}>  <p class="font-weight-bold">Bachelorand, Daimler AG, Stuttgart-Möhringen </p>
                             <ul>
                                <li>Erfassung und Analyse des aktuellen Requirements Engineering-Prozesses</li>
                                <li>Erarbeitung von Optimierungsmaßnahmen</li>
                                <li>Erarbeitung eines geeigneten SOLL-Prozesses für das Requirements Engineering</li>
                                <li>Modellierung des Prozesses in der BPMN-Notation</li>
                                <li>Erstellung eines User-Story-Musters</li>
                                <li>Einpflegen der Inhalte der Bachelorarbeit in das abteilungseigene Confluence-Tool</li>
                                <li>Definition eines Anforderungsprofils für den Requirements Engineer	</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
                <Container fluid>
                    <Row>

                        <Col sm={3}>  <p class="font-weight-bold">09/2015 - 03/2016</p></Col>
                        <Col sm={9}>  <p class="font-weight-bold">Praktikant, Daimler AG, Stuttgart-Möhringen</p>
                             <ul>
                                <li>Weiterentwicklung des IT-Service-Delivery-Models</li>
                                <li>Unterstützung der IT-Organisation in den Service Delivery Prozessen</li>
                                <li>Erstellung von Best Practices</li>
                                <li>Erarbeitung von Workshop- und Dokumentationsmaterialien 	</li>
                            </ul>
                        </Col>

                    </Row>
                </Container>
                <h2> </h2>
                <hr></hr>
                <Container fluid>
                    <Row>
                        <Col> <h2>Skills und Interessen</h2></Col>
                    </Row>
                </Container>
                <h2> </h2>
                <Container fluid>
                    <Row>
                        <Col sm={3}> <p class="font-weight-bold">Sprachen</p> </Col>
                        <Col sm={9}> Deutsch (Muttersprache), English (Fließend in Wort und Schrift)</Col>
                    </Row>
                </Container>
                <h2> </h2>
                <Container fluid>
                    <Row>
                        <Col sm={3}><p class="font-weight-bold">Technologien</p></Col>
                        <Col sm={9}> Ganz viele Tolle</Col>
                    </Row>
                </Container>
                <h2> </h2>
                <Container fluid>
                    <Row>
                        <Col sm={3}><p class="font-weight-bold">Interessen</p></Col>
                        <Col sm={9}>Schach, Fußball, Esports, PC-Building</Col>
                    </Row>
                </Container>
                <h2> </h2>
                <hr></hr>
                </div>
                </div>
    )
}

export default MarcosText;

