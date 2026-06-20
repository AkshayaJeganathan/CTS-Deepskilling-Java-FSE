# Exercise 2 - Implementing the Factory Method Pattern

## Objective

Implement the Factory Method Design Pattern to create different types of documents without exposing object creation logic to the client.

## Scenario

A document management system needs to support multiple document types such as Word, PDF, and Excel. The Factory Method Pattern is used to create the appropriate document object dynamically.

## Design Pattern Used

**Factory Method Pattern**

Category: **Creational Design Pattern**

## Implementation Details

The solution consists of:

### Document Interface

Defines a common operation for all document types.

### Concrete Document Classes

* WordDocument
* PdfDocument
* ExcelDocument

Each class implements the Document interface and provides its own implementation of the open() method.

### Abstract Factory Class

* DocumentFactory

Declares the abstract method createDocument().

### Concrete Factory Classes

* WordDocumentFactory
* PdfDocumentFactory
* ExcelDocumentFactory

Each factory creates and returns its corresponding document object.

### Test Class

* FactoryMethodTest

Demonstrates the creation of different document types using factory objects.

## Features

* Encapsulates object creation logic.
* Promotes loose coupling between client code and concrete classes.
* Improves maintainability and scalability.
* Supports the Open/Closed Principle.

## Learning Outcome

* Understand the Factory Method Design Pattern.
* Learn how to separate object creation from business logic.
* Improve code flexibility and maintainability.
* Apply creational design patterns in Java applications.

## Sample Output

Word Document Opened

PDF Document Opened

Excel Document Opened

## Conclusion

The Factory Method Pattern provides a structured and flexible way to create objects while keeping client code independent of concrete implementations, making the system easier to extend and maintain.
