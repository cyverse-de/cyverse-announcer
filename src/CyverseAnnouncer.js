import React, { Component } from 'react';
import Announcer from "./components/Announcer";
import PropTypes from "prop-types";


let msgQueue = [];
const timeout = 6000;

export const TOP = "top";
export const BOTTOM = "bottom";

export const RIGHT = "right";
export const LEFT = "left";
export const CENTER = "center";

export const INFO = "info";
export const ERROR = "error";
export const WARNING = "warning";
export const SUCCESS = "success";

class CyverseAnnouncer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: null,
      msg: "",
      open: false,
    };
  }

  componentDidMount() {
    let timer = setInterval(this.tickCallback, timeout);
    this.setState({timer});
  }

  componentWillUnmount() {
    clearInterval(this.state.timer);
  }

  handleClose = () => {
    this.setState({open: false}, () => {
      this.tickCallback();
    });
  };

  tickCallback = () => {
    if (msgQueue.length > 0) {
      this.setState({msg: msgQueue.shift(), open: true});
    }
  };

  render() {
    const {msg: {text, variant, duration, horizontal, vertical}, open} = this.state;
    return (
        <Announcer message={text}
                   variant={variant ? variant : INFO}
                   open={open}
                   duration={duration? duration : timeout}
                   onClose={this.handleClose}
                   horizontal={horizontal? horizontal: CENTER}
                   vertical={vertical? vertical : TOP}
                   />
    );
  }

}

export default CyverseAnnouncer;

CyverseAnnouncer.propTypes = {
  message: PropTypes.string,
  variant: PropTypes.oneOf(['success', 'warning', 'error', 'info']).isRequired,
  duration: PropTypes.number,
  vertical: PropTypes.oneOf(['top', 'bottom']),
  horizontal: PropTypes.oneOf(['center', 'right', 'left']),
};

export function announce(msg) {
  msgQueue.push(msg);
}
