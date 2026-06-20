DECLARE
BEGIN
    FOR customer_rec IN (
        SELECT CustomerID, Age
        FROM Customers
        WHERE Age > 60
    )
    LOOP
        UPDATE Loans
        SET InterestRate = InterestRate - 1
        WHERE CustomerID = customer_rec.CustomerID;

    END LOOP;

    COMMIT;
END;
/