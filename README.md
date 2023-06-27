This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app), that also has [Dynamic](https://dynamic.xyz) integrated out of the box!

## Getting Started

1. Clone this repository

```bash
git clone https://github.com/dynamic-labs/create-next-app-dynamic
```

2. Install dependancies

```bash
npm i
# or
yarn
# or
pnpm install
```

3. Add your env variable

Rename `.env.example` to `.env.local` and add your Dynamic Project ID as the value of the `DYNAMIC_PROJECT_ID` variable.
You can find your Dynamic project ID in the [developer section of your dashboard](https://app.dynamic.xyz/dashboard/developer).

4. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

1. Server & Client components
   The Dynamic SDK needs to be used as a client component. You'll see a folder called `lib` where we employ `use client` and the export the SDK from there, so that it's compatible for use in the rest of the Next application.

2. CSS customisations
   In globals.css you'll see an example of using custom CSS variables to change the Connect Wallet button from Dynamic.
