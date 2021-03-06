import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const TopicsFilterLink = ({ topic_name, onClick }) => (
  <li>
    <Link
      to={topic_name === 'all' ? '/' : `/topics/${topic_name}/articles`}
      onClick={onClick}
    >
      {topic_name}
    </Link>
  </li>
);

TopicsFilterLink.propTypes = {
  topic_name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default TopicsFilterLink;
