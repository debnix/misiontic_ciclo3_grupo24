
# Crear Vista
CREATE VIEW country_city AS SELECT c.country, ci.city
FROM country c
INNER JOIN city ci ON ci.country_id = c.country_id;
# Consultar datos de la vista
SELECT COUNT(*) FROM country_city;
# Eliminar vista
DROP VIEW country_city;

# Crear Vista
CREATE VIEW report_customer AS
SELECT c.country, ci.city, ad.address address_store, ad.phone phone_store,
	cm.first_name firstname_customer, cm.last_name lastname_customer, py.amount payment_customer,
    st.first_name firstname_staff, st.last_name lastname_staff, fm.title title_film, fm.description description_film,
    lg.name language, ct.name category, ac.first_name firstname_actor, ac.last_name lastname_actor
FROM country c
INNER JOIN city ci ON ci.country_id = c.country_id 
INNER JOIN address ad ON ad.city_id = ci.city_id
INNER JOIN customer cm ON cm.address_id = ad.address_id
INNER JOIN payment py ON py.customer_id = cm.customer_id
INNER JOIN staff st ON st.staff_id = py.staff_id
INNER JOIN rental rt ON rt.rental_id = py.rental_id
INNER JOIN inventory iv ON iv.inventory_id = rt.inventory_id 
INNER JOIN film fm ON fm.film_id = iv.film_id
INNER JOIN language lg ON lg.language_id = fm.language_id
INNER JOIN film_category fc ON fc.film_id = fm.film_id
INNER JOIN category ct ON ct.category_id = fc.category_id
INNER JOIN film_actor fa ON fa.film_id = fm.film_id
INNER JOIN actor ac ON ac.actor_id = fa.actor_id
WHERE c.country = "United States";

# Consultar vista
SELECT * FROM report_customer;

# Actualizar Vista
CREATE OR REPLACE VIEW report_customer AS
SELECT c.country, ci.city, ad.address address_store, ad.phone phone_store,
	cm.first_name firstname_customer, cm.last_name lastname_customer, py.amount payment_customer,
    st.first_name firstname_staff, st.last_name lastname_staff, fm.title title_film, fm.description description_film,
    lg.name language, ct.name category, ac.first_name firstname_actor, ac.last_name lastname_actor
FROM country c
INNER JOIN city ci ON ci.country_id = c.country_id 
INNER JOIN address ad ON ad.city_id = ci.city_id
INNER JOIN customer cm ON cm.address_id = ad.address_id
INNER JOIN payment py ON py.customer_id = cm.customer_id
INNER JOIN staff st ON st.staff_id = py.staff_id
INNER JOIN rental rt ON rt.rental_id = py.rental_id
INNER JOIN inventory iv ON iv.inventory_id = rt.inventory_id 
INNER JOIN film fm ON fm.film_id = iv.film_id
INNER JOIN language lg ON lg.language_id = fm.language_id
INNER JOIN film_category fc ON fc.film_id = fm.film_id
INNER JOIN category ct ON ct.category_id = fc.category_id
INNER JOIN film_actor fa ON fa.film_id = fm.film_id
INNER JOIN actor ac ON ac.actor_id = fa.actor_id;

# Consultar toda la info de la vista report_customer
SELECT * FROM report_customer;
# Obtener  Ventas totales en Colombia
SELECT SUM(payment_customer) total FROM report_customer WHERE country = "Colombia";
# Consultar ventas por ciudad en colombia
SELECT SUM(payment_customer) total, city FROM report_customer 
WHERE country = "Colombia"
GROUP BY city
ORDER BY total DESC;

# Eliminar vista
DROP VIEW report_customer;






