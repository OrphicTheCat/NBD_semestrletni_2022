# Biblioteka do zapytań curl

import requests

# Punkt 1 - wstawianie dokumentu do bazy

headers = {'Content-Type': 'application/json'}

document_v1 = '{\'title\': \'Dune Board Game\'}'

response_put_1version = requests.put('http://localhost:8098/buckets/s24558/keys/boardgame', headers=headers, data=document_v1)

print('*'*52)
print("Komunikaty z serwera - zapytania curl dla bazy Riak")
print('*'*52)
print()
print("Wstawianie dokumentu do bazy - odpowiedz z serwera: ", response_put_1version.status_code)
print()

# Punkt 2 - pobranie dokumentu z bazy

response_get_1version = requests.get('http://localhost:8098/buckets/s24558/keys/boardgame')

print("Pobranie dokumentu z bazy: ")
print("Odpowiedz z serwera: ", response_get_1version.status_code),
print("Wynik pobrania: ", response_get_1version.text)

# Punkt 3 - modyfikacja dokumentu

document_v2 = '{\'title\': \'Dune Board Game\', \'number_of_items\': 20, \'prize\': 199.99}'

response_put_2version = requests.put('http://localhost:8098/buckets/s24558/keys/boardgame', headers=headers, data=document_v2)

print()
print("Modyfikacja dokumentu - odpowiedz z serwera: ", response_put_2version.status_code)

# Punkt 4 - ponowne pobranie dokumentu z bazy

response_get_2version = requests.get('http://localhost:8098/buckets/s24558/keys/boardgame')

print()
print("Pobranie zmodyfikowanego dokumentu z bazy: ")
print("Odpowiedz z serwera: ", response_get_2version.status_code),
print("Wynik pobrania: ", response_get_2version.text)

# Punkt 5 - usuniecie dokumentu z bazy

response_delete = requests.delete('http://localhost:8098/buckets/s24558/keys/boardgame')

print()
print("Usuniecie dokumentu - odpowiedz z serwera: ", response_delete.status_code)

# Punkt 6 - proba pobrania z bazy usunietego dokumentu

response_get_deleted_doc = requests.get('http://localhost:8098/buckets/s24558/keys/boardgame')

print()
print("Proba pobrania usunietego dokumentu - odpowiedz z serwera: ", response_get_deleted_doc.status_code)
print("Wynik pobrania: ", response_get_deleted_doc.text)

