import { React, useState } from 'react';
import PropTypes from 'prop-types';
import { useSearchParams } from 'react-router-dom';
import { Notify } from 'notiflix';

import { Form, Input, Button } from './SearchBox.styled';

const SearchBox = ({ onSubmit, submitting }) => {
  const [searchParams] = useSearchParams();
  const searchString = searchParams.get('query') ?? '';

  const [input, setInput] = useState(searchString);

  const handleSubmit = event => {
    event.preventDefault();
    if (!input.trim()) {
      Notify.failure('Please enter movie');
      return;
    }
    onSubmit(input);
  };

  const handleChange = event => setInput(event.target.value.toLowerCase());

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Input
          name="search"
          type="text"
          value={input}
          autoComplete="off"
          autoFocus
          onChange={handleChange}
          disabled={submitting}
        />
        <Button type="submit">{submitting ? 'Loading...' : 'Search'}</Button>
      </Form>
    </div>
  );
};

SearchBox.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
};

export default SearchBox;
