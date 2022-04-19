import "./App.css";
// https://mantine.dev/core/checkbox/
function App() {
  return (
    <div className="App">
      <div className="heading">
        <h2>Pain & Functional Description</h2>
        <p>
          The description of the current situation gives your Optimum Trainer a
          picture of and clues to the underlying causes of your problems
        </p>
      </div>
      <div className="form-div">
        <div className="form-body">
          <p>
            If you have problems with pain/aches, stiffness, weakness or
            functional problems, describe this/these below. (List the symptoms
            in descending order with the mose troublesome first)
          </p>
          <textarea name="" id="" cols="100" rows="3"></textarea>
          <div className="questions-section">
            <div className="question">
              <p>Have you been diagnosed with this problem?</p>
              <div className="question-right">
                <input
                  type="radio"
                  name="question-one"
                  id="question-one-1"
                  value="Not relevant"
                />
                <label for="question-one-1">Not relevant</label>
                <input
                  type="radio"
                  name="question-one"
                  id="question-one-2"
                  value="Yes"
                />
                <label for="question-one-2">Yes</label>
                <input
                  type="radio"
                  name="question-one"
                  id="question-one-3"
                  value="No"
                />
                <label for="question-one-3">No</label>
              </div>
            </div>
            {/*  */}
            <div className="question">
              <p>Did the problem start after a physical trauma?</p>
              <div className="question-right">
                <input
                  type="radio"
                  name="question-two"
                  id="question-two-1"
                  value="Not relevant"
                />
                <label for="question-two-1">Not relevant</label>
                <input
                  type="radio"
                  name="question-two"
                  id="question-two-2"
                  value="Yes"
                />
                <label for="question-two-2">Yes</label>
                <input
                  type="radio"
                  name="question-two"
                  id="question-two-3"
                  value="No"
                />
                <label for="question-two-3">No</label>
              </div>
            </div>
            {/*  */}
            <div className="question">
              <p>Did the problem start after a mental trauma?</p>
              <div className="question-right">
                <input
                  type="radio"
                  name="question-three"
                  id="question-three-1"
                  value="Not relevant"
                />
                <label for="question-three-1">Not relevant</label>
                <input
                  type="radio"
                  name="question-three"
                  id="question-three-2"
                  value="Yes"
                />
                <label for="question-three-2">Yes</label>
                <input
                  type="radio"
                  name="question-three"
                  id="question-three-3"
                  value="No"
                />
                <label for="question-three-3">No</label>
              </div>
            </div>
            {/*  */}
            <div className="question flex-reverse align-items-flex-start">
              <p>How often do you experience the problem?</p>
              <div className="q-4-options">
                <div className="input-group">
                  <input
                    type="radio"
                    name="question-four"
                    id="question-four-1"
                    value="Not relevant"
                  />
                  <label for="question-four-1">Not relevant</label>
                </div>
                <div className="input-group">
                  <input
                    type="radio"
                    name="question-four"
                    id="question-four-2"
                    value="Daily"
                  />
                  <label for="question-four-2">Daily</label>
                </div>
                <div className="input-group">
                  <input
                    type="radio"
                    name="question-four"
                    id="question-four-3"
                    value="Several times/week"
                  />
                  <label for="question-four-3">Several times/week</label>
                </div>
                <div className="input-group">
                  <input
                    type="radio"
                    name="question-four"
                    id="question-four-4"
                    value="A few times/month"
                  />
                  <label for="question-four-4">A few times/month</label>
                </div>
                <div className="input-group">
                  <input
                    type="radio"
                    name="question-four"
                    id="question-four-5"
                    value="A few times/year"
                  />
                  <label for="question-four-5">A few times/year</label>
                </div>
              </div>
            </div>
            <div className="question flex-reverse align-items-flex-start">
              <p>When do you experience the problem??</p>
              <div className="five">
                <div className="five-left">
                  <div className="input-group">
                    <input
                      type="checkbox"
                      name="question-five"
                      id="question-five-1"
                      value="Not relevant"
                    />
                    <label for="question-five-1">Not relevant</label>
                  </div>
                  <div className="input-group">
                    <input
                      type="checkbox"
                      name="question-five"
                      id="question-five-2"
                      value="When lying down"
                    />
                    <label for="question-five-2">When lying down</label>
                  </div>
                  <div className="input-group">
                    <input
                      type="checkbox"
                      name="question-five"
                      id="question-five-3"
                      value="When sitting"
                    />
                    <label for="question-five-3">When sitting</label>
                  </div>
                  <div className="input-group">
                    <input
                      type="checkbox"
                      name="question-five"
                      id="question-five-4"
                      value="Under standing"
                    />
                    <label for="question-five-4">Under standing</label>
                  </div>
                  <div className="input-group">
                    <input
                      type="checkbox"
                      name="question-five"
                      id="question-five-5"
                      value="In walking"
                    />
                    <label for="question-five-5">In walking</label>
                  </div>
                </div>
                <div className="five-right">
                  <textarea
                    type="text"
                    placeholder="Other? For example in rotations, side bends, wing stairs, when working with the arms above the head."
                  />
                </div>
              </div>
            </div>
            <div className="question flex-reverse align-items-flex-start">
              <p>
                How intense is the experience of the problem on average on a
                0-10 scale?
              </p>
              <div className="six-options">
                <div className="input-group-horizontal">
                  <label for="question-six-1">1</label>
                  <input
                    type="radio"
                    name="question-six"
                    id="question-six-1"
                    value="1"
                  />
                </div>
                <div className="input-group-horizontal">
                  <label for="question-six-2">2</label>
                  <input
                    type="radio"
                    name="question-six"
                    id="question-six-2"
                    value="2"
                  />
                </div>
                <div className="input-group-horizontal">
                  <label for="question-six-3">3</label>
                  <input
                    type="radio"
                    name="question-six"
                    id="question-six-3"
                    value="3"
                  />
                </div>
                <div className="input-group-horizontal">
                  <label for="question-six-4">4</label>
                  <input
                    type="radio"
                    name="question-six"
                    id="question-six-4"
                    value="4"
                  />
                </div>
                <div className="input-group-horizontal">
                  <label for="question-six-5">5</label>
                  <input
                    type="radio"
                    name="question-six"
                    id="question-six-5"
                    value="5"
                  />
                </div>
                <div className="input-group-horizontal">
                  <label for="question-six-6">6</label>
                  <input
                    type="radio"
                    name="question-six"
                    id="question-six-6"
                    value="6"
                  />
                </div>
                <div className="input-group-horizontal">
                  <label for="question-six-7">7</label>
                  <input
                    type="radio"
                    name="question-six"
                    id="question-six-7"
                    value="7"
                  />
                </div>
                <div className="input-group-horizontal">
                  <label for="question-six-8">8</label>
                  <input
                    type="radio"
                    name="question-six"
                    id="question-six-8"
                    value="8"
                  />
                </div>
                <div className="input-group-horizontal">
                  <label for="question-six-9">9</label>
                  <input
                    type="radio"
                    name="question-six"
                    id="question-six-9"
                    value="9"
                  />
                </div>
                <div className="input-group-horizontal">
                  <label for="question-six-10">10</label>
                  <input
                    type="radio"
                    name="question-six"
                    id="question-six-10"
                    value="10"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="plus-box">
        <hr className="plus-box-line" />
        <div className="fixed-plus">
          <button className="btn plus-btn round">
            <span className="">&#x002B;</span>
          </button>
        </div>
      </div>
      <div className="additional-buttons">
        <button className="btn btn-lg ml-20">Back</button>
        <button className="btn btn-lg">Next</button>
      </div>
    </div>
  );
}

export default App;
