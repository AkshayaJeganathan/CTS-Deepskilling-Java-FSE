public class FinancialForecast {

    public static double calculateFutureValue(double currentAmount,
                                              double growthRate,
                                              int years) {

        if (years == 0) {
            return currentAmount;
        }

        return calculateFutureValue(
                currentAmount,
                growthRate,
                years - 1
        ) * (1 + growthRate);
    }

    public static void main(String[] args) {

        double currentInvestment = 10000;
        double annualGrowthRate = 0.08;
        int forecastYears = 5;

        double futureValue =
                calculateFutureValue(currentInvestment,
                        annualGrowthRate,
                        forecastYears);

        System.out.printf(
                "Predicted value after %d years = %.2f",
                forecastYears,
                futureValue
        );
    }
}