import cv2
import numpy as np
import matplotlib.pyplot as plt

# Leer una imagen
imagen = cv2.imread('logo.jpg', cv2.IMREAD_COLOR)

# Convertir la imagen a escala de grises
imagen_gris = cv2.cvtColor(imagen, cv2.COLOR_BGR2GRAY)

# Aplicar el detector de bordes Canny
bordes = cv2.Canny(imagen_gris, 40, 50)

# Encontrar los contornos a partir de la imagen de bordes
contornos, _ = cv2.findContours(bordes, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

# Crear una máscara de fondo para grabCut
mascara = np.zeros(imagen.shape[:2], np.uint8)

# Crear matrices temporales usadas por grabCut
bgdModel = np.zeros((1, 65), np.float64)
fgdModel = np.zeros((1, 65), np.float64)

# Definir un rectángulo que cubre todo el objeto
x, y, w, h = cv2.boundingRect(max(contornos, key=cv2.contourArea))
rect = (x, y, w, h)

# Aplicar grabCut
cv2.grabCut(imagen, mascara, rect, bgdModel, fgdModel, 5, cv2.GC_INIT_WITH_RECT)

# Crear una máscara donde seguro primer plano y probable primer plano se consideran primer plano
mascara_final = np.where((mascara == 2) | (mascara == 0), 0, 1).astype('uint8')

# Aplicar la máscara a la imagen
imagen_sin_fondo = imagen * mascara_final[:, :, np.newaxis]

# Añadir el canal alfa a la imagen sin fondo
canal_alfa = np.where(mascara_final == 1, 255, 0).astype(np.uint8)
imagen_sin_fondo_bgra = cv2.merge([imagen_sin_fondo, canal_alfa])

# Guardar la imagen sin fondo como un archivo PNG
cv2.imwrite('imagen_sin_fondo.png', imagen_sin_fondo_bgra)

# Convertir la imagen de BGR a RGB para la visualización con Matplotlib
imagen_sin_fondo_rgb = cv2.cvtColor(imagen_sin_fondo_bgra, cv2.COLOR_BGRA2RGBA)

# Mostrar la imagen sin fondo
plt.imshow(imagen_sin_fondo_rgb)
plt.axis('off')
plt.show()
