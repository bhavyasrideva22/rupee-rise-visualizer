
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';

const About = () => {
  return (
    <div className="flex flex-col min-h-screen bg-cream-DEFAULT">
      <Header />
      
      <main className="flex-grow py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-6">About Rupee Rise Visualizer</h1>
          
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <p className="text-charcoal-DEFAULT mb-4">
              Rupee Rise Visualizer is your trusted companion for financial planning and investment decisions. 
              We provide interactive calculators designed to help you visualize the potential growth of your 
              investments and make informed financial decisions.
            </p>
            
            <p className="text-charcoal-DEFAULT mb-4">
              Our mission is to empower individuals with the tools and knowledge needed to build financial security 
              and achieve their long-term goals. We believe that proper financial planning should be accessible to everyone, 
              regardless of their background or expertise level.
            </p>
            
            <p className="text-charcoal-DEFAULT">
              Whether you're planning for retirement, saving for your children's education, or simply looking to grow 
              your wealth, our calculators provide valuable insights to guide your investment journey.
            </p>
          </div>
          
          <h2 className="text-2xl font-bold text-primary mb-4">Our Calculators</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-primary">
              <h3 className="text-xl font-semibold text-primary mb-2">Step Up SIP Calculator</h3>
              <p className="text-charcoal-DEFAULT text-sm">
                Calculate the potential growth of your investments with a Step Up Systematic Investment Plan, 
                where your contribution increases annually at a predetermined rate.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-secondary opacity-70">
              <h3 className="text-xl font-semibold text-primary mb-2">Lumpsum Calculator</h3>
              <p className="text-charcoal-DEFAULT text-sm">
                Estimate the future value of a one-time investment over a specified period based on the expected 
                rate of return.
              </p>
              <div className="mt-2 text-xs bg-gold-DEFAULT/20 p-2 rounded">Coming soon</div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-gold-DEFAULT opacity-70">
              <h3 className="text-xl font-semibold text-primary mb-2">Regular SIP Calculator</h3>
              <p className="text-charcoal-DEFAULT text-sm">
                Calculate the potential returns on your regular monthly SIP investments over time with compounding benefits.
              </p>
              <div className="mt-2 text-xs bg-gold-DEFAULT/20 p-2 rounded">Coming soon</div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-softblue-DEFAULT opacity-70">
              <h3 className="text-xl font-semibold text-primary mb-2">Goal-Based Calculator</h3>
              <p className="text-charcoal-DEFAULT text-sm">
                Determine how much you need to invest regularly to achieve a specific financial goal within a given timeframe.
              </p>
              <div className="mt-2 text-xs bg-gold-DEFAULT/20 p-2 rounded">Coming soon</div>
            </div>
          </div>
          
          <Separator className="my-8" />
          
          <h2 className="text-2xl font-bold text-primary mb-4">Our Commitment</h2>
          
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <ul className="space-y-4">
              <li className="flex">
                <div className="mr-4 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-primary">Accuracy and Transparency</h3>
                  <p className="text-charcoal-DEFAULT text-sm">
                    Our calculators use industry-standard formulas to provide accurate projections. We are transparent about 
                    our calculation methodologies and assumptions.
                  </p>
                </div>
              </li>
              
              <li className="flex">
                <div className="mr-4 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-primary">Educational Focus</h3>
                  <p className="text-charcoal-DEFAULT text-sm">
                    Beyond calculations, we provide educational content to help you understand investment concepts 
                    and make informed decisions.
                  </p>
                </div>
              </li>
              
              <li className="flex">
                <div className="mr-4 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-primary">Continuous Improvement</h3>
                  <p className="text-charcoal-DEFAULT text-sm">
                    We regularly update our calculators and content to incorporate the latest financial insights and best practices.
                  </p>
                </div>
              </li>
              
              <li className="flex">
                <div className="mr-4 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-primary">User-Centered Design</h3>
                  <p className="text-charcoal-DEFAULT text-sm">
                    Our tools are designed with user experience in mind, making complex financial calculations accessible and easy to understand.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="bg-primary/5 rounded-lg p-6 text-center">
            <h2 className="text-xl font-semibold text-primary mb-3">Disclaimer</h2>
            <p className="text-charcoal-DEFAULT text-sm">
              The information provided on this website is for general informational purposes only. All calculations are based on 
              the inputs provided by the user and should not be considered as financial advice. We recommend consulting with a 
              qualified financial advisor before making any investment decisions.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
