// @ts-nocheck
import React from 'react';
import Svg, { Circle } from 'react-native-svg';
import { useAppStore } from '../src/store/useAppStore';

interface DonutChartProps {
  period: 'weekly' | 'monthly' | 'yearly';
  selChild: string;
}

export const DonutChart: React.FC<DonutChartProps> = ({ period, selChild }) => {
  const { analytics, childCategoryAnalytics } = useAppStore();
  const radius = 36;
  const circumference = 2 * Math.PI * radius; // ~226.19
  
  let slices: { percentage: number; color: string }[] = [];

  if (selChild === 'all') {
    const data = analytics[period] || analytics.weekly;
    slices = data.childSpending.map((item: any) => ({
      percentage: item.percentage,
      color: item.color
    }));
  } else {
    const childCatData = (childCategoryAnalytics[selChild] && childCategoryAnalytics[selChild][period]) || { categories: [] };
    slices = childCatData.categories.map((item: any) => ({
      percentage: item.percentage,
      color: item.color
    }));
  }

  let currentOffset = 0;

  return (
    <Svg viewBox="0 0 100 100" style={{ width: '100%', height: '100%' }}>
      {/* Background track circle */}
      <Circle
        cx="50"
        cy="50"
        r={radius}
        fill="none"
        stroke="rgba(200, 200, 200, 0.15)"
        strokeWidth="12"
      />
      {/* Colored segment slices */}
      {slices.map((slice, index) => {
        const strokeDash = (slice.percentage / 100) * circumference;
        const strokeSpace = Math.max(0, circumference - strokeDash);
        const offset = currentOffset;
        currentOffset -= strokeDash;

        return (
          <Circle
            key={index}
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke={slice.color}
            strokeWidth="12"
            strokeDasharray={`${strokeDash.toFixed(2)} ${strokeSpace.toFixed(2)}`}
            strokeDashoffset={offset.toFixed(2)}
            transform="rotate(-90 50 50)"
          />
        );
      })}
    </Svg>
  );
};
