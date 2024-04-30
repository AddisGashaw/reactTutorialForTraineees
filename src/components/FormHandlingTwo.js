import React, { useState } from 'react';

export default function FormHandlingTwo() {
    const [formData, setFormData] = useState({
    name: '',
    email: '',
    newsletter: false,
    gender: '',
    country: ''
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform form validation
    if (
      formData.name === '' ||
      formData.email === '' ||
      formData.gender === '' ||
      formData.country === ''
    ) {
      alert('Please fill in all fields');
      return;
    }

    // Perform further actions (e.g., data manipulation, API calls)
    // ...

    // Reset form fields
    setFormData({
      name: '',
      email: '',
      newsletter: false,
      gender: '',
      country: ''
    });

    // Log form data to the console
    console.log('Form Data:', formData);
  };

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };
//distructuring object
//   const handleInputChange = (event) => {
//     const { target } = event;
//     const { name, type, checked, value } = target;

//     const inputValue = type === 'checkbox' ? checked : value;

//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       [name]: inputValue
//     }));
//   };



  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
        required
      />

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        required
      />

      <label htmlFor="newsletter">
        <input
          type="checkbox"
          id="newsletter"
          name="newsletter"
          checked={formData.newsletter}
          onChange={handleInputChange}
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
          checked={formData.gender === 'male'}
          onChange={handleInputChange}
        />
        <label htmlFor="gender-male">Male</label>

        <input
          type="radio"
          id="gender-female"
          name="gender"
          value="female"
          checked={formData.gender === 'female'}
          onChange={handleInputChange}
        />
        <label htmlFor="gender-female">Female</label>
      </label>

      <label htmlFor="country">Country:</label>
      <select
        id="country"
        name="country"
        value={formData.country}
        onChange={handleInputChange}
        required
      >
        <option value="">Select a city</option>
        <option value="AA">Addis Ababa</option>
        <option value="JI">Jimma</option>
        <option value="DS">Dessie</option>
        <option value="MK">Mekele</option>
        <option value="MK">Hawassa</option>
      </select>

      <input type="submit" value="Submit" />
    </form>
  );
}

