import React, { Component } from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';
import GitHubButton from 'react-github-btn';
import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
} from 'react-share';

// Global CSS (e.g. body)
import './global.scss';

// Major Components
import BannerMessage from './components/BannerMessage';
import List from './components/List';
import Search from './components/Search';
import Filter from './components/Filter';

export default class App extends Component {
  constructor(props) {
    super(props);
    const { data } = props;
    this.state = {
      listOfItems: data,
      fullList: data,
      activeFilter: false,
      term: '',
    };

    // Bindings
    this.searchFilter = this.searchFilter.bind(this);
    this.setFilter = this.setFilter.bind(this);
  }

  setFilter(val) {
    this.setState(
      {
        activeFilter: val,
      },
      this.search
    );
  }

  searchFilter(term) {
    this.setState(
      {
        term,
      },
      this.search
    );
  }

  search() {
    const { fullList, activeFilter, term } = this.state;
    const regexp = new RegExp(
      term.toLowerCase().replace(/[.*+?^${}()|[\]\\]/g, '\\$&'),
      'i'
    );
    // If a filter is active, only search through those results
    const list = activeFilter
      ? fullList.filter(el => el.tag === activeFilter)
      : fullList;
    // If search goes empty
    if (term === '') {
      // Reset the list.
      this.setState({
        listOfItems: list,
      });
    } else {
      // Otherwise filter the list by name and description
      this.setState({
        listOfItems: list.filter(
          el =>
            regexp.test(el.title.toLowerCase()) ||
            regexp.test(el.description.toLowerCase())
        ),
      });
    }
  }

  render() {
    const { listOfItems, activeFilter, term, fullList } = this.state;
    const url = 'https://bookmark.duthaho.com';
    const title = 'A reading list for programmer';
    return (
      <div>
        <BannerMessage>
          <GitHubButton
            href="https://github.com/duthaho/bookmark"
            data-show-count="true"
            aria-label="Star duthaho/bookmark on GitHub"
          />
          <TwitterShareButton url={url} title={title}>
            <TwitterIcon round size={24} />
          </TwitterShareButton>
          <FacebookShareButton url={url} quote={title}>
            <FacebookIcon round size={24} />
          </FacebookShareButton>
          <LinkedinShareButton url={url} title={title} description={title}>
            <LinkedinIcon round size={24} />
          </LinkedinShareButton>
        </BannerMessage>
        <Search search={this.searchFilter} term={term} />
        <Filter
          current={activeFilter}
          filterHandler={this.setFilter}
          items={fullList}
        />
        <List items={listOfItems} />
      </div>
    );
  }
}

App.propTypes = {
  data: PropTypes.arrayOf(PropTypes.any).isRequired,
};

// Retrieve static json
fetch('bookmark.json').then(response => {
  // Process it
  response.json().then(data => {
    // Sort by the dateClose (date discontinued)
    const bookmark = data.sort(
      (a, b) => new Date(b.dateClose) - new Date(a.dateClose)
    );
    // Render the app
    render(<App data={bookmark} />, document.querySelector('#bookmark'));
  });
});

if ('serviceWorker' in navigator) {
  const { error } = console;
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('./service-worker.js', { scope: './' })
      .catch(err => error('Service worker registration failed: ', err));
  });
}
