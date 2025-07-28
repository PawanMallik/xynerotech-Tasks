# Apkadr.in – Doctor Appointment Booking CRUD API (PHP + MySQL)

This is a **simple REST API** built using **PHP + MySQL** for managing doctors on the Apkadr.in platform.  
It provides full **CRUD (Create, Read, Update, Delete)** functionality via API endpoints.

---

## 1. Setup Instructions

### Requirements
- XAMPP (or any server with PHP 7+ and MySQL)
- Postman (for testing)
- Browser (for quick checks)

### Installation
1. Copy the folder `apkadr-php-api` into: C:\xampp\htdocs\
2. Start **Apache** and **MySQL** from XAMPP.
3. Create the database and table using phpMyAdmin:

```sql
CREATE DATABASE IF NOT EXISTS apkadr;
USE apkadr;

CREATE TABLE IF NOT EXISTS doctors (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  specialization VARCHAR(100) NOT NULL,
  phone VARCHAR(20),
  email VARCHAR(100),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);```


### Test API by opening: "http://localhost/apkadr-php-api/doctors/read.php"
### API Endpoints: "http://localhost/apkadr-php-api/doctors/"

a) Create Doctor
Endpoint: POST create.php
Body (JSON):
{
  "name": "Dr. Arjun Mehta",
  "specialization": "Cardiologist",
  "phone": "9876543210",
  "email": "arjun@example.com"
}
