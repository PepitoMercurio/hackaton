import mysql.connector

# Paramètres de connexion à la base de données hébergée sur un serveur distant
host = "192.168.184.205"
port = 3306
user = "admin"
password = "mdp"
database = "Hackaton"

# Fonction permettant d'exécuter les requêtes SQL depuis un fichier
def execute_sql_from_file(cursor, file_path):
    try:
        with open(file_path, 'r') as sql_file:
            sql_statements = sql_file.read().split(';') # Séparation des requêtes SQL pour une exécution séparée
            for sql_statement in sql_statements:
                if sql_statement.strip():
                    cursor.execute(sql_statement)
    except mysql.connector.Error as e:
        print(f"Erreur lors de l'exécution des requêtes SQL : {e}")

# Connexion à la base de données
try:
    conn = mysql.connector.connect(
        host=host,
        port=port,
        user=user,
        password=password,
        database=database
    )

    cursor = conn.cursor()

    # Chemin vers le fichier SQL contenant les requêtes
    sql_file_path = 'app.sql'

    # Exécution de toutes les requêtes SQL à partir du fichier
    execute_sql_from_file(cursor, sql_file_path)

    conn.commit()
    conn.close()

    print('OK')
except mysql.connector.Error as e:
    print(f"Erreur lors de la connexion à la base de données : {e}")