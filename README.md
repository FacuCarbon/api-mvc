# API REST - Práctica CRUD

API pública para que los compañeros del instituto puedan practicar operaciones CRUD contra una base de datos real, sin necesidad de configurar nada en sus máquinas.

---

## Endpoints

### Productos

| Método | Ruta                | Descripción                 |
| ------ | ------------------- | --------------------------- |
| GET    | `/api/products`     | Obtener todos los productos |
| GET    | `/api/products/:id` | Obtener un producto por ID  |
| POST   | `/api/products`     | Crear un producto           |
| PUT    | `/api/products/:id` | Actualizar un producto      |
| DELETE | `/api/products/:id` | Eliminar un producto        |

---

### GET `/api/products`

Parámetros opcionales por query string:

| Parámetro  | Tipo   | Descripción                    |
| ---------- | ------ | ------------------------------ |
| `limit`    | number | Limitar cantidad de resultados |
| `category` | string | Filtrar por categoría          |

**Ejemplo:**

```
GET /api/products?limit=5&category=electronics
```

---

### GET `/api/products/:id`

**Ejemplo:**

```
GET /api/products/1
```

---

### POST `/api/products`

**Body (JSON):**

```json
{
  "title": "Nombre del producto",
  "price": 99.99,
  "description": "Descripción del producto",
  "category": "electronics",
  "image": "https://url-de-la-imagen.com/img.jpg"
}
```

---

### PUT `/api/products/:id`

Podés enviar solo los campos que querés modificar.

**Body (JSON):**

```json
{
  "price": 149.99,
  "description": "Nueva descripción"
}
```

---

### DELETE `/api/products/:id`

**Ejemplo:**

```
DELETE /api/products/1
```

Retorna `204 No Content` si se eliminó correctamente.

---

## Estructura del proyecto

```
src/
├── config/
│   └── supabase.ts       # Conexión a la base de datos
├── controllers/
│   └── product-controller.ts
├── models/
│   └── product-model.ts
├── routes/
│   └── product-routes.ts
├── app.ts
└── index.ts
```

---

## Correr el proyecto localmente

```bash
npm install
npm run dev
```

Requiere un archivo `.env` con:

```
PORT=3000
SUPABASE_URL=
SUPABASE_KEY=
```
