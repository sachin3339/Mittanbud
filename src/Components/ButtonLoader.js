import React from 'react';
import { Spinner } from 'react-bootstrap';

const ButtonLoader = ({ style, loadingMessage, downloadingMessage }) => {
    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <Spinner
                as="span"
                animation="border"
                size="md"
                role="status"
                aria-hidden="true"
                className="mx-2"
                style={{ border: '2px dotted #fff', ...style }}
            />
            {loadingMessage && <span>{loadingMessage}</span>}
            {downloadingMessage && <span>{downloadingMessage}</span>}
        </div>
    );
};

export default ButtonLoader;
