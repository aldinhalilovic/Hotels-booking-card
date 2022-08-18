import React from "react";
import "./Form.css";
const Form = () => {
  return (
    <form className="form" onSubmit={(e) => e.preventDefault()}>
      <div className="options">
        <div className="hotels">
          <label>Izaberi hotel :</label>
          <select>
            <option value={"Vrbak"}>Vrbak</option>
            <option value={"Vrbak1"}>Vrbak1</option>
            <option value={"Vrbak2"}>Vrbak1</option>
            <option value={"Vrbak3"}>Vrbak1</option>
            <option value={"Vrbak4"}>Vrbak1</option>
          </select>
        </div>
        <div className="location">
          <label>Lokacija :</label>
          <select>
            <option value={"Novi Pazar"}>Novi Pazar</option>
            <option value={"Novi Pazar1"}>Novi Pazar</option>
            <option value={"Novi Pazar2"}>Novi Pazar</option>
            <option value={"Novi Pazar3"}>Novi Pazar</option>
            <option value={"Novi Pazar4"}>Novi Pazar</option>
          </select>
        </div>
        <div className="rate">
          <label>Ocena</label>
          <select>
            <option value={"1"}>1</option>
            <option value={"2"}>2</option>
            <option value={"3"}>3</option>
            <option value={"4"}>4</option>
            <option value={"5"}>5</option>
          </select>
        </div>
      </div>
      <input type={"submit"} defaultValue={"Submit"} />
    </form>
  );
};

export default Form;
