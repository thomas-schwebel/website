import React from 'react';
import PropTypes from 'prop-types';
import GalleryItem from '../gallery-item';
import Lightbox from '../lightbox';

export default class Gallery extends React.Component {
  state = {
    items : [],
    currentIndex: -1,
    showLightbox: false
  }

  constructor(props) {
    super(props);
    this.state.items = props.items;
  }

  renderItem(item, index) {
    return (
      <GalleryItem
        key={`item${index}`}
        src={item.src}
        thumb={item.thumb}
        title={item.title}  
        index={index}
        onClick={this.openLightbox.bind(this)}
      />
    )
  }

  openLightbox(e) {
    const newIndex = parseInt(e.target.getAttribute('data-index'));
    this.setState({ currentIndex: newIndex });
    this.setState({ showLightbox: true });
  }

  closeLightbox() {
    this.setState({ showLightbox: false });
  }

  keyHandling(e) {
    if (e.key === 'Escape') {
      this.setState({ showLightbox: false });
    }

    if (this.state.showLightbox) {
      if (e.key === 'ArrowLeft' && this.state.currentIndex > 0) {
        this.setState({ currentIndex: this.state.currentIndex - 1 });
      }


      if (e.key === 'ArrowRight' && this.state.currentIndex < this.state.items.length - 1) {
        this.setState({ currentIndex: this.state.currentIndex + 1 });
      }
    }
  }

  componentDidMount() {
    window.addEventListener("keyup", this.keyHandling.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener("keyup", this.keyHandling.bind(this));
  }

  render() {
    const { showLightbox, items, currentIndex } = this.state;

    return (
      <>
        <Lightbox
          currentIndex={currentIndex}
          items={items}
          showLightbox={showLightbox}
          onClose={this.closeLightbox.bind(this)}
        />
        <section id='items' style={styles}> 
          { items.map((item, index) => this.renderItem(item, index)) }
        </section>
      </>
    )
  }
}

const styles = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
  gridAutoRows: 'minmax(150px, auto)',
  gridAutoFlow: 'dense',
  gridGap: '5px'
};

Gallery.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    thumb: PropTypes.string.isRequired
  })).isRequired
};