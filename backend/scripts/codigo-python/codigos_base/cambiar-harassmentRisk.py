import pandas as pd

csv_path = r'C:\Users\steph\OneDrive\Documentos\Universidad de Medellin\Semetre V\Proyecto de Ingeniería\SheMatters\backend\scripts\codigo-python\src\calles_de_medellin_con_acoso.csv'
df = pd.read_csv(csv_path, sep=';')

# Modificar por los reportes que hagan los usuarios
df['harassmentRisk'] = 0

# Guardar el archivo modificado
output_path = r'C:\Users\steph\OneDrive\Documentos\Universidad de Medellin\Semetre V\Proyecto de Ingeniería\SheMatters\backend\scripts\codigo-python\src\calles_de_medellin_con_acoso.csv'
df.to_csv(output_path, sep=';', index=False)

