import static org.junit.Assert.*;

import org.junit.Test;

public class AssertionsTest {

    @Test
    public void verifyAssertions() {

        // assertEquals
        assertEquals(20, 10 + 10);

        // assertTrue
        assertTrue(15 > 5);

        // assertFalse
        assertFalse(10 < 5);

        // assertNull
        Object object1 = null;
        assertNull(object1);

        // assertNotNull
        Object object2 = new String("JUnit");
        assertNotNull(object2);
    }
}