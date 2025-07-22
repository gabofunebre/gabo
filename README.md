# Gabo Web Service

Sitio personal simple con login para administrador e invitado. Incluye una pequeña interfaz para
administración y una vista pública para invitados.

## Desarrollo

La aplicación usa Node.js con Express y EJS para las vistas. Los estilos se encuentran en
`app/public/css` y los scripts en `app/public/js`.

## Ejecutar

```bash
npm install
npm start
```

O mediante Docker Compose:

```bash
docker-compose up --build
```

La carpeta `data/images` se monta para almacenamiento persistente de imágenes o archivos.


## Makefile

Se incluyen objetivos de ayuda para manejar los contenedores y publicar cambios:

```bash
make up           # Levanta el servicio con Docker Compose
make down         # Detiene los contenedores
make down-v       # Detiene y elimina volúmenes
make restart      # Reinicia el servicio
make restart-v    # Reinicia eliminando volúmenes
make push m="mensaje" # Commit y push con el mensaje indicado
```
