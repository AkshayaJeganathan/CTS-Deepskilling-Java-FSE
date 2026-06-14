public class FactoryMethodDemo {

    public static void main(String[] args) {

        Document wordDoc =
                DocumentFactory.createDocument("WORD");

        Document pdfDoc =
                DocumentFactory.createDocument("PDF");

        Document excelDoc =
                DocumentFactory.createDocument("EXCEL");

        wordDoc.open();
        pdfDoc.open();
        excelDoc.open();
    }
}
