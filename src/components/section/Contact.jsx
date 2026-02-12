import React, { useState } from "react";
import { companyInfo } from "@/data/companyData";
import { toast } from "sonner";
import {
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";
import {
  Tooltip,
  TooltipProvider,
  TooltipContent,
  TooltipTrigger,
} from "../../components/ui/tooltip";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message =
    `Nama Lengkap: ${formData.name}\n` +
    `Email: ${formData.email}\n` +
    `Nama Perusahaan: ${formData.company}\n` +
    `Nomor Telepon: ${formData.phone}\n` +
    `Pesan: ${formData.message}`;

    const whatsappNumber = companyInfo.whatsapp;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");

    toast.success("Terima kasih! Pesan Anda akan dikirim via WhatsApp.", {
      description: "Anda akan diarahkan ke WhatsApp.",
    });
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="py-20 px-4 lg:px-8 bg-gray-50">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center space-y-6 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Hubungi Kami
          </h2>
          <p className="text-xl text-gray-600">
            Siap untuk mentransformasi bisnis Anda? Mari diskusikan kebutuhan
            Anda
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Informasi Kontak
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                    style={{ backgroundColor: "#02b1f3" }}
                  >
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-gray-600">{companyInfo.email}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                    style={{ backgroundColor: "#02b1f3" }}
                  >
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      Telepon / WhatsApp
                    </p>
                    <p className="text-gray-600">{companyInfo.phone}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                    style={{ backgroundColor: "#02b1f3" }}
                  >
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Alamat</p>
                    <p className="text-gray-600">{companyInfo.address}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t">
                <p className="font-semibold text-gray-900 mb-4">Follow Kami</p>
                  <div className="flex space-x-4">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <span className="inline-block w-fit">
                            <Button className="w-10 h-10" style={{ backgroundColor: "#02b1f3" }} disabled>
                              <Linkedin className="w-5 h-5 text-white" />
                            </Button>
                          </span>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Maintenance</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                    <a
                      href={companyInfo.socialMedia.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg flex items-center justify-center hover:opacity-80 transition-opacity"
                      style={{ backgroundColor: "#02b1f3" }}
                    >
                      <Instagram className="w-5 h-5 text-white" />
                    </a>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <span className="inline-block w-fit">
                            <Button className="w-10 h-10" style={{ backgroundColor: "#02b1f3" }} disabled>
                              <Facebook className="w-5 h-5 text-white" />
                            </Button>
                          </span>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Maintenance</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <span className="inline-block w-fit">
                            <Button className="w-10 h-10" style={{ backgroundColor: "#02b1f3" }} disabled>
                              <Twitter className="w-5 h-5 text-white" />
                            </Button>
                          </span>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Maintenance</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Kirim Pesan
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nama Lengkap
                </label>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Nama Anda"
                  required
                  className="w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="email@example.com"
                  required
                  className="w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nama Perusahaan
                </label>
                <Input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="PT Example Indonesia"
                  className="w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nomor Telepon
                </label>
                <Input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+62 812-3456-7890"
                  required
                  className="w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Pesan
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Ceritakan kebutuhan bisnis Anda..."
                  rows={4}
                  required
                  className="w-full"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full hover:opacity-90 transition-opacity"
                style={{ backgroundColor: "#02b1f3" }}
              >
                Kirim Pesan <ArrowRight className="ml-2" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
