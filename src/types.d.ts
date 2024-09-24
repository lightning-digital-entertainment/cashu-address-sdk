import { Event, EventTemplate } from "nostr-tools";

declare global {
  interface Window {
    nostr: {
      getPublicKey: () => Promise<string>;
      signEvent: (e: {
        kind: number;
        content: string;
        created_at: number;
        tags: string[][];
      }) => Promise<{
        kind: number;
        content: string;
        created_at: number;
        tags: string[][];
        id: string;
        sig: string;
        pubkey: string;
      }>;
    };
  }
}

export type TokenReponse =
  | { error: true; message: string }
  | {
      error: false;
      data: { token: string; count: string; totalPending: string };
    };

export type BalanceResponse =
  | { error: true; message: string }
  | { error: false; data: number };

export interface Signer {
  signEvent: (e: EventTemplate) => Promise<Event>;
}

type Withdrawal = {
  id: number;
  created_at: number;
  pubkey: string;
  amount: number;
};

type Proof = {
  C: string;
  id: string;
  amount: number;
  secret: string;
};

export type LastWithdrawalResponse =
  | { error: true; message: string }
  | { error: false; data: { count: number; withdrawals: Withdrawal[] } };

export type WithdrawalDetailResponse =
  | { error: true; message: string }
  | {
      error: false;
      data: { amount: number; proofs: Proof[]; mintUrl: string };
    };
