import { useState } from "react";

function TestPage() {
  const [variable, setVariable] = useState(0);

  function name() {
    // Won't Work
    // variable = variable + 1;
  }

  return (
    <div>
      <h1>Test</h1>
      <p>{variable}</p>
      <button onClick={name}>Aumentar</button>
    </div>
  );
}

export default TestPage;
