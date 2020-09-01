import React from 'react';
import PropTypes from 'prop-types';
import './lightbox.css';

export default class Lightbox extends React.Component {
    renderContent(item) {
        const descHTML = { __html: item.desc }; // :)
        
        return (
            <>
              <img id='lightbox-img' src={item.src} alt={item.title}/>
              <h1 id='title'>
                  {item.title}
              </h1>
              <p id='desc' dangerouslySetInnerHTML={descHTML}></p>
            </>
        );
    }

    render() {
        const { showLightbox, items, currentIndex, onClose } = this.props;
    
        return (
        <div id={`lightbox-${showLightbox?'on':'off'}`} onClick={onClose}>
            <div id='lightbox-inner'>
              <button id='close' onClick={onClose}>
                <b>X</b>
              </button>
              { currentIndex !== -1 && this.renderContent(items[currentIndex]) }
            </div>
          </div>
        );
    }
};

Lightbox.propTypes = {
    showLightbox: PropTypes.bool,
    items: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        desc: PropTypes.string.isRequired,
        src: PropTypes.string.isRequired,
        thumb: PropTypes.string.isRequired
      })).isRequired,
    currentIndex: PropTypes.number.isRequired,
    onClose:PropTypes.func
}