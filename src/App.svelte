<script lang="ts">
  import Wallet from "./lib/Wallet.svelte";
  import CreateAccount from "./lib/CreateAccount.svelte";
  import Account from "./lib/Account.svelte";
  import AccountSelector from "./lib/AccountSelector.svelte";
  import { accountsStore } from "./lib/AccountsStore";
  import init, { CoinType } from "@iota/sdk-wasm/web";
  init()
    .then(() => console.log("initialized wasm"))
    .catch((err) => {
      console.error(err);
    });

  let mnemonic =
    "run vessel latin forward topple sun wing swap sell drop sea move purity acoustic cannon barrel equal hard desk true tragic garage piece rule";
  let node = "https://api.testnet.shimmer.network";
  let wallet;
  let accounts = [];
  accountsStore.subscribe((value) => {
    accounts = value;
  });


  window.addEventListener("unhandledrejection", function (event){
    console.log("unhandledrejection")
        alert(event);
    });
  window.addEventListener("uncaughtException", function (event){
    console.log("uncacht")
        alert(event);
    });
    window.onerror = function myErrorHandler(errorMsg, url, lineNumber) {
    alert("Error occured: " + errorMsg);//or any message
    return false;
  }
    self.onerror = function myErrorHandler(errorMsg, url, lineNumber) {
    alert("self Error occured: " + errorMsg);//or any message
    return false;
  }
  window.addEventListener("error", function (e) {
   alert("Error occurred : " + e.error.message);
   return false;
  })
</script>

<main>
  <input
    size="130"
    bind:value={mnemonic}
    placeholder="test mnemonic, never insert a mainnet one"
  />
  <input size="50" bind:value={node} placeholder="node" />

  <div>
    <Wallet {mnemonic} {node} bind:wallet />
    <CreateAccount {wallet} />
  </div>

  <AccountSelector />
  <Account />


</main>

<div style="position:fixed; bottom: 0; width: 100%; left: 0;">
  <a
    href="https://github.com/iotaledger/iota-sdk/tree/develop/bindings/wasm"
    target="_blank"
    rel="noreferrer"
  >
    Created with the wasm binding of iota-sdk
  </a>
</div>

<style>
</style>
