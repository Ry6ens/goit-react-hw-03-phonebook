import styles from './Filter.module.scss';

import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

const Filter = ({ onChangeFilter }) => {
  const filterId = nanoid();

  return (
    <div className={styles.thumb}>
      <label htmlFor={filterId} className={styles.label}>
        Find contacts by name:
      </label>
      <input
        id={filterId}
        className={styles.field}
        onChange={onChangeFilter}
        name="filter"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        placeholder="Filter"
      ></input>
    </div>
  );
};

export default Filter;

Filter.propTypes = {
  onChangeFilter: PropTypes.func,
};
