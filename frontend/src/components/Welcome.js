import React from 'react';
import Button from 'react-bootstrap/Button';

function Welcome() {
  return (
    <div className="jumbotron">
      <h1>Images Gallery</h1>
      <p>
        This is simle application that retrives photos using Unsplesh API. In
        order to start enter search term to the input field.
      </p>
      <p>
        <Button bsStyle="primary" href="https://unsplash.com" target="_blank">
          Learn more
        </Button>
      </p>
    </div>
  );
}
export default Welcome;
