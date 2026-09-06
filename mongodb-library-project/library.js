// ==========================================
// MongoDB Library Management Project
// ==========================================

// Select/Create Database
db = db.getSiblingDB("LibraryDB");

print("====================================");
print("   LIBRARY MANAGEMENT SYSTEM");
print("====================================");

// ==========================================
// 1. CREATE COLLECTIONS
// ==========================================

db.createCollection("books");
db.createCollection("authors");
db.createCollection("genres");

print("\nCollections created successfully.");

// ==========================================
// 2. INSERT AUTHORS
// ==========================================

db.authors.insertMany([
    {
        authorId: 1,
        name: "J.K. Rowling",
        country: "United Kingdom"
    },
    {
        authorId: 2,
        name: "George Orwell",
        country: "United Kingdom"
    },
    {
        authorId: 3,
        name: "R.K. Narayan",
        country: "India"
    }
]);

print("Authors inserted.");

// ==========================================
// 3. INSERT GENRES
// ==========================================

db.genres.insertMany([
    {
        genreId: 1,
        name: "Fantasy"
    },
    {
        genreId: 2,
        name: "Fiction"
    },
    {
        genreId: 3,
        name: "Classic"
    }
]);

print("Genres inserted.");

// ==========================================
// 4. INSERT BOOKS
// ==========================================

db.books.insertMany([
    {
        bookId: 1,
        title: "Harry Potter and the Philosopher's Stone",
        author: "J.K. Rowling",
        genre: "Fantasy",
        year: 1997,
        available: true
    },
    {
        bookId: 2,
        title: "1984",
        author: "George Orwell",
        genre: "Classic",
        year: 1949,
        available: true
    },
    {
        bookId: 3,
        title: "Animal Farm",
        author: "George Orwell",
        genre: "Fiction",
        year: 1945,
        available: false
    },
    {
        bookId: 4,
        title: "Malgudi Days",
        author: "R.K. Narayan",
        genre: "Fiction",
        year: 1943,
        available: true
    }
]);

print("Books inserted.");

// ==========================================
// 5. READ ALL BOOKS
// ==========================================

print("\n--- All Books ---");

db.books.find().forEach(book => printjson(book));

// ==========================================
// 6. SEARCH BOOKS
// ==========================================

print("\n--- Search Book by Title ---");

db.books.find({
    title: "1984"
}).forEach(book => printjson(book));


print("\n--- Search Books by Author ---");

db.books.find({
    author: "George Orwell"
}).forEach(book => printjson(book));


print("\n--- Search Books by Genre ---");

db.books.find({
    genre: "Fiction"
}).forEach(book => printjson(book));


print("\n--- Search Books Published After 1950 ---");

db.books.find({
    year: {
        $gt: 1950
    }
}).forEach(book => printjson(book));


print("\n--- Search Available Books ---");

db.books.find({
    available: true
}).forEach(book => printjson(book));


print("\n--- Search Books Between 1940 and 1960 ---");

db.books.find({
    year: {
        $gte: 1940,
        $lte: 1960
    }
}).forEach(book => printjson(book));


print("\n--- Search Book Using Title Keyword ---");

db.books.find({
    title: {
        $regex: "Harry",
        $options: "i"
    }
}).forEach(book => printjson(book));

// ==========================================
// 7. SEARCH AUTHORS
// ==========================================

print("\n--- Search Authors from India ---");

db.authors.find({
    country: "India"
}).forEach(author => printjson(author));


print("\n--- Search Author by Name ---");

db.authors.find({
    name: {
        $regex: "George",
        $options: "i"
    }
}).forEach(author => printjson(author));

// ==========================================
// 8. UPDATE OPERATION
// ==========================================

print("\n--- Updating Animal Farm Availability ---");

db.books.updateOne(
    {
        title: "Animal Farm"
    },
    {
        $set: {
            available: true
        }
    }
);

print("Animal Farm availability updated.");

// ==========================================
// 9. DELETE OPERATION
// ==========================================

print("\n--- Delete Operation ---");

db.books.deleteOne({
    title: "Malgudi Days"
});

print("Malgudi Days deleted.");

// ==========================================
// 10. FINAL BOOK LIST
// ==========================================

print("\n--- Final Book List ---");

db.books.find().forEach(book => printjson(book));

print("\n====================================");
print("       PROJECT COMPLETED");
print("====================================");