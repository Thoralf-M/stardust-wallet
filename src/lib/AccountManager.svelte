<script lang="ts">
  import { AccountManager, CoinType } from "@iota/wallet-wasm/web";

  export let mnemonic: string;
  export let node: string;
  export let accountManager: AccountManager;

  const createAccountManager = () => {
    accountManager = new AccountManager({
      storagePath: "./my-database",
      coinType: CoinType.Shimmer,
      clientOptions: {
        nodes: [node],
        localPow: true,
      },
      secretManager: {
        mnemonic,
      },
    });
    console.log("created account manager");
    // console.log(accountManager.getNodeInfo().then((r)=> console.log(r)))
  };
</script>

<button on:click={createAccountManager}> create account manager </button>
