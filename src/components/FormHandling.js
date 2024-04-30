import React, { useState } from 'react';

export default function FormHandling() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [newsletter, setNewsletter] = useState(false);
  const [gender, setGender] = useState('');
  const [country, setCountry] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform form validation
    if (name === '' || email === '' || gender === '' || country === '') {
      alert('Please fill in all fields');
      return;
    }

    // Perform further actions (e.g., data manipulation, API calls)
    // ...

    // Display form data in console
    console.log('Form Data:', {
      name,
      email,
      newsletter,
      gender,
      country
    });

    // Reset form fields
    setName('');
    setEmail('');
    setNewsletter(false);
    setGender('');
    setCountry('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
        required
      />

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        required
      />

      <label htmlFor="newsletter">
        <input
          type="checkbox"
          id="newsletter"
          name="newsletter"
          checked={newsletter}
          onChange={(event) => setNewsletter(event.target.checked)}
        />
        Subscribe to newsletter
      </label>

      <label htmlFor="gender">
        Gender:
        <input
          type="radio"
          id="gender-male"
          name="gender"
          value="male"
          checked={gender === 'male'}
          onChange={(event) => setGender(event.target.value)}
        />
        <label htmlFor="gender-male">Male</label>

        <input
          type="radio"
          id="gender-female"
          name="gender"
          value="female"
          checked={gender === 'female'}
          onChange={(event) => setGender(event.target.value)}
        />
        <label htmlFor="gender-female">Female</label>
      </label>

      <label htmlFor="country">Country:</label>
      <select
        id="country"
        name="country"
        value={country}
        onChange={(event) => setCountry(event.target.value)}
        required
      >
        <option value="">Select a country</option>
        <option value="usa">USA</option>
        <option value="canada">Canada</option>
        <option value="uk">UK</option>
      </select>

      <input type="submit" value="Submit" />
    </form>
  );
}

