export const calculateROI = (monthlyRent: number) => {
  // For Proper Tier calculation
  const brokerFee = monthlyRent * 0.5; // 50% of one month's rent
  const managementFee = monthlyRent * 0.1 * 12; // 10% of yearly rent
  const properTierAnnualIncome = (monthlyRent * 12) - managementFee - brokerFee;
  const properTierExpenses = 0; // No additional expenses with Proper Tier
  const properTierNet = properTierAnnualIncome;
  
  // For Traditional calculation
  const marketRent = monthlyRent;
  const traditionalAnnualIncome = marketRent * 12;
  
  // Expenses based on updated assumptions (Zimbabwe pricing)
  const vacancyLoss = marketRent * 1.5; // 45 days vacancy (1.5 months)
  const traditionalBrokerFees = marketRent * 1.0; // Standard broker fee (1 month rent)
  const propertyDamage = marketRent * 0.5; // 50% of monthly rent for property damage
  const timeValue = 1080; // $15/hr and 6 hours/month = $1,080 per year
  const maintenanceAndAdmin = 500; // Flat $500 for maintenance, legal and admin combined
  
  // Total traditional expenses
  const totalTraditionalExpenses = vacancyLoss + traditionalBrokerFees + propertyDamage + 
                           timeValue + maintenanceAndAdmin;
  
  const traditionalExpenses = {
    vacancyLoss,
    brokerFees: traditionalBrokerFees,
    propertyDamage,
    timeValue,
    maintenanceAndAdmin,
    total: totalTraditionalExpenses
  };
  
  const traditionalNet = traditionalAnnualIncome - totalTraditionalExpenses;
  
  // Final calculations
  return {
    properTierNetIncome: properTierNet,
    traditionalNetIncome: traditionalNet,
    annualDifference: properTierNet - traditionalNet,
    properTierMonthlyIncome: properTierNet / 12,
    traditionalMonthlyIncome: traditionalNet / 12,
    traditionalExpenses,
    managementFee: managementFee // Annual management fee (10% of yearly rent)
  };
};

export const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(value);
};

export const formatPercentage = (value: number) => {
  return `${Math.round(value * 100)}%`;
};
