# Exercise 2 - Factory Method Pattern

## Objective

Implement the Factory Method Design Pattern in Java to create different types of document objects without exposing object creation logic to the client.

## Problem Statement

Develop a document management system that supports multiple document types such as Word, PDF, and Excel. The application should use the Factory Method Pattern to create document objects dynamically based on user requirements.

## Design Pattern Used

Factory Method Pattern

Category: Creational Design Pattern

## Implementation Details

The solution consists of:

* Document interface
* WordDocument class
* PdfDocument class
* ExcelDocument class
* DocumentFactory class
* FactoryMethodDemo class

The factory is responsible for creating the required document object while the client interacts only with the Document interface.

## Advantages

* Reduces tight coupling between client code and concrete classes.
* Improves maintainability.
* Makes the application easy to extend.
* Supports the Open/Closed Principle.

## Learning Outcome

* Understand the Factory Method Pattern.
* Learn how object creation can be delegated to a factory.
* Improve code flexibility and scalability.
* Apply creational design patterns in Java applications.

## Sample Output

Word document is opened.

PDF document is opened.

Excel document is opened.
