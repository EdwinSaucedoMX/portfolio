import re
from helpers.assertions import check_fields
from database import financial_house as db

class User():
    def __init__(self, name=None, lastName=None, email=None):
        if name is None or not isinstance(name, str):
          raise ValueError("El nombre es un campo requerido.")
        self._name = name
        if lastName is None or not isinstance(lastName, str):
          raise ValueError("El apellido es un campo requerido.")
        self._lastName = lastName
        self._email = email


    @property
    def name(self):
        return self._name

    
    @property
    def lastName(self):
        return self._lastName
  
    @property
    def email(self):
        return self._email
    
    @email.setter
    def email(self, value):
        if value is None or not isinstance(value, str):
            raise ValueError("El email es un campo requerido.")
        
        email_regex = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
        if not re.match(email_regex, value):
            raise ValueError("El email debe tener un formato válido.")
        
        self._email = value
