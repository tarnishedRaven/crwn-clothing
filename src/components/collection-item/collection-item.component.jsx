import React from "react";
import { connect } from "react-redux";

import {
  CollectionItemContainer,
  BackgroundImage,
  CollectionFooter,
  NameContainer,
  PriceContainer,
  AddButton,
} from "./collection-item.styles.jsx";
import { addItem } from "../../redux/cart/cart.action";

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <CollectionItemContainer>
      <BackgroundImage className="image" imageUrl={imageUrl} />
      <CollectionFooter>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>${price}</PriceContainer>
      </CollectionFooter>
      <AddButton inverted onClick={() => addItem(item)}>
        Add to cart
      </AddButton>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
