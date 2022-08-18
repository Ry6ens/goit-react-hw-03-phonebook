import styles from './Section.module.scss';

import PropTypes from 'prop-types';

const Section = ({ title, children }) => {
  return (
    <>
      <h2 className={styles.title}>{title}</h2>
      {children}
    </>
  );
};

export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
