import React from 'react'
import { whyChooseUs } from '@/data/whyChooseUsData';
import {
  Settings,
  Lightbulb,
  GraduationCap,
  Headset,
  Award,
  Target,
  TrendingUp,
  Users,
  DollarSign,
  CheckCircle,
  Briefcase,
  Building,
  Clock,
} from 'lucide-react';

const iconMap = {
  Settings,
  Lightbulb,
  GraduationCap,
  Headset,
  Award,
  Target,
  TrendingUp,
  Users,
  DollarSign,
  CheckCircle,
  Briefcase,
  Building,
  Clock
};

const WhyChooseUs = () => {
  return (
    <section className="py-20 px-4 lg:px-8 bg-gray-50">
            <div className="container mx-auto">
              <div className="max-w-3xl mx-auto text-center space-y-6 mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">Mengapa Memilih Wibicon?</h2>
                <p className="text-xl text-gray-600">
                  Keunggulan yang membuat kami menjadi partner ERP terpercaya
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {whyChooseUs.map((item) => {
                  const Icon = iconMap[item.icon];
                  return (
                    <div key={item.id} className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
                      <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: '#02b1f3' }}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
  )
}

export default WhyChooseUs
