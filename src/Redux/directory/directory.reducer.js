import hats from "../../Components/assets/images/hats.jpg";
import jackets from "../../Components/assets/images/jackets.jpg";
import sneakers from "../../Components/assets/images/sneakers.jpg";
import women from "../../Components/assets/images/women.jpg";
import men from "../../Components/assets/images/men.jpg";

const INITIAL_STATE = {
  sections: [
    {
      title: 'hats',
      imageUrl: hats,
      id: 1,
      linkUrl: 'shop/hats'
    },
    {
      title: 'jackets',
      imageUrl: jackets,
      id: 2,
      linkUrl: 'shop/jackets'
    },
    {
      title: 'sneakers',
      imageUrl: sneakers,
      id: 3,
      linkUrl: 'shop/sneakers'
    },
    {
      title: 'womens',
      imageUrl: women,
      size: 'large',
      id: 4,
      linkUrl: 'shop/womens'
    },
    {
      title: 'mens',
      imageUrl: men,
      size: 'large',
      id: 5,
      linkUrl: 'shop/mens'
    }
  ]
}


const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default: return state;
  }
}


export default directoryReducer;