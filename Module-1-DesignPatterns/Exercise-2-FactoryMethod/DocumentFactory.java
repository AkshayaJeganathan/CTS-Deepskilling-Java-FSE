public class DocumentFactory {

    public static Document createDocument(String documentType) {

        if (documentType.equalsIgnoreCase("WORD")) {
            return new WordDocument();
        }

        else if (documentType.equalsIgnoreCase("PDF")) {
            return new PdfDocument();
        }

        else if (documentType.equalsIgnoreCase("EXCEL")) {
            return new ExcelDocument();
        }

        else {
            throw new IllegalArgumentException("Invalid Document Type");
        }
    }
}
