# chainpay-wallet
A secure, modern payment wallet integrating Stripe, PayPal, and blockchain technology. ChainPay supports fiat and cryptocurrency payments, bank transfers, tokenized transactions, and an innovative rewards system. Open-source and built for future-ready platforms

Key Features
Multi-Payment Gateway Support:

Integrates Stripe for fiat payments.
Integrates PayPal for fiat transactions.
Cryptocurrency Payments:

Accepts Bitcoin, Ethereum, and other cryptocurrencies.
Supports direct blockchain transactions via smart contracts.
Wallet Functionality:

Deposit Funds: Users can add funds from their bank accounts.
Withdraw Funds: Users can send wallet balances directly to their bank accounts.
Manage deposits, rewards, and withdrawals securely.
Tokenized transactions for increased transparency and traceability.
Fee Management:

Deducts platform fees automatically for both users and hosts.
Rewards System:

Users earn redeemable rewards for receiving 4-star reviews or higher.
Real-Time Insights:

Hosts can track property performance, benchmarks, and revenue.
Enhanced Security:

Encrypted storage of private keys.
Two-factor authentication (2FA).
Multi-signature wallet support.
Social Login and User Profiles:

Login with Google, Facebook, Apple, or phone number.
User preferences synchronized across devices via Firebase.
Bank Integration:

Seamless integration to link and verify user bank accounts.
Users can:
Add Funds: Transfer money from a linked bank account to the ChainPay wallet.
Send Funds: Transfer money from the ChainPay wallet directly to their bank account.

Tech Stack
Frontend
React Native: Cross-platform mobile app development.
React Navigation: User-friendly navigation between screens.
@react-native-firebase/auth: Firebase authentication for social logins.
Backend
Node.js: Server-side JavaScript runtime.
Express.js: Backend framework for APIs.
Stripe API: Handles fiat payments and bank transfers.
PayPal REST SDK: Processes PayPal payments.
Plaid API: Manages bank account linking and verification.
Web3.js/Ethers.js: Interacts with blockchain networks for cryptocurrency transactions.
Database
Firebase Realtime Database: Synchronizes user preferences, locations, and search history.
Blockchain
Ethereum (via Infura): Processes smart contracts and tokenized transactions.
Bitcoin (via Coinbase Commerce): Handles Bitcoin payments.
Security
HTTPS: Encrypts all communication using SSL/TLS.
2FA: Protects user accounts with multi-factor authentication.
AWS KMS (Key Management Service): Manages and encrypts sensitive keys.
Hosting
AWS or Heroku: Hosts the backend services.
GitHub: Version control and collaboration for the open-source project
