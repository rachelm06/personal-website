export default function Navbar() {
    return (
      <nav className="navbar">
        <span className="name">RACHEL WU</span>
      </nav>
    );
  }
  
  
  const styles = {
    nav: {
      height: "64px",
      display: "flex",
      alignItems: "center",
      padding: "0 2rem",
      borderBottom: "1px solid rgba(0,0,0,0.1)",
    },
    name: {
      fontFamily: "'Chicken Rice', system-ui",
      fontSize: "1.75rem",
      cursor: "default",
    },
  };
  