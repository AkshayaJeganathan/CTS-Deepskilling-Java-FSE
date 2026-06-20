DECLARE
BEGIN
    FOR customer_rec IN (
        SELECT CustomerID
        FROM Customers
        WHERE Balance > 10000
    )
    LOOP
        UPDATE Customers
        SET IsVIP = 'TRUE'
        WHERE CustomerID = customer_rec.CustomerID;

    END LOOP;

    COMMIT;
END;
/