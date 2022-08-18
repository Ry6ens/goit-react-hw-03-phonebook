import styles from './ContactForm.module.scss';
import stylesButton from '../PhonebookOptions/PhonebookOptions.module.scss';

import { Component } from 'react';
import PhonebookOptions from 'components/PhonebookOptions/PhonebookOptions';
import { nanoid } from 'nanoid';

class Form extends Component {
  static defaultProps = {
    onSubmit: () => {},
  };

  state = {
    name: '',
    number: '',
  };

  nameId = nanoid();
  numberId = nanoid();

  handleSubmit = e => {
    e.preventDefault();
    const { onSubmit } = this.props;
    onSubmit({ ...this.state });
    this.reset();
  };

  reset() {
    this.setState({
      name: '',
      number: '',
    });
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  render() {
    const { handleSubmit, handleChange, nameId, numberId } = this;
    const { name, number } = this.state;

    return (
      <form onSubmit={handleSubmit} className={styles.formGroup}>
        <div className={styles.thumb}>
          <label htmlFor={nameId} className={styles.label}>
            Name
          </label>
          <input
            id={nameId}
            className={styles.field}
            onChange={handleChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={name}
            required
          />
        </div>
        <div className={styles.thumb}>
          <label htmlFor={numberId} className={styles.label}>
            Number
          </label>
          <input
            id={numberId}
            className={styles.field}
            onChange={handleChange}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            value={number}
            required
          />
        </div>
        <PhonebookOptions title="Add contact" className={stylesButton.button} />
      </form>
    );
  }
}

export default Form;
