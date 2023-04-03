import { useEffect, useState } from "react";
import { Loading } from "../components/Loading";

export default function Fib() {
  const [values, setValues] = useState([
    { index: 1, result: 1 },
    { index: 2, result: 1 },
  ]);
  const [index, setIndex] = useState("");
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState("disabled");
  const [error, setError] = useState(false);
  console.log(values);

  useEffect(() => {
    if (parseInt(index) < 0 || parseInt(index) > 40 || index === "") {
      setDisabled("disabled");
    } else {
      setDisabled("");
    }
  }, [index]);

  const calcFib = (index) => {
    const res = [0, 1];
    for (let i = 2; i <= index; i++) {
      res[i] = res[i - 1] + res[i - 2];
    }
    setValues([...values, { index, result: res[index] }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (parseInt(index) < 0 || parseInt(index) > 40 || index === "") {
      setError(true);
    } else {
      setError(false);
      setLoading(true);
      // console.log(index);
      calcFib(index);
      //console.log(response);
      setTimeout(() => {
        setLoading(false);
      }, 1000);

      setIndex("");
    }
  };

  const renderValues = () => {
    return values.map((value) => {
      return (
        <div
          key={value.index}
          className="d-flex flex-row justify-content-between"
        >
          <div>For index {value.index}</div>
          <div className="">...........................</div>
          {loading ? <div>...</div> : <div>{value.result}</div>}
        </div>
      );
    });
  };

  return (
    <div className="fib">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Enter Index between 0 and 40: </label>
          <input
            type="number"
            className="form-control mx-auto"
            style={{ width: "200px" }}
            value={index}
            onChange={(e) => setIndex(e.target.value)}
          />
        </div>
        <button className={`btn btn-info ${disabled}`}>Submit</button>
      </form>
      {error && (
        <div style={{ color: "red" }}>Please enter a supported index</div>
      )}
      {loading && <Loading util="info" message="Working" />}

      <h3 className="mt-5">Calculated Values:</h3>
      <div
        className="d-flex flex-column justify-content-center mx-auto"
        style={{ width: "300px" }}
      >
        {renderValues()}
      </div>
    </div>
  );
}
