import React from 'react';

export interface MetricCardProps {
  title: string;
  value: string;
  subtitle: React.ReactNode;
  icon: React.ElementType;
  trend?: {
    value: string;
    isPositive: boolean;
  };
  details?: React.ReactNode;
}

export interface GaugeProps {
  label: string;
  value: number; // 0-100
  color: string;
  icon: React.ElementType;
  threshold?: number;
  unit?: string;
}

export interface Branch {
  id: string;
  name: string;
  status: 'online' | 'offline' | 'alert';
}

export interface Machine {
  id: string;
  name: string;
  status: 'active' | 'idle' | 'alert';
  lastSync: Date;
}