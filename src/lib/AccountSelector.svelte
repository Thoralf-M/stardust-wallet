<script lang="ts">
    import { selectedAccount, accountsStore } from "./AccountsStore";

    const select = (accountIndex: number) => () => selectedAccount.set(accountIndex);
</script>

<div class="accountSelector">
    Account:
    {#each $accountsStore.map((a) => a.account.meta.index) as accountIndex}
        <!-- Highlight selected index -->
        {#if accountIndex == $selectedAccount}
            <button class="selected" on:click={select(accountIndex)}
                >{accountIndex}</button
            >
        {:else}
            <button on:click={select(accountIndex)}>{accountIndex}</button>
        {/if}
    {/each}
</div>

<style>
    .accountSelector {
        display: table-row;
    }
    .selected {
        background-color: rgb(160, 160, 160);
    }
    button {
        margin: 2px;
    }
</style>
