//package module2.ecommerce;
public class SearchTest {

    public static void main(String[] args) {

        Product[] products = {

                new Product(101, "Laptop", "Electronics"),
                new Product(102, "Mobile", "Electronics"),
                new Product(103, "Headphones", "Accessories"),
                new Product(104, "Watch", "Fashion"),
                new Product(105, "Book", "Education")
        };

        System.out.println("===== LINEAR SEARCH =====");

        Product linearResult =
                SearchOperations.findByLinearSearch(products, "Watch");

        if (linearResult != null) {
            System.out.println(linearResult);
        } else {
            System.out.println("Product not found");
        }

        System.out.println("\n===== BINARY SEARCH =====");

        Product binaryResult =
                SearchOperations.findByBinarySearch(products, 103);

        if (binaryResult != null) {
            System.out.println(binaryResult);
        } else {
            System.out.println("Product not found");
        }
    }
}