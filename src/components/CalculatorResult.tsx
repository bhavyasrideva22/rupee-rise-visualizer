
import React, { useRef } from 'react';
import { Button } from "@/components/ui/button";
import { formatIndianCurrency, formatIndianNumber, formatPercentage } from '@/utils/calculatorUtils';
import { DownloadIcon, Mail } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

interface CalculatorResultProps {
  calculationResult: any;
  initialMonthlyInvestment: number;
  annualStepUpPercentage: number;
  expectedRateOfReturn: number;
  investmentDuration: number;
}

const CalculatorResult = ({
  calculationResult,
  initialMonthlyInvestment,
  annualStepUpPercentage,
  expectedRateOfReturn,
  investmentDuration,
}: CalculatorResultProps) => {
  const { toast } = useToast();
  const resultRef = useRef<HTMLDivElement>(null);
  
  if (!calculationResult) return null;

  const handleDownloadPDF = async () => {
    if (!resultRef.current) return;
    
    toast({
      title: "Preparing PDF",
      description: "Your calculation results are being prepared for download.",
    });

    try {
      const canvas = await html2canvas(resultRef.current, {
        scale: 2,
        logging: false,
        useCORS: true,
        backgroundColor: '#ffffff'
      });
      
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      });
      
      const imgWidth = 210; // A4 width in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
      pdf.setFillColor(36, 94, 79); // #245e4f
      pdf.rect(0, 0, 210, 20, 'F');
      pdf.setTextColor(255, 255, 255);
      pdf.setFont('helvetica', 'bold');
      pdf.setFontSize(18);
      pdf.text('Rupee Rise Visualizer', 105, 12, { align: 'center' });
      
      pdf.setTextColor(36, 94, 79);
      pdf.setFont('helvetica', 'bold');
      pdf.setFontSize(16);
      pdf.text('Step Up SIP Calculator Results', 105, 30, { align: 'center' });
      
      pdf.addImage(imgData, 'PNG', 10, 40, imgWidth - 20, imgHeight - 20);
      
      pdf.setFontSize(10);
      pdf.setTextColor(128, 128, 128);
      pdf.text('© Rupee Rise Visualizer. Generated on ' + new Date().toLocaleDateString(), 105, 285, { align: 'center' });
      pdf.text('This report is for informational purposes only and should not be considered financial advice.', 105, 290, { align: 'center' });
      
      pdf.save('step-up-sip-calculator-results.pdf');
      
      toast({
        title: "Download Complete",
        description: "Your calculation results have been successfully downloaded as PDF.",
      });
    } catch (error) {
      console.error("PDF generation error:", error);
      toast({
        title: "Download Failed",
        description: "There was an error generating your PDF. Please try again.",
        variant: "destructive",
      });
    }
  };
  
  const handleEmailResults = () => {
    toast({
      title: "Email feature",
      description: "This feature will be implemented soon. The email will contain a professional report of your calculation results.",
    });
  };
  
  return (
    <>
      <div className="hidden">
        <div ref={resultRef} className="bg-white p-8 max-w-4xl">
          <div className="border-b-2 border-primary pb-4 mb-6">
            <h1 className="text-2xl font-bold text-primary">Step Up SIP Calculator Results</h1>
            <p className="text-sm text-gray-600 mt-1">Generated on {new Date().toLocaleDateString()}</p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-cream-DEFAULT p-4 rounded-lg">
              <h2 className="text-lg font-semibold text-primary mb-3">Input Parameters</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600">Initial Monthly Investment</p>
                  <p className="font-medium">{formatIndianCurrency(initialMonthlyInvestment)}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Annual Step-up Percentage</p>
                  <p className="font-medium">{annualStepUpPercentage}%</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Expected Rate of Return</p>
                  <p className="font-medium">{expectedRateOfReturn}%</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Investment Duration</p>
                  <p className="font-medium">{investmentDuration} Years</p>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-lg font-semibold text-primary mb-3">Summary of Results</h2>
              <div className="grid grid-cols-2 gap-6">
                <div className="border-l-4 border-primary pl-4 py-2">
                  <p className="text-sm text-gray-600">Total Investment</p>
                  <p className="text-xl font-semibold">{formatIndianCurrency(calculationResult.summary.totalInvestment)}</p>
                </div>
                <div className="border-l-4 border-secondary pl-4 py-2">
                  <p className="text-sm text-gray-600">Total Returns</p>
                  <p className="text-xl font-semibold">{formatIndianCurrency(calculationResult.summary.wealthGain)}</p>
                </div>
                <div className="border-l-4 border-gold-DEFAULT pl-4 py-2">
                  <p className="text-sm text-gray-600">Final Amount</p>
                  <p className="text-xl font-semibold">{formatIndianCurrency(calculationResult.summary.accumulatedWealth)}</p>
                </div>
                <div className="border-l-4 border-softblue-DEFAULT pl-4 py-2">
                  <p className="text-sm text-gray-600">Absolute Returns</p>
                  <p className="text-xl font-semibold">{formatPercentage(calculationResult.summary.absoluteReturns)}</p>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-lg font-semibold text-primary mb-3">Key Yearly Breakdown</h2>
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-4 py-2 text-left text-sm font-medium text-primary">Year</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-primary">Monthly Investment</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-primary">Total Investment</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-primary">Wealth</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {calculationResult.yearlyData
                    .filter((_: any, index: number) => {
                      const investmentDuration = calculationResult.yearlyData.length;
                      // Show first year, middle year, and last year
                      return (
                        index === 0 || 
                        index === Math.floor(investmentDuration / 2) - 1 || 
                        index === investmentDuration - 1
                      );
                    })
                    .map((data: any) => (
                      <tr key={data.year}>
                        <td className="px-4 py-2 text-sm">{data.year}</td>
                        <td className="px-4 py-2 text-sm">{formatIndianCurrency(data.yearlyInvestment / 12)}</td>
                        <td className="px-4 py-2 text-sm">{formatIndianCurrency(data.totalInvestment)}</td>
                        <td className="px-4 py-2 text-sm">{formatIndianCurrency(data.wealth)}</td>
                      </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg mt-6 text-sm text-gray-600">
              <h3 className="font-medium text-primary mb-2">Important Notes:</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>All calculations are based on the inputs provided and are for illustration purposes only.</li>
                <li>Actual returns may vary based on market conditions and investment performance.</li>
                <li>The step-up SIP is applied at the beginning of each new year of the investment period.</li>
                <li>This is not financial advice. Please consult with a financial advisor before making investment decisions.</li>
              </ul>
            </div>
            
            <div className="border-t-2 border-primary pt-4 mt-8">
              <div className="flex items-center">
                <div>
                  <h3 className="font-semibold text-primary text-lg">Rupee Rise Visualizer</h3>
                  <p className="text-sm text-gray-600">Empowering your financial journey with interactive calculators.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex flex-wrap gap-3">
        <Button 
          onClick={handleEmailResults} 
          size="sm" 
          className="flex items-center space-x-2 bg-primary hover:bg-primary/90"
        >
          <Mail size={14} />
          <span>Email Results</span>
        </Button>
        <Button 
          onClick={handleDownloadPDF} 
          size="sm" 
          className="flex items-center space-x-2 bg-gold-DEFAULT text-charcoal-DEFAULT hover:bg-gold-DEFAULT/90"
        >
          <DownloadIcon size={14} />
          <span>Download PDF</span>
        </Button>
      </div>
    </>
  );
};

export default CalculatorResult;
