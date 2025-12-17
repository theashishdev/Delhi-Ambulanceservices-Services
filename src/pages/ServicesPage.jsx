import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Heart, Wind, Skull, Navigation, Plane, Train, Phone, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ServicesPage = () => {
  const services = [
    {
      icon: Heart,
      title: 'ICU Ambulance',
      description: 'Fully equipped ICU ambulances with advanced life support systems, ventilators, cardiac monitors, and trained critical care specialists for emergency patient transport.',
      features: ['Advanced Cardiac Life Support', 'Continuous Monitoring', 'ICU-trained Paramedics', 'Defibrillators & Ventilators']
    },
    {
      icon: Wind,
      title: 'Ventilator Ambulance',
      description: 'Specialized ambulances equipped with high-quality ventilators and respiratory support systems for patients requiring breathing assistance during transport.',
      features: ['High-end Ventilators', 'Oxygen Supply Systems', 'Respiratory Therapists', 'Emergency Intubation Kit']
    },
    {
      icon: Skull,
      title: 'Mortuary Ambulance',
      description: 'Dignified and respectful mortuary van services with refrigerated compartments for safe and hygienic transportation of deceased individuals.',
      features: ['Refrigerated Compartments', 'Dignified Transport', 'Documentation Assistance', 'Professional Staff']
    },
    {
      icon: Navigation,
      title: 'Outstation Ambulance',
      description: 'Long-distance medical transport services with comfortable ambulances, medical staff, and all necessary equipment for interstate patient transfers.',
      features: ['Long Distance Travel', 'Medical Attendants', 'Regular Health Monitoring', 'Comfortable Journey']
    },
    {
      icon: Plane,
      title: 'Air Ambulance',
      description: 'Rapid air medical transport for critical patients requiring immediate long-distance evacuation with complete ICU setup on board.',
      features: ['Fastest Transport', 'Full ICU Setup', 'Expert Flight Crew', 'Nationwide Coverage']
    },
    {
      icon: Train,
      title: 'Train Ambulance',
      description: 'Cost-effective long-distance patient transport via train with complete medical care, suitable for stable patients needing interstate transfer.',
      features: ['Cost-effective Option', 'Medical Supervision', 'Comfortable AC Coaches', 'Pan-India Service']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Our Services - Delhi Ambulance Services</title>
        <meta name="description" content="Delhi Ambulance offers ICU ambulance, ventilator ambulance, mortuary services, air ambulance, train ambulance, and outstation ambulance services across Delhi NCR." />
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Comprehensive Services</h1>
              <p className="text-lg md:text-xl text-red-100 max-w-3xl mx-auto">
                From emergency ICU transport to specialized air ambulance services, we provide complete medical transportation solutions tailored to your needs.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
                >
                  <div className="bg-gradient-to-br from-red-700 to-red-900 p-6">
                    <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                  </div>

                  <div className="p-6">
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 pt-6 border-t border-gray-100">
                      <a href="tel:+919990909338">
                        <Button className="w-full bg-red-700 hover:bg-red-800 text-white font-semibold">
                          <Phone className="mr-2 h-4 w-4" />
                          Book Now
                        </Button>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
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
                <img alt="State-of-the-art ICU ambulance interior with medical equipment" src="https://images.unsplash.com/photo-1696243144413-503bc482a608" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  State-of-the-Art Medical Equipment
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Our ambulances are equipped with the latest medical technology to ensure the highest level of care during transport. Every vehicle undergoes regular maintenance and equipment checks.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="h-6 w-6 text-red-700 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Advanced cardiac monitoring systems</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="h-6 w-6 text-red-700 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">High-quality ventilators and oxygen supply</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="h-6 w-6 text-red-700 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Emergency medication and first aid supplies</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="h-6 w-6 text-red-700 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">GPS tracking for fastest route navigation</span>
                  </li>
                </ul>
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
                Need Emergency Medical Transport?
              </h2>
              <p className="text-lg text-red-100 mb-8">
                Our team is standing by 24/7 to provide immediate assistance. Call us now for any medical emergency or transport needs.
              </p>
              <a href="tel:+919990909338">
                <Button size="lg" className="bg-white text-red-700 hover:bg-red-50 font-semibold text-lg px-10 py-6">
                  <Phone className="mr-2 h-6 w-6" />
                  Call Emergency: 999-090-9338
                </Button>
              </a>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ServicesPage;