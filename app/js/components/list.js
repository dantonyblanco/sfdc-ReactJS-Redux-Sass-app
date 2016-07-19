import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class TextList extends Component {
  renderText(text, index) {
    return(
      <li key={index}>
      	{text}
      </li>
    );
  }
  render() {
    return(
      <ul>
        {this.props.texts.map(this.renderText)}
      </ul>
    );
  }
}
TextList.propTypes = {
    texts : PropTypes.array
}
function mapStateToProps({ texts }) {
  return { texts };
}

export default connect(mapStateToProps)(TextList);
