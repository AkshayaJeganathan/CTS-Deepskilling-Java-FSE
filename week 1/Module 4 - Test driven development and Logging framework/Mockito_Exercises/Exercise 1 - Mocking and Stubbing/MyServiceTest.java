import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

public class MyServiceTest {

    @Test
    void testFetchDataUsingMock() {

        // Create mock object
        ExternalApi mockApi = Mockito.mock(ExternalApi.class);

        // Stub method
        when(mockApi.getData()).thenReturn("Sample Mock Response");

        // Inject dependency
        MyService service = new MyService(mockApi);

        // Call method
        String result = service.fetchData();

        // Verify output
        assertEquals("Sample Mock Response", result);
    }
}