# 📘 MANUAL DE USUARIO - CEVICHERÍA 21

Bienvenido al sistema de gestión para **Cevicheria 21**. Este manual detalla el funcionamiento de cada módulo del sistema: Mesero, Caja y Reportes.

---

## 🔐 1. ACCESO Y SEGURIDAD

El sistema cuenta con un control de acceso mediante códigos PIN para asegurar que solo el personal autorizado ingrese a cada área.

### Pantalla de Inicio
Al ingresar a la aplicación, verá tres opciones principales:
1.  **📱 MESERO**: Para la toma de pedidos.
2.  **💻 CAJA**: Para cobros, control de mesas y comandas de cocina.
3.  **📊 REPORTES**: Para ver el historial de ventas y estadísticas.

### Códigos de Acceso (PIN)
Para ingresar a cualquiera de las opciones, debe introducir el PIN correspondiente en el teclado numérico que aparecerá en pantalla.

| Rol | PIN | Descripción |
| :--- | :--- | :--- |
| **Caja** | `2121` | Acceso total a cobros y cierre de mesas. |
| **Mesero 1** | `9999` | Toma de pedidos (Registrado como Mesero 1). |
| **Mesero 2** | `7777` | Toma de pedidos (Registrado como Mesero 2). |
| **Reportes** | `2027` | Acceso a estadísticas y ventas históricas. |

> **Nota:** Si ingresa un PIN incorrecto, el sistema mostrará una alerta y deberá intentarlo nuevamente.

---

## 📱 2. MÓDULO DE MESERO

Este módulo está diseñado para ser rápido y táctil, ideal para tablets o celulares.

### Flujo de Trabajo
1.  **Seleccionar Mesa**:
    - Verá un mapa de las mesas (1 al 20).
    - Las mesas **Verdes** están LIBRES.
    - Las mesas **Rojas** están OCUPADAS (con pedido abierto).
    - Toque el número de mesa para abrirla.

2.  **Tomar Pedido**:
    - Al abrir una mesa, verá el menú de productos organizado por categorías.
    - Toque el nombre de la categoría para desplegar los platos.
    - **Agregar Producto**: Toque el producto deseado. Parpadeará en verde para confirmar.
        - *Contador*: Un pequeño círculo rojo mostrará cuántas unidades de ese producto ha agregado.
    - **Eliminar Producto**: En el resumen (parte inferior o derecha), toque el icono ❌ rojo junto al ítem.

3.  **Enviar a Cocina**:
    - Revise el pedido en el resumen.
    - Presione el botón **✅ ENVIAR PEDIDO**.
    - El pedido se guardará, la mesa cambiará a estado "Ocupada" (Roja) y los ítems se enviarán a la base de datos.
    - **IMPORTANTE**: Una vez enviado, para agregar más cosas, simplemente vuelva a entrar a la mesa, agregue los nuevos ítems y vuelva a dar "Enviar Pedido".

---

## 💻 3. MÓDULO DE CAJA

El panel de control principal para la gestión del restaurante.

### Vista General
- **Panel Izquierdo/Derecho**: Muestra el estado de todas las mesas (Libre/Ocupada y monto acumulado).
- **Estadísticas Superiores**:
    - *Mesas*: Cuántas están ocupadas actualmente.
    - *Ventas Hoy*: Total recaudado en el día (Cierres de mesa).

### Gestión de Mesa
Al hacer clic en una mesa **OCUPADA**, se abrirá el panel de acciones en el centro con las siguientes opciones:

1.  **👨‍🍳 COCINA (Comanda)**:
    - Imprime un ticket pequeño SOLO con los ítems nuevos o pendientes de cocinar.
    - Útil para avisar al cocinero qué preparar.
    - **Nota**: El sistema detecta qué ítems son "Nuevos". Si ya se imprimió una comanda, no volverán a salir para evitar duplicados.

2.  **🖨️ IMPRIMIR CUENTA**:
    - Genera un ticket de pre-cuenta con el detalle de consumo y el total.
    - Incluye el código QR de Yape (si está configurado) para facilitar el pago.

3.  **🗑️ CERRAR MESA**:
    - **¡Cuidado!** Esta acción finaliza la atención.
    - Libera la mesa (vuelve a estar Verde/Libre).
    - Suma el monto a las ventas del día.
    - Guarda el registro en el historial.

---

## 📊 4. MÓDULO DE REPORTES

Permite consultar el rendimiento del negocio.

### Funciones
- **Selector de Fecha**: Por defecto muestra el día de hoy. Puede cambiar la fecha para ver ventas pasadas.
- **Resumen**:
    - *Total Ventas*: Monto total en Soles (S/).
    - *Transacciones*: Cantidad de mesas cerradas.
- **Detalle de Productos**:
    - Muestra un ranking de los platos más vendidos del día seleccionado.
- **🖨️ IMPRIMIR REPORTE**:
    - Genera una versión impresa del reporte diario para el cierre de caja.

---

## 🦐 5. SOLUCIÓN DE PROBLEMAS

### El sistema no carga o se ve desactualizado
- Busque el **Botón del Camarón 🦐** flotante en la esquina inferior derecha.
- Presiónelo para forzar una actualización del sistema ("Hard Reload"). Esto borrará la caché y cargará la última versión.

### ¿Cómo instalar la App en el celular?
- En la pantalla de inicio, si su navegador es compatible (Chrome/Android), aparecerá un botón **📲 Instalar Aplicación**.
- Si no aparece, puede ir al menú de Chrome (tres puntos) y seleccionar "Instalar aplicación" o "Agregar a pantalla de inicio".

---

Recuerde que este sistema funciona conectado a la nube. Asegúrese de tener conexión a internet para que los pedidos se sincronicen entre los meseros y la caja.
