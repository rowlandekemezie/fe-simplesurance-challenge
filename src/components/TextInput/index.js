import React from 'react'
import PropTypes from 'prop-types';

const TextInput = ({value, type, error, onChange, question, className="", ...restProps}) => {
  return (
    <div className="textinput">
      <label className="textinput__label">{value.text}</label>
      <input
        type={type}
        value={value.reply}
        onChange={onChange}
        placeholder={value.reply} 
        className={`${className} ${error? "has-error": ""}`}
        {...restProps}
      />
      {error && <p classNam="error">{error}</p>}
    </div>
  )
}

TextInput.propTypes = {
  /// Add propTypes validation here
}

export default TextInput;