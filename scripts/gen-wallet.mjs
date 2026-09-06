import { appendFileSync, readFileSync, existsSync } from "node:fs";
import { generatePrivateKey, privateKeyToAccount } from "viem/accounts";

const envPath = new URL("../.env", import.meta.url);
const key = generatePrivateKey();
const account = privateKeyToAccount(key);
const existing = existsSync(envPath) ? readFileSync(envPath, "utf8") : "";
if (/^PAY_TO=/m.test(existing)) {
  console.error("PAY_TO already set in .env — not overwriting");
  process.exit(0);
}
appendFileSync(
  envPath,
  `\nPAY_TO=${account.address}\nX402_WALLET_KEY=${key}\nFACILITATOR_URL=https://facilitator.payai.network\n`,
);
console.log(`PAY_TO=${account.address}`);
console.log("Private key written to .env (gitignored). Backup that file.");
