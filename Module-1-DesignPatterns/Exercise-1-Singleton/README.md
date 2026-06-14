# Exercise 1 - Singleton Pattern

## Objective

Implement the Singleton Design Pattern in Java to ensure that only one instance of a class is created and shared throughout the application.

## Description

In this exercise, a Logger class is implemented using the Singleton Pattern. The Logger class allows logging messages while ensuring that only a single Logger object exists.

## Design Pattern Category

**Creational Design Pattern**

## Features

* Private constructor to prevent object creation using the `new` keyword.
* Static instance variable to store the single object.
* Public static method to provide global access to the instance.
* Ensures only one object is created throughout the application.

## Implementation

The Logger class:

1. Creates a single static instance.
2. Restricts object creation through a private constructor.
3. Provides access to the instance using the `getLogger()` method.

## Output

Logger Instance Created

LOG: Application Started

LOG: User Logged In

Same Instance: true

## Learning Outcome

* Understand the Singleton Design Pattern.
* Learn how to control object creation.
* Understand the use of static variables and methods.
* Apply creational design patterns in Java applications.
