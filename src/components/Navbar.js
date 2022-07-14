import PropTypes from 'prop-types'


const Navbar = ({about, number, }) => {
  return (
    <nav className="navbar py-4">
    <div className="navbar-brand">
        <a className="navbar-item" href="#">
            <img className="image" src="bulma-plain-assets/logos/plainb-logo.svg" alt="" width="96px"/>
        </a>
        <a className="navbar-burger" role="button" aria-label="menu" aria-expanded="false">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
        </a>
    </div>
    <div className="navbar-menu">
        <div className="navbar-end">
            <a className="navbar-item" href="#">{about}</a>
            <a className="navbar-item" href="#">Something</a>
            <a className="navbar-item" href="#">blablabla</a>
            <a className="navbar-item" href="#">noe med comics</a>
        </div>
        <div className="navbar-item"><a className="button is-primary" href="#">Kontakt benjamin ikke meg lol</a></div>
    </div>
</nav>
  )
}

Navbar.propTypes = {
    about: PropTypes.string,
    number: PropTypes.number
}

export default Navbar
