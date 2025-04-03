
import React, { useState, useEffect } from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { ComposedChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Area } from 'recharts';
import { calculateStepUpSIP, formatIndianCurrency, formatIndianNumber, formatPercentage } from '@/utils/calculatorUtils';
import { DownloadIcon, Mail } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import CalculatorResult from './CalculatorResult';

const StepUpSipCalculator = () => {
  const { toast } = useToast();
  const [initialInvestment, setInitialInvestment] = useState(5000);
  const [annualStepUpPercentage, setAnnualStepUpPercentage] = useState(10);
  const [expectedRateOfReturn, setExpectedRateOfReturn] = useState(12);
  const [investmentDuration, setInvestmentDuration] = useState(15);
  const [calculationResult, setCalculationResult] = useState<any>(null);
  const [showAllYears, setShowAllYears] = useState(false);
  
  // Calculate on initial load and when any input changes
  useEffect(() => {
    calculateResults();
  }, [initialInvestment, annualStepUpPercentage, expectedRateOfReturn, investmentDuration]);
  
  const calculateResults = () => {
    const result = calculateStepUpSIP(
      initialInvestment,
      annualStepUpPercentage,
      expectedRateOfReturn,
      investmentDuration
    );
    setCalculationResult(result);
  };
  
  const handleEmailResults = () => {
    toast({
      title: "Email feature",
      description: "This feature will be implemented soon. The email will contain a professional report of your calculation results.",
    });
  };
  
  const handleDownloadPDF = () => {
    toast({
      title: "Preparing PDF",
      description: "Your calculation results are being prepared for download.",
    });
  };
  
  // Format data for chart
  const getChartData = () => {
    if (!calculationResult) return [];
    
    return calculationResult.yearlyData.map((data: any) => ({
      name: `Year ${data.year}`,
      'Total Investment': data.totalInvestment,
      'Accumulated Wealth': data.wealth,
      'Returns': data.returns,
    }));
  };
  
  // Custom tooltip for the chart
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-4 border border-gray-200 shadow-lg rounded-md">
          <p className="font-medium text-sm text-charcoal-DEFAULT">{label}</p>
          <div className="space-y-1 mt-2">
            <p className="text-xs">
              <span className="inline-block w-3 h-3 bg-primary mr-2"></span>
              Total Investment: {formatIndianCurrency(payload[0].value)}
            </p>
            <p className="text-xs">
              <span className="inline-block w-3 h-3 bg-secondary mr-2"></span>
              Accumulated Wealth: {formatIndianCurrency(payload[1].value)}
            </p>
            <p className="text-xs">
              <span className="inline-block w-3 h-3 bg-gold-DEFAULT mr-2"></span>
              Returns: {formatIndianCurrency(payload[2].value)}
            </p>
          </div>
        </div>
      );
    }
    return null;
  };
  
  return (
    <div className="w-full">
      <Card className="bg-cream-DEFAULT">
        <CardHeader className="bg-primary text-white rounded-t-lg">
          <CardTitle>Step Up SIP Calculator</CardTitle>
          <CardDescription className="text-white text-opacity-90">
            Calculate the potential growth of your Step-up SIP investments over time.
          </CardDescription>
        </CardHeader>
        
        <CardContent className="p-6 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Input Section */}
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <Label htmlFor="initialInvestment" className="text-charcoal-DEFAULT">
                    Initial Monthly Investment (₹)
                  </Label>
                  <span className="text-sm font-medium">{formatIndianNumber(initialInvestment)}</span>
                </div>
                <Input
                  id="initialInvestment"
                  type="number"
                  min="500"
                  max="500000"
                  value={initialInvestment}
                  onChange={(e) => setInitialInvestment(Number(e.target.value))}
                  className="border-secondary"
                />
                <Slider
                  value={[initialInvestment]}
                  min={500}
                  max={100000}
                  step={500}
                  onValueChange={(value) => setInitialInvestment(value[0])}
                  className="mt-2"
                />
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <Label htmlFor="annualStepUp" className="text-charcoal-DEFAULT">
                    Annual Step-up Percentage (%)
                  </Label>
                  <span className="text-sm font-medium">{annualStepUpPercentage}%</span>
                </div>
                <Input
                  id="annualStepUp"
                  type="number"
                  min="1"
                  max="100"
                  value={annualStepUpPercentage}
                  onChange={(e) => setAnnualStepUpPercentage(Number(e.target.value))}
                  className="border-secondary"
                />
                <Slider
                  value={[annualStepUpPercentage]}
                  min={1}
                  max={50}
                  step={1}
                  onValueChange={(value) => setAnnualStepUpPercentage(value[0])}
                  className="mt-2"
                />
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <Label htmlFor="expectedReturn" className="text-charcoal-DEFAULT">
                    Expected Rate of Return (%)
                  </Label>
                  <span className="text-sm font-medium">{expectedRateOfReturn}%</span>
                </div>
                <Input
                  id="expectedReturn"
                  type="number"
                  min="1"
                  max="30"
                  value={expectedRateOfReturn}
                  onChange={(e) => setExpectedRateOfReturn(Number(e.target.value))}
                  className="border-secondary"
                />
                <Slider
                  value={[expectedRateOfReturn]}
                  min={1}
                  max={30}
                  step={0.5}
                  onValueChange={(value) => setExpectedRateOfReturn(value[0])}
                  className="mt-2"
                />
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <Label htmlFor="investmentDuration" className="text-charcoal-DEFAULT">
                    Investment Duration (Years)
                  </Label>
                  <span className="text-sm font-medium">{investmentDuration} Years</span>
                </div>
                <Input
                  id="investmentDuration"
                  type="number"
                  min="1"
                  max="40"
                  value={investmentDuration}
                  onChange={(e) => setInvestmentDuration(Number(e.target.value))}
                  className="border-secondary"
                />
                <Slider
                  value={[investmentDuration]}
                  min={1}
                  max={40}
                  step={1}
                  onValueChange={(value) => setInvestmentDuration(value[0])}
                  className="mt-2"
                />
              </div>
              
              <div className="flex flex-wrap gap-3 mt-6">
                <Button 
                  onClick={handleEmailResults} 
                  className="flex items-center space-x-2 bg-primary hover:bg-primary/90"
                >
                  <Mail size={16} />
                  <span>Email Results</span>
                </Button>
                <Button 
                  onClick={handleDownloadPDF} 
                  className="flex items-center space-x-2 bg-gold-DEFAULT text-charcoal-DEFAULT hover:bg-gold-DEFAULT/90"
                >
                  <DownloadIcon size={16} />
                  <span>Download PDF</span>
                </Button>
              </div>
            </div>
            
            {/* Results & Chart Section */}
            <div className="space-y-6">
              {calculationResult && (
                <>
                  {/* Summary Cards */}
                  <div className="grid grid-cols-2 gap-4">
                    <Card className="bg-gradient-to-br from-primary to-primary/90 text-white">
                      <CardContent className="pt-6">
                        <h3 className="text-sm font-medium opacity-80">Total Investment</h3>
                        <p className="text-2xl font-bold mt-1">
                          {formatIndianCurrency(calculationResult.summary.totalInvestment)}
                        </p>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-gradient-to-br from-secondary to-secondary/90 text-white">
                      <CardContent className="pt-6">
                        <h3 className="text-sm font-medium opacity-80">Total Returns</h3>
                        <p className="text-2xl font-bold mt-1">
                          {formatIndianCurrency(calculationResult.summary.wealthGain)}
                        </p>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-gradient-to-br from-gold-DEFAULT to-gold-DEFAULT/90 text-charcoal-DEFAULT">
                      <CardContent className="pt-6">
                        <h3 className="text-sm font-medium opacity-80">Final Amount</h3>
                        <p className="text-2xl font-bold mt-1">
                          {formatIndianCurrency(calculationResult.summary.accumulatedWealth)}
                        </p>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-gradient-to-br from-softblue-DEFAULT to-softblue-DEFAULT/90 text-white">
                      <CardContent className="pt-6">
                        <h3 className="text-sm font-medium opacity-80">Absolute Returns</h3>
                        <p className="text-2xl font-bold mt-1">
                          {formatPercentage(calculationResult.summary.absoluteReturns)}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Chart */}
                  <div className="h-64 mt-6 border border-gray-200 rounded-lg p-4 bg-white">
                    <ResponsiveContainer width="100%" height="100%">
                      <ComposedChart
                        data={getChartData()}
                        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                        <XAxis 
                          dataKey="name" 
                          tick={{ fontSize: 10 }}
                          interval={"preserveStartEnd"}
                        />
                        <YAxis 
                          tickFormatter={(value) => {
                            if (value >= 10000000) return `${(value / 10000000).toFixed(1)} Cr`;
                            if (value >= 100000) return `${(value / 100000).toFixed(1)} L`;
                            if (value >= 1000) return `${(value / 1000).toFixed(1)} K`;
                            return value.toString();
                          }}
                          tick={{ fontSize: 10 }}
                        />
                        <Tooltip content={<CustomTooltip />} />
                        <Legend wrapperStyle={{ fontSize: '10px' }} />
                        <Area 
                          type="monotone" 
                          dataKey="Total Investment" 
                          fill="#245e4f" 
                          stroke="#245e4f"
                          fillOpacity={0.3}
                        />
                        <Line
                          type="monotone"
                          dataKey="Accumulated Wealth"
                          stroke="#7ac9a7"
                          strokeWidth={2}
                          dot={{ r: 2 }}
                          activeDot={{ r: 4 }}
                        />
                        <Bar 
                          dataKey="Returns" 
                          barSize={5} 
                          fill="#e9c46a"
                        />
                      </ComposedChart>
                    </ResponsiveContainer>
                  </div>
                </>
              )}
            </div>
          </div>
          
          {/* Yearly Breakdown Table */}
          {calculationResult && (
            <div className="mt-8">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-primary">Yearly Breakdown</h3>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => setShowAllYears(!showAllYears)}
                  className="text-xs"
                >
                  {showAllYears ? "Show Less" : "Show All Years"}
                </Button>
              </div>
              
              <div className="border rounded-lg overflow-hidden">
                <Table>
                  <TableHeader className="bg-primary/10">
                    <TableRow>
                      <TableHead className="text-primary">Year</TableHead>
                      <TableHead className="text-primary">Monthly Investment</TableHead>
                      <TableHead className="text-primary">Yearly Investment</TableHead>
                      <TableHead className="text-primary">Total Investment</TableHead>
                      <TableHead className="text-primary">Wealth</TableHead>
                      <TableHead className="text-primary">Returns</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {calculationResult.yearlyData
                      .filter((_: any, index: number) => {
                        if (showAllYears) return true;
                        const investmentDuration = calculationResult.yearlyData.length;
                        // Show first 3 years, last year, and every 5th year in between
                        return (
                          index < 3 || 
                          index === investmentDuration - 1 ||
                          (index + 1) % 5 === 0
                        );
                      })
                      .map((data: any) => (
                        <TableRow key={data.year}>
                          <TableCell>{data.year}</TableCell>
                          <TableCell>
                            {formatIndianCurrency(data.yearlyInvestment / 12)}
                          </TableCell>
                          <TableCell>
                            {formatIndianCurrency(data.yearlyInvestment)}
                          </TableCell>
                          <TableCell>
                            {formatIndianCurrency(data.totalInvestment)}
                          </TableCell>
                          <TableCell>
                            {formatIndianCurrency(data.wealth)}
                          </TableCell>
                          <TableCell>
                            {formatIndianCurrency(data.returns)}
                          </TableCell>
                        </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          )}
          
        </CardContent>
        
        <CardFooter className="bg-gray-50 py-4 px-6 flex justify-between items-center">
          <p className="text-xs text-gray-500">
            * The calculations are based on the inputs provided and are for illustration purposes only.
          </p>
          <CalculatorResult 
            calculationResult={calculationResult} 
            initialMonthlyInvestment={initialInvestment} 
            annualStepUpPercentage={annualStepUpPercentage}
            expectedRateOfReturn={expectedRateOfReturn}
            investmentDuration={investmentDuration}
          />
        </CardFooter>
      </Card>
    </div>
  );
};

export default StepUpSipCalculator;
