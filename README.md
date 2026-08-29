# ALPH PAY · Enterprise Production & Technology Architecture
**Parent = Control Layer · Child = Spending Layer · Saudi Family Fintech**

This repository contains the complete production-grade system architecture and interactive dual-app platform for **ALPH PAY**.

---

## 🏗️ 1. Complete Technology Stack Matrix

| Tier | Technology | Purpose & Rationale |
| :--- | :--- | :--- |
| **Mobile Frontend** | **React Native + TypeScript** | Cross-platform (iOS/Android) unified codebase, native haptic feedback, biometric authentication (Face ID/Touch ID/Android Keystore). |
| **State Management** | **Zustand** | Lightweight, predictable reactive state store between role contexts. |
| **Design System** | **Figma Tokens + Plus Jakarta Sans** | Dual-accent palette (Indigo `#4338CA` Parent, Teal `#0D9488` Child), WCAG AAA accessibility. |
| **Backend API** | **Node.js + NestJS (TypeScript)** | Enterprise modular architecture with Dependency Injection and strict SAMA auditability. |
| **Policy Engine** | **Deterministic Rules Engine** | Evaluates active status, limits, category blocking, and strict approval rules *before* payment execution. |
| **AI Assistant** | **Contextual LLM Orchestration** | Plain-language financial explanations & budget tips (Non-authorizing guardrails). |
| **Database** | **PostgreSQL (v15+)** | Relational integrity for parent-child hierarchies, allowances, and immutable transaction ledgers. |
| **Cache & Real-Time**| **Redis + WebSockets / SSE** | Real-time push synchronization when child triggers approval-required transactions. |
| **Cloud Infrastructure**| **AWS (ECS, RDS, S3, CloudFront, WAF)** | Scalable, sovereign cloud deployment meeting regional data residency standards. |

---

## 🛡️ 2. The Core Deterministic Policy Engine Workflow

```
                        INCOMING CHILD PAYMENT
                                  │
                                  ▼
                     [ 1. Child Account Active? ] ──(No)──▶ [ BLOCKED: Account Inactive ]
                                  │ (Yes)
                                  ▼
                     [ 2. Balance Sufficient? ]   ──(No)──▶ [ BLOCKED: Insufficient Funds ]
                                  │ (Yes)
                                  ▼
                     [ 3. Category Restricted? ]  ──(Yes)─▶ [ BLOCKED: Policy Category Restrict ]
                                  │ (No)
                                  ▼
                     [ 4. Merchant Blocked? ]     ──(Yes)─▶ [ BLOCKED: Merchant Blacklisted ]
                                  │ (No)
                                  ▼
                     [ 5. Approve Every Payment? ]──(Yes)─▶ [ APPROVAL REQUIRED: Parent Prompt ]
                                  │ (No)
                                  ▼
                     [ 6. Exceeds Daily Limit? ]  ──(Yes)─▶ [ APPROVAL REQUIRED: Parent Prompt ]
                                  │ (No)
                                  ▼
                     [ 7. Exceeds Monthly Limit? ]──(Yes)─▶ [ APPROVAL REQUIRED: Parent Prompt ]
                                  │ (No)
                                  ▼
                       [ AUTO-APPROVED & SETTLED ]
```

---

## 📂 3. Repository Structure

```
CA1/
├── index.html                   # Interactive Dual-Device Web Simulator & IA Inspector
├── styles.css                   # Master Tokenized Design System (Indigo + Teal)
├── app.js                       # Reactive Cross-Device Engine & 12-Step CEO Tour
│
├── backend/                     # NestJS / TypeScript Modular API Layer
│   ├── schema.sql               # Production PostgreSQL Relational Schema
│   └── src/
│       └── modules/
│           ├── spending-policy/ # Deterministic Policy & Rules Engine
│           ├── ai-assistant/    # Contextual Explanation & Budget Advisor
│           └── payments/        # Payments & Transfers REST Controller
│
├── mobile/                      # React Native Mobile Architecture
│   └── src/
│       ├── theme/tokens.ts      # Design tokens (Typography, Spacing, Radii, Colors)
│       ├── navigation/          # Role-based Tab & Stack Routers (Parent vs Child)
│       └── store/useAppStore.ts # Zustand global mobile store
│
└── docs/
    └── SYSTEM_ARCHITECTURE.md   # Detailed Technical & Compliance Blueprint
```

---

## 🎯 4. Monday CEO Presentation Strategy

When presenting to the CEO:
1. **Open `http://localhost:8080` (or `index.html`)** in a browser.
2. Click **"▶ CEO Signature Demo"** on the top navigation bar.
3. Step through the 12-step guided story to demonstrate:
   - Clear distinction between **Parent Control Layer** and **Child Spending Layer**.
   - Live real-time cross-device notification when Sara exceeds her daily limit.
   - Dad reviewing contextual details (child, merchant, category, reason) and approving with PIN.
   - Sara receiving instant celebration checkmark & receipt.
4. Show the **31-Section Information Architecture sidebar** to prove every single user journey has been architected to production fintech standards.
