import PropTypes from "prop-types";
import { useLocation } from "react-router";
import Button from "./Button.js";

// const Header = (props) => {
const Header = ({ onAdd, showAdd, title }) => {
  // const onClick = (e) => {
  //     console.log('Click!', e)
  // }
  const location = useLocation();

  return (
    <header className="header">
      {/* <h1 style={{ color: 'red', backgroundColor: 'black' }}>Easy money: {props.title}</h1> */}
      {/* <h1 style={headingStyle}>Easy money: {title}</h1> */}
      <h1>AO: {title}</h1>
      {location.pathname === "/" && (
        <Button
          onAdd={onAdd}
          color={showAdd ? "red" : "green"}
          text={showAdd ? "Close" : "Add"}
        />
      )}
      {/* <Button color='blue' text='Remove' /> */}
      {/* <Button onClick={ onClick }/> */}
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
  // title: 1,
};

Header.propTypes = {
  title: PropTypes.string,
};

// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black',
// }

export default Header;
