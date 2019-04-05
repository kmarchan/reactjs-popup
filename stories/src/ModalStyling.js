import React from 'react';
import {Centred} from 'story-router';

import Popup from '../../src/';

const ModalProps = {
  defaultOpen: false,
  open: false,
  closeOnDocumentClick: true,
  closeOnEscape: true,
  on: ['click'],
  contentStyle: {},
  arrowStyle: {},
  overlayStyle: {},
  className: '',
  position: 'bottom center',
  lockScroll: false,
  arrow: true,
  offsetX: 0,
  offsetY: 0,
  mouseEnterDelay: 100,
  mouseLeaveDelay: 100,
  modal: true,
};

const title = {
  fontFamily: 'Arial',
  fontWeight: 'bold',
  textAlign: 'center',
}; 

const wrapper = {
  display: "flex",
  flexDirection: "column",
  padding: "25px",
  justifyContent: "center",
};

const textArea ={
  padding: "5px",
};

const Modal = props => {
  return (
    <Popup 
      {...props} 
      trigger={<button>Button Trigger</button>}>
      <div style={wrapper}>
        <div style={title}>Example of Styling the Modal</div>
        <div style={textArea}>
        sum dolor sit amet consectetur adipisicing elit. Nemo voluptas ex,
        blanditiis reiciendis dolor numquam pariatur facilis, labore, libero
        nihil asperiores ae facilis quis commodi dolores, at enim. Deserunt qui,
        officiis culpa optio numquam ullam pariatur voluptas tempora doloremque!
        </div>
        <div style={wrapper}>
          <Popup
             on="click"
            position="bottom left"
            closeOnDocumentClick
            trigger={<button>Button nested</button>}
          >
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              voluptas ex, blanditiis reiciendis dolor numquam pariatur facilis,
              labore, libero nihil asperiores ae facilis quis commodi dolores, at
              enim. Deserunt qui, officiis culpa optio numquam ullam pariatur
              voluptas tempora doloremque!
            </div>
          </Popup>
        </div>
      </div>
    </Popup>
  );
};

const ModalStyledStory = {
  name: 'Modal Styled example',
  component: Centred(Modal),
  props: ModalProps, // adding props
};
export default ModalStyledStory;
