import PropTypes from 'prop-types'
import { Button } from './Button'

export const Header = ({ title, onAdd, showAdd }) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color={showAdd ? 'red' : 'blue'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd}/>
        </header>
    )
}

Header.defaultProps = {
  title: 'Contacts App',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,

}
