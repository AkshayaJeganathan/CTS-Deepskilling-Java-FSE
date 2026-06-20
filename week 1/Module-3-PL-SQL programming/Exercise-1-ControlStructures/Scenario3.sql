BEGIN
    FOR loan_rec IN (
        SELECT CustomerName, DueDate
        FROM Loans
        WHERE DueDate BETWEEN SYSDATE AND SYSDATE + 30
    )
    LOOP
        DBMS_OUTPUT.PUT_LINE(
            'Reminder: Loan due for '
            || loan_rec.CustomerName
            || ' on '
            || loan_rec.DueDate
        );
    END LOOP;
END;
/