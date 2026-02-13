import React, { useState } from "react";
import {
  ArrowRight,
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
} from "lucide-react";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";

import { companyInfo } from "@/data/companyData";
import { stats } from "@/data/statsData";
import Marquee from "react-fast-marquee";
import { clients } from "../../data/ourPartner";

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
  Clock,
};

const ourPartner = [
  {id: 1, name: "PT. Krakatau Information Tech"},
  {id: 2, name: "PT. Putera Mulya Terang Indah"},
  {id: 3, name: "CV. Sungai Indah"},
  {id: 4, name: "CV. Bima Jaya"},
  {id: 5, name: "PT. Sinarsari Sejati"},
  {id: 6, name: "PT. Sinar Baskara Sejati"},
  {id: 7, name: "PT. Indah Jaya"},
  {id: 8, name: "Yasin Motor"},
  {id: 9, name: "PT. Yuniko Asia Prima"},
  {id: 10, name: "PT. Indovon"},
  {id: 11, name: "PT. Amastex"},
  {id: 12, name: "PT. Tifatex"},
  {id: 13, name: "PT. Jaya Mas Dwi Perkasa"},
  {id: 14, name: "PT. Multi Star Rukun Abadi"},
  {id: 15, name: "CV. Almegatex"},
  {id: 16, name: "PT. Adhi Persada Beton"},
  {id: 17, name: "PT. Anugrah Megah Lestari"},
  {id: 18, name: "CV. Jaya Abadi"},
  {id: 19, name: "PT. Marga Asih Selaras"},
  {id: 20, name: "PT. Idola Selaras Abadi"},
  {id: 21, name: "Toko Idola"},
  {id: 22, name: "Carboni"},
  {id: 23, name: "PT. Chelsea Jaya Makmur"},
  {id: 24, name: "PT. Filamenindo Lestari Textile"},
  {id: 25, name: "PT. Citra Plastik Makmur"},
  {id: 26, name: "PT. Marktel"},
  {id: 27, name: "PT. Budi Agung Sentosa"},
  {id: 28, name: "PT. Fujitex"},
  {id: 29, name: "PT. Komodo Tekstil Indonesia"},
  {id: 30, name: "PT. Altinex"},
  {id: 31, name: "Blessings Art and Eatery"},
  {id: 32, name: "CV. Nakusa"},
  {id: 33, name: "PT. Koriester Tekstil Indonesia"},
]

const Hero = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <section
      id="home"
      className="pt-32 pb-20 px-4 lg:px-8 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-linear-to-br from-blue-50 via-white to-purple-50 opacity-70"></div>
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <Badge
              variant="outline"
              className="border-[#02b1f3] text-[#02b1f3] px-4 py-1"
            >
              #1 Odoo ERP Partner di Indonesia
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              {companyInfo.tagline}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Mitra terpercaya dalam implementasi ERP, system integration, dan
              digital transformation untuk membangun proses bisnis yang
              terintegrasi dan scalable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() => scrollToSection("contact")}
                style={{ backgroundColor: "#02b1f3" }}
                className="hover:opacity-90 transition-opacity text-lg px-8 py-6 cursor-pointer"
              >
                Mulai Konsultasi <ArrowRight className="ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("services")}
                className="border-2 border-[#02b1f3] text-[#02b1f3] hover:bg-[#02b1f3] hover:text-white transition-all text-lg px-8 py-6 cursor-pointer"
              >
                Lihat Layanan
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
                alt="ERP Dashboard"
                className="w-full h-auto"
              />
            </div>
            <div
              className="absolute -top-4 -right-4 w-72 h-72 rounded-full opacity-20"
              style={{ backgroundColor: "#02b1f3" }}
            ></div>
            <div
              className="absolute -bottom-4 -left-4 w-48 h-48 rounded-full opacity-20"
              style={{ backgroundColor: "#a95186" }}
            ></div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
          {stats.map((stat) => {
            const Icon = iconMap[stat.icon];
            return (
              <div key={stat.id} className="text-center space-y-2">
                <div
                  className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-2"
                  style={{ backgroundColor: "rgba(2, 177, 243, 0.1)" }}
                >
                  <Icon className="w-6 h-6" style={{ color: "#02b1f3" }} />
                </div>
                <div className="text-4xl font-bold text-gray-900">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            );
          })}
        </div>

        <div className="container mx-auto py-20">
          {/* <p className="text-xl text-gray-600">
              Solusi komprehensif untuk semua kebutuhan Odoo ERP Anda
          </p> */}
          <h3 className="text-xl text-center text-gray-500 uppercase tracking-wider mb-5">
            Trusted by Leading Companies
          </h3>

          <div className="flex flex-wrap justify-center gap-4 mb-20">
            {ourPartner.map((op) => (
              <span
                key={op.id}
                className="px-5 py-2 rounded-full font-semibold shadow hover:bg-blue-100 transition-all border border-blue-100 text-sm"
                style={{ backgroundColor: 'rgba(2, 177, 243, 0.1)', color: '#02b1f3' }}
              >
                {op.name}
              </span>
            ))}
          </div>

          <Marquee speed={150} gradient={false} pauseOnHover>
            {clients.map((client) => (
              <div key={client.id} className="mx-12">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-10 lg:h-20 object-contain grayscale hover:grayscale-0 transition duration-300"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default Hero;
