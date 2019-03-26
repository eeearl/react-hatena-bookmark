import React from 'react';
import PropTypes from 'prop-types';

class HatenaBookmark extends React.Component {

  state = { initialized: false }

  componentDidMount() {
    if (this.state.initialized) {
      return;
    }

    const s = document.createElement('script');
    s.src = '//b.st-hatena.com/js/bookmark_button.js';
    s.type = 'text/javascript';
    s.charset = 'utf-8';
    s.async = true;

    document.body.appendChild(s);
    this.setState({ initialized: true });
  }

  render() {
    const { url, title, label, counter, 
      lang, design, size, width, height } = this.props;
    let layout = '';

    switch (design) {
      case 'basic':
        layout = `basic${label && '-label'}${counter && '-counter'}`; 
        break;
      case 'touch':
        layout = `touch${counter && '-counter'}`; 
        break; 
      case 'vertical':
        layout = `vertical-${size}`
        break;
      default:
        layout = design;
        break;
    }

    return (
      <a ref={(r) => this.hatenaButton = r}
        href={`http://b.hatena.ne.jp/entry/${url}`}
        className={`hatena-bookmark-button ${this.className}`}
        data-hatena-bookmark-title={title}
        data-hatena-bookmark-layout={layout}
        data-hatena-bookmark-lang={lang}
        data-hatena-bookmark-width={width}
        data-hatena-bookmark-height={height}
        title={title}
        target='_top' style={this.style}>
        { this.children }
      </a>
    )
  }
}

HatenaBookmark.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
  design: PropTypes.oneOf(['basic', 'touch', 'vertical', 'simple']),
  size: PropTypes.oneOf(['normal', 'large']),
  label: PropTypes.bool,
  counter: PropTypes.bool,
  lang: PropTypes.oneOf(['ja', 'en']),
  width: PropTypes.number,
  height: PropTypes.number
}

HatenaBookmark.defaultProps = {
  url: window !== 'undefined' ? window.location : '',
  title: 'このエントリーをはてなブックマークに追加',
  design: 'basic',
  size: 'normal',
  label: true,
  counter: true,
  lang: 'ja',
  width: 20,
  height: 20
}

export default HatenaBookmark;