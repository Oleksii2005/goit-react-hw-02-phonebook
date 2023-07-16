import React, { Component } from 'react';
import css from '../Phonebook/Phonebook.module.css';
export class Phonebook extends Component {
  state = {
    contacts: [],
    name: '',
  };
  handleChangeName = ({ target: { value } }) => {
    this.setState({ name: value });
  };
  handleChangeContacts = ({ target: { value } }) => {
    this.setState({ contacts: value });
  };
  render() {
    return (
      <div className={css.phonebook}>
        <h2>Phonebook</h2>
        <div className={css.phonebook_container}>
          <label htmlFor="" className={css.label}>
            Name
          </label>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.handleChangeName}
          />
          <label htmlFor="" className={css.label}>
            Number
          </label>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.contacts}
            onChange={this.handleChangeContacts}
          />
          <button type="submit" className={css.phonebook_button}>
            Add to contacs
          </button>
        </div>
      </div>
    );
  }
}
