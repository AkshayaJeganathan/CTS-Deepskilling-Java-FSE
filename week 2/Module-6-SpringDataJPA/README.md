# Add a New Country using Spring Data JPA

## Objective

Implement a service to add a new country to the database using Spring Data JPA and verify the insertion.

---

## Steps

### 1. Create addCountry() Method in CountryService

```java
@Transactional
public void addCountry(Country country) {
    countryRepository.save(country);
}
```

---

### 2. Create findCountryByCode() Method in CountryService

```java
@Transactional
public Country findCountryByCode(String code) {
    return countryRepository.findById(code).orElse(null);
}
```

---

### 3. Modify OrmLearnApplication.java

Add the following test method:

```java
private static void testAddCountry() {

    LOGGER.info("Start");

    Country country = new Country();
    country.setCode("JP");
    country.setName("Japan");

    countryService.addCountry(country);

    Country addedCountry = countryService.findCountryByCode("JP");

    LOGGER.debug("country={}", addedCountry);

    LOGGER.info("End");
}
```

Invoke the method inside main():

```java
testAddCountry();
```

---

### 4. Repository Used

```java
@Repository
public interface CountryRepository extends JpaRepository<Country, String> {

}
```

Spring Data JPA provides the save() and findById() methods through JpaRepository.

---

## Output

Console Output:

```
Start
country=Country [code=JP, name=Japan]
End
```

---

## Verify in MySQL

Execute:

```sql
select * from country;
```

Output:

| co_code | co_name                  |
| ------- | ------------------------ |
| IN      | India                    |
| US      | United States of America |
| JP      | Japan                    |

---

## Files Modified

### CountryService.java

```java
@Transactional
public void addCountry(Country country) {
    countryRepository.save(country);
}

@Transactional
public Country findCountryByCode(String code) {
    return countryRepository.findById(code).orElse(null);
}
```

### OrmLearnApplication.java

Added:

```java
testAddCountry();
```

and

```java
private static void testAddCountry() {
    Country country = new Country();
    country.setCode("JP");
    country.setName("Japan");

    countryService.addCountry(country);

    Country addedCountry = countryService.findCountryByCode("JP");

    LOGGER.debug("country={}", addedCountry);
}
```

---

## Technologies Used

* Java 21
* Spring Boot 3.x
* Spring Data JPA
* Hibernate
* MySQL 8
* Maven

---

## Result

Successfully added a new country using Spring Data JPA and verified the insertion from the database.
