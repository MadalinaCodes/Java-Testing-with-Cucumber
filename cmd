pom_xml este un format xml in care ne punem dependintele proiectului
(cucumber, serenity, junit - pentru rularea testelor sau assertions, adica verificari),
acestea se iau din maven central si pe scurt, sunt niste tool-uri care sunt in cloud
si noi downloadam ultima varianta local sau pe masina de test de la locul de munca
si va aparea in External Libraries.

Practic nu mai trebuie sa scriem noi codul de la 0 la cucumber, ne folosim de ceva ce deja exista

Am intrat pe https://github.com/Andy-ITFactory/JavaBDD_Start
si am luat codul pentru DriverManager si ServiceHooks
de asemenea am actualizat versiunea io.github.bonigarcia

In ServiceHooks exista 2 metode:
ce sa se intample inainte de un test @Before (inainte de fiecare test pornesc driverul)
si ce se intampla dupa fiecare test @After (fac niste screenshoturi si se inchide driverul)


