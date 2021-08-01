import "../index.css"
import  PropTypes from 'prop-types'
import Button from "./Button"

const Header = ({title, onAdd, showAddTask}) => {

    return (
        <header className="header">
            <h1>{title}</h1>
            <Button color={showAddTask ? "black" : "green"} text={showAddTask ? "Close" : "Add"} onClick={onAdd}/>
        </header>
    )
}

Header.defaultProps = {
    title: "Task Manager"
}

Header.propTypes = {
    title: PropTypes.string
}

export default Header
