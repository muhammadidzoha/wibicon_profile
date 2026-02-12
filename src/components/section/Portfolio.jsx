import React from 'react'
import { Card, CardContent } from '../../components/ui/card';
import { portfolioItems } from '@/data/portofolioData';
import { Badge } from '../../components/ui/badge';
import {
  CheckCircle,
} from 'lucide-react';

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 px-4 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center space-y-6 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">Portfolio & Case Studies</h2>
            <p className="text-xl text-gray-600">
              Kisah sukses klien kami dalam transformasi digital
            </p>
          </div>

          <div className="space-y-8">
            {portfolioItems.map((item, index) => (
              <Card key={item.id} className="border-2 hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-4">
                      <div className="flex items-center space-x-3">
                        <Badge style={{ backgroundColor: '#02b1f3' }} className="text-white">
                          {item.industry}
                        </Badge>
                        <h3 className="text-2xl font-bold text-gray-900">{item.title}</h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {item.modules.map((module, idx) => (
                          <Badge key={idx} variant="outline" className="border-[#02b1f3] text-[#02b1f3]">
                            {module}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-6 space-y-3">
                      <h4 className="font-semibold text-gray-900 mb-4">Key Results:</h4>
                      {item.results.map((result, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <CheckCircle className="w-5 h-5 shrink-0 mt-0.5" style={{ color: '#02b1f3' }} />
                          <span className="text-sm text-gray-700">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Portfolio
