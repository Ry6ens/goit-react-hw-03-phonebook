import PropTypes from 'prop-types';

const PhonebookOptions = ({ title, className, id, removeItem }) => {
  return (
    <>
      <button
        className={className}
        onClick={() => {
          removeItem && removeItem(id);
        }}
      >
        {title}
      </button>
    </>
  );
};

export default PhonebookOptions;

PhonebookOptions.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  id: PropTypes.string,
  removeItem: PropTypes.func,
};
