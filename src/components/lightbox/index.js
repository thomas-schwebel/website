import React from 'react';
import PropTypes from 'prop-types';

export default class Lightbox extends React.Component {
    renderContent(item) {
        const descHTML = { __html: item.desc }; // :)
        
        return (
            <>
              <img style={imgStyles} src={item.src} alt={item.title}/>
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
        <div id='lightbox' style={styles(showLightbox)} onClick={onClose}>
            <div id='lightbox-inner' style={innerStyles}>
              <button id='close' style={closeBtnStyles} onClick={onClose}>
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

const closeBtnStyles = {
    float: 'right',
    border: 0
}

const styles = showLightbox => { 
    const base = {
        display: 'none',
        position: 'fixed',
        background: 'rgba(0,0,0,0.75)',    
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        zIndex: 100
    }

    if (showLightbox) {
        return {
            ...base,
            display: 'grid',
            alignItems: 'center',
            justifyItems: 'center',
        }
    }

    return base;
};

const innerStyles = {
    maxWidth: '1000px',
    padding: '20px',
}

const imgStyles = {
    width: '100%'
}