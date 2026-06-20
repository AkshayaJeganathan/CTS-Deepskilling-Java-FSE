import static org.mockito.Mockito.verify;

import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

public class MyServiceTest {

    @Test
    void testMethodInvocation() {

        // Create mock object
        ExternalApi mockApi = Mockito.mock(ExternalApi.class);

        // Create service object
        MyService service = new MyService(mockApi);

        // Invoke method
        service.fetchData();

        // Verify interaction
        verify(mockApi).getData();
    }
}