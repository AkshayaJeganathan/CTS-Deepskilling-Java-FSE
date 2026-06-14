class Logger {

    private static Logger logger = new Logger();

    private Logger() {
        System.out.println("Logger Instance Created");
    }

    public static Logger getLogger() {
        return logger;
    }

    public void logMessage(String message) {
        System.out.println("LOG: " + message);
    }
}

public class LoggerDemo {

    public static void main(String[] args) {

        Logger logger1 = Logger.getLogger();
        Logger logger2 = Logger.getLogger();

        logger1.logMessage("Application Started");
        logger2.logMessage("User Logged In");

        System.out.println("Same Instance: " + (logger1 == logger2));
    }
}
