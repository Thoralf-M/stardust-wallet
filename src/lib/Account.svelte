<script lang="ts">
    import { selectedAccount, accountsStore } from "./AccountsStore";

    const sync = () => async () => {
        balance = await $accountsStore[$selectedAccount].account.sync();
        $accountsStore[$selectedAccount].balance = balance;
        transactions = await $accountsStore[
            $selectedAccount
        ].account.transactions();
    };

    const send = () => async () => {
        let transaction = await $accountsStore[
            $selectedAccount
        ].account.sendAmount([{ address, amount }]);
        console.log("Sent tx: ", transaction);
        transactions = [...transactions, transaction];
    };

    let balance = {};
    let publicAddresses = [];
    selectedAccount.subscribe((index) => {
        if (typeof $accountsStore[index] == "undefined") {
            return;
        }
        balance = $accountsStore[index]?.balance;
        publicAddresses = $accountsStore[index]?.account.meta.publicAddresses;
    });

    let address =
        "rms1qzs3jqzmym2xl36vlyvgk08035qky0ngz3n5rmnf3j47l4p9msqmudmfkva";
    let amount = "1000000";
    // TODO: don't share over all accounts
    let transactions = [];
    $: transactionIds = transactions.map((tx) => tx.transactionId);
</script>

<div class="account">
    <button on:click={sync()}>sync</button>

    <div>
        Balance: {JSON.stringify(balance)}
    </div>

    <div>
        Addresses: {JSON.stringify(
            publicAddresses.map((a) => a.address),
            null,
            2
        )}
    </div>
    <div>
        <input size="10" bind:value={amount} placeholder="glow" />
        <input size="50" bind:value={address} placeholder="bech32 address" />
        <button on:click={send()}>send</button>
    </div>

    <div>
        Sent transactions: {JSON.stringify(transactionIds, null, 2)}
    </div>
</div>

<style>
    button {
        margin: 2px;
    }
</style>
