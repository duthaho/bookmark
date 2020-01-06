import React from 'react';
import PropTypes from 'prop-types';

import Bookmark from '../assets/bookmark.svg';

// Import Styled Components
import {
  ContentContainer,
  Description,
  IconContainer,
  ListItem,
  Icon,
  AgeRange,
} from './Item.atoms';

const Item = props => {
  const { ...bookmark } = props;
  return (
    <ListItem>
      <IconContainer>
        <Icon src={Bookmark} alt="Bookmark" />
        <AgeRange>{bookmark.author}</AgeRange>
      </IconContainer>
      <ContentContainer>
        <h2>
          <a href={bookmark.link} target="_blank" rel="noopener noreferrer">
            {bookmark.title}
          </a>
        </h2>
        <Description>{bookmark.description}</Description>
      </ContentContainer>
    </ListItem>
  );
};

Item.propTypes = {
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
};

export default Item;
