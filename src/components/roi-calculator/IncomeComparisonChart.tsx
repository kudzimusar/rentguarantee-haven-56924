
import React from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

interface IncomeComparisonChartProps {
  properTierNetIncome: number;
  traditionalNetIncome: number;
  formatCurrency: (value: number) => string;
}

export const IncomeComparisonChart = ({ 
  properTierNetIncome, 
  traditionalNetIncome, 
  formatCurrency 
}: IncomeComparisonChartProps) => {
  const data = [
    {
      name: "Proper Tier",
      value: properTierNetIncome,
      fill: "#1B5E3E", // Zimbabwe green
    },
    {
      name: "Traditional",
      value: traditionalNetIncome,
      fill: "#6b7280", // gray-500
    },
  ];

  return (
    <div className="h-40 mb-6">
      <h4 className="text-sm font-medium text-gray-700 mb-2">Income Comparison</h4>
      <ChartContainer 
        className="h-full" 
        config={{
          "Proper Tier": { color: "#1B5E3E" }, // Zimbabwe green
          Traditional: { color: "#6b7280" },
        }}
      >
        <BarChart
          data={data}
          margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" fontSize={12} />
          <YAxis fontSize={12} tickFormatter={(value) => `$${(value / 1000)}K`} />
          <ChartTooltip 
            content={
              <ChartTooltipContent 
                formatter={(value) => formatCurrency(Number(value))}
              />
            } 
          />
          <Bar dataKey="value">
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.fill} />
            ))}
          </Bar>
        </BarChart>
      </ChartContainer>
    </div>
  );
};
