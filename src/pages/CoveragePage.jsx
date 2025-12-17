import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { MapPin, CheckCircle2, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CoveragePage = () => {
  const delhiDistricts = [
    {
      name: 'Central Delhi',
      areas: ['Connaught Place', 'Karol Bagh', 'Paharganj', 'Chandni Chowk', 'Sadar Bazaar', 'Daryaganj']
    },
    {
      name: 'North Delhi',
      areas: ['Civil Lines', 'Kamla Nagar', 'Model Town', 'Burari', 'Narela', 'Alipur']
    },
    {
      name: 'North East Delhi',
      areas: ['Shahdara', 'Seelampur', 'Yamuna Vihar', 'Nand Nagri', 'Gokulpuri', 'Karawal Nagar']
    },
    {
      name: 'East Delhi',
      areas: ['Laxmi Nagar', 'Preet Vihar', 'Mayur Vihar', 'Gandhi Nagar', 'Krishna Nagar', 'Vivek Vihar']
    },
    {
      name: 'New Delhi',
      areas: ['India Gate', 'Parliament Street', 'Chanakyapuri', 'Diplomatic Enclave', 'Barakhamba Road']
    },
    {
      name: 'North West Delhi',
      areas: ['Rohini', 'Pitampura', 'Shalimar Bagh', 'Kanjhawala', 'Bawana', 'Mundka']
    },
    {
      name: 'West Delhi',
      areas: ['Rajouri Garden', 'Janakpuri', 'Paschim Vihar', 'Vikaspuri', 'Punjabi Bagh', 'Tilak Nagar']
    },
    {
      name: 'South West Delhi',
      areas: ['Dwarka', 'Najafgarh', 'Vasant Kunj', 'Kapashera', 'Palam', 'Mahipalpur']
    },
    {
      name: 'South Delhi',
      areas: ['Lajpat Nagar', 'Hauz Khas', 'Saket', 'Greater Kailash', 'Malviya Nagar', 'Nehru Place']
    },
    {
      name: 'South East Delhi',
      areas: ['Defence Colony', 'Kalkaji', 'Okhla', 'Jaitpur', 'Badarpur', 'Tughlakabad']
    }
  ];

  const popularAreas = [
    'Lajpat Nagar', 'Laxmi Nagar', 'Connaught Place', 'Karol Bagh', 
    'Dwarka', 'Rohini', 'Janakpuri', 'Saket', 'Greater Kailash',
    'Vasant Kunj', 'Mayur Vihar', 'Preet Vihar', 'Pitampura',
    'Rajouri Garden', 'Hauz Khas', 'Nehru Place', 'Defence Colony',
    'Shahdara', 'Model Town', 'Punjabi Bagh'
  ];

  return (
    <>
      <Helmet>
        <title>Coverage Areas - Delhi Ambulance Services Delhi NCR</title>
        <meta name="description" content="Delhi Ambulance Services covers all districts of Delhi including Lajpat Nagar, Laxmi Nagar, and surrounding NCR areas with 24/7 emergency medical transport." />
      </Helmet>

      <main className="pt-20">
        <section className="bg-gradient-to-br from-red-900 via-red-800 to-red-950 text-white py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }} />
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Coverage Areas</h1>
              <p className="text-lg md:text-xl text-red-100 max-w-3xl mx-auto">
                Serving all districts and neighborhoods across Delhi NCR with rapid response emergency medical services.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                All Delhi Districts Covered
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We provide comprehensive ambulance services across all districts of Delhi with dedicated teams stationed strategically for fastest response times.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {delhiDistricts.map((district, index) => (
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
                    <h3 className="text-xl font-bold text-gray-900">{district.name}</h3>
                  </div>

                  <div className="space-y-2">
                    {district.areas.map((area, idx) => (
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

        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Popular Service Areas
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We serve all major localities across Delhi NCR with dedicated ambulance services available 24/7.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {popularAreas.map((area, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.02 }}
                    className="flex items-center space-x-2 p-3 bg-red-50 rounded-lg hover:bg-red-100 transition-colors"
                  >
                    <CheckCircle2 className="h-4 w-4 text-red-700 flex-shrink-0" />
                    <span className="text-sm font-medium text-gray-800">{area}</span>
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
                <img alt="Map showing Delhi Ambulance coverage areas across Delhi NCR" src="public/rapid1.png" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Rapid Response Across Delhi NCR
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Our strategically located ambulance stations ensure the fastest possible response time to any location in Delhi NCR. With GPS-enabled vehicles and 24/7 dispatch, we guarantee prompt arrival during emergencies.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="h-6 w-6 text-red-700 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Multiple ambulance stations across Delhi</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="h-6 w-6 text-red-700 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">GPS tracking for optimal route selection</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="h-6 w-6 text-red-700 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Average response time under 15 minutes</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="h-6 w-6 text-red-700 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Coverage extending to nearby NCR cities</span>
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

        <section className="py-20 bg-gradient-to-br from-red-700 to-red-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Don't See Your Area Listed?
              </h2>
              <p className="text-lg text-red-100 mb-8">
                We serve many more areas across Delhi NCR! Call us to confirm availability in your location and get immediate assistance.
              </p>
              <a href="tel:+919990909338">
                <Button size="lg" className="bg-white text-red-700 hover:bg-red-50 font-semibold text-lg px-10 py-6">
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

export default CoveragePage;