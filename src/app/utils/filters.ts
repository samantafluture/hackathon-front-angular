import { Hackathon } from '../interfaces/hackathon';

export function sortByPrice(hackathonA: Hackathon, hackathonB: Hackathon) {
  if (hackathonA.price > hackathonB.price) {
    return 1;
  }
  if (hackathonA.price < hackathonB.price) {
    return -1;
  }
  return 0;
}

export function sortByDate(hackathonA: Hackathon, hackathonB: Hackathon) {
  let dateA = new Date(hackathonA.date);
  let dateB = new Date(hackathonB.date);

  if (dateA > dateB) {
    return 1;
  }
  if (dateA < dateB) {
    return -1;
  }
  return 0;
}

export function isFree(hackathon: Hackathon) {
  const freeHackthon = hackathon.price === 0 ? true : false;
  return freeHackthon;
}

export function isRemoteAvaiable(hackathon: Hackathon) {
  const remoteHackathon =
    hackathon.location.includes('Remote') ||
    hackathon.location.includes('remote') ||
    hackathon.location.includes('Online') ||
    hackathon.location.includes('online') ||
    hackathon.location.includes('Virtual') ||
    hackathon.location.includes('virtual')
      ? true
      : false;
  return remoteHackathon;
}
