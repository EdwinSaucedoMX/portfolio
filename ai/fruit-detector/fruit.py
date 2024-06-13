import tensorflow as tf
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense, Conv2D, MaxPooling2D, Flatten
from tensorflow.keras.preprocessing.image import ImageDataGenerator

# Definir el modelo
model = Sequential([
    Conv2D(32, (3, 3), activation='relu', input_shape=(64, 64, 3)),
    MaxPooling2D(pool_size=(2, 2)),
    Conv2D(32, (3, 3), activation='relu'),
    MaxPooling2D(pool_size=(2, 2)),
    Flatten(),
    Dense(128, activation='relu'),
    Dense(1, activation='sigmoid')
])

# Compilar el modelo
model.compile(optimizer='adam', loss='binary_crossentropy', metrics=['accuracy'])

# Preparar los datos (este es solo un ejemplo, debes tener tus propios datos)
train_datagen = ImageDataGenerator(rescale=1./255)
training_set = train_datagen.flow_from_directory('ruta/a/datos/entrenamiento', target_size=(64, 64), batch_size=32, class_mode='binary')

# Entrenar el modelo
model.fit(training_set, epochs=10)
