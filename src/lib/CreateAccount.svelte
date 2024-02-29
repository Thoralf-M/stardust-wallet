<svelte:options accessors />
<script lang="ts">
  import type { Wallet } from "@iota/wallet-wasm/web";
  import {accountsStore, selectedAccount} from './AccountsStore'

  export let wallet: Wallet;

  const createAccount = async () => {
    let account = await wallet.createAccount({
      alias: $accountsStore.length.toString() || "0",
    });
    console.log("created account:", account);
    accountsStore.set([...$accountsStore, {account, balance: {}}]);
    selectedAccount.set(account.getMetadata().index);
  };
</script>

<button on:click={createAccount}> create account </button>
