export enum ChaseTransDetails {'DEBIT' , 'CREDIT' , 'CHECK' , 'DSLIP'}
export type ChaseTransType = 'ACCT_XFER' | 'ACH_CREDIT' | 'ACH_DEBIT' 
| 'ATM' | 'ATM_DEPOSIT' | 'CASE_TO_PARTNERFI' | 'CHECK_DEPOSIT' | 'CHECK_PAID'
| 'DEBIT_CARD' | 'DEPOSIT' | 'FEE_TRANSACTION' | 'MISC_CREDIT' | 'MISC_DEBIT'
| 'PARTNERFI_TO_CHASE' | 'QUICKPAY+CREDIT' | 'QUICKPAY_DEBIT' | 'WIRE_OUTGOING';


export interface ParsedTransaction {
    Details: ChaseTransDetails;
    PostingDate: Date;
    Description: string;
    Amount?: number;
    Type?: ChaseTransType;
    Balance?: number;
    CheckOrSlip?: string;
}