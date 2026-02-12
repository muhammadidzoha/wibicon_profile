import React from 'react'
import { services } from '@/data/servicesData';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
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
  Check,
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

const Services = () => {
  return (
    <section id="services" className="py-20 px-4 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center space-y-6 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">Layanan Kami</h2>
            <p className="text-xl text-gray-600">
              Solusi komprehensif untuk semua kebutuhan Odoo ERP Anda
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => {
              const Icon = iconMap[service.icon];
              return (
                <Card key={service.id} className="border-2 hover:border-[#02b1f3] transition-all duration-300 hover:shadow-xl group">
                  <CardHeader>
                    <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform" style={{ backgroundColor: 'rgba(2, 177, 243, 0.1)' }}>
                      <Icon className="w-7 h-7" style={{ color: '#02b1f3' }} />
                    </div>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <Check className="w-5 h-5 shrink-0" style={{ color: '#02b1f3' }} />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
  )
}

export default Services
