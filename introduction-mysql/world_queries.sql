
SELECT c.Code CodeCountry, c.Name Country, ci.Name City, cl.Language
FROM country c
INNER JOIN city ci ON ci.CountryCode = c.Code 
INNER JOIN countryLanguage cl ON cl.CountryCode = c.Code
WHERE c.Code = "COL";

SELECT COUNT(ci.Name) num_ciudades, cl.Language
FROM country c
INNER JOIN city ci ON ci.CountryCode = c.Code 
INNER JOIN countryLanguage cl ON cl.CountryCode = c.Code
WHERE c.Code = "COL" 
GROUP BY cl.Language;