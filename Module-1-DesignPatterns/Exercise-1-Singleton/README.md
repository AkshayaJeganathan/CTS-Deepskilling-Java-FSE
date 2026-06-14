# Exercise 1 - Implementing the Singleton Pattern

## Objective

Implement the Singleton Design Pattern to ensure that only one instance of a Logger class exists throughout the application lifecycle.

## Scenario

A logging utility is required for an application. To maintain consistent logging and avoid creating multiple logger objects, the Logger class is implemented using the Singleton Design Pattern.

## Design Pattern Used

**Singleton Pattern**

Category: **Creational Design Pattern**

## Implementation Details

The solution consists of:

### Logger Class

* Contains a private static instance of itself.
* Uses a private constructor to prevent external object creation.
* Provides a public static method `getInstance()` to access the single instance.
* Includes a logging method to display log messages.

### LoggerTest Class

* Retrieves the Logger instance multiple times.
* Verifies that the same object is returned every time.
* Demonstrates logging functionality.

## Features

* Ensures a single instance of Logger.
* Provides global access to the Logger object.
* Prevents duplicate object creation.
* Improves resource management and consistency.

## Learning Outcome

* Understand the Singleton Design Pattern.
* Learn how to control object creation in Java.
* Understand the role of static variables and methods.
* Apply creational design patterns in real-world applications.

## Sample Output

Logger Instance Created

LOG: Application Started

LOG: User Logged In

Same Instance: true

## Conclusion

The Singleton Pattern ensures that only one Logger object exists and is shared across the application, providing consistent and centralized logging functionality.
