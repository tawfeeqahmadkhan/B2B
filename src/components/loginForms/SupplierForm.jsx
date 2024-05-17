import React, { useState } from 'react';
import { Container, TextField, Button, MenuItem, Typography, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
export default function SupplierForm() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    companyName: '',
    businessType: '',
    industry: '',
    contactPersonName: '',
    contactPersonTitle: '',
    emailAddress: '',
    phoneNumber: '',
    businessAddress: '',
    websiteURL: '',
    taxIDRegistrationNumber: '',
    yearsInBusiness: '',
    productServiceOffering: '',
    annualRevenue: '',
    numberOfEmployees: '',
    preferredPaymentTerms: '',
    preferredShippingMethods: '',
    referencesPreviousClients: '',
    additionalCommentsNotes: '',
    password:''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log('Form Data: ', formData);
  };
  return (
    <Container maxWidth="md">
    <Typography variant="h4" component="h1" gutterBottom>
    <span className='text-sm cursor-pointer' onClick={()=>navigate('/')}> ← Back</span>  Supplier Form
    </Typography>
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Company Name"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            select
            fullWidth
            label="Business Type"
            name="businessType"
            value={formData.businessType}
            onChange={handleChange}
            required
          >
            {['Manufacturer', 'Distributor', 'Wholesaler'].map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Industry"
            name="industry"
            value={formData.industry}
            onChange={handleChange}
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Contact Person Name"
            name="contactPersonName"
            value={formData.contactPersonName}
            onChange={handleChange}
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Contact Person Title"
            name="contactPersonTitle"
            value={formData.contactPersonTitle}
            onChange={handleChange}
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Email Address"
            name="emailAddress"
            type="email"
            value={formData.emailAddress}
            onChange={handleChange}
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Phone Number"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Business Address"
            name="businessAddress"
            value={formData.businessAddress}
            onChange={handleChange}
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Website URL"
            name="websiteURL"
            value={formData.websiteURL}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Tax ID/Registration Number"
            name="taxIDRegistrationNumber"
            value={formData.taxIDRegistrationNumber}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Years in Business"
            name="yearsInBusiness"
            type="number"
            value={formData.yearsInBusiness}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Product/Service Offering"
            name="productServiceOffering"
            value={formData.productServiceOffering}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Annual Revenue"
            name="annualRevenue"
            type="number"
            value={formData.annualRevenue}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Number of Employees"
            name="numberOfEmployees"
            type="number"
            value={formData.numberOfEmployees}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Preferred Payment Terms"
            name="preferredPaymentTerms"
            value={formData.preferredPaymentTerms}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Preferred Shipping Methods"
            name="preferredShippingMethods"
            value={formData.preferredShippingMethods}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="References/Previous Clients"
            name="referencesPreviousClients"
            value={formData.referencesPreviousClients}
            onChange={handleChange}
            multiline
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Additional Comments/Notes"
            name="additionalCommentsNotes"
            value={formData.additionalCommentsNotes}
            onChange={handleChange}
            multiline
          />
        </Grid>
        <Grid item xs={12}>
            <TextField
              fullWidth
              label="Password"
              name="password"
              onChange={handleChange}
            />
          </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  </Container>
  )
}
