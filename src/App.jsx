import { useContext, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { Button, Table } from "@mantine/core";
import Form from "./components/Form";
import { AppContextProvider, AppContext } from "./context/AppContext";

function Homepage() {
  const { summaryData } = useContext(AppContext);
  const [formData, setFormData] = useState();

  return (
    <>
      <div className="app">
        <div className="heading">
          <h2>Pain & Functional Description</h2>
          <p>
            The description of the current situation gives your Optimum Trainer
            a picture of and clues to the underlying causes of your problems
          </p>
        </div>
        <Form />
        <div className="additional-buttons">
          <Button className="btn btn-lg ml-20">Back</Button>
          <Link to="/summary">
            <Button className="btn btn-lg">Next</Button>
          </Link>
        </div>
      </div>
    </>
  );
}

function SummaryPage() {
  const { summaryData } = useContext(AppContext);
  const ths = (
    <tr>
      <th>Have you been diagnosed with this problem?</th>
      <th>Did the problem start after a physical trauma?</th>
      <th>Did the problem start after a mental trauma?</th>
      <th>How often do you experience the problem?</th>
      <th>When do you experience the problem?</th>
      <th>
        How intense is the experience of the problem on average on a 0-10 scale?
      </th>
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
        <br />
        <b>Additional Information &nbsp;</b>
        {item.p6.probDetail}
      </td>
      <td>{item.p7}</td>
    </tr>
  ));
  return (
    <>
      <div className="App">
        <div className="heading">
          <h2>Pain & Functional Description</h2>
          <p>
            The description of the current situation gives your Optimum Trainer
            a picture of and clues to the underlying causes of your problems
          </p>
        </div>
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
      </div>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContextProvider>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/summary" element={<SummaryPage />} />
        </Routes>
      </AppContextProvider>
    </BrowserRouter>
  );
}

export default App;
