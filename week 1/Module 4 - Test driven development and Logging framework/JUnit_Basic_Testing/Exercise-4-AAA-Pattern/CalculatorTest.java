import static org.junit.Assert.assertEquals;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

public class CalculatorTest {

    private Calculator calculator;

    @Before
    public void setUp() {

        calculator = new Calculator();

        System.out.println("Before Test Execution");
    }

    @Test
    public void testMultiplication() {

        // Arrange
        int value1 = 8;
        int value2 = 4;

        // Act
        int result = calculator.multiply(value1, value2);

        // Assert
        assertEquals(32, result);
    }

    @After
    public void tearDown() {

        System.out.println("After Test Execution");
    }
}