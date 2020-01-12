import React from 'react';
import PropTypes from 'prop-types';

import Bookmark from '../assets/bookmark.svg';

// Import Styled Components
import { ListContainer } from './List.atoms';
import {
  ListItem,
  IconContainer,
  ContentContainer,
  Description,
  Icon,
  AgeRange,
} from './Item.atoms';

// Import External Components
import Item from './Item';

const List = ({ items }) => (
  <ListContainer>
    <ListItem id="mobile-hide">
      <IconContainer>
        <Icon src={Bookmark} alt="Bookmark" />
        <AgeRange>duthaho</AgeRange>
      </IconContainer>
      <ContentContainer>
        <h2>
          <a
            href="https://quiz.duthaho.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            JavaScript Quizzes
          </a>
        </h2>
        <Description>Learn JavaScript fundamentals through fun and challenging quizzes. From basic to advanced, test how well you know JavaScript, refresh your knowledge a bit, or prepare for your coding interview. I update this repo regularly with new questions.</Description>
      </ContentContainer>
    </ListItem>
    {items.map(item => (
      <Item key={item.title} {...item} />
    ))}
  </ListContainer>
);

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape(Item.propTypes)).isRequired,
};

export default List;
