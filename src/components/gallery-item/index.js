import React from 'react';
import PropTypes from 'prop-types';
import './gallery-item.css';

export default class GalleryItem extends React.Component {
  render() {
    const {thumb, index, onClick} = this.props;

    return (
      <div id='gallery-item'>
        <div className='spinner-container'>
          <span className='thumb-spinner' id={`thumb-spinner${index}`} ></span>
        </div>
        <img 
          src={thumb} 
          alt="gallery item"
          data-index={index}
          onClick={onClick}
          onLoad={this.deleteSpinner}
        />
      </div>
    );
  }

  deleteSpinner(e) {
    const index = e.target.getAttribute('data-index');
    const spinner = document.getElementById(`thumb-spinner${index}`);
    spinner.parentNode.removeChild(spinner);
  }
};

GalleryItem.propTypes = {
  thumb: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  onClick: PropTypes.func
}

GalleryItem.defaultProps = {
  onClick: () => {}
}
   