<svelte:options accessors />
<script lang="ts">
  import type { AccountManager } from "@iota/wallet-wasm/web";
  import {accountsStore, selectedAccount} from './AccountsStore'

  export let accountManager: AccountManager;

  const createAccount = async () => {
    let account = await accountManager.createAccount({
      alias: $accountsStore.length.toString() || "0",
    });
    console.log("created account:", account);
    accountsStore.set([...$accountsStore, {account, balance: {}}]);
    selectedAccount.set(account.getMetadata().index);
  };
</script>

<button on:click={createAccount}> create account </button>
