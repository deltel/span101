import React from "react";

import "./Form.css";

const Form = () => (
  <div className="Form">
    <form>
      <div className="form-group">
        <label htmlFor="value">
          Value
          <input
            type="text"
            name="value"
            id="value"
            placeholder="Required"
            required
          />
        </label>
      </div>
      <div className="form-group">
        <label htmlFor="translation">
          Translation
          <input
            type="text"
            name="translation"
            id="translation"
            placeholder="Required"
            required
          />
        </label>
      </div>
      <div className="form-group">
        <label htmlFor="category">
          Category
          <select name="category" id="category">
            <option value="Placeholder">Placeholder</option>
          </select>
        </label>
      </div>
      <div className="form-group">
        <label htmlFor="keyword">
          Keyword
          <input type="text" name="keyword" id="keyword" />
        </label>
      </div>
      <div className="form-group">
        <label htmlFor="partOfSpeech">
          Part of Speech
          <select name="partOfSpeech" id="partOfSpeech">
            <option value="Placeholder">Placeholder</option>
          </select>
        </label>
      </div>
      <div className="form-group">
        <label htmlFor="example">
          Example
          <input type="text" name="example" id="example" />
        </label>
      </div>
      <button type="submit">Add to Vocab</button>
    </form>
  </div>
);

export default Form;
