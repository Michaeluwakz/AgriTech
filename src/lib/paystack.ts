// Mock implementation since we don't have actual Paystack credentials

interface PaymentConfig {
  email: string;
  amount: number;
  reference: string;
  currency?: string;
  metadata?: Record<string, any>;
}

export const initiatePayment = async ({
  email,
  amount,
  reference,
  currency = 'NGN',
  metadata = {}
}: PaymentConfig): Promise<{ status: string; reference: string }> => {
  // This is a mock implementation that simulates a successful payment
  console.log('Payment initiated:', { email, amount, reference, currency, metadata });
  
  return Promise.resolve({
    status: 'success',
    reference: reference || `mock-ref-${Date.now()}`
  });
};