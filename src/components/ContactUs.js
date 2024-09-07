import React, { useState } from 'react';
import { Typography, Grid, TextField, Button } from '@mui/material';
import emailjs from 'emailjs-com';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log('formData --->', formData)
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send('service_91iys4r', 'template_2awkjj9', formData, 'IbkVaPsVX10sfjDaK')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message sent successfully!');
      })
      .catch((err) => {
        console.error('FAILED...', err);
        alert('Failed to send message.');
      });
  };

  return (
    <section className='contacts-form shadow'>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Your Name"
              name="name"
              variant="outlined"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Your Email"
              name="email"
              variant="outlined"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Message"
              name="message"
              multiline
              rows={4}
              variant="outlined"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12} style={{ textAlign: 'center' }}>
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </section>
  );
};

export default ContactUs;
