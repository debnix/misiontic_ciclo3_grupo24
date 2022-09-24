

SELECT c.country, ci.city, ad.address address_store, ad.phone phone_store,
	cm.first_name firstname_customer, cm.last_name lastname_customer, py.amount payment_customer,
    st.first_name firstname_staff, st.last_name lastname_staff, fm.title title_film, fm.description description_film
FROM country c
INNER JOIN city ci ON ci.country_id = c.country_id 
INNER JOIN address ad ON ad.city_id = ci.city_id
INNER JOIN customer cm ON cm.address_id = ad.address_id
INNER JOIN payment py ON py.customer_id = cm.customer_id
INNER JOIN staff st ON st.staff_id = py.staff_id
INNER JOIN rental rt ON rt.rental_id = py.rental_id
INNER JOIN inventory iv ON iv.inventory_id = rt.inventory_id 
INNER JOIN film fm ON fm.film_id = iv.film_id
WHERE c.country = "United States";






# -----------------------------------------------------

SELECT c.country, ci.city, ad.address address_store, ad.phone phone_store,
	cm.first_name firstname_customer, cm.last_name lastname_customer, SUM(py.amount) payment_customer
FROM country c
INNER JOIN city ci ON ci.country_id = c.country_id 
INNER JOIN address ad ON ad.city_id = ci.city_id
INNER JOIN customer cm ON cm.address_id = ad.address_id
INNER JOIN payment py ON py.customer_id = cm.customer_id
WHERE c.country = "United States" 
GROUP BY cm.customer_id 
ORDER BY payment_customer DESC;
