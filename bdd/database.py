import sqlite3

sql_file = "app.sql"
conn = sqlite3.connect("Hackaton.db")

try:
    cursor = conn.cursor()

    with open(sql_file, "r") as file:
        sql_code = file.read()

    cursor.executescript(sql_code)
    conn.commit()
    cursor.close()
    conn.close()

    print(f"Le fichier SQL '{sql_file}' a été exécuté avec succès dans la base de données SQLite.")
except Exception as e:
    print(f"Une erreur s'est produite : {str(e)}")
