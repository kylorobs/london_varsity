import PropTypes from 'prop-types';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';
import classes from './ScrollIntoView.module.css';

const ScrollIntoView = ({ children }) => (
  <ScrollAnimation animateIn={classes.Slide} animateOnce>
    {children}
  </ScrollAnimation>
);

ScrollIntoView.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default ScrollIntoView;
