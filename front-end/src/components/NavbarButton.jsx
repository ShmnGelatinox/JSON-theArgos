const NavbarButton = ({ label, active, onClick, children }) => (
  <button type="button" className={active ? 'iconActive' : 'iconNavbar'} onClick={onClick} >
    <div className="icons-navbar">
      {children}
    </div>

    {label}
  </button>
)

export default NavbarButton;
