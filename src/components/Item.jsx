import React from 'react';
import PropTypes from 'prop-types';

import Bookmark from '../assets/bookmark.svg';
import Github from '../assets/github.svg';
import Guide from '../assets/guide.svg';
import Interesting from '../assets/interesting.svg';
import Programing from '../assets/programing.svg';
import Think from '../assets/think.svg';
import Book from '../assets/book.svg';
import Security from '../assets/security.svg';
import Algorithm from '../assets/algorithm.svg';
import Architecture from '../assets/architecture.svg';

// Import Styled Components
import {
  ContentContainer,
  Description,
  IconContainer,
  ListItem,
  Icon,
  AgeRange,
} from './Item.atoms';

const icons = {
  Github,
  Guide,
  Interesting,
  Programing,
  Think,
  Book,
  Security,
  Algorithm,
  Architecture,
};

const Item = props => {
  const { ...bookmark } = props;
  return (
    <ListItem>
      <IconContainer>
        <Icon src={icons[bookmark.tag] || Bookmark} alt="Bookmark" />
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
