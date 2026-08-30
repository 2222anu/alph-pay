export const IATreeData = {
  parentApp: [
    {
      code: '01',
      title: 'Authentication & Onboarding',
      sub: [
        { code: '01.1', title: 'Welcome', leaves: ['App introduction', 'How Amanah works', 'Get Started'] },
        { code: '01.2', title: 'Account Registration', leaves: ['Mobile number', 'Country code', 'OTP verification', 'Resend OTP', 'Change mobile number'] },
        { code: '01.3', title: 'Parent Identity / Profile', leaves: ['Full name', 'Date of birth', 'Nationality', 'Email', 'Mobile number', 'Profile confirmation'] },
        { code: '01.4', title: 'Parent Verification', leaves: ['Identity verification', 'Required identity information', 'Verification status', 'Verification pending', 'Verification failed', 'Retry / correction'] },
        { code: '01.5', title: 'Security Setup', leaves: ['Create app PIN', 'Confirm PIN', 'Enable biometric authentication', 'Security confirmation'] },
        { code: '01.6', title: 'Bank / Funding Account', leaves: ['Add bank account', 'Account details', 'Verify account', 'Verification pending', 'Verification failed', 'Linked account confirmation'] },
        { code: '01.7', title: 'Parent Setup Complete', leaves: ['Account created', 'Add child', 'Go to Dashboard'] }
      ]
    },
    {
      code: '02',
      title: 'Home / Parent Dashboard',
      sub: [
        { code: '02.1', title: 'Header', leaves: ['Parent profile', 'Notifications', 'Security status'] },
        { code: '02.2', title: 'Financial Overview', leaves: ['Available balance', 'Total funds allocated', 'Total child spending', 'Upcoming allowance'] },
        { code: '02.3', title: 'Children Overview', leaves: ['Child cards', 'Child balance', 'Spending status', 'Allowance status', 'Active restrictions'] },
        { code: '02.4', title: 'Quick Actions', leaves: ['Add child', 'Send money', 'Add allowance', 'Scan & Pay', 'View transactions'] },
        { code: '02.5', title: 'Pending Actions', leaves: ['Payment approval requests', 'Child requests', 'Verification requests', 'Account alerts'] },
        { code: '02.6', title: 'Spending Snapshot', leaves: ["Today's spending", 'Weekly spending', 'Monthly spending', 'Category breakdown'] },
        { code: '02.7', title: 'Recent Activity', leaves: ['Payments', 'Allowance deposits', 'Transfers', 'Blocked transactions', 'Approval activity'] }
      ]
    },
    {
      code: '03',
      title: 'Children',
      sub: [
        { code: '03.1', title: 'Children List', leaves: ['Active children', 'Pending invitations', 'Deactivated children'] },
        { code: '03.2', title: 'Add Child', leaves: ['Child details', 'Child name', 'Date of birth', 'Mobile number', 'Relationship', 'Generate invitation', 'Send invitation'] },
        { code: '03.3', title: 'Child Invitation', leaves: ['Invitation generated', 'Share invitation', 'Invitation pending', 'Resend invitation', 'Cancel invitation', 'Invitation accepted'] },
        { code: '03.4', title: 'Child Profile', leaves: ['Personal information', 'Account status', 'Current balance', 'Spending limit', 'Allowance', 'Payment mode', 'Restrictions', 'Activity'] },
        { code: '03.5', title: 'Child Wallet', leaves: ['Current balance', 'Available balance', 'Allocated allowance', 'Spent amount', 'Remaining amount', 'Wallet activity'] },
        { code: '03.6', title: 'Child Account Status', leaves: ['Active', 'Pending', 'Restricted', 'Suspended', 'Deactivated'] },
        { code: '03.7', title: 'Child Account Actions', leaves: ['Edit profile', 'Pause spending', 'Resume spending', 'Reset access', 'Remove child', 'Deactivate account'] }
      ]
    },
    {
      code: '04',
      title: 'Allowance Management',
      sub: [
        { code: '04.1', title: 'Allowance Overview', leaves: ['Current allowance', 'Remaining allowance', 'Next deposit', 'Allowance history'] },
        { code: '04.2', title: 'Create Allowance', leaves: ['Select child', 'Amount', 'Frequency — Daily / Weekly / Monthly', 'Start date', 'End date', 'Confirm allowance'] },
        { code: '04.3', title: 'Allowance Schedule', leaves: ['Active schedules', 'Upcoming deposits', 'Scheduled amount', 'Schedule status'] },
        { code: '04.4', title: 'Modify Allowance', leaves: ['Change amount', 'Change frequency', 'Change date', 'Save changes'] },
        { code: '04.5', title: 'Pause Allowance', leaves: ['Pause confirmation', 'Resume allowance'] },
        { code: '04.6', title: 'Allowance History', leaves: ['Deposits', 'Failed deposits', 'Reversed deposits', 'Transaction details'] }
      ]
    },
    {
      code: '05',
      title: 'Spending Controls',
      sub: [
        { code: '05.1', title: 'Control Overview', leaves: ['Spending mode', 'Monthly limit', 'Daily limit', 'Category restrictions'] },
        { code: '05.2', title: 'Spending Mode', leaves: ['Spend with Limits — auto-approved payments', 'Approve Every Payment — parent approval required'] },
        { code: '05.3', title: 'Spending Limits', leaves: ['Monthly limit', 'Daily limit', 'Per-transaction limit', 'Remaining limit'] },
        { code: '05.4', title: 'Merchant Restrictions', leaves: ['Restricted categories', 'Gaming', 'Adult / inappropriate categories', 'Gambling', 'Other restricted MCCs', 'Custom restrictions'] },
        { code: '05.5', title: 'Merchant Controls', leaves: ['Block merchant', 'Unblock merchant', 'Approved merchants', 'Restricted merchants'] },
        { code: '05.6', title: 'Control Confirmation', leaves: ['Review changes', 'Parent PIN', 'Changes successful'] }
      ]
    },
    {
      code: '06',
      title: 'Payments',
      sub: [
        { code: '06.1', title: 'Parent Payment', leaves: ['Pay merchant', 'Scan QR', 'Enter amount', 'Select funding source', 'Review payment', 'Authenticate', 'Payment processing', 'Payment successful', 'Payment failed'] },
        { code: '06.2', title: 'Child Payment', leaves: ['Child payment activity', 'Auto-approved payment', 'Payment requiring approval', 'Payment blocked', 'Payment declined'] },
        { code: '06.3', title: 'Payment Approval', leaves: ['Pending requests', 'Request details — merchant / amount / child / date-time / reason', 'Approve', 'Decline'] },
        { code: '06.4', title: 'Approval Confirmation', leaves: ['Parent authentication', 'Payment approved', 'Payment declined'] },
        { code: '06.5', title: 'Payment Receipts', leaves: ['Receipt', 'Merchant information', 'Amount', 'Payment method', 'Child / parent', 'Share receipt'] }
      ]
    },
    {
      code: '07',
      title: 'QR / Scanner',
      sub: [
        { code: '07.1', title: 'Scanner Home', leaves: ['Open scanner', 'Camera permission'] },
        { code: '07.2', title: 'Scan QR', leaves: ['Valid QR', 'Invalid QR', 'Expired QR', 'Unsupported QR'] },
        { code: '07.3', title: 'Merchant Detection', leaves: ['Merchant name', 'Merchant category', 'Merchant status', 'Restriction check'] },
        { code: '07.4', title: 'Payment Entry', leaves: ['Amount', 'Funding source', 'Payment purpose'] },
        { code: '07.5', title: 'Payment Validation', leaves: ['Balance check', 'Limit check', 'Merchant restriction check', 'Authentication'] },
        { code: '07.6', title: 'Result', leaves: ['Payment successful', 'Payment failed', 'Payment blocked', 'Payment requires approval'] }
      ]
    },
    {
      code: '08',
      title: 'Send Money / Transfers',
      sub: [
        { code: '08.1', title: 'Send Money', leaves: ['Select child', 'Enter amount', 'Add note', 'Review'] },
        { code: '08.2', title: 'Transfer Confirmation', leaves: ['Amount', 'Recipient', 'Funding source', 'Parent authentication', 'Confirm'] },
        { code: '08.3', title: 'Transfer Status', leaves: ['Processing', 'Successful', 'Failed'] },
        { code: '08.4', title: 'Transfer History', leaves: ['Sent', 'Received', 'Transfer details'] }
      ]
    },
    {
      code: '09',
      title: 'Transactions',
      sub: [
        { code: '09.1', title: 'Transaction Overview', leaves: ['All transactions', 'Parent transactions', 'Child transactions'] },
        { code: '09.2', title: 'Filters', leaves: ['Child', 'Date', 'Amount', 'Merchant', 'Category', 'Status'] },
        { code: '09.3', title: 'Transaction Status', leaves: ['Completed', 'Pending', 'Declined', 'Blocked', 'Failed', 'Reversed'] },
        { code: '09.4', title: 'Transaction Detail', leaves: ['Merchant', 'Amount', 'Date/time', 'Child', 'Category', 'Payment method', 'Status', 'Receipt'] },
        { code: '09.5', title: 'Spending Analytics', leaves: ['Daily', 'Weekly', 'Monthly', 'By child', 'By category'] }
      ]
    },
    {
      code: '10',
      title: 'Approvals & Requests',
      sub: [
        { code: '10.1', title: 'Approval Center', leaves: ['Pending', 'Approved', 'Declined'] },
        { code: '10.2', title: 'Child Requests', leaves: ['Payment request', 'Extra money request', 'Allowance request', 'Other request'] },
        { code: '10.3', title: 'Review Request', leaves: ['Child', 'Amount', 'Merchant', 'Category', 'Reason', 'Request time'] },
        { code: '10.4', title: 'Approve Request', leaves: ['Review', 'Parent authentication', 'Approval confirmation'] },
        { code: '10.5', title: 'Decline Request', leaves: ['Select reason', 'Optional message', 'Confirm decline', 'Notify child'] }
      ]
    },
    {
      code: '11',
      title: 'Notifications',
      sub: [
        { code: '11.1', title: 'Notification Center', leaves: ['All', 'Payments', 'Children', 'Allowance', 'Security', 'System'] },
        { code: '11.2', title: 'Payment Alerts', leaves: ['Payment completed', 'Payment declined', 'Payment blocked', 'Payment requires approval'] },
        { code: '11.3', title: 'Spending Alerts', leaves: ['Large transaction', 'Limit approaching', 'Low balance', 'Restricted merchant attempt'] },
        { code: '11.4', title: 'Allowance Alerts', leaves: ['Allowance deposited', 'Allowance failed', 'Allowance schedule changed'] },
        { code: '11.5', title: 'Security Alerts', leaves: ['New device', 'Login', 'PIN changed', 'Suspicious activity'] }
      ]
    },
    {
      code: '12',
      title: 'Funding & Payment Methods',
      sub: [
        { code: '12.1', title: 'Funding Sources', leaves: ['Linked bank accounts', 'Cards', 'Other supported sources'] },
        { code: '12.2', title: 'Add Funding Source', leaves: ['Select type', 'Enter details', 'Verification', 'Confirmation'] },
        { code: '12.3', title: 'Manage Funding Source', leaves: ['Set default', 'Edit', 'Remove', 'Verification status'] },
        { code: '12.4', title: 'Funding History', leaves: ['Deposits', 'Withdrawals', 'Failed transactions'] }
      ]
    },
    {
      code: '13',
      title: 'Parent Profile',
      sub: [
        { code: '13.1', title: 'Personal Information', leaves: ['Name', 'Mobile', 'Email', 'Personal details'] },
        { code: '13.2', title: 'Verification', leaves: ['Verification status', 'Verified information', 'Update / reverify'] },
        { code: '13.3', title: 'Profile Photo', leaves: ['Add', 'Change', 'Remove'] }
      ]
    },
    {
      code: '14',
      title: 'Security & Privacy',
      sub: [
        { code: '14.1', title: 'App PIN', leaves: ['Change PIN', 'Forgot PIN', 'Reset PIN'] },
        { code: '14.2', title: 'Biometrics', leaves: ['Enable', 'Disable'] },
        { code: '14.3', title: 'Login Security', leaves: ['Active sessions', 'Trusted devices', 'Sign out device'] },
        { code: '14.4', title: 'Privacy', leaves: ['Data permissions', 'Privacy settings', 'Data usage'] },
        { code: '14.5', title: 'Security Alerts', leaves: ['Suspicious activity', 'New device', 'Security confirmation'] }
      ]
    },
    {
      code: '15',
      title: 'Settings',
      sub: [
        { code: '15.1', title: 'General', leaves: ['Language', 'Currency', 'App preferences'] },
        { code: '15.2', title: 'Notifications', leaves: ['Push notifications', 'Payment alerts', 'Child alerts', 'Security alerts'] },
        { code: '15.3', title: 'Payment Settings', leaves: ['Default funding source', 'Payment authentication'] },
        { code: '15.4', title: 'Account Settings', leaves: ['Account information', 'Deactivate account', 'Delete account'] }
      ]
    },
    {
      code: '16',
      title: 'Help & Support',
      sub: [
        { code: '16.1', title: 'Help Center', leaves: ['Getting started', 'Children', 'Allowance', 'Payments', 'QR payments', 'Security'] },
        { code: '16.2', title: 'FAQs', leaves: ['How child payments work', 'How allowance works', 'How approvals work', 'How restrictions work'] },
        { code: '16.3', title: 'Contact Support', leaves: ['Create support request', 'Chat / communication', 'Support status'] },
        { code: '16.4', title: 'Report Problem', leaves: ['Payment issue', 'Child account issue', 'Security issue', 'Technical issue'] }
      ]
    },
    {
      code: '17',
      title: 'Account Exit',
      sub: [
        { code: '17.1', title: 'Logout', leaves: ['Logout confirmation', 'Logged out'] },
        { code: '17.2', title: 'Session Expired', leaves: ['Login again'] },
        { code: '17.3', title: 'Account Deactivation', leaves: ['Warning', 'Confirmation', 'Deactivation status'] }
      ]
    }
  ],

  childApp: [
    { code: 'C01', title: 'Child Welcome & Onboarding', sub: [{ code: 'C01.1', title: 'Invite Activation', leaves: ['Enter invite code', 'Create Child PIN', 'Face ID'] }] },
    { code: 'C02', title: 'Child Home', sub: [{ code: 'C02.1', title: 'Balance & Spending Power', leaves: ['Available balance', 'Spendable today', 'Allowance meter', 'Scan button'] }] },
    { code: 'C03', title: 'Child Wallet', sub: [{ code: 'C03.1', title: 'Digital Card & Allocations', leaves: ['Virtual Card details', 'Weekly savings', 'Spend breakdown'] }] },
    { code: 'C04', title: 'Spending Limits (Read-Only)', sub: [{ code: 'C04.1', title: 'Active Guardrails', leaves: ['Daily limit bar', 'Monthly limit bar', 'Blocked categories view'] }] },
    { code: 'C05', title: 'Allowance Tracker', sub: [{ code: 'C05.1', title: 'Deposit Schedule', leaves: ['Next deposit countdown', 'Allowance history', 'Earn extra chores'] }] },
    { code: 'C06', title: 'Scan QR & Pay', sub: [{ code: 'C06.1', title: 'QR Camera Scanner', leaves: ['Scan merchant QR', 'Enter amount', 'Add note'] }] },
    { code: 'C07', title: 'Payment Validation Engine', sub: [{ code: 'C07.1', title: 'Rule Verification', leaves: ['Limit check', 'Category rule check', 'Auto-approve vs Request'] }] },
    { code: 'C08', title: 'Request Approval / Ask Money', sub: [{ code: 'C08.1', title: 'Parent Request Flow', leaves: ['Select reason', 'Add item note', 'Send prompt to Parent'] }] },
    { code: 'C09', title: 'Payment Result & Receipt', sub: [{ code: 'C09.1', title: 'Receipt Hub', leaves: ['Success checkmark', 'Blocked reason explanation', 'Download receipt'] }] },
    { code: 'C10', title: 'Child Activity Feed', sub: [{ code: 'C10.1', title: 'History & Tags', leaves: ['School spends', 'Cafeteria snacks', 'Allowance received'] }] },
    { code: 'C11', title: 'Child Notifications', sub: [{ code: 'C11.1', title: 'Alerts', leaves: ['Parent approved payment', 'Weekly allowance arrived'] }] },
    { code: 'C12', title: 'Security & Passcode', sub: [{ code: 'C12.1', title: 'PIN Management', leaves: ['Change 4-digit PIN', 'Biometric toggle'] }] },
    { code: 'C13', title: 'Child Profile', sub: [{ code: 'C13.1', title: 'Avatar & Identity', leaves: ['Choose avatar', 'Theme preference', 'Parent contact'] }] },
    { code: 'C14', title: 'Child Help & Learning', sub: [{ code: 'C14.1', title: 'Financial Literacy', leaves: ['Smart saving tips', 'How allowance works', 'Ask Parent'] }] }
  ]
};
