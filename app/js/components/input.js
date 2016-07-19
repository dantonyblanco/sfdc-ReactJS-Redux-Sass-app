import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { executeMyAction } from '../actions/index';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = { text : ''};
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  onInputChange(event){
    let text = event.target.value || '';
    this.setState({text: text});
  }
  onFormSubmit(event){
    event.preventDefault();
    if(this.state.text != ''){
      this.props.executeMyAction(this.state);
      this.setState( {text : ''});
    }
  }

  render() {
    return(
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder = "Your text"
          value = {this.state.text}
          onChange = {this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit"> Add item </button>
        </span>
      </form>
    );
  }
}
Input.propTypes = {
    executeMyAction : PropTypes.func
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({ executeMyAction }, dispatch);
}

export default connect(null, mapDispatchToProps)(Input);
