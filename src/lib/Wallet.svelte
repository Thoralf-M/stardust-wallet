<script lang="ts">
  import { Wallet, CoinType } from "@iota/sdk-wasm/web";

  export let mnemonic: string;
  export let node: string;
  export let wallet: Wallet;

  const createWallet = () => {
    wallet = new Wallet({
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
    console.log("created wallet");
    // console.log(wallet.getNodeInfo().then((r)=> console.log(r)))
  };
</script>

<button on:click={createWallet}> create wallet </button>
