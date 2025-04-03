
/**
 * Calculates the future value of a Step-Up SIP investment
 * 
 * @param initialInvestment - Monthly investment amount to start with
 * @param annualStepUpPercentage - Annual percentage by which the investment will increase
 * @param expectedRateOfReturn - Annual rate of return expected from the investment
 * @param investmentDuration - Total duration of investment in years
 * @returns Object containing yearly data and summary
 */
export const calculateStepUpSIP = (
  initialInvestment: number,
  annualStepUpPercentage: number,
  expectedRateOfReturn: number,
  investmentDuration: number
) => {
  const monthlyRateOfReturn = expectedRateOfReturn / 12 / 100;
  const yearlyData = [];
  
  let totalInvestment = 0;
  let accumulatedWealth = 0;
  let currentMonthlyInvestment = initialInvestment;
  
  // For each year of investment
  for (let year = 1; year <= investmentDuration; year++) {
    // For each month in the year
    for (let month = 1; month <= 12; month++) {
      // Calculate current month's investment
      if (year > 1 && month === 1) {
        // Apply the step-up at the beginning of each new year (except first year)
        currentMonthlyInvestment = currentMonthlyInvestment * (1 + annualStepUpPercentage / 100);
      }
      
      // Add the current month's investment
      totalInvestment += currentMonthlyInvestment;
      
      // Calculate the growth for this month
      accumulatedWealth = (accumulatedWealth + currentMonthlyInvestment) * (1 + monthlyRateOfReturn);
    }
    
    // Record data for this year
    yearlyData.push({
      year,
      yearlyInvestment: year === 1 ? initialInvestment * 12 : currentMonthlyInvestment * 12,
      totalInvestment: totalInvestment,
      wealth: accumulatedWealth,
      returns: accumulatedWealth - totalInvestment,
    });
  }
  
  // Calculate summary
  const summary = {
    totalInvestment,
    accumulatedWealth,
    wealthGain: accumulatedWealth - totalInvestment,
    absoluteReturns: ((accumulatedWealth - totalInvestment) / totalInvestment) * 100,
  };
  
  return {
    yearlyData,
    summary
  };
};

/**
 * Format number as Indian currency (INR)
 */
export const formatIndianCurrency = (value: number): string => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(value);
};

/**
 * Format number as Indian number format with commas (without currency symbol)
 */
export const formatIndianNumber = (value: number): string => {
  return new Intl.NumberFormat('en-IN').format(value);
};

/**
 * Format number as percentage
 */
export const formatPercentage = (value: number): string => {
  return `${value.toFixed(2)}%`;
};
