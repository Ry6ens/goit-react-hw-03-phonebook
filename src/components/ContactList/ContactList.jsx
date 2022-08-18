import styles from './ContactList.module.scss';
import stylesButton from '../PhonebookOptions/PhonebookOptions.module.scss';

import PropTypes from 'prop-types';

import PhonebookOptions from 'components/PhonebookOptions/PhonebookOptions';

const ContactList = ({ items, removeItem }) => {
  return (
    <>
      <ul>
        {items.map(({ id, name, number }) => {
          return (
            <li key={id} className={styles.item}>
              <div className={styles.itemThumb}>
                <span>
                  {name}: {number}
                </span>
                <PhonebookOptions
                  id={id}
                  title="Remove"
                  className={stylesButton.removeBtn}
                  removeItem={removeItem}
                />
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ContactList;

ContactList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  removeItem: PropTypes.func,
};
