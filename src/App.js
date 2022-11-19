import TallMenBarChart from "./components/TallMenBarChart";

import { Container, Navbar } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand>D3.js and React</Navbar.Brand>
        </Container>
      </Navbar>
      <Container>
        <TallMenBarChart />
      </Container>
    </div>
  );
}

export default App;
