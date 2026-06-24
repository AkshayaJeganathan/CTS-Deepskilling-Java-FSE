# Week 3 – Module 6 – Spring REST using Spring Boot 3

## Hands On 1 – Create a Spring Web Project using Maven

### Objective

Create a Spring Boot web application using Maven and understand the project structure.

### Technologies Used

* Java 21
* Spring Boot 3
* Maven
* Eclipse IDE

### Project Structure

* `src/main/java` – Application source code
* `src/main/resources` – Configuration files
* `src/test/java` – Test classes
* `pom.xml` – Maven configuration

### Implementation

1. Created Spring Boot project named **spring-learn**.
2. Added dependencies:

   * Spring Web
   * Spring Boot DevTools
3. Built the project using Maven.
4. Executed `SpringLearnApplication.java`.
5. Verified application startup logs.

### Output

Spring Boot application started successfully on the configured port.

---

## Hands On 4 – Spring Core: Load Country from Spring Configuration XML

### Objective

Load country information from Spring XML configuration and display the details using Spring Core.

### Country Details

| Code | Name  |
| ---- | ----- |
| IN   | India |

### Files Created

#### Country.java

Contains:

* code
* name
* Constructors
* Getters and Setters
* toString()

#### country.xml

```xml
<bean id="country" class="com.cognizant.springlearn.Country">
    <property name="code" value="IN"/>
    <property name="name" value="India"/>
</bean>
```

#### SpringLearnApplication.java

* Loads `country.xml`
* Retrieves the bean using `ApplicationContext`
* Displays country details in logs

### Implementation Steps

1. Created `Country` class.
2. Added debug logs in constructor, getters, and setters.
3. Created `country.xml` under `src/main/resources`.
4. Configured Country bean.
5. Loaded XML using `ClassPathXmlApplicationContext`.
6. Retrieved Country bean using `getBean()`.
7. Displayed country details in logs.

### Output

```text
Country : Country [code=IN, name=India]
```

### Concepts Learned

* Spring Core
* Bean Configuration
* Dependency Injection
* ApplicationContext
* ClassPathXmlApplicationContext
* Maven Project Structure
* Spring Boot Application Setup

### Repository

CTS-Deepskilling-Java-FSE

Path:
Week 3 → Module-6-Spring REST using Spring Boot 3 → spring-learn

