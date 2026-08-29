-- ============================================================================
-- ALPH PAY · PostgreSQL Production Database Schema
-- SAMA Compliant · Parent (Control Layer) & Child (Spending Layer)
-- ============================================================================

-- Create Enums
CREATE TYPE user_role AS ENUM ('PARENT', 'CHILD', 'ADMIN');
CREATE TYPE kyc_status AS ENUM ('UNVERIFIED', 'PENDING', 'VERIFIED_LEVEL_1', 'VERIFIED_LEVEL_2', 'VERIFIED_LEVEL_3');
CREATE TYPE allowance_frequency AS ENUM ('DAILY', 'WEEKLY', 'MONTHLY');
CREATE TYPE spending_mode AS ENUM ('LIMITS_AUTO_APPROVE', 'APPROVE_EVERY_PAYMENT');
CREATE TYPE transaction_status AS ENUM ('PENDING', 'COMPLETED', 'DECLINED', 'BLOCKED', 'REVERSED');
CREATE TYPE request_status AS ENUM ('PENDING', 'APPROVED', 'DECLINED', 'EXPIRED');
CREATE TYPE payment_method_type AS ENUM ('BANK_ACCOUNT', 'DEBIT_CARD', 'MADA', 'APPLE_PAY');

-- 1. Users Table (Parents & Children)
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    national_id VARCHAR(20) UNIQUE,
    full_name VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE,
    phone_number VARCHAR(20) NOT NULL UNIQUE,
    password_hash VARCHAR(255),
    app_pin_hash VARCHAR(255) NOT NULL,
    biometrics_enabled BOOLEAN DEFAULT TRUE,
    role user_role NOT NULL DEFAULT 'PARENT',
    kyc_status kyc_status NOT NULL DEFAULT 'UNVERIFIED',
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 2. Parent-Child Relationship Table
CREATE TABLE parent_child_relationships (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    parent_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    child_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    relationship_type VARCHAR(50) DEFAULT 'Son',
    invitation_code VARCHAR(20),
    invitation_accepted_at TIMESTAMP WITH TIME ZONE,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT unique_parent_child UNIQUE (parent_id, child_id)
);

-- 3. Wallets Table (One per Parent and Child)
CREATE TABLE wallets (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL UNIQUE REFERENCES users(id) ON DELETE CASCADE,
    currency VARCHAR(3) DEFAULT 'SAR',
    balance NUMERIC(12, 2) NOT NULL DEFAULT 0.00,
    allocated_balance NUMERIC(12, 2) NOT NULL DEFAULT 0.00,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 4. Allowance Schedules (04 Allowance Management)
CREATE TABLE allowance_schedules (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    parent_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    child_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    amount NUMERIC(10, 2) NOT NULL,
    frequency allowance_frequency NOT NULL DEFAULT 'WEEKLY',
    next_deposit_date DATE NOT NULL,
    is_paused BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 5. Spending Policies & Controls (05 Spending Controls)
CREATE TABLE spending_policies (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    child_id UUID NOT NULL UNIQUE REFERENCES users(id) ON DELETE CASCADE,
    parent_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    spending_mode spending_mode NOT NULL DEFAULT 'LIMITS_AUTO_APPROVE',
    daily_limit NUMERIC(10, 2) NOT NULL DEFAULT 50.00,
    daily_tx_count_limit INT NOT NULL DEFAULT 3,
    monthly_limit NUMERIC(10, 2) NOT NULL DEFAULT 400.00,
    per_transaction_limit NUMERIC(10, 2) NOT NULL DEFAULT 30.00,
    allowed_categories TEXT[] DEFAULT ARRAY['Education & Books', 'Food & Drinks', 'Shopping', 'Transport', 'Entertainment'],
    blocked_categories TEXT[] DEFAULT ARRAY['Gaming', 'Gambling', 'Adult Content'],
    blocked_merchants TEXT[] DEFAULT ARRAY['Roblox Corp', 'Steam Games'],
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 6. Transactions Ledger (09 Transactions)
CREATE TABLE transactions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    wallet_id UUID NOT NULL REFERENCES wallets(id) ON DELETE RESTRICT,
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE RESTRICT,
    merchant_name VARCHAR(150) NOT NULL,
    merchant_mcc VARCHAR(10),
    category VARCHAR(100) NOT NULL,
    amount NUMERIC(10, 2) NOT NULL,
    currency VARCHAR(3) DEFAULT 'SAR',
    status transaction_status NOT NULL DEFAULT 'COMPLETED',
    failure_reason VARCHAR(255),
    sama_auth_reference VARCHAR(100),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 7. Payment Approvals & Requests (10 Approvals & Requests with OTP)
CREATE TABLE approval_requests (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    child_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    parent_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    merchant_name VARCHAR(150) NOT NULL,
    category VARCHAR(100) NOT NULL,
    amount NUMERIC(10, 2) NOT NULL,
    currency VARCHAR(3) DEFAULT 'SAR',
    child_note TEXT,
    parent_decline_reason TEXT,
    otp_code_hash VARCHAR(255),
    otp_verified_at TIMESTAMP WITH TIME ZONE,
    status request_status NOT NULL DEFAULT 'PENDING',
    expires_at TIMESTAMP WITH TIME ZONE NOT NULL,
    reviewed_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 8. Child Savings Goals (03 & C03 Savings Tracker)
CREATE TABLE savings_goals (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    child_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    goal_name VARCHAR(100) NOT NULL,
    target_amount NUMERIC(10, 2) NOT NULL,
    saved_amount NUMERIC(10, 2) NOT NULL DEFAULT 0.00,
    is_completed BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 9. Parent Appreciations & Rewards (Praise System)
CREATE TABLE parent_appreciations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    parent_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    child_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    message VARCHAR(255) NOT NULL,
    reward_amount NUMERIC(10, 2) DEFAULT 0.00,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 10. Notifications Table (11 Notifications)
CREATE TABLE notifications (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    title VARCHAR(150) NOT NULL,
    message TEXT NOT NULL,
    category VARCHAR(50) NOT NULL, -- 'PAYMENT', 'SPENDING_ALERT', 'ALLOWANCE', 'SECURITY', 'APPRECIATION'
    is_read BOOLEAN DEFAULT FALSE,
    metadata JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Indexes for high performance fintech queries
CREATE INDEX idx_users_phone ON users(phone_number);
CREATE INDEX idx_transactions_wallet ON transactions(wallet_id);
CREATE INDEX idx_transactions_created ON transactions(created_at DESC);
CREATE INDEX idx_approval_requests_parent ON approval_requests(parent_id, status);
CREATE INDEX idx_savings_goals_child ON savings_goals(child_id);
CREATE INDEX idx_notifications_user ON notifications(user_id, is_read);
