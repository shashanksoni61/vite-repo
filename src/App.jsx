import { useContext, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { Button, Table } from "@mantine/core";
import Form from "./components/Form";
import { AppContextProvider, AppContext } from "./context/AppContext";

function Homepage() {
  const { summaryData } = useContext(AppContext);
  const ths = (
    <tr>
      <th>P1</th>
      <th>P2</th>
      <th>P3</th>
      <th>P4</th>
      <th>P5</th>
      <th>P6</th>
    </tr>
  );

  const rows = summaryData.map((item) => (
    <tr key={item.p2}>
      <td>{item.p2}</td>
      <td>{item.p3}</td>
      <td>{item.p4}</td>
      <td>{item.p5}</td>
      <td>
        {item.p6.options.join(", ")}
        {"\n"}
        {item.p6.probDetail}
      </td>
      <td>{item.p7}</td>
    </tr>
  ));

  return (
    <>
      {summaryData.length > 0 && (
        <Table striped highlightOnHover>
          <thead>{ths}</thead>
          <tbody>{rows}</tbody>
        </Table>
      )}
      <Form />
      <div className="additional-buttons">
        <Button className="btn btn-lg ml-20">Back</Button>
        <Link to="/summary">
          <Button className="btn btn-lg">Next</Button>
        </Link>
      </div>
    </>
  );
}

function SummaryPage() {
  const { summaryData } = useContext(AppContext);
  const ths = (
    <tr>
      <th>P1</th>
      <th>P2</th>
      <th>P3</th>
      <th>P4</th>
      <th>P5</th>
      <th>P6</th>
    </tr>
  );

  const rows = summaryData.map((item) => (
    <tr key={item.p2}>
      <td>{item.p2}</td>
      <td>{item.p3}</td>
      <td>{item.p4}</td>
      <td>{item.p5}</td>
      <td>
        {item.p6.options.join(", ")}
        {"\n"}
        {item.p6.probDetail}
      </td>
      <td>{item.p7}</td>
    </tr>
  ));
  return (
    <>
      <p>Summary Page</p>
      <Table striped highlightOnHover>
        <thead>{ths}</thead>
        <tbody>{rows}</tbody>
      </Table>
      <div className="additional-buttons">
        <Link to="/">
          <Button className="btn btn-lg ml-20">Back</Button>
        </Link>
      </div>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContextProvider>
        <div className="App">
          <div className="heading">
            <h2>Pain & Functional Description</h2>
            <p>
              The description of the current situation gives your Optimum
              Trainer a picture of and clues to the underlying causes of your
              problems
            </p>
          </div>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/summary" element={<SummaryPage />} />
          </Routes>
        </div>
      </AppContextProvider>
    </BrowserRouter>
  );
}

export default App;
