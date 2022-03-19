
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export enum Language {
    ru = "ru",
    en = "en"
}

export enum Currency {
    xcd = "xcd",
    bbd = "bbd",
    usd = "usd",
    cny = "cny",
    cop = "cop",
    crc = "crc",
    dop = "dop",
    gtq = "gtq",
    hnl = "hnl",
    hkd = "hkd",
    jmd = "jmd",
    nio = "nio",
    pyg = "pyg",
    pen = "pen",
    eur = "eur",
    twd = "twd",
    ttd = "ttd",
    mxn = "mxn",
    rub = "rub",
    czk = "czk"
}

export interface DividendHistoryInput {
    startDate?: Nullable<Date>;
    endDate?: Nullable<Date>;
    tickerBagId: number;
}

export interface CreateUserInput {
    firstName: string;
    lastName: string;
    nickname: string;
    email: string;
    password: string;
}

export interface CreateTickerBagInput {
    name: string;
    tickerIds: number[];
}

export interface UpdateTickerBagInput {
    id: number;
    name?: Nullable<string>;
    tickerIds?: Nullable<number[]>;
}

export interface RemoveEntityInput {
    id: number;
}

export interface IQuery {
    currentUser(): Nullable<User> | Promise<Nullable<User>>;
    myTickerBags(): TickerBag[] | Promise<TickerBag[]>;
    dividendHistory(dividendHistoryInput: DividendHistoryInput): DividendHistory[] | Promise<DividendHistory[]>;
}

export interface IMutation {
    login(username: string, password: string): Nullable<User> | Promise<Nullable<User>>;
    createUser(createUserInput: CreateUserInput): Nullable<User> | Promise<Nullable<User>>;
    createTickerBag(createTickerBagInput: CreateTickerBagInput): TickerBag | Promise<TickerBag>;
    updateTickerBag(updateTickerBagInput: UpdateTickerBagInput): TickerBag | Promise<TickerBag>;
    removeTickerBag(removeTickerBagInput: RemoveEntityInput): Nullable<TickerBag> | Promise<Nullable<TickerBag>>;
}

export interface User {
    id: number;
    firstName: string;
    lastName: string;
    nickname: string;
    email: string;
    preferredLanguage: Language;
    preferredCurrency: Currency;
    ownTickerBags: TickerBag[];
    createdAt: Date;
    updatedAt?: Nullable<Date>;
}

export interface TickerBag {
    id: number;
    name: string;
    owner: User;
    tickers: Ticker[];
}

export interface DividendHistory {
    id: number;
    dividendExDate: Date;
    paymentDate: Date;
    recordDate: Date;
    indicatedAnnualDividend: Date;
    announcementDate: Date;
}

export interface Ticker {
    id: number;
    symbol: string;
    figi: string;
    companyName: string;
}

type Nullable<T> = T | null;
