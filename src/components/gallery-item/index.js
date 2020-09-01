import React from 'react';
import PropTypes from 'prop-types';
import './gallery-item.css';

export default class GalleryItem extends React.Component {
  render() {
    const {thumb, index, onClick} = this.props;

    return (
      <div id='gallery-item'>
        <img 
          src={thumb} 
          alt="gallery item"
          data-index={index}
          onClick={onClick}
        />
      </div>
    );
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
   