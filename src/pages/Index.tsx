
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StepUpSipCalculator from '@/components/StepUpSipCalculator';
import SipEducationContent from '@/components/SipEducationContent';
import { Separator } from "@/components/ui/separator";
import { BadgeIndianRupee } from 'lucide-react';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-cream-DEFAULT">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary to-secondary py-16 px-4 text-white">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                  Step Up SIP Calculator
                </h1>
                <p className="text-lg opacity-90 mb-6">
                  Calculate how your wealth grows with systematic investment increases each year.
                </p>
                <div className="flex items-center space-x-2 p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                  <BadgeIndianRupee size={24} className="text-gold-DEFAULT" />
                  <p className="text-sm md:text-base">
                    Align your investments with your rising income for maximum wealth creation.
                  </p>
                </div>
              </div>
              
              <div className="md:w-1/2 flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gold-DEFAULT rounded-full opacity-20 blur-xl transform -translate-y-1/2 translate-x-1/4"></div>
                  <div className="bg-white p-5 rounded-lg shadow-lg relative z-10 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-5xl font-bold text-primary">₹</div>
                      <div className="flex items-end mt-2">
                        <div className="h-10 w-2 bg-secondary mx-1 rounded-t-full"></div>
                        <div className="h-16 w-2 bg-primary mx-1 rounded-t-full"></div>
                        <div className="h-20 w-2 bg-gold-DEFAULT mx-1 rounded-t-full"></div>
                        <div className="h-24 w-2 bg-primary mx-1 rounded-t-full"></div>
                        <div className="h-28 w-2 bg-secondary mx-1 rounded-t-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Calculator Section */}
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-6xl">
            <StepUpSipCalculator />
          </div>
        </section>
        
        <Separator className="max-w-6xl mx-auto" />
        
        {/* Educational Content */}
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-6xl prose prose-lg prose-headings:text-primary prose-a:text-secondary">
            <SipEducationContent />
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="bg-primary py-12 px-4 text-white">
          <div className="container mx-auto max-w-6xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Start Your Investment Journey?</h2>
            <p className="mb-8 max-w-2xl mx-auto">
              Use our Step Up SIP calculator to plan your investments better and achieve your financial goals faster. 
              Consult with a financial advisor to create a personalized strategy.
            </p>
            <button className="bg-gold-DEFAULT text-charcoal-DEFAULT font-semibold px-6 py-3 rounded-md hover:bg-opacity-90 transition-all transform hover:-translate-y-1">
              Plan Your Investment Now
            </button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
