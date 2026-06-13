ERP Management System
Full-stack ERP (Enterprise Resource Planning) management system built with Spring Boot 3.2.0 (Java 17) and vanilla HTML/CSS/JavaScript.

Features
User registration and login with role-based access (Admin, Manager, Employee)
Product management (CRUD operations)
Supplier management
Inventory tracking with low-stock alerts
Transaction logging
Tech Stack
Backend: Spring Boot 3.2.0, Spring Data JPA, MySQL, Lombok
Frontend: HTML, CSS, JavaScript (no framework)
Build: Maven
Getting Started
Set up a MySQL database and run database.sql
Configure src/main/resources/application.properties with your DB credentials
Run mvn spring-boot:run or execute start.bat
Access the app at http://localhost:8080
Project Structure
src/main/java/com/erp/management/
  ├── controller/   # REST API controllers
  ├── service/      # Business logic
  ├── repository/   # JPA repositories
  └── entity/       # JPA entities
frontend/           # Frontend HTML/CSS/JS
