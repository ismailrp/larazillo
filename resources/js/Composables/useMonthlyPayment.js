import { computed, isRef } from "vue";
export const useMonthlyPayment = (total, interestRate, duration) => {
    const monthlyPayment = computed(() => {
        const principal = isRef(total) ? total.value : total;
        const monthlyInterest =
            (isRef(interestRate) ? interestRate.value : interestRate) /
            100 /
            12;
        const numberOfPayments =
            (isRef(duration) ? duration.value : duration) * 12;
        const payment =
            (principal * monthlyInterest) /
            (1 - Math.pow(1 + monthlyInterest, -numberOfPayments));
        return payment.toFixed(2);
    });
    return { monthlyPayment };
};
