import sqlite3

# connexion à la base de données hébergée sur un serveur distant
host = "192.168.184.205"
user = "admin"
password = "mdp"
database = "Hackaton.db"

# Fonction permettant d'aller chercher le fichier SQL et d'exécuter les requêtes SQL
def execute_sql_from_file(cursor, file_path):
    try:
        with open(file_path, 'r') as sql_file:
            sql_statements = sql_file.read().split(';') # Séparation des requêtes SQL pour une éxecution séparée
            for sql_statement in sql_statements:
                if sql_statement.strip():
                    cursor.execute(sql_statement)
    except sqlite3.Error as e:
        print(f"Erreur lors de l'exécution des requêtes SQL : {e}")

dbname = 'Hackaton.db'

# connexion à la base de données hébergée sur un serveur distant
conn = sqlite3.connect(
    database,
    host=host,
    user=user,
    password=password
)

conn = sqlite3.connect(dbname)

cursor = conn.cursor()

# Chemin vers le fichier SQL contenant les requêtes
sql_file_path = 'app.sql'

# Exécution de toutes les requêtes SQL à partir du fichier
execute_sql_from_file(cursor, sql_file_path)

conn.commit()
conn.close()

print('OK')