import type { SteamSale } from "../types/steam-sale";

export async function fetchNextSteamSale(): Promise<SteamSale | undefined> {

    const getSaleUrl = new URL(`${process.env.PLASMO_PUBLIC_API_URL}/steam/sales/next`);
    const getSaleResponse = await fetch(getSaleUrl);
    const saleData = await getSaleResponse.json() as SteamSale | undefined;

    return saleData;
}
