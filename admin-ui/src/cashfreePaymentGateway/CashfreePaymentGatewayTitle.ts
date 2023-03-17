import { CashfreePaymentGateway as TCashfreePaymentGateway } from "../api/cashfreePaymentGateway/CashfreePaymentGateway";

export const CASHFREEPAYMENTGATEWAY_TITLE_FIELD = "errorMessage";

export const CashfreePaymentGatewayTitle = (
  record: TCashfreePaymentGateway
): string => {
  return record.errorMessage || String(record.id);
};
