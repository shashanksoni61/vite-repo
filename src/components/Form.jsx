import { memo, useContext, useState } from "react";
import {
  RadioGroup,
  Radio,
  CheckboxGroup,
  Checkbox,
  Textarea,
  Button,
} from "@mantine/core";
import { AppContext } from "../context/AppContext";

const Form = ({ pushDataToSummary }) => {
  const { summaryData, setSummaryData } = useContext(AppContext);
  const [formValues, setFormValues] = useState({
    p1: "",
    p2: "",
    p3: "",
    p4: "",
    p5: "",
    p6: {
      options: [],
      probDetail: "",
    },
    p7: "",
  });

  const [forms, setForms] = useState(
    summaryData.length > 0
      ? summaryData
      : [
          {
            p1: "",
            p2: "",
            p3: "",
            p4: "",
            p5: "",
            p6: {
              options: [],
              probDetail: "",
            },
            p7: "",
          },
        ]
  );
  const handleFormChange = (
    value,
    field,
    index,
    type = "input",
    checboxField = ""
  ) => {
    const oldData = [...forms];
    if (type === "input") {
      oldData[index][field] = value;
    } else {
      if (checboxField === "options") {
        oldData[index][field][checboxField] = value;
      } else {
        oldData[index][field][checboxField] = value.target.value;
      }
    }
    setForms(oldData);
    setSummaryData(oldData);
  };

  const addFormFields = () => {
    let formObj = {
      p1: "",
      p2: "",
      p3: "",
      p4: "",
      p5: "",
      p6: {
        options: [],
        probDetail: "",
      },
      p7: "",
    };
    setForms([...forms, formObj]);
  };

  console.log(forms);

  const { p1, p2, p3, p4, p5, p6, p7 } = formValues;
  const { options, probDetail } = p6;

  // const submitData = () => {
  //   if (!p2 || !p3 || !p4 || !p5 || options.length === 0 || !p7) {
  //     console.log("fill all values");
  //     return;
  //   }

  //   setSummaryData((prev) => [...prev, formValues]);
  //   setFormValues((prev) => ({
  //     ...prev,
  //     p1: "",
  //     p2: "",
  //     p3: "",
  //     p4: "",
  //     p5: "",
  //     p6: {
  //       options: [],
  //       probDetail: "",
  //     },
  //     p7: "",
  //   }));
  // };

  return (
    <>
      <div className="form-div">
        <div className="form-body">
          <p>
            If you have problems with pain/aches, stiffness, weakness or
            functional problems, describe this/these below. (List the symptoms
            in descending order with the mose troublesome first)
          </p>
          {forms.map((item, index) => (
            <div key={index}>
              <Textarea
                disabled
                name=""
                id=""
                cols="100"
                rows="3"
                value={p1}
                onChange={(e) =>
                  setFormValues((prev) => ({ ...prev, p1: e.target.value }))
                }
              ></Textarea>
              <div className="questions-section">
                <div className="question">
                  <p>Have you been diagnosed with this problem?</p>
                  <div className="question-right">
                    <RadioGroup
                      required
                      value={item.p2}
                      onChange={(e) => {
                        handleFormChange(e, "p2", index);
                        setFormValues((prev) => ({ ...prev, p2: e }));
                      }}
                    >
                      <Radio value="Not relevant" label="Not relevant" />
                      <Radio value="Yes" label="Yes" />
                      <Radio value="No" label="No" />
                    </RadioGroup>
                  </div>
                </div>
                {/*  */}
                <div className="question">
                  <p>Did the problem start after a physical trauma?</p>
                  <div className="question-right">
                    <RadioGroup
                      required
                      value={item.p3}
                      onChange={(e) => {
                        handleFormChange(e, "p3", index);
                        setFormValues((prev) => ({ ...prev, p3: e }));
                      }}
                    >
                      <Radio value="Not relevant" label="Not relevant" />
                      <Radio value="Yes" label="Yes" />
                      <Radio value="No" label="No" />
                    </RadioGroup>
                  </div>
                </div>
                {/*  */}
                <div className="question">
                  <p>Did the problem start after a mental trauma?</p>
                  <div className="question-right">
                    <RadioGroup
                      required
                      value={item.p4}
                      onChange={(e) => {
                        handleFormChange(e, "p4", index);
                        setFormValues((prev) => ({ ...prev, p4: e }));
                      }}
                    >
                      <Radio value="Not relevant" label="Not relevant" />
                      <Radio value="Yes" label="Yes" />
                      <Radio value="No" label="No" />
                    </RadioGroup>
                  </div>
                </div>
                {/*  */}
                <div className="question flex-reverse align-items-flex-start">
                  <p>How often do you experience the problem?</p>
                  <div className="q-4-options">
                    <RadioGroup
                      required
                      value={item.p5}
                      onChange={(e) => {
                        handleFormChange(e, "p5", index);
                        setFormValues((prev) => ({ ...prev, p5: e }));
                      }}
                    >
                      <Radio value="Not relevant" label="Not relevant" />
                      <Radio value="Daily" label="Daily" />
                      <Radio
                        value="Several times/week"
                        label="Several times/week"
                      />
                      <Radio
                        value="A few times/month"
                        label="A few times/month"
                      />
                      <Radio
                        value="A few times/year"
                        label="A few times/year"
                      />
                    </RadioGroup>
                  </div>
                </div>
                <div className="question flex-reverse align-items-flex-start">
                  <p>When do you experience the problem??</p>
                  <div className="five">
                    <div className="five-left">
                      <CheckboxGroup
                        required
                        name="p6"
                        value={item.p6.options}
                        onChange={(e) => {
                          console.log(e);
                          handleFormChange(
                            e,
                            "p6",
                            index,
                            "checkbox",
                            "options"
                          );
                          setFormValues((prev) => ({
                            ...prev,
                            p6: {
                              ...prev.p6,
                              options: [...e],
                            },
                          }));
                        }}
                      >
                        <Checkbox value="Not relevant" label="Not relevant" />
                        <Checkbox
                          value="When lying down"
                          label="When lying down"
                        />
                        <Checkbox value="When sitting" label="When sitting" />
                        <Checkbox
                          value="Under standing"
                          label="Under standing"
                        />
                        <Checkbox value="In walking" label="In walking" />
                      </CheckboxGroup>
                    </div>
                    <div className="five-right">
                      <Textarea
                        value={item.p6.probDetail}
                        onChange={(e) => {
                          handleFormChange(
                            e,
                            "p6",
                            index,
                            "checkbox",
                            "probDetail"
                          );
                          setFormValues((prev) => ({
                            ...prev,
                            p6: {
                              ...prev.p6,
                              probDetail: e.target.value,
                            },
                          }));
                        }}
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
                    <RadioGroup
                      required
                      value={item.p7}
                      onChange={(e) => {
                        handleFormChange(e, "p7", index);
                        setFormValues((prev) => ({
                          ...prev,
                          p7: e,
                        }));
                      }}
                    >
                      {/* {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
                <Radio key={item} value={item} label={item} />
              ))} */}

                      <Radio value="1" label="1" />
                      <Radio value="2" label="2" />
                      <Radio value="3" label="3" />
                      <Radio value="4" label="4" />
                      <Radio value="5" label="5" />
                      <Radio value="6" label="6" />
                      <Radio value="7" label="7" />
                      <Radio value="8" label="8" />
                      <Radio value="9" label="9" />
                      <Radio value="10" label="10" />
                    </RadioGroup>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="plus-box">
        <hr className="plus-box-line" />
        <div className="fixed-plus">
          <Button className="btn plus-btn round" onClick={addFormFields}>
            <span className="plus-button-span">&#x002B;</span>
          </Button>
        </div>
      </div>
    </>
  );
};

export default memo(Form);
