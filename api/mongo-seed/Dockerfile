FROM mongo

COPY init.json /init.json
CMD mongoimport --host mongodb --db code-challenge --collection articles --file init.json --jsonArray