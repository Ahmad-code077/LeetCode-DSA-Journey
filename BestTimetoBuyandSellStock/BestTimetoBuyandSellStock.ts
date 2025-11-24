function maxProfit(prices: number[]): number {
    let minPrice = Infinity
    let maxProfit = 0

    for (let i = 0; i < prices.length; i++) {
        if (minPrice > prices[i]) {
            minPrice = prices[i]
        }
        let currentProfit = prices[i] - minPrice
        if (currentProfit > maxProfit) {
            maxProfit = currentProfit
        }
    }

    return maxProfit
};


maxProfit([7, 1, 5, 3, 6, 4])