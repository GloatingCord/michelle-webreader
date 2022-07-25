import React, { useState } from 'react';
import PropTypes from 'prop-types';
import data from '../json/comics.json';

const Page = () => {

    const [count, setCount] = useState(1);
    const maxLength = Object.entries(data['comics']['onePunchMan']['pages']).length;

    const onPreviousPage = () => {
        if (count === 1) {
            return;
        }
        setCount(count - 1)
    }

    const onNextPage = () => {
        if (count === maxLength) {
            return;
        }
        setCount(count + 1)
    }

    return (
        <div className='is-flex is-justify-content-center is-align-items-center'>
            <button className='button' onClick={onPreviousPage}>Last page</button>
            <img src={data['comics']['onePunchMan']['pages']['page' + count]['src']} width="800px" height="2100px" alt="e" />
            <button className='button' onClick={onNextPage}>Next page</button>
        </div>
    )
};

Page.propTypes = {
    count: PropTypes.number,
}

export default Page;
