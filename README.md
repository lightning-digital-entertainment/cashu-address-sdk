<div align="center">
<h3 align="center">cashu-address-sdk</h3>

  <p align="center">
    A TypeScript SDK to interact with cashu-address servers.
    <br />
    <br />
    <a href="https://github.com/lightning-digital-entertainment/cashu-address-sdk/issues">Report Bug</a>
    ·
    <a href="https://github.com/lightning-digital-entertainment/cashu-address-sdk/issues">Request Feature</a>
  </p>
</div>

## About The Project

```ts
const signer = new Nip07Signer();
const sdk = new NCSDK("https://cashu-address.domain", signer);

const balance = await sdk.getToken();
```

This SDK makes it easy to integrate cashu-addresses into any TypeScript / JavaScript project.
It works with NodeJs as well as browsers out of the box.

## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Installation

1. Install using npm

```sh
npm i cashu-address-sdk
```

2. Use it in your project

```ts
const signer = new Nip07Signer();
const sdk = new NCSDK("https://cashu-address.domain", signer);

const balance = await sdk.getToken();
```

## Usage

### SDK Methods

```ts
getInfo: () => Promise<{ mintUrl: string; noub: string; username?: string }>;
getToken: () => Promise<string>;
getBalance: () => Promise<number>;
setUsername: (username: string) =>
  Promise<{
    error: boolean;
    message: string;
    data: { paymentToken: string; paymentRequest: string };
  }>;
setUsername: (username: string, paymentToken: string) =>
  Promise<{ error: boolean; message: string }>;
```

### Signers

cashu-address-sdk comes with built in support for different Signers, all based on typical nostr signing methods.

#### Nip46Signer

A Nip46Signer connects to a remote signer via the NIP-46 protocol.
It requires a connectionString and optionally a secret key to be initialised.
A Nip46Signer needs to be connected to the remote signer to work.

```ts
const signer = new Nip46Signer("bunker://...", Uint8Array);
await signer.connect();
const sdk = new NCSDK("https://server.domain", signer);
```

#### Nip07Signer

A Nip07Signer is only available in the browser and requires a NIP-07 provider to be available.
It then connects to the provider and requests signatures from it.

```ts
const signer = new Nip07Signer();
const sdk = new NCSDK("https://server.domain", signer);
```

#### NsecSigner

A NsecSigner takes in a raw secret key as Uint8Array and saves it in memory.
It is the most versatile and performant signer, but required direct access to a users private key.

```ts
const signer = new NsecSigner([...]);
const sdk = new NCSDK("https://server.domain", signer)
```
