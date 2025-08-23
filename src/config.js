export // Common free & disposable domains
const blockedDomains = [
  // Free providers
  "gmail.com",
  "yahoo.com",
  "outlook.com",
  "hotmail.com",
  "live.com",
  "aol.com",
  "icloud.com",
  "mail.com",
  "protonmail.com",
  "zoho.com",
  "yandex.com",
  "gmx.com",
  "msn.com",
  "comcast.net",
  "att.net",
  "verizon.net",
  "cox.net",
  "sbcglobal.net",
  "me.com",
  "mac.com",

  // Disposable providers
  "tempmail.com",
  "10minutemail.com",
  "mailinator.com",
  "guerrillamail.com",
  "trashmail.com",
  "yopmail.com",
  "getnada.com",
  "dispostable.com",
  "mintemail.com",
  "fakeinbox.com",
  "maildrop.cc",
  "sharklasers.com",
  "grr.la",
  "pokemail.net",
  "spamgourmet.com",
  "moakt.com",
  "mytemp.email",
  "inboxkitten.com",
  "mailnesia.com",
  "throwawaymail.com",
];

export function isBusinessEmail(email) {
  const domain = email.split("@")[1]?.toLowerCase();
  return domain && !blockedDomains.includes(domain);
}
