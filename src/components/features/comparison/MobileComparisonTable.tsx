import React from 'react';
import { CreditCard, Shield, Clock, Home, DollarSign, Users, BarChart } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MobileFeatureRow from './MobileFeatureRow';

const MobileComparisonTable = () => {
  return (
    <div className="w-full">
      <Tabs defaultValue="propertier" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-4">
          <TabsTrigger value="propertier" className="font-medium">Proper Tier</TabsTrigger>
          <TabsTrigger value="traditional" className="font-medium">Traditional</TabsTrigger>
          <TabsTrigger value="self" className="font-medium">Self Managed</TabsTrigger>
        </TabsList>

        <TabsContent value="propertier">
          <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
            <div className="bg-[#f5f0ff] py-4 px-4 font-bold text-lg text-[var(--theme-primary)] text-center border-b border-gray-200">
              Proper Tier
            </div>
            <div className="divide-y divide-gray-200">
              <MobileFeatureRow 
                icon={<CreditCard className="w-5 h-5 text-[#ff6b6b]" />} 
                feature="Income during vacancies" 
                value="Guaranteed full payment"
                isProperTier={true}
                isBetterValue={true} />
              <MobileFeatureRow 
                icon={<Shield className="w-5 h-5 text-[#ff6b6b]" />} 
                feature="Financial risk bearer" 
                value="Proper Tier takes all risk"
                isProperTier={true}
                isBetterValue={true} />
              <MobileFeatureRow 
                icon={<Clock className="w-5 h-5 text-[#ff6b6b]" />} 
                feature="Owner time required" 
                value="<1 hour monthly"
                isProperTier={true}
                isBetterValue={true} />
              <MobileFeatureRow 
                icon={<Home className="w-5 h-5 text-[#ff6b6b]" />} 
                feature="Property Condition" 
                value="Proper Tier guarantee"
                isProperTier={true}
                isBetterValue={true} />
              <MobileFeatureRow 
                icon={<DollarSign className="w-5 h-5 text-[#ff6b6b]" />} 
                feature="Payment reliability" 
                value="Fixed date, every month"
                isProperTier={true}
                isBetterValue={true} />
              <MobileFeatureRow 
                icon={<Users className="w-5 h-5 text-[#ff6b6b]" />} 
                feature="Tenant Screening" 
                value="Comprehensive"
                isProperTier={true}
                isBetterValue={true} />
              <MobileFeatureRow 
                icon={<BarChart className="w-5 h-5 text-[#ff6b6b]" />} 
                feature="Annual net returns*" 
                value="5.4L"
                isProperTier={true}
                isBetterValue={true} />
            </div>
          </div>
        </TabsContent>

        <TabsContent value="traditional">
          <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
            <div className="bg-white py-4 px-4 font-bold text-lg text-center border-b border-gray-200">
              Traditional PMS
            </div>
            <div className="divide-y divide-gray-200">
              <MobileFeatureRow 
                icon={<CreditCard className="w-5 h-5 text-[#ff6b6b]" />} 
                feature="Income during vacancies" 
                value="No income"
                isProperTier={false}
                isBetterValue={false} />
              <MobileFeatureRow 
                icon={<Shield className="w-5 h-5 text-[#ff6b6b]" />} 
                feature="Financial risk bearer" 
                value="Owner takes all risks"
                isProperTier={false}
                isBetterValue={false} />
              <MobileFeatureRow 
                icon={<Clock className="w-5 h-5 text-[#ff6b6b]" />} 
                feature="Owner time required" 
                value="3-5 hours"
                isProperTier={false}
                isBetterValue={false} />
              <MobileFeatureRow 
                icon={<Home className="w-5 h-5 text-[#ff6b6b]" />} 
                feature="Property Condition" 
                value="No guarantee"
                isProperTier={false}
                isBetterValue={false} />
              <MobileFeatureRow 
                icon={<DollarSign className="w-5 h-5 text-[#ff6b6b]" />} 
                feature="Payment reliability" 
                value="Depends on tenant"
                isProperTier={false}
                isBetterValue={false} />
              <MobileFeatureRow 
                icon={<Users className="w-5 h-5 text-[#ff6b6b]" />} 
                feature="Tenant Screening" 
                value="Basic checks"
                isProperTier={false}
                isBetterValue={false} />
              <MobileFeatureRow 
                icon={<BarChart className="w-5 h-5 text-[#ff6b6b]" />} 
                feature="Annual net returns*" 
                value="2.7L"
                isProperTier={false}
                isBetterValue={false} />
            </div>
          </div>
        </TabsContent>

        <TabsContent value="self">
          <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
            <div className="bg-white py-4 px-4 font-bold text-lg text-center border-b border-gray-200">
              Self Management
            </div>
            <div className="divide-y divide-gray-200">
              <MobileFeatureRow 
                icon={<CreditCard className="w-5 h-5 text-[#ff6b6b]" />} 
                feature="Income during vacancies" 
                value="No income"
                isProperTier={false}
                isBetterValue={false} />
              <MobileFeatureRow 
                icon={<Shield className="w-5 h-5 text-[#ff6b6b]" />} 
                feature="Financial risk bearer" 
                value="Owner takes all risks"
                isProperTier={false}
                isBetterValue={false} />
              <MobileFeatureRow 
                icon={<Clock className="w-5 h-5 text-[#ff6b6b]" />} 
                feature="Owner time required" 
                value="6-8 hours"
                isProperTier={false}
                isBetterValue={false} />
              <MobileFeatureRow 
                icon={<Home className="w-5 h-5 text-[#ff6b6b]" />} 
                feature="Property Condition" 
                value="No protection"
                isProperTier={false}
                isBetterValue={false} />
              <MobileFeatureRow 
                icon={<DollarSign className="w-5 h-5 text-[#ff6b6b]" />} 
                feature="Payment reliability" 
                value="Depends on tenant"
                isProperTier={false}
                isBetterValue={false} />
              <MobileFeatureRow 
                icon={<Users className="w-5 h-5 text-[#ff6b6b]" />} 
                feature="Tenant Screening" 
                value="Limited"
                isProperTier={false}
                isBetterValue={false} />
              <MobileFeatureRow 
                icon={<BarChart className="w-5 h-5 text-[#ff6b6b]" />} 
                feature="Annual net returns*" 
                value="3.1L"
                isProperTier={false}
                isBetterValue={false} />
            </div>
          </div>
        </TabsContent>
      </Tabs>

      {/* Footnote */}
      <p className="text-sm text-gray-600 text-center mt-4 mb-12">
        *Based on a property with 50k monthly rent. Net returns accounts for vacancies, maintenance, and time value
      </p>
    </div>
  );
};

export default MobileComparisonTable;
