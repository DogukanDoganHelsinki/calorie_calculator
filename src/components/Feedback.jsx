import React, { useState } from "react";
import { person } from "@jsonforms/examples";
import {
  materialRenderers,
  materialCells,
} from "@jsonforms/material-renderers";
import { JsonForms } from "@jsonforms/react";
import "./Feedback.css";

const Feedback = () => {
  const schema = person.schema;
  const uischema = person.uischema;
  const initialData = person.data;

  //usememo-usecallback-usedebounce-forwardref

  console.log("schema:", schema);
  console.log("uischema", uischema);
  console.log("initialData", initialData);

  const [data, setData] = useState(initialData);

  return (
    <>
      <div className="feedback-container-div">
        <JsonForms
          schema={schema}
          uischema={uischema}
          data={data}
          renderers={materialRenderers}
          cells={materialCells}
          onChange={({ data, errors }) => setData(data)}
        />
      </div>
    </>
  );
};

export default Feedback;
