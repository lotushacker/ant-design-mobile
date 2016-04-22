import React, { PropTypes } from 'react';
import './Page.less';

const Page = React.createClass({
  PropTypes: {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    children: PropTypes.any,
    isIndex: PropTypes.bool,
    logo: PropTypes.string
  },
  getDefaultProps() {
    return {
      logo: '',
      title: '',
      subtitle: '',
      isApp: 0,
    };
  },
  componentDidMount() {
    this.initScroller();
  },
  componentWillUnmount() {
    if(this.props.isIndex) {
      window.scrolltopNumber = document.querySelector('.am-demo-page').scrollTop;
    }
  },
  initScroller() {
    this.refs.demoPage.style.height = document.documentElement.clientHeight + 'px';
    this.refs.demoPage.style.overflowY = 'scroll';
    if(this.props.isIndex) {
      document.querySelector('.am-demo-page').scrollTop = window.scrolltopNumber;
    } else {
      document.querySelector('.am-demo-page').scrollTop = 0;
    }
  },
  render() {
    const { logo, title, subtitle, children } = this.props;
    const logoDom = logo !== '' ? <div className="logo" style={{ backgroundImage: 'url(' + logo + ')' }}/> : null;
    return (
      <section className="am-demo-page" ref="demoPage">
        <div className="am-demo-hd">
          {logoDom}
          <h1 className="am-demo-title">{title}</h1>
          <h2 className="am-demo-subtitle">{subtitle}</h2>
        </div>
        <div className="am-demo-bd">
          {children}
        </div>
      </section>
    );
  }
});

export default Page;