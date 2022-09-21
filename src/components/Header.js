import propTypes from 'prop-types';
import Button from './Button';

const Header = ({ title, onAdd, showAdd }) => {

    return (
        <>
            <header>
                <div className='columns is-multiline'>
                    <div className='column'>
                        <h1 className='is-size-1'>{title}</h1>
                    </div>
                    <div className='column is-flex is-justify-content-center is-align-items-center'>
                        <Button bulmaColor={showAdd ? 'is-danger' : 'is-primary'} text={showAdd ?  'close' : 'add'} onClick={onAdd}></Button>
                    </div>
                </div>
            </header>
        </>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: propTypes.string.isRequired,
}

export default Header