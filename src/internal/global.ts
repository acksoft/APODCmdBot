export const APODKEY: string = 'f6Li6OFDrJ891SYa8yetXkGkTt2PhBEz78HTr3q8';
export const APODURL: string = 'https://api.nasa.gov/planetary/apod?api_key=[[KEY]]';

export interface IApod {
    copyright: string,
    date: string,
    explanation:string,
    hdurl:string,
    media_type:string,
    service_version:string,
    title:string,
    url:string
}

export const mockData: IApod = {
    copyright: '',
    date: '2023-09-29',
    explanation: `Back from asteroid 101955 Bennu, a 110-pound, 31-inch wide sample return capsule rests in a desert on planet Earth in this photo, taken at the Department of Defense Utah Test and Training Range near Salt Lake City last Sunday, September 24. Dropped off by the OSIRIS-Rex spacecraft, the capsule looks charred from the extreme temperatures experienced during its blistering descent through Earth's dense atmosphere. OSIRIS-Rex began its home-ward journey from Bennu in May of 2021. Delivered to NASA\u2019s Johnson Space Center in Houston on September 25, the capsule's canister is expected to contain an uncontaminated sample of about a half pound (250 grams) of Bennu's loosely packed regolith. Working in a new laboratory designed for the OSIRIS-REx mission, scientists and engineers will complete the canister disassembly process, and plan to unveil the sample of the near-Earth asteroid in a broadcast event on October 11.`,
    hdurl: 'https://apod.nasa.gov/apod/image/2309/BackFromBennu.jpg',
    media_type: 'image',
    service_version: 'v1',
    title: 'Back from Bennu',
    url: 'https://apod.nasa.gov/apod/image/2309/BackFromBennu_1024.jpg'
}

export enum dataSource {
    MOCK = 'Mock Data',
    LIVE = 'Live Data'
}
