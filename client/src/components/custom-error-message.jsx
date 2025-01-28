
import PropTypes from "prop-types";

const CustomErroMessage = ({ children }) => {
  return (
    <div className="text-danger fw-light fst-italic fs-6">️{children}</div>
  );
};

CustomErroMessage.propTypes = {
  children: PropTypes.node,
};

export { CustomErroMessage };
