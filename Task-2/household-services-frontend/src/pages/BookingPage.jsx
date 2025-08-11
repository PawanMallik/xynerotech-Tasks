import React, { useState } from 'react';
import Button from '../components/common/Button';
import FormInput from '../components/common/FormInput';

const BookingPage = () => {
  const [formData, setFormData] = useState({
    service: '',
    date: '',
    time: '',
    address: '',
    phone: '',
    notes: ''
  });

  const services = ['AC Repair', 'House Cleaning', 'Plumbing', 'Electrical Work', 'Painting', 'Appliance Repair'];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Booking submitted! We will contact you shortly to confirm.');
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Book a Service</h1>
        <p className="text-lg text-gray-600">Fill out the form below to schedule your service</p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-8">
        <div onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Service <span className="text-red-500">*</span>
            </label>
            <select
              value={formData.service}
              onChange={(e) => handleInputChange('service', e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Choose a service...</option>
              {services.map(service => (
                <option key={service} value={service}>{service}</option>
              ))}
            </select>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <FormInput
              label="Preferred Date"
              type="date"
              value={formData.date}
              onChange={(e) => handleInputChange('date', e.target.value)}
              required
            />
            <FormInput
              label="Preferred Time"
              type="time"
              value={formData.time}
              onChange={(e) => handleInputChange('time', e.target.value)}
              required
            />
          </div>

          <FormInput
            label="Service Address"
            placeholder="Enter your full address"
            value={formData.address}
            onChange={(e) => handleInputChange('address', e.target.value)}
            required
          />

          <FormInput
            label="Phone Number"
            type="tel"
            placeholder="Your contact number"
            value={formData.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
            required
          />

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Additional Notes
            </label>
            <textarea
              placeholder="Any specific requirements or details..."
              value={formData.notes}
              onChange={(e) => handleInputChange('notes', e.target.value)}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <Button type="button" size="large" className="w-full" onClick={handleSubmit}>
            Submit Booking Request
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;