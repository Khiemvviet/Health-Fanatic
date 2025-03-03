import React, { useState } from 'react';
import { GiTrophy } from "react-icons/gi";
import { FaCogs } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    alert('Thank you for your message!');
    localStorage.setItem('userContact', JSON.stringify(formData));
    

    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 pt-28 ">
      <div className="bg-white max-w-6xl mx-auto grid md:grid-cols-2 gap-8 border-n-4 border-2">
      <div className="bg-white rounded-xl overflow-hidden">
          <div className="p-4">
            <div className="w-full h-96 bg-gray-200 flex items-center justify-center ">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.5823274287454!2d-79.47773177551093!3d43.74917957911666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2ab71b54563d%3A0xb06d2271133d13d6!2s75+Carl+Hall+Rd%2C+North+York%2C+ON+M3K+2B9%2C+Canada!5e0!3m2!1sen!2s!4v1732738391658!5m2!1sen!2s" 
                height="100%" 
                style={{ border: 0 }}
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div className="p-6">
            <div className="text-sm text-gray-600 text-center mb-5">
              <div className="flex">
                <div
                  className="bg-gray-100 flex items-center justify-center mb-5"
                  style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    background: 'gray',
                    flexShrink: 0, 
                  }}
                >
                  <GiTrophy style={{ fontSize: '40px', color: 'white' }} />
                </div>
                <div style={{textAlign: 'left', marginLeft: '20px'}}>
                  <h1 className="mt-2" style={{ fontSize: '20px' }}>
                    40 years leading training center
                  </h1>
                  <p className='mt-2'>
                    For over 50 years, 3020 Soccer Centre has been recognised as an
                    industry leader. We operate two separate facilities in Vietnam and have
                    provided high quality soccer training solutions to players and teams
                    around the world.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-sm text-gray-600 text-center">
              <div className="flex">
                <div
                  className="bg-gray-100 flex items-center justify-center mb-5"
                  style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    background: 'gray',
                    flexShrink: 0, 
                  }}
                >
                  <FaCogs  style={{ fontSize: '40px', color: 'white' }} />
                </div>
                <div style={{textAlign: 'left', marginLeft: '20px'}}>
                  <h1 className="mt-2" style={{ fontSize: '20px' }}>
                    State of the Art Soccer Training Facility
                  </h1>
                  <p className='mt-2'>
                    Over the years, continuous on-field analysis and extensive training methods 
                    have kept our soccer training center at the forefront of the industry. 
                    This commitment to innovation has allowed us to offer cutting-edge training techniques that deliver 
                    exceptional results for players and teams alike.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl overflow-hidden">
          <div className="p-6">
            <h2 className="text-3xl font-bold text-center">
              Contact to us
            </h2>
          </div>
          
          <form onSubmit={handleSubmit} className="p-8 space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 ">
                Full Name:
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md shadow-sm focus:outline-none focus:ring-0  transition-colors border-n-4 border-2"
                style={{height: '45px', padding: '15px'}}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address:
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md  shadow-sm focus:outline-none focus:ring-0  transition-colors border-n-4 border-2"
                style={{height: '45px', padding: '15px'}}
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone Number:
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md  shadow-sm focus:outline-none focus:ring-0  transition-colors border-n-4 border-2"
                style={{height: '45px', padding: '15px'}}
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Your Message:
              </label>
              <textarea
                name="message"
                id="message"
                rows="4"
                required
                value={formData.message}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md  shadow-sm focus:outline-none focus:ring-0  transition-colors border-n-4 border-2"
                style={{padding: '15px'}}
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm  text-white bg-n-2 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors font-bold"
              >
                Send
              </button>
            </div>
          </form>

          <div className="p-6 text-center flex justify-center">
            <div className="text-sm text-gray-600 space-y-2">
              <p className="text-left">⚽ Soccer Training Center</p>
              <p className="text-left">📍 North York, Toronto, Canada</p>
              <p className="text-left">📞 (+1) 123-456-789</p>
              <p className="text-left">✉️ contact@trikhiemsoccertraining.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
