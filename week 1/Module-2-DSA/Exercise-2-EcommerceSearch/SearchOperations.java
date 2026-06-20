//package module2.ecommerce;
public class SearchOperations {

    // Linear Search using Product Name
    public static Product findByLinearSearch(Product[] products, String searchName) {

        for (Product product : products) {

            if (product.getProductName().equalsIgnoreCase(searchName)) {
                return product;
            }
        }

        return null;
    }

    // Binary Search using Product ID
    public static Product findByBinarySearch(Product[] products, int searchId) {

        int left = 0;
        int right = products.length - 1;

        while (left <= right) {

            int mid = left + (right - left) / 2;

            if (products[mid].getProductId() == searchId) {
                return products[mid];
            }

            if (products[mid].getProductId() < searchId) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return null;
    }
}