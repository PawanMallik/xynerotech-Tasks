# Apkadr.in – Doctor Appointment CRUD API

This project is a **single PHP file** that provides a **REST API** for managing doctors (Create, Read, Update, Delete) in the **Apkadr.in** doctor appointment system.  
It includes **database setup, API logic, and usage examples** in one file.

---

## Setup

1. Install **XAMPP** (or any PHP + MySQL server).
2. Save this file as: C:\xampp\htdocs\apkadr-api.php

3. Start **Apache** and **MySQL** in XAMPP.
4. Open Postman or browser: http://localhost/apkadr-api.php


---

## Database Setup

This script **automatically creates** the database and `doctors` table if they don’t exist:
- Database: `apkadr`
- Table: `doctors`

---

## API Usage

The API uses query parameters for actions:

| Method  | URL                                      | Description                |
|---------|-------------------------------------------|----------------------------|
| POST    | `apkadr-api.php?action=create`           | Add a new doctor           |
| GET     | `apkadr-api.php?action=read`             | Get all doctors            |
| GET     | `apkadr-api.php?action=read_single&id=1` | Get doctor by ID           |
| PUT     | `apkadr-api.php?action=update`           | Update doctor (JSON body)  |
| DELETE  | `apkadr-api.php?action=delete`           | Delete doctor (JSON body)  |

---

## Example Requests (Postman)

### Create Doctor (POST)
URL: http://localhost/apkadr-api.php?action=create

Body (raw JSON):
```json
{
  "name": "Dr. Arjun Mehta",
  "specialization": "Cardiologist",
  "phone": "9876543210",
  "email": "arjun@example.com"
}
```

## Get All Doctors (GET)
URL: http://localhost/apkadr-api.php?action=read

## Get Doctor by ID (GET)
URL: http://localhost/apkadr-api.php?action=read_single&id=1

## Update Doctor (PUT)
URL: http://localhost/apkadr-api.php?action=update

Body (raw JSON):
```json
  {
  "id": 1,
  "name": "Dr. Arjun Kumar",
  "specialization": "Neurologist",
  "phone": "9998887777",
  "email": "arjunk@example.com"
} 
```
## Delete Doctor (DELETE)
URL: http://localhost/apkadr-api.php?action=delete

Body (raw JSON):
```json
 {
  "id": 1
}
