import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { MapPin, CheckCircle2, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const OutstationPage = () => {
  /* ================= OUTSTATION ROUTES (REPLACED DATA) ================= */

  const outstationRoutes = [
    {
      name: 'North India Routes',
      areas: [
        'Delhi to Punjab',
        'Delhi to Haryana',
        'Delhi to Himachal Pradesh',
        'Delhi to Uttarakhand',
        'Delhi to Jammu & Kashmir',
        'Delhi to Chandigarh'
      ]
    },
    {
      name: 'Central India Routes',
      areas: [
        'Delhi to Uttar Pradesh',
        'Delhi to Bihar',
        'Delhi to Madhya Pradesh',
        'Delhi to Chhattisgarh',
        'Delhi to Jharkhand',
        'Delhi to Rajasthan'
      ]
    },
    {
      name: 'West India Routes',
      areas: [
        'Delhi to Maharashtra',
        'Delhi to Gujarat',
        'Delhi to Goa',
        'Delhi to Dadra & Nagar Haveli',
        'Delhi to Daman & Diu',
        'Delhi to Rajasthan (West)'
      ]
    },
    {
      name: 'South India Routes',
      areas: [
        'Delhi to Karnataka',
        'Delhi to Tamil Nadu',
        'Delhi to Telangana',
        'Delhi to Andhra Pradesh',
        'Delhi to Kerala',
        'Delhi to Puducherry'
      ]
    },
    {
      name: 'East India Routes',
      areas: [
        'Delhi to West Bengal',
        'Delhi to Odisha',
        'Delhi to Assam',
        'Delhi to Meghalaya',
        'Delhi to Manipur',
        'Delhi to Tripura'
      ]
    },
    {
      name: 'Nearby Major Cities',
      areas: [
        'Delhi to Agra',
        'Delhi to Jaipur',
        'Delhi to Mathura',
        'Delhi to Meerut',
        'Delhi to Dehradun',
        'Delhi to Alwar'
      ]
    }
  ];

  const popularOutstationRoutes = [
    'Delhi to Bihar',
    'Delhi to Agra',
    'Delhi to Jaipur',
    'Delhi to Chandigarh',
    'Delhi to Punjab',
    'Delhi to Haryana',
    'Delhi to Rajasthan',
    'Delhi to Uttar Pradesh',
    'Delhi to Uttarakhand',
    'Delhi to Maharashtra',
    'Delhi to Gujarat',
    'Delhi to Karnataka',
    'Delhi to Tamil Nadu',
    'Delhi to West Bengal',
    'Delhi to Assam',
    'Delhi to Odisha',
    'Delhi to Kerala',
    'Delhi to Telangana',
    'Delhi to Madhya Pradesh',
    'Delhi to Chhattisgarh'
  ];

  return (
    <>
      <Helmet>
        <title>Outstation Ambulance Services from Delhi | All India Coverage</title>
        <meta
          name="description"
          content="24/7 outstation ambulance services from Delhi to all major cities and states across India with ICU, ventilator and trained medical staff."
        />
      </Helmet>

      <main className="pt-20">
        {/* ================= HERO (SAME AS COVERAGE) ================= */}
        <section className="bg-gradient-to-br from-red-900 via-red-800 to-red-950 text-white py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
              }}
            />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-6">
                <MapPin className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Outstation Ambulance Services
              </h1>
              <p className="text-lg md:text-xl text-red-100 max-w-3xl mx-auto">
                24/7 outstation ambulance services from Delhi to all major cities
                and states across India with ICU and medical support.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ================= OUTSTATION COVERAGE GRID (3×2 SAME STYLE) ================= */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Outstation Ambulance Coverage from Delhi
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Reliable long-distance ambulance services from Delhi to major
                destinations across India.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {outstationRoutes.map((route, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -5 }}
                  className="bg-gradient-to-br from-red-50 to-white p-6 rounded-xl border border-red-100 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start space-x-3 mb-4">
                    <div className="bg-red-700 p-2 rounded-lg flex-shrink-0">
                      <MapPin className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {route.name}
                    </h3>
                  </div>

                  <div className="space-y-2">
                    {route.areas.map((area, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{area}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= POPULAR ROUTES ================= */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Popular Outstation Routes
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Frequently booked outstation ambulance routes from Delhi.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {popularOutstationRoutes.map((route, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.02 }}
                    className="flex items-center space-x-2 p-3 bg-red-50 rounded-lg hover:bg-red-100 transition-colors"
                  >
                    <CheckCircle2 className="h-4 w-4 text-red-700 flex-shrink-0" />
                    <span className="text-sm font-medium text-gray-800">
                      {route}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>


        <section className="py-20 bg-white">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                      <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="rounded-2xl overflow-hidden shadow-2xl"
                      >
                        <img alt="Map showing Delhi Ambulance coverage areas across Delhi NCR" src="https://images.unsplash.com/photo-1624727945121-0e92bbc66a50" />
                      </motion.div>
        
                      <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                      >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                          🚑 Rapid Response Ambulance Services Across Delhi NCR
                        </h2>
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                          Our strategically located ambulance stations across Delhi NCR enable us to deliver the fastest emergency medical response to patients anytime, anywhere. With GPS-enabled ambulances, a 24/7 emergency dispatch team, and trained staff, we ensure quick, safe, and reliable ambulance services during critical situations.
                        </p>
                        <ul className="space-y-4 mb-8">
                          <li className="flex items-start space-x-3">
                            <CheckCircle2 className="h-6 w-6 text-red-700 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">Multiple Ambulance Stations Across Delhi NCR, Noida, Gurugram, Ghaziabad, and Faridabad.</span>
                          </li>
                          <li className="flex items-start space-x-3">
                            <CheckCircle2 className="h-6 w-6 text-red-700 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">GPS-Enabled Ambulances for Faster Routing</span>
                          </li>
                          <li className="flex items-start space-x-3">
                            <CheckCircle2 className="h-6 w-6 text-red-700 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">Average Response Time Under 15 Minutes</span>
                          </li>
                          <li className="flex items-start space-x-3">
                            <CheckCircle2 className="h-6 w-6 text-red-700 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">24/7 Emergency & Outstation Ambulance Availability</span>
                          </li>
                          <li className="flex items-start space-x-3">
                            <CheckCircle2 className="h-6 w-6 text-red-700 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">Extended Coverage Across NCR Cities</span>
                          </li>
                        </ul>
                        <a href="tel:+919990909338">
                          <Button size="lg" className="bg-red-700 hover:bg-red-800 text-white font-semibold">
                            <Phone className="mr-2 h-5 w-5" />
                            Call for Service
                          </Button>
                        </a>
                      </motion.div>
                    </div>
                  </div>
                </section>

        {/* ================= CTA ================= */}
        <section className="py-20 bg-gradient-to-br from-red-700 to-red-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Need Outstation Ambulance Service?
              </h2>
              <p className="text-lg text-red-100 mb-8">
                Call us now for immediate outstation ambulance booking from
                Delhi to anywhere in India.
              </p>
              <a href="tel:+919990909338">
                <Button
                  size="lg"
                  className="bg-white text-red-700 hover:bg-red-50 font-semibold text-lg px-10 py-6"
                >
                  <Phone className="mr-2 h-6 w-6" />
                  Contact Us: 999-090-9338
                </Button>
              </a>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

export default OutstationPage;
