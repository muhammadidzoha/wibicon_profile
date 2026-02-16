import React from 'react'
import { companyInfo } from '@/data/companyData';
import { Check } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 lg:px-8 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-7xl mx-auto text-center space-y-6 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">Tentang Wibicon</h2>
            <p className="text-xl text-gray-600 leading-relaxed text-justify">
              {companyInfo.description}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="Team collaboration"
                className="w-full h-auto"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">Misi Kami</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                {companyInfo.mission}
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#02b1f3' }}>
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Certified Expertise</h4>
                    <p className="text-gray-600">Tim certified Odoo developers dan business consultants</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#02b1f3' }}>
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">End-to-End Solutions</h4>
                    <p className="text-gray-600">Dari consulting hingga ongoing support</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#02b1f3' }}>
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Local Understanding</h4>
                    <p className="text-gray-600">Memahami konteks dan kebutuhan bisnis Indonesia</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default About
