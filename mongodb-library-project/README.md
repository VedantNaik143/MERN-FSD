\# MongoDB Library Management Project



\## Objective



This project demonstrates MongoDB and NoSQL concepts using a simple Library Management System.



\## Technologies Used



\- MongoDB

\- MongoDB Shell (mongosh)

\- MongoDB Compass



\## Database



Database Name:



LibraryDB



\## Collections



The database contains three collections:



1\. books

2\. authors

3\. genres



\## Data Model



MongoDB stores data as flexible JSON-like documents.



Example book document:



{

&#x20;   "title": "1984",

&#x20;   "author": "George Orwell",

&#x20;   "genre": "Classic",

&#x20;   "year": 1949,

&#x20;   "available": true

}



\## CRUD Operations



\### Create



Books, authors and genres are inserted using:



insertMany()



\### Read



Data is retrieved using:



find()



\### Update



Book availability is changed using:



updateOne()



\### Delete



A book is removed using:



deleteOne()



\## Search Operations



The project demonstrates searching:



\- Books by title

\- Books by author

\- Books by genre

\- Books by publication year

\- Available books

\- Books within a year range

\- Books using keywords

\- Authors by country

\- Authors using keywords



\## Importance of NoSQL



NoSQL databases are useful in modern applications because they provide flexible data structures, scalability and efficient handling of large and changing datasets. MongoDB stores information in document format, making it suitable for applications where data structures may change over time.



\## Conclusion



This project provided practical understanding of MongoDB installation, database creation, document-based data modelling, CRUD operations and search queries. It also demonstrated why NoSQL databases such as MongoDB are useful for modern applications.

