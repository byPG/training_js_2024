"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

//.split() - (separator, limit): Dzieli łańcuch na tablicę podłańcuchów, używając separator jako separator
//.trim() - Usuwa białe znaki z początku i końca łańcucha.
//.tolowerCase()
//.toUpperCase()
//.pad()
//.pasStart() - dodaje znaki na poczatku
//.padEnd() - dodaje znaki na koncu
//.slice() - (start, end): Zwraca fragment łańcucha znaków, zaczynając od indeksu
//.replace() - (searchValue, replaceValue) Zastępuje pierwsze wystąpienie searchValue w łańcuchu na replaceValue.
//.replaceAll() - zastępuje każde wystąpienie w lancuchu

const getCode = (str) => str.slice(0, 3).toUpperCase();

for (const flight of flights.split("+")) {
  const [type, from, to, time] = flight.split(";");

  const output = `${type.startsWith("_Delayed") ? "🔴" : ""} ${type
    .replaceAll("_", "")
    .trim()} from ${getCode(from)} to ${getCode(to)} (${time.replace(
    ":",
    "h"
  )})`.padStart(50, "=");

  console.log(output);
}
