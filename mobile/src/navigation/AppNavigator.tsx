/**
 * ALPH PAY · React Native Role-Based Navigation Architecture
 * Direct mapping of the 31-Section Information Architecture
 */

import React from 'react';

export type UserRole = 'PARENT' | 'CHILD';

export interface NavigationProps {
  currentRole: UserRole;
}

export const ParentTabRoutes = {
  HOME_DASHBOARD: '02_HomeDashboard',
  CHILDREN_HUB: '03_ChildrenHub',
  PAYMENTS_TRANSFERS: '06_07_PaymentsTransfers',
  TRANSACTIONS_LEDGER: '09_TransactionsLedger',
  MORE_SETTINGS: '10_17_MoreSettings',
};

export const ChildTabRoutes = {
  CHILD_HOME: 'C02_ChildHome',
  CHILD_WALLET: 'C03_ChildWallet',
  CHILD_SCAN_PAY: 'C06_ChildScanPay',
  CHILD_ACTIVITY: 'C10_ChildActivity',
  CHILD_MORE: 'C11_C14_ChildMore',
};

export const AppNavigator: React.FC<NavigationProps> = ({ currentRole }) => {
  return (
    // Schematic representation of React Navigation Stack/Tabs
    <div style={{ padding: 20 }}>
      {currentRole === 'PARENT' ? (
        <div>Parent Navigation: 5 Bottom Tabs (Home, Children, Payments, Transactions, More)</div>
      ) : (
        <div>Child Navigation: 5 Bottom Tabs (Home, Wallet, Scan & Pay, Activity, More)</div>
      )}
    </div>
  );
};
