# Banking App

This is a full-stack banking application built with a Spring Boot backend and a React frontend. The app supports basic banking functionalities such as creating accounts, depositing and withdrawing funds, viewing account details, and transferring money between accounts.

## Backend

The backend is a Spring Boot application with a MySQL database. It handles user authentication, account management, and transactions.

### Setup

1. **Install Java 11** if not already installed.

2. **Install MySQL** and create a database:

    ```sql
    CREATE DATABASE banking_app;
    ```

3. **Configure MySQL** credentials in `backend/src/main/resources/application.properties`:

    ```properties
    spring.datasource.url=jdbc:mysql://localhost:3306/banking_app
    spring.datasource.username=root
    spring.datasource.password=yourpassword
    spring.jpa.hibernate.ddl-auto=update
    spring.jpa.show-sql=true
    ```

4. **Run the application**:

    ```bash
    cd backend
    mvn spring-boot:run
    ```

## Frontend

The frontend is a React application that interacts with the backend to display account information, transaction history, and support fund transfers.

### Setup

1. **Install Node.js and npm** if not already installed.

2. **Install dependencies**:

    ```bash
    cd frontend
    npm install
    ```

3. **Run the application**:

    ```bash
    npm start
    ```

## API Endpoints

### Accounts

- `GET /api/accounts/{id}`: Get account details by ID.
- `POST /api/accounts`: Create a new account.
- `POST /api/accounts/{id}/deposit`: Deposit funds into an account.
- `POST /api/accounts/{id}/withdraw`: Withdraw funds from an account.

## Components

### Navbar

- Provides navigation links to the Dashboard, Transactions, and Transfer pages.

### Dashboard

- Displays a summary of the user's accounts and recent transactions.

### AccountDetails

- Shows detailed information about a specific account, including balance and account number.

### TransactionHistory

- Lists all transactions for the user's accounts.

### Transfer

- Allows the user to transfer funds between accounts.
