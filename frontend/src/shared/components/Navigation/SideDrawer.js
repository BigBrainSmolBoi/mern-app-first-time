import React from 'react';
import ReactDOM from 'react-dom';
import { CSSTransitions } from 'react-transition-group';

import './SideDrawer.css';

const SideDrawer = (props) => {
  const content = (
    <CSSTransitions
      in={props.show}
      timeout={200}
      classNames="slide-in-left"
      mountOnEnter
      unmountOnExit
    >
      <aside className-="side-drawer" onClick={props.onClick}>
        {props.children}
      </aside>
    </CSSTransitions>
  );

  return ReactDOM.createPortal(content, document.getElementById('drawer-hook'));
};

export default SideDrawer;
