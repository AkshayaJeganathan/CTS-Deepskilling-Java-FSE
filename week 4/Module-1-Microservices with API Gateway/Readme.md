# Week 4 - Module 1: Microservices with API Gateway

## Overview

This module demonstrates the implementation of two independent Spring Boot Microservices for a banking application.

The application is divided into two separate REST services:

- Account Microservice
- Loan Microservice

Each microservice is developed as an independent Spring Boot Maven project with its own REST API and runs on a different server port.

---

# Hands On 2 - Creating Microservices for Account and Loan

## Objective

Create two independent Spring Boot RESTful Web Services for a banking system.

- Account Microservice
- Loan Microservice

Each service runs independently and exposes its own REST endpoint.

---

## Technologies Used

- Java 21
- Spring Boot 4
- Spring Web
- Spring Boot DevTools
- Maven
- Eclipse IDE

---

# Account Microservice

## Project Name

account

## Server Port

8081

## REST Endpoint

GET /accounts/{number}

### Sample Request

http://localhost:8081/accounts/00987987973432

### Sample Response

```json
{
  "number": "00987987973432",
  "type": "savings",
  "balance": 234343
}
```

## Implementation

- Created Account Spring Boot Project
- Created Account Model
- Created AccountController
- Implemented REST API using @GetMapping
- Returned dummy account details without database connectivity

---

# Loan Microservice

## Project Name

loan

## Server Port

8083

## REST Endpoint

GET /loans/{number}

### Sample Request

http://localhost:8083/loans/H00987987972342

### Sample Response

```json
{
  "number": "H00987987972342",
  "type": "car",
  "loan": 400000,
  "emi": 3258,
  "tenure": 18
}
```

## Implementation

- Created Loan Spring Boot Project
- Created Loan Model
- Created LoanController
- Implemented REST API using @GetMapping
- Returned dummy loan details without database connectivity

---

# Features Implemented

- Independent Spring Boot Projects
- RESTful Web Services
- Spring Web
- GET Mapping
- Path Variables
- JSON Response
- Separate Server Ports
- Maven Project Structure
- Embedded Tomcat Server

---

# Project Structure

```
Module-1-Microservices with API Gateway

│
├── account
│   ├── src
│   ├── pom.xml
│   └── application.properties
│
├── loan
│   ├── src
│   ├── pom.xml
│   └── application.properties
│
├── screenshots
│   ├── account-output.png
│   ├── loan-output.png
│   ├── account-console.png
│   └── loan-console.png
│
└── README.md
```

---

# Project Execution

### Account Microservice

1. Import project into Eclipse.
2. Update Maven Project.
3. Run AccountApplication.java.
4. Verify Tomcat starts on Port 8081.
5. Open

http://localhost:8081/accounts/00987987973432

---

### Loan Microservice

1. Import project into Eclipse.
2. Update Maven Project.
3. Configure server.port=8083.
4. Run LoanApplication.java.
5. Verify Tomcat starts on Port 8083.
6. Open

http://localhost:8083/loans/H00987987972342

---

# Screenshots

Execution screenshots are available in the screenshots folder.

- account-output.png
- loan-output.png
- account-console.png
- loan-console.png

---

# Concepts Covered

- Microservices Architecture
- Spring Boot
- RESTful Web Services
- Spring Web
- Controller Layer
- Model Classes
- @RestController
- @GetMapping
- @PathVariable
- JSON Response
- Embedded Tomcat
- Maven
- Independent Deployment
- Different Server Ports

---

# Author

Akshaya Jeganathan

CTS Deep Skilling Java FSE
Week 4 - Module 1
Microservices with API Gateway
