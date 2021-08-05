import React from "react";

import "./Form.css";

const Form = ({
  categories,
  partsOfSpeech,
  handleChange,
  formState,
  handleSubmit,
}) => (
  <div className="Form">
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="value">
          Value
          <input
            type="text"
            name="value"
            id="value"
            value={formState.value}
            onChange={handleChange}
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
            value={formState.translation}
            onChange={handleChange}
            placeholder="Required"
            required
          />
        </label>
      </div>
      <div className="form-group">
        <label htmlFor="category">
          Category
          <select
            name="category"
            id="category"
            value={formState.category}
            onChange={handleChange}
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className="form-group">
        <label htmlFor="keyword">
          Keyword
          <input
            type="text"
            name="keyword"
            id="keyword"
            value={formState.keyword}
            onChange={handleChange}
          />
        </label>
      </div>
      <div className="form-group">
        <label htmlFor="part_of_speech">
          Part of Speech
          <select
            name="part_of_speech"
            id="part_of_speech"
            value={formState.part_of_speech}
            onChange={handleChange}
          >
            {partsOfSpeech.map((partOfSpeech) => (
              <option key={partOfSpeech} value={partOfSpeech}>
                {partOfSpeech}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className="form-group">
        <label htmlFor="example">
          Example
          <input
            type="text"
            name="example"
            id="example"
            value={formState.example}
            onChange={handleChange}
          />
        </label>
      </div>
      <button type="submit">Add to Vocab</button>
    </form>
  </div>
);

export default Form;
