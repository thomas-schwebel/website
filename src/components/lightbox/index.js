import React from 'react';
import PropTypes from 'prop-types';
import './lightbox.css';

export default class Lightbox extends React.Component {
  state = {
    loadedSources: []
  }

  onLoad() {
    const imgSrc = document.getElementById('lightbox-img').getAttribute('src')
    const currentSources = this.state.loadedSources;

    if (!currentSources.includes(imgSrc)) {
      this.setState({loadedSources: [...currentSources, imgSrc]});
    }
  }

  renderContent(item) {
      const descHTML = { __html: item.desc }; // :)

      const isLoading = !this.state.loadedSources.includes(item.src);

      return (
          <>
            <div style={{ display: isLoading ? 'block' : 'none' }} id='spinner'>
              <span className={isLoading ? 'spinner' : ''}></span>
            </div>
            <img style={{ visibility: isLoading ? 'hidden' : 'visible' }} 
              id='lightbox-img' src={item.src} alt={item.title} onLoad={this.onLoad.bind(this)}/>
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